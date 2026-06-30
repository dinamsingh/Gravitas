// GRAVITAS Exercise Images
// Maps each exercise to a real demonstration photo from the public-domain
// free-exercise-db (https://github.com/yuhonas/free-exercise-db, Unlicense).
// Images are served free via the jsDelivr CDN. The name->image map is cached
// in localStorage so it works offline after the first load.

(function () {
  const CDN = "https://cdn.jsdelivr.net/gh/yuhonas/free-exercise-db@main/exercises/";
  const DB_URL = "https://cdn.jsdelivr.net/gh/yuhonas/free-exercise-db@main/dist/exercises.json";
  const LS_KEY = "gravitas_exercise_images_v1";

  const state = {
    ready: false,
    exact: new Map(),   // normalized name -> image path
    list: [],           // [{ norm, toks:Set, path }]
    resolveCache: new Map()
  };

  function norm(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9 ]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokenize(value) {
    return norm(value).split(" ").filter(Boolean);
  }

  function buildFromData(data) {
    state.exact.clear();
    state.list = [];
    for (const ex of data) {
      if (!ex || !ex.images || !ex.images.length || !ex.name) continue;
      const n = norm(ex.name);
      const path = ex.images[0];
      if (!state.exact.has(n)) state.exact.set(n, path);
      state.list.push({ norm: n, toks: new Set(tokenize(ex.name)), path });
    }
    state.ready = state.list.length > 0;
    state.resolveCache.clear();
  }

  function loadFromCache() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return false;
      const arr = JSON.parse(raw); // [[norm, path], ...]
      if (!Array.isArray(arr) || !arr.length) return false;
      state.exact.clear();
      state.list = [];
      for (const [n, path] of arr) {
        state.exact.set(n, path);
        state.list.push({ norm: n, toks: new Set(n.split(" ").filter(Boolean)), path });
      }
      state.ready = true;
      return true;
    } catch (e) {
      return false;
    }
  }

  function saveToCache() {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(state.list.map((e) => [e.norm, e.path])));
    } catch (e) { /* storage full / unavailable — ignore */ }
  }

  function bestMatch(name) {
    const n = norm(name);
    if (state.exact.has(n)) return state.exact.get(n);

    const qToks = new Set(tokenize(name));
    if (!qToks.size) return null;

    let best = null;
    let bestScore = 0;
    for (const item of state.list) {
      let inter = 0;
      for (const t of qToks) if (item.toks.has(t)) inter++;
      if (!inter) continue;
      const coverage = inter / qToks.size;          // how much of the query is covered
      const score = inter / Math.max(qToks.size, item.toks.size); // Jaccard-ish
      // Need most of the query words present to avoid wrong matches
      if (coverage >= 0.6 && score > bestScore) {
        bestScore = score;
        best = item.path;
      }
    }
    return bestScore >= 0.34 ? best : null;
  }

  async function fetchDb() {
    const res = await fetch(DB_URL);
    if (!res.ok) throw new Error("exercise image db fetch failed: " + res.status);
    const data = await res.json();
    buildFromData(data);
    saveToCache();
  }

  window.GRAVITAS_EXERCISE_IMAGES = {
    get ready() { return state.ready; },
    resolve(name) {
      if (!state.ready || !name) return null;
      if (state.resolveCache.has(name)) return state.resolveCache.get(name);
      const path = bestMatch(name);
      const url = path ? CDN + path : null;
      state.resolveCache.set(name, url);
      return url;
    }
  };

  // Initialise: use cache immediately if present, then refresh in background.
  const hadCache = loadFromCache();
  if (hadCache && typeof window.GRAVITAS_ON_IMAGES_READY === "function") {
    setTimeout(() => window.GRAVITAS_ON_IMAGES_READY(), 0);
  }
  fetchDb()
    .then(() => {
      if (typeof window.GRAVITAS_ON_IMAGES_READY === "function") window.GRAVITAS_ON_IMAGES_READY();
    })
    .catch(() => { /* offline & no cache -> resolver returns null, app uses fallback */ });
})();
