const STORAGE_KEY = "gravitas_web_state_v1";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const DEFAULT_SETTINGS = {
  unit: "kg",
  theme: "dark",
  defaultSets: 3,
  restTimer: 60
};

const FALLBACK_EXERCISES = [
  ["Barbell Bench Press", "Chest", "Barbell", "Intermediate", "Flat barbell press for chest strength."],
  ["Incline Dumbbell Press", "Chest", "Dumbbell", "Intermediate", "Incline pressing for upper chest."],
  ["Machine Chest Press", "Chest", "Machine", "Beginner", "Stable machine press for chest volume."],
  ["Cable Crossover", "Chest", "Cable", "Intermediate", "Cable fly pattern for chest isolation."],
  ["Dumbbell Flyes", "Chest", "Dumbbell", "Intermediate", "Controlled fly movement for chest stretch."],
  ["Pull-Ups", "Back", "Bodyweight", "Intermediate", "Vertical pull for lats and upper back."],
  ["Lat Pulldown", "Back", "Cable", "Beginner", "Cable pulldown for lat development."],
  ["Close-Grip Lat Pulldown", "Back", "Cable", "Beginner", "Close-grip variation for lower lats."],
  ["Barbell Bent-Over Row", "Back", "Barbell", "Intermediate", "Heavy horizontal pull for back strength."],
  ["Seated Cable Row", "Back", "Cable", "Beginner", "Cable row for mid-back volume."],
  ["Chest-Supported Row", "Back", "Machine", "Intermediate", "Supported row that limits lower-back fatigue."],
  ["Face Pull", "Back", "Cable", "Beginner", "Cable pull for rear delts and shoulder health."],
  ["Conventional Deadlift", "Back", "Barbell", "Advanced", "Heavy hinge pattern for posterior chain strength."],
  ["Barbell Back Squat", "Legs", "Barbell", "Intermediate", "Compound squat for quads, glutes, and strength."],
  ["Leg Press", "Legs", "Machine", "Beginner", "Machine leg press for quad and glute volume."],
  ["Leg Extension", "Legs", "Machine", "Beginner", "Isolation exercise for quadriceps."],
  ["Romanian Deadlift", "Legs", "Barbell", "Intermediate", "Hip hinge for hamstrings and glutes."],
  ["Seated Leg Curl", "Legs", "Machine", "Beginner", "Hamstring isolation with seated machine."],
  ["Bulgarian Split Squat", "Legs", "Dumbbell", "Intermediate", "Single-leg squat for stability and strength."],
  ["Barbell Hip Thrust", "Glutes", "Barbell", "Intermediate", "Loaded hip extension for glutes."],
  ["Standing Calf Raise", "Calves", "Machine", "Beginner", "Standing calf movement for gastrocnemius."],
  ["Seated Calf Raise", "Calves", "Machine", "Beginner", "Seated calf movement for soleus."],
  ["Barbell Overhead Press", "Shoulders", "Barbell", "Intermediate", "Standing press for shoulder strength."],
  ["Seated Dumbbell Press", "Shoulders", "Dumbbell", "Intermediate", "Seated pressing for delts."],
  ["Dumbbell Lateral Raise", "Shoulders", "Dumbbell", "Beginner", "Side-delt isolation."],
  ["Cable Lateral Raise", "Shoulders", "Cable", "Intermediate", "Constant-tension lateral raise."],
  ["Reverse Pec Deck", "Shoulders", "Machine", "Beginner", "Rear-delt isolation."],
  ["Bent-Over Reverse Fly", "Shoulders", "Dumbbell", "Beginner", "Dumbbell rear-delt fly."],
  ["Barbell Shrug", "Back", "Barbell", "Beginner", "Trap-focused shrug."],
  ["Dumbbell Shrug", "Back", "Dumbbell", "Beginner", "Dumbbell trap raise."],
  ["Barbell Curl", "Biceps", "Barbell", "Beginner", "Classic biceps curl."],
  ["Incline Dumbbell Curl", "Biceps", "Dumbbell", "Intermediate", "Long-head biceps curl variation."],
  ["Hammer Curl", "Biceps", "Dumbbell", "Beginner", "Neutral-grip curl for brachialis."],
  ["Preacher Curl", "Biceps", "Machine", "Beginner", "Supported curl for strict biceps work."],
  ["Rope Pushdown", "Triceps", "Cable", "Beginner", "Cable triceps extension."],
  ["Overhead Cable Extension", "Triceps", "Cable", "Intermediate", "Overhead triceps movement."],
  ["Tricep Dips", "Triceps", "Bodyweight", "Intermediate", "Bodyweight press for triceps."],
  ["Skull Crushers", "Triceps", "Barbell", "Intermediate", "Lying triceps extension."],
  ["Cable Crunch", "Abs", "Cable", "Beginner", "Weighted crunch with cable stack."],
  ["Plank", "Core", "Bodyweight", "Beginner", "Core brace hold."],
  ["Hanging Leg Raise", "Abs", "Bodyweight", "Intermediate", "Hanging core raise."],
  ["Russian Twist", "Core", "Bodyweight", "Beginner", "Rotational core drill."],
  ["Decline Sit-Up", "Abs", "Bodyweight", "Intermediate", "Decline bench sit-up."],
  ["Ab Wheel Rollout", "Abs", "Other", "Advanced", "Anti-extension rollout."],
  ["Treadmill Running", "Cardio", "Machine", "Beginner", "Steady or interval treadmill run."],
  ["Stationary Bike", "Cardio", "Machine", "Beginner", "Bike-based cardio training."],
  ["Rowing Machine", "Cardio", "Machine", "Beginner", "Full-body cardio row."],
  ["Battle Ropes", "Functional Training", "Other", "Intermediate", "Conditioning waves with heavy ropes."],
  ["Kettlebell Swing", "Functional Training", "Kettlebell", "Intermediate", "Explosive hinge pattern."],
  ["Thruster", "Full Body", "Barbell", "Intermediate", "Front squat into overhead press."]
].map((item, index) => ({
  id: index + 1,
  name: item[0],
  muscleGroup: item[1],
  equipment: item[2],
  difficulty: item[3],
  description: item[4],
  isCustom: false
}));

const SEED_EXERCISES =
  typeof window !== "undefined" && Array.isArray(window.GRAVITAS_EXERCISES)
    ? window.GRAVITAS_EXERCISES
    : FALLBACK_EXERCISES;

const SPLIT_TEMPLATES = [
  {
    id: "ppl",
    name: "Push Pull Legs",
    summary: "Six training days with Sunday recovery.",
    days: {
      Monday: [
        ["Barbell Bench Press", 4, 6, 8, 90],
        ["Incline Dumbbell Press", 4, 8, 10, 90],
        ["Dumbbell Lateral Raise", 3, 12, 15, 60],
        ["Rope Pushdown", 3, 10, 12, 60],
        ["Cable Crunch", 3, 15, 20, 45]
      ],
      Tuesday: [
        ["Pull-Ups", 4, 6, 10, 90],
        ["Lat Pulldown", 4, 8, 12, 60],
        ["Barbell Bent-Over Row", 4, 6, 8, 90],
        ["Face Pull", 3, 15, 20, 60],
        ["Barbell Curl", 3, 8, 10, 60]
      ],
      Wednesday: [
        ["Barbell Back Squat", 4, 6, 8, 120],
        ["Leg Press", 4, 8, 12, 90],
        ["Romanian Deadlift", 4, 8, 10, 90],
        ["Standing Calf Raise", 4, 12, 15, 45],
        ["Plank", 3, 30, 60, 45]
      ],
      Thursday: [
        ["Machine Chest Press", 3, 10, 12, 60],
        ["Cable Crossover", 3, 12, 15, 60],
        ["Seated Dumbbell Press", 4, 8, 10, 90],
        ["Overhead Cable Extension", 3, 10, 12, 60],
        ["Ab Wheel Rollout", 3, 10, 15, 45]
      ],
      Friday: [
        ["Close-Grip Lat Pulldown", 3, 10, 12, 60],
        ["Chest-Supported Row", 3, 10, 12, 60],
        ["Dumbbell Shrug", 3, 12, 15, 60],
        ["Hammer Curl", 3, 10, 12, 60],
        ["Hanging Leg Raise", 3, 12, 15, 45]
      ],
      Saturday: [
        ["Leg Extension", 3, 12, 15, 60],
        ["Seated Leg Curl", 3, 10, 12, 60],
        ["Bulgarian Split Squat", 3, 10, 12, 60],
        ["Barbell Hip Thrust", 4, 8, 12, 90],
        ["Seated Calf Raise", 3, 15, 20, 45]
      ],
      Sunday: []
    }
  },
  {
    id: "upper-lower",
    name: "Upper Lower",
    summary: "Four focused sessions for strength and recovery.",
    days: {
      Monday: [
        ["Barbell Bench Press", 4, 6, 8, 90],
        ["Barbell Bent-Over Row", 4, 6, 8, 90],
        ["Seated Dumbbell Press", 3, 8, 10, 75],
        ["Lat Pulldown", 3, 10, 12, 60]
      ],
      Tuesday: [
        ["Barbell Back Squat", 4, 6, 8, 120],
        ["Romanian Deadlift", 4, 8, 10, 90],
        ["Leg Press", 3, 10, 12, 90],
        ["Standing Calf Raise", 4, 12, 15, 45]
      ],
      Wednesday: [],
      Thursday: [
        ["Incline Dumbbell Press", 4, 8, 10, 90],
        ["Seated Cable Row", 4, 8, 12, 60],
        ["Dumbbell Lateral Raise", 3, 12, 15, 45],
        ["Rope Pushdown", 3, 10, 12, 60]
      ],
      Friday: [
        ["Conventional Deadlift", 3, 4, 6, 150],
        ["Bulgarian Split Squat", 3, 8, 10, 75],
        ["Seated Leg Curl", 3, 10, 12, 60],
        ["Plank", 3, 45, 60, 45]
      ],
      Saturday: [],
      Sunday: []
    }
  },
  {
    id: "beginner-3",
    name: "Beginner 3 Day",
    summary: "Simple full-body plan for starting consistently.",
    days: {
      Monday: [
        ["Barbell Back Squat", 3, 8, 10, 90],
        ["Machine Chest Press", 3, 10, 12, 60],
        ["Lat Pulldown", 3, 10, 12, 60],
        ["Plank", 3, 30, 45, 45]
      ],
      Tuesday: [],
      Wednesday: [
        ["Leg Press", 3, 10, 12, 90],
        ["Seated Dumbbell Press", 3, 8, 10, 60],
        ["Seated Cable Row", 3, 10, 12, 60],
        ["Cable Crunch", 3, 12, 15, 45]
      ],
      Thursday: [],
      Friday: [
        ["Romanian Deadlift", 3, 8, 10, 90],
        ["Incline Dumbbell Press", 3, 10, 12, 60],
        ["Face Pull", 3, 15, 20, 45],
        ["Stationary Bike", 1, 15, 20, 60]
      ],
      Saturday: [],
      Sunday: []
    }
  }
];

let state = loadState();
let isApplyingCloudState = false;
let cloudStatus = window.GRAVITAS_FIREBASE_STATUS || "Local only";
let authReady = false;
let authUser = null;
let authMode = "login";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return normalizeState(parsed);
    }
  } catch (error) {
    console.warn("Could not load saved state", error);
  }
  const fresh = normalizeState({});
  applySplitToPlans(fresh, "ppl", false);
  return fresh;
}

function normalizeState(value) {
  return {
    exercises: Array.isArray(value.exercises) && value.exercises.length ? value.exercises : clone(SEED_EXERCISES),
    plans: Array.isArray(value.plans) ? value.plans : [],
    sessions: Array.isArray(value.sessions) ? value.sessions : [],
    logs: Array.isArray(value.logs) ? value.logs : [],
    settings: { ...DEFAULT_SETTINGS, ...(value.settings || {}) },
    activeSplit: value.activeSplit || "ppl",
    activeWorkout: value.activeWorkout || null,
    updatedAt: Number(value.updatedAt || 0),
    cloudUpdatedAt: Number(value.cloudUpdatedAt || 0),
    ui: {
      route: "home",
      selectedDay: todayName(),
      workoutDay: todayName(),
      librarySearch: "",
      libraryMuscle: "All",
      showPlanCustomForm: false,
      planExerciseSearch: "",
      statsExerciseId: null,
      statsExerciseSearch: "",
      freestyleSearch: "",
      freestyleMuscle: "All",
      freestyleSelected: [],
      selectedGuideExerciseId: null,
      guideFrom: "library",
      ...(value.ui || {})
    }
  };
}

function saveState() {
  if (!isApplyingCloudState) state.updatedAt = Date.now();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const status = document.getElementById("storageStatus");
  if (status) status.textContent = "Saved at " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  if (!isApplyingCloudState && window.GRAVITAS_FIREBASE?.save) {
    window.GRAVITAS_FIREBASE.save(state);
  }
}

function applyCloudState(nextState) {
  isApplyingCloudState = true;
  state = normalizeState(nextState);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  render();
  isApplyingCloudState = false;
}

function markCloudSynced(updatedAt) {
  state.cloudUpdatedAt = updatedAt;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function updateCloudStatus(message) {
  cloudStatus = message;
  const status = document.getElementById("cloudStatus");
  if (status) status.textContent = cloudStatus;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function nextId(collection) {
  return collection.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0) + 1;
}

function todayName() {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function numberValue(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function exerciseById(id) {
  return state.exercises.find((exercise) => Number(exercise.id) === Number(id));
}

function exerciseByName(name) {
  return state.exercises.find((exercise) => exercise.name.toLowerCase() === String(name).toLowerCase());
}

function planWithExercise(plan) {
  const exercise = exerciseById(plan.exerciseId) || {};
  return { ...plan, exercise };
}

function muscleGroups() {
  return ["All", ...Array.from(new Set(state.exercises.map((exercise) => exercise.muscleGroup))).sort()];
}

function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });
}

function formatDateTime(timestamp) {
  return new Date(timestamp).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

function totalVolume(logs = state.logs) {
  return logs.reduce((sum, log) => sum + (Number(log.actualWeight) || 0) * (Number(log.actualReps) || 0), 0);
}

function workoutStreak() {
  const days = Array.from(new Set(state.sessions.map((session) => new Date(session.workoutDate).toDateString())))
    .map((date) => new Date(date).getTime())
    .sort((a, b) => b - a);
  if (!days.length) return 0;

  let streak = 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  for (let index = 0; index < 365; index += 1) {
    const hasDay = days.includes(cursor.getTime());
    if (hasDay) {
      streak += 1;
    } else if (streak > 0 || index > 0) {
      break;
    }
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function renderAuthScreen(viewMode = "form") {
  if (viewMode === "loading") {
    return `
      <section class="auth-screen">
        <div class="auth-card">
          <p class="eyebrow">GRAVITAS CLOUD</p>
          <h3>Checking login</h3>
          <p class="muted">Firebase account status load ho raha hai.</p>
        </div>
      </section>
    `;
  }

  const isRegister = authMode === "register";
  return `
    <section class="auth-screen">
      <div class="auth-card">
        <div class="auth-hero">
          <p class="eyebrow">GRAVITAS CLOUD</p>
          <h3>${isRegister ? "Create your fitness account" : "Welcome back"}</h3>
          <p class="muted">${isRegister ? "Name, email aur phone ke saath account banao. Tumhara workout history, progress, plan aur profile Firebase database me save hoga." : "Apne email aur password se login karo. Tumhara saved plan, workout history aur progress cloud se load hoga."}</p>
        </div>
        <div class="auth-switch">
          <button class="${!isRegister ? "active" : ""}" type="button" data-auth-mode="login">Login</button>
          <button class="${isRegister ? "active" : ""}" type="button" data-auth-mode="register">Create Account</button>
        </div>
        <form id="authForm" class="auth-form">
          ${isRegister ? `
            <div class="auth-field-grid">
              <label class="label">Full Name<input class="control" name="name" autocomplete="name" placeholder="Your name" required /></label>
              <label class="label">Phone<input class="control" name="phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="+91 98765 43210" required /></label>
            </div>
          ` : ""}
          <label class="label">Email<input class="control" name="email" type="email" autocomplete="email" placeholder="you@example.com" required /></label>
          <label class="label">Password<input class="control" name="password" type="password" autocomplete="current-password" placeholder="Minimum 6 characters" minlength="6" required /></label>
          <div class="auth-actions">
            <button class="button primary auth-main-action" type="submit">${isRegister ? "Create Account" : "Login"}</button>
          </div>
        </form>
        <div class="sync-card">
          <span>Firebase</span>
          <strong id="cloudStatus">${escapeHtml(cloudStatus)}</strong>
        </div>
        <p class="auth-note">Password database me store nahi hota. Firebase Auth usko securely handle karta hai.</p>
      </div>
    </section>
  `;
}

function render() {
  document.documentElement.dataset.theme = state.settings.theme;
  document.body.classList.toggle("auth-mode", !authUser);
  if (!authReady) {
    document.getElementById("screenTitle").textContent = "Loading";
    document.getElementById("todayPill").textContent = "Firebase";
    document.getElementById("view").innerHTML = renderAuthScreen("loading");
    return;
  }
  if (!authUser) {
    document.getElementById("screenTitle").textContent = authMode === "register" ? "Create Account" : "Login";
    document.getElementById("todayPill").textContent = "Cloud account";
    document.querySelectorAll(".bottom-tab").forEach((button) => button.classList.remove("active"));
    document.getElementById("view").innerHTML = renderAuthScreen();
    attachAuthHandlers();
    return;
  }
  const route = state.ui.route || "home";
  document.querySelectorAll(".bottom-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.route === route);
  });
  document.getElementById("screenTitle").textContent = routeTitle(route);
  document.getElementById("todayPill").textContent = new Date().toLocaleDateString([], {
    weekday: "long",
    month: "short",
    day: "numeric"
  });

  const view = document.getElementById("view");
  const screens = {
    home: renderHome,
    library: renderLibrary,
    planner: renderPlanner,
    workout: renderWorkout,
    history: renderHistory,
    stats: renderStats,
    settings: renderSettings,
    guide: renderGuide
  };
  view.innerHTML = (screens[route] || renderHome)();
  attachScreenHandlers(route);
  saveState();
}

function routeTitle(route) {
  return {
    home: "Home",
    library: "Workout",
    planner: "Plan",
    workout: "Workout Session",
    history: "Workout History",
    stats: "Progress",
    settings: "Profile",
    guide: "Form Guide"
  }[route] || "Home";
}

function renderHome() {
  const today = todayName();
  const plans = state.plans.filter((plan) => plan.dayOfWeek === today).map(planWithExercise);
  const nextPlan = DAYS.map((day) => ({
    day,
    count: state.plans.filter((plan) => plan.dayOfWeek === day).length
  }));

  return `
    <div class="grid two">
      <section class="hero-board">
        <div class="hero-copy">
          <p class="eyebrow">Welcome to GRAVITAS</p>
          <h3>${plans.length ? "Today's lift is loaded." : "Build today's lift."}</h3>
          <p>${plans.length ? `${plans.length} movements are ready for ${today}. Log clean sets, keep the streak alive, and let the numbers tell the truth.` : "No workout is planned for today. Open the planner and add exercises manually."}</p>
          <div class="row" style="flex-wrap:wrap;gap:10px">
            <button class="button primary" type="button" data-action="start-today">Start Workout</button>
            <button class="button accent" type="button" data-action="start-freestyle">Start Without Plan</button>
            <button class="button ghost" type="button" data-action="repeat-last">Repeat Last Workout</button>
          </div>
        </div>
      </section>

      <aside class="grid">
        <div class="metrics">
          <div class="metric"><span>Total Workouts</span><strong>${state.sessions.length}</strong></div>
          <div class="metric"><span>Streak</span><strong>${workoutStreak()}</strong></div>
          <div class="metric"><span>Volume</span><strong>${Math.round(totalVolume())}</strong></div>
        </div>
        <section class="panel">
          <div class="row between">
            <h3>Today's Plan</h3>
            <span class="badge">${today}</span>
          </div>
          ${plans.length ? `
            <div class="card-list">
              ${plans.map((plan) => `
                <article class="item-card compact">
                  <div class="row between">
                    <strong>${escapeHtml(plan.exercise.name || "Exercise")}</strong>
                    <span class="badge">${escapeHtml(plan.exercise.muscleGroup || "")}</span>
                  </div>
                  <p class="muted">${plan.numberOfSets} sets x ${plan.targetReps} reps at ${plan.targetWeight || 0}${state.settings.unit}</p>
                </article>
              `).join("")}
            </div>
          ` : `<div class="empty-state">Planner me aaj ke liye exercises add karo.</div>`}
        </section>
      </aside>
    </div>

    <section class="panel" style="margin-top:16px">
      <div class="row between">
        <h3>Week Load</h3>
        <button class="button small" type="button" data-route-jump="planner">Edit Planner</button>
      </div>
      <div class="chip-row">
        ${nextPlan.map((day) => `<button class="chip ${day.day === today ? "active" : ""}" type="button" data-day-jump="${day.day}">${day.day.slice(0, 3)}: ${day.count}</button>`).join("")}
      </div>
    </section>
  `;
}

function renderLibrary() {
  const search = state.ui.librarySearch.toLowerCase();
  const muscle = state.ui.libraryMuscle;
  const exercises = state.exercises
    .filter((exercise) => muscle === "All" || exercise.muscleGroup === muscle)
    .filter((exercise) => {
      const haystack = `${exercise.name} ${exercise.muscleGroup} ${exercise.equipment}`.toLowerCase();
      return haystack.includes(search);
    });

  return `
    <section class="panel">
      <div class="row between" style="margin-bottom:12px">
        <div>
          <h3>Workout Library</h3>
          <p class="muted">Search exercises, add custom movements, or jump into the active workout screen.</p>
        </div>
        <button class="button primary small" type="button" data-route-jump="workout">Start Workout</button>
      </div>

      <div class="toolbar">
        <input class="control" id="librarySearch" style="max-width:360px" value="${escapeHtml(state.ui.librarySearch)}" placeholder="Search by name, muscle, or equipment" />
        <select class="control" id="libraryMuscle" style="max-width:240px">
          ${muscleGroups().map((group) => `<option value="${escapeHtml(group)}" ${group === muscle ? "selected" : ""}>${escapeHtml(group)}</option>`).join("")}
        </select>
      </div>

      <form id="exerciseForm" class="form-grid">
        <label class="label wide">Exercise name<input class="control" name="name" required placeholder="e.g. Hack Squat" /></label>
        <label class="label">Muscle<input class="control" name="muscleGroup" required placeholder="Legs" /></label>
        <label class="label">Equipment<input class="control" name="equipment" required placeholder="Machine" /></label>
        <label class="label">Difficulty<select class="control" name="difficulty"><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label>
        <label class="label wide">Notes<input class="control" name="description" placeholder="Short training cue" /></label>
        <button class="button primary" type="submit">Add Custom Exercise</button>
      </form>
    </section>

    <section class="exercise-grid" style="margin-top:16px">
      ${exercises.map((exercise) => `
        <article class="item-card guide-entry-card" data-open-guide="${exercise.id}">
          <div class="row between">
            <span class="badge">${escapeHtml(exercise.muscleGroup)}</span>
            <div class="row" style="gap:6px">
              ${exercise.isCustom ? `<button class="button heat small" type="button" data-delete-exercise="${exercise.id}">Delete</button>` : `<span class="badge">Built-in</span>`}
            </div>
          </div>
          <h3>${escapeHtml(exercise.name)}</h3>
          <p class="muted">${escapeHtml(exercise.description)}</p>
          <div class="row between" style="margin-top:8px">
            <div class="row" style="gap:6px">
              <span class="badge">${escapeHtml(exercise.equipment)}</span>
              <span class="badge">${escapeHtml(exercise.difficulty)}</span>
            </div>
            <button class="button guide-btn small" type="button" data-open-guide="${exercise.id}">📖 Form Guide</button>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderPlanner() {
  const day = state.ui.selectedDay;
  const plans = state.plans.filter((plan) => plan.dayOfWeek === day).map(planWithExercise);

  return `
    <div class="profile-layout">
      <section class="panel">
        <div class="row between">
          <h3>Plan by Day</h3>
          <span class="badge">${escapeHtml(day)}</span>
        </div>
        <div class="chip-row" style="margin-bottom:16px">
          ${DAYS.map((item) => `<button class="chip ${item === day ? "active" : ""}" type="button" data-select-day="${item}">${item.slice(0, 3)}</button>`).join("")}
        </div>

        <form id="planForm" class="form-grid">
          <label class="label wide plan-search-field">Search Exercise
            <input class="control" id="planExerciseSearch" name="exerciseName" value="${escapeHtml(state.ui.planExerciseSearch || "")}" placeholder="Search exercise name" autocomplete="off" />
            <div class="plan-suggestions" id="planExerciseSuggestions" role="listbox" aria-label="Exercise suggestions"></div>
          </label>
          <button class="button primary" type="submit">Add Exercise</button>
          <button class="button" type="button" data-action="toggle-plan-custom">${state.ui.showPlanCustomForm ? "Close Custom" : "Create Custom Exercise"}</button>
        </form>

        ${state.ui.showPlanCustomForm ? `
          <form id="planCustomForm" class="plan-custom-form">
            <div>
              <h3>Create Custom Exercise</h3>
              <p class="muted">Exercise banao, phir ye search box me auto-select ho jayegi.</p>
            </div>
            <label class="label">Exercise Name<input class="control" name="name" required placeholder="e.g. Hack Squat" /></label>
            <label class="label">Muscle<input class="control" name="muscleGroup" required placeholder="Legs" /></label>
            <label class="label">Equipment<input class="control" name="equipment" required placeholder="Machine" /></label>
            <label class="label">Difficulty<select class="control" name="difficulty"><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label>
            <label class="label wide">Notes<input class="control" name="description" placeholder="Short training cue" /></label>
            <button class="button primary" type="submit">Save Custom Exercise</button>
          </form>
        ` : ""}

        <div class="card-list" style="margin-top:16px">
          ${plans.length ? plans.map((plan) => `
            <article class="plan-row">
              <div>
                <h3>${escapeHtml(plan.exercise.name || "Exercise")}</h3>
                <p class="muted">${escapeHtml(plan.exercise.muscleGroup || "Planned exercise")}</p>
              </div>
              <button class="button heat small" type="button" data-delete-plan="${plan.id}">Remove</button>
            </article>
          `).join("") : `<div class="empty-state">Is din ke liye abhi koi workout plan nahi hai.</div>`}
        </div>
      </section>
    </div>
  `;
}

function renderFreestylePicker() {
  const search = (state.ui.freestyleSearch || "").toLowerCase();
  const muscle = state.ui.freestyleMuscle || "All";
  const selected = state.ui.freestyleSelected || [];
  const exercises = state.exercises
    .filter((exercise) => muscle === "All" || exercise.muscleGroup === muscle)
    .filter((exercise) => {
      const haystack = `${exercise.name} ${exercise.muscleGroup} ${exercise.equipment}`.toLowerCase();
      return haystack.includes(search);
    });

  return `
    <section class="panel">
      <div class="row between" style="margin-bottom:12px">
        <div>
          <h3>Pick Your Exercises</h3>
          <p class="muted">Apne workout ke liye exercises select karo. Phir weight aur reps add karo.</p>
        </div>
        <button class="button ghost small" type="button" data-action="cancel-freestyle">Cancel</button>
      </div>

      <div class="toolbar" style="margin-bottom:12px">
        <input class="control" id="freestyleSearch" style="max-width:360px" value="${escapeHtml(state.ui.freestyleSearch || "")}" placeholder="Search by name, muscle, or equipment" />
        <select class="control" id="freestyleMuscle" style="max-width:240px">
          ${muscleGroups().map((group) => `<option value="${escapeHtml(group)}" ${group === muscle ? "selected" : ""}>${escapeHtml(group)}</option>`).join("")}
        </select>
      </div>

      ${selected.length ? `
        <div style="margin-bottom:16px">
          <div class="row between" style="margin-bottom:8px">
            <h4 style="margin:0;color:var(--accent)">Selected (${selected.length})</h4>
            <button class="button heat small" type="button" data-action="clear-freestyle-selection">Clear All</button>
          </div>
          <div class="chip-row" style="flex-wrap:wrap;gap:8px">
            ${selected.map((id) => {
              const ex = exerciseById(id);
              return ex ? `<span class="badge freestyle-selected-chip" style="cursor:pointer;padding:6px 12px;font-size:0.85rem" data-deselect-exercise="${id}">${escapeHtml(ex.name)} ✕</span>` : "";
            }).join("")}
          </div>
        </div>
        <button class="button primary" type="button" data-action="launch-freestyle" style="margin-bottom:16px;width:100%">Start Workout with ${selected.length} Exercise${selected.length > 1 ? "s" : ""}</button>
      ` : ""}

      <div class="exercise-grid freestyle-grid">
        ${exercises.map((exercise) => {
          const isSelected = selected.includes(exercise.id);
          return `
            <article class="item-card freestyle-pick ${isSelected ? "freestyle-active" : ""}" data-toggle-exercise="${exercise.id}" style="cursor:pointer;transition:all 0.2s ease">
              <div class="row between">
                <span class="badge">${escapeHtml(exercise.muscleGroup)}</span>
                ${isSelected ? '<span class="badge" style="background:var(--accent);color:#000">✓ Selected</span>' : ''}
              </div>
              <h3>${escapeHtml(exercise.name)}</h3>
              <p class="muted">${escapeHtml(exercise.description)}</p>
              <div class="row">
                <span class="badge">${escapeHtml(exercise.equipment)}</span>
                <span class="badge">${escapeHtml(exercise.difficulty)}</span>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function attachFreestyleHandlers(view) {
  const searchInput = view.querySelector("#freestyleSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.ui.freestyleSearch = e.target.value;
      state.ui._keepFreestyleFocus = true;
      render();
    });
  }
  const muscleSelect = view.querySelector("#freestyleMuscle");
  if (muscleSelect) {
    muscleSelect.addEventListener("change", (e) => {
      state.ui.freestyleMuscle = e.target.value;
      render();
    });
  }
  view.querySelectorAll("[data-toggle-exercise]").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      const id = Number(card.dataset.toggleExercise);
      const list = state.ui.freestyleSelected || [];
      const idx = list.indexOf(id);
      if (idx >= 0) {
        list.splice(idx, 1);
      } else {
        list.push(id);
      }
      state.ui.freestyleSelected = list;
      render();
    });
  });
  view.querySelectorAll("[data-deselect-exercise]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const id = Number(chip.dataset.deselectExercise);
      state.ui.freestyleSelected = (state.ui.freestyleSelected || []).filter((i) => i !== id);
      render();
    });
  });
}

function startFreestyleWorkout() {
  const selected = state.ui.freestyleSelected || [];
  if (!selected.length) {
    toast("Pehle exercises select karo");
    return;
  }
  const defaultSets = Math.max(1, Math.round(numberValue(state.settings.defaultSets, 3)));
  state.activeWorkout = {
    id: Date.now(),
    sessionId: null,
    day: todayName(),
    startedAt: Date.now(),
    notes: "",
    exercises: selected.map((id) => {
      const exercise = exerciseById(id) || {};
      return {
        exerciseId: Number(id),
        name: exercise.name || "Exercise",
        muscleGroup: exercise.muscleGroup || "",
        targetWeight: 0,
        targetReps: 10,
        targetSets: defaultSets,
        finished: false,
        savedToSession: false,
        sets: Array.from({ length: defaultSets }, () => ({
          weight: 0,
          reps: 10
        }))
      };
    })
  };
  state.ui.freestyleSelected = [];
  state.ui.freestyleSearch = "";
  state.ui.freestyleMuscle = "All";
  state.ui.route = "workout";
  toast("Freestyle workout started!");
  render();
}

function renderWorkout() {
  if (state.ui.route === "workout" && state.ui._freestylePicker && !state.activeWorkout) {
    return renderFreestylePicker();
  }

  if (!state.activeWorkout) {
    const day = state.ui.workoutDay;
    const plans = state.plans.filter((plan) => plan.dayOfWeek === day);
    return `
      <section class="panel">
        <div class="row between">
          <div>
            <h3>Start Workout</h3>
            <p class="muted">Plan choose karo aur active workout screen khol do.</p>
          </div>
          <span class="badge">${plans.length} exercises</span>
        </div>
        <div class="chip-row" style="margin-bottom:16px">
          ${DAYS.map((item) => `<button class="chip ${item === day ? "active" : ""}" type="button" data-workout-day="${item}">${item.slice(0, 3)}</button>`).join("")}
        </div>
        ${plans.length ? `
          <div class="card-list">
            ${plans.map(planWithExercise).map((plan) => `<article class="item-card compact"><strong>${escapeHtml(plan.exercise.name || "Exercise")}</strong><p class="muted">${plan.numberOfSets} sets x ${plan.targetReps} reps</p></article>`).join("")}
          </div>
          <div class="row" style="margin-top:16px;flex-wrap:wrap;gap:10px">
            <button class="button primary" type="button" data-start-day="${day}">Start ${day}</button>
            <button class="button accent" type="button" data-action="start-freestyle">Start Without Plan</button>
            <button class="button ghost" type="button" data-action="repeat-last">Repeat Last Workout</button>
          </div>
        ` : `
          <div class="empty-state">No plan for ${escapeHtml(day)}. Planner me exercise add karo ya bina plan ke start karo.</div>
          <div class="row" style="margin-top:16px">
            <button class="button accent" type="button" data-action="start-freestyle">Start Without Plan</button>
          </div>
        `}
      </section>
    `;
  }

  const workout = state.activeWorkout;
  const remainingExercises = workout.exercises
    .map((item, exerciseIndex) => ({ item, exerciseIndex }))
    .filter(({ item }) => !item.finished);
  const completedCount = workout.exercises.length - remainingExercises.length;
  return `
    <section class="panel">
      <div class="row between">
        <div>
          <h3>${escapeHtml(workout.day)} Workout</h3>
          <p class="muted">Started ${formatDateTime(workout.startedAt)}${completedCount ? `, ${completedCount} finished` : ""}</p>
        </div>
        <button class="button heat" type="button" data-action="discard-workout">Discard</button>
      </div>

      <div class="card-list">
        ${remainingExercises.length ? remainingExercises.map(({ item, exerciseIndex }) => `
          <article class="item-card workout-exercise">
            <div class="row between">
              <div>
                <h3>${escapeHtml(item.name)}</h3>
                <p class="muted">Target: ${item.targetSets} sets x ${item.targetReps} reps at ${item.targetWeight || 0}${state.settings.unit}</p>
              </div>
              <div class="row exercise-actions">
                <button class="button guide-btn small" type="button" data-workout-guide="${item.exerciseId}" title="Form Guide">📖</button>
                <button class="button small" type="button" data-add-set="${exerciseIndex}">Add Set</button>
                <button class="button primary small exercise-finish" type="button" data-finish-exercise="${exerciseIndex}">Finish</button>
              </div>
            </div>
            <div class="card-list">
              ${item.sets.map((set, setIndex) => `
                <div class="set-row">
                  <strong>Set ${setIndex + 1}</strong>
                  <label class="label" style="width: 100%;">Weight
                    <div class="weight-control-group">
                      <input class="control weight-input" inputmode="decimal" value="${escapeHtml(set.weight)}" data-set-field="${exerciseIndex}:${setIndex}:weight" aria-label="Weight for set ${setIndex + 1}" />
                      <div class="weight-stepper" aria-label="Adjust weight">
                        <button class="weight-adjust-btn" type="button" data-weight-adjust="-2.5" data-set-index="${exerciseIndex}:${setIndex}" aria-label="Decrease weight">&minus;</button>
                        <button class="weight-adjust-btn" type="button" data-weight-adjust="2.5" data-set-index="${exerciseIndex}:${setIndex}" aria-label="Increase weight">+</button>
                      </div>
                    </div>
                  </label>
                  <label class="label">Reps<input class="control" inputmode="numeric" value="${escapeHtml(set.reps)}" data-set-field="${exerciseIndex}:${setIndex}:reps" /></label>
                  <button class="button heat small" type="button" data-remove-set="${exerciseIndex}:${setIndex}">Remove</button>
                </div>
              `).join("")}
            </div>
          </article>
        `).join("") : `<div class="empty-state">All exercises saved in this session. Finish Workout dabao to session close ho jayega.</div>`}
      </div>

      <label class="label" style="margin-top:16px">Workout notes<textarea class="control" id="workoutNotes" placeholder="Optional notes">${escapeHtml(workout.notes || "")}</textarea></label>
      <div class="row" style="margin-top:16px">
        <button class="button primary" type="button" data-action="finish-workout">Finish Workout</button>
      </div>
    </section>
  `;
}

function renderHistory() {
  const sessions = [...state.sessions].sort((a, b) => b.workoutDate - a.workoutDate);
  return `
    <section class="panel">
      <div class="row between">
        <h3>Completed Sessions</h3>
        <span class="badge">${sessions.length} total</span>
      </div>
      <div class="card-list">
        ${sessions.length ? sessions.map((session) => {
          const logs = state.logs.filter((log) => log.sessionId === session.id);
          return `
            <div class="swipe-container">
              <div class="swipe-actions">
                <button class="swipe-delete-btn" type="button" data-delete-session="${session.id}">Delete</button>
              </div>
              <article class="history-row swipe-content">
                <div>
                  <h3>${formatDateTime(session.workoutDate)}</h3>
                  <p class="muted">${logs.length} sets, ${Math.round(totalVolume(logs))} volume, ${session.durationMinutes || 0} min</p>
                  ${session.notes ? `<p>${escapeHtml(session.notes)}</p>` : ""}
                  <details>
                    <summary>View sets</summary>
                    <div class="card-list" style="margin-top:10px">
                      ${logs.map((log) => {
                        const exercise = exerciseById(log.exerciseId);
                        return `<div class="item-card compact"><strong>${escapeHtml(exercise?.name || "Exercise")}</strong><p class="muted">Set ${log.setNumber}: ${log.actualWeight}${state.settings.unit} x ${log.actualReps}</p></div>`;
                      }).join("")}
                    </div>
                  </details>
                </div>
              </article>
            </div>
          `;
        }).join("") : `<div class="empty-state">Abhi workout history empty hai. Pehla workout complete karte hi yahan dikhega.</div>`}
      </div>
    </section>
  `;
}

function renderStats() {
  const rows = personalBestRows();
  if (!state.ui.statsExerciseId && rows.length) state.ui.statsExerciseId = rows[0].exerciseId;
  const selectedExercise = exerciseById(state.ui.statsExerciseId);
  if (selectedExercise && !state.ui.statsExerciseSearch) {
    state.ui.statsExerciseSearch = selectedExercise.name;
  }
  const hasSelectedInRows = rows.some((row) => Number(row.exerciseId) === Number(state.ui.statsExerciseId));
  const selectOptions = [...rows];
  if (!hasSelectedInRows && selectedExercise) {
    selectOptions.push({
      exerciseId: selectedExercise.id,
      name: selectedExercise.name
    });
  }
  const sessions = [...state.sessions].sort((a, b) => b.workoutDate - a.workoutDate);

  return `
    <div class="grid two">
      <section class="panel">
        <div class="row between" style="margin-bottom:12px">
          <div>
            <h3>Progress</h3>
            <p class="muted">Strength, total volume, and recent training sessions.</p>
          </div>
        </div>

        <div class="metrics">
          <div class="metric"><span>Workouts</span><strong>${state.sessions.length}</strong></div>
          <div class="metric"><span>Total Sets</span><strong>${state.logs.length}</strong></div>
          <div class="metric"><span>Total Volume</span><strong>${Math.round(totalVolume())}</strong></div>
        </div>
        <div style="margin-top:16px">
          <div class="row between" style="margin-bottom:12px">
            <h3>Strength Progress</h3>
            <select class="control" id="statsExercise" style="max-width:200px">
              ${selectOptions.map((row) => `<option value="${row.exerciseId}" ${Number(row.exerciseId) === Number(state.ui.statsExerciseId) ? "selected" : ""}>${escapeHtml(row.name)}</option>`).join("")}
            </select>
          </div>
          <div class="plan-search-field" style="margin-bottom:16px;">
            <input class="control" id="statsExerciseSearch" value="${escapeHtml(state.ui.statsExerciseSearch || "")}" placeholder="Search exercise name..." autocomplete="off" />
            <div class="plan-suggestions" id="statsExerciseSuggestions" role="listbox" aria-label="Exercise suggestions"></div>
          </div>
          ${selectedExercise ? `
            <div class="selected-exercise-title" style="margin-bottom:8px; font-weight:800; color:var(--accent);">
              ${escapeHtml(selectedExercise.name)}
            </div>
            ${progressChart(selectedExercise.id)}
            ${(() => {
              const lastLift = getLastSessionDetails(selectedExercise.id);
              return lastLift ? `
                <article class="item-card compact" style="margin-top: 16px; border: 1px solid var(--line); border-left: 4px solid var(--accent); background: var(--panel-strong); padding: 16px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);">
                  <div class="row between" style="margin-bottom: 10px;">
                    <h4 style="margin: 0; font-size: 0.95rem; font-weight: 800; text-transform: uppercase; color: var(--accent);">Last Session Lift</h4>
                    <span class="badge" style="font-size: 0.72rem; background: rgba(255, 255, 255, 0.08); color: var(--ink);">${formatDate(lastLift.date)}</span>
                  </div>
                  <div style="display: grid; gap: 8px;">
                    ${lastLift.sets.map((set) => `
                      <div class="row between" style="padding: 6px 0; border-bottom: 1px dashed var(--line); font-size: 0.9rem;">
                        <span style="color: var(--muted);">Set ${set.setNumber}</span>
                        <strong style="color: var(--ink);">${set.actualWeight}${state.settings.unit} &times; ${set.actualReps} reps</strong>
                      </div>
                    `).join("")}
                  </div>
                  <div class="row between" style="margin-top: 12px; padding-top: 8px; border-top: 1px solid var(--line); font-size: 0.85rem; color: var(--muted);">
                    <span>Total Volume:</span>
                    <strong style="color: var(--accent);">${Math.round(lastLift.sets.reduce((sum, s) => sum + s.actualWeight * s.actualReps, 0))}${state.settings.unit}</strong>
                  </div>
                </article>
              ` : `
                <div class="empty-state" style="margin-top: 16px;">Is exercise ke liye pichla koi lift log nahi kiya gaya hai.</div>
              `;
            })()}
          ` : `<div class="empty-state">Progress data banane ke liye pehle workout log karo.</div>`}
        </div>
      </section>

      <aside class="panel">
        <h3>Personal Bests</h3>
        ${rows.length ? `
          <div class="table-wrap">
            <table>
              <thead><tr><th>Exercise</th><th>Best Weight</th><th>Best Reps</th><th>Volume</th></tr></thead>
              <tbody>
                ${rows.map((row) => `<tr><td>${escapeHtml(row.name)}</td><td>${row.bestWeight}${state.settings.unit}</td><td>${row.bestReps}</td><td>${Math.round(row.volume)}</td></tr>`).join("")}
              </tbody>
            </table>
          </div>
        ` : `<div class="empty-state">No personal bests yet.</div>`}
      </aside>
    </div>

    <section class="panel" style="margin-top:16px">
      <div class="row between" style="margin-bottom:12px">
        <h3>Workout History</h3>
        <span class="badge">${sessions.length} total</span>
      </div>
      ${sessions.length ? `
        <div class="card-list">
          ${sessions.map((session) => {
            const logs = state.logs.filter((log) => log.sessionId === session.id);
            return `
              <div class="swipe-container">
                <div class="swipe-actions">
                  <button class="swipe-delete-btn" type="button" data-delete-session="${session.id}">Delete</button>
                </div>
                <article class="history-row swipe-content">
                  <div>
                    <h3>${formatDateTime(session.workoutDate)}</h3>
                    <p class="muted">${logs.length} sets, ${Math.round(totalVolume(logs))} volume, ${session.durationMinutes || 0} min</p>
                    ${session.notes ? `<p>${escapeHtml(session.notes)}</p>` : ""}
                    <details>
                      <summary>View sets</summary>
                      <div class="card-list" style="margin-top:10px">
                        ${logs.map((log) => {
                          const exercise = exerciseById(log.exerciseId);
                          return `<div class="item-card compact"><strong>${escapeHtml(exercise?.name || "Exercise")}</strong><p class="muted">Set ${log.setNumber}: ${log.actualWeight}${state.settings.unit} x ${log.actualReps}</p></div>`;
                        }).join("")}
                      </div>
                    </details>
                  </div>
                </article>
              </div>
            `;
          }).join("")}
        </div>
      ` : `<div class="empty-state">Workout history empty hai. Exercise finish karte hi yahan session dikhega.</div>`}
    </section>
  `;
}

function renderMuscleMap(muscleGroup) {
  const muscle = String(muscleGroup || "").toLowerCase();

  // Mapping: muscleGroup → which SVG paths to highlight
  const highlight = {
    chest:     ["chest-l", "chest-r"],
    back:      ["lats-l", "lats-r", "traps-u"],
    legs:      ["quad-l", "quad-r", "ham-l", "ham-r"],
    glutes:    ["glute-l", "glute-r"],
    calves:    ["calf-l", "calf-r"],
    shoulders: ["delt-l", "delt-r"],
    biceps:    ["bicep-l", "bicep-r"],
    triceps:   ["tricep-l", "tricep-r"],
    abs:       ["abs"],
    core:      ["abs"],
    "functional training": ["quad-l", "quad-r", "glute-l", "glute-r", "abs"],
    "full body": ["chest-l", "chest-r", "quad-l", "quad-r", "glute-l", "glute-r", "abs"],
    cardio:    ["quad-l", "quad-r", "calf-l", "calf-r"]
  };

  const active = new Set(highlight[muscle] || []);

  const fill = (id) => active.has(id)
    ? "fill: var(--accent); filter: drop-shadow(0 0 6px var(--accent));"
    : "fill: var(--panel-strong);";

  return `
    <div class="muscle-map-wrap">
      <p class="muscle-map-label">Target Muscle</p>
      <svg class="muscle-map-svg" viewBox="0 0 120 260" xmlns="http://www.w3.org/2000/svg" aria-label="Muscle map">
        <!-- Head -->
        <ellipse cx="60" cy="18" rx="14" ry="17" fill="var(--panel-strong)" stroke="var(--line)" stroke-width="1"/>
        <!-- Neck -->
        <rect x="53" y="32" width="14" height="10" rx="4" fill="var(--panel-strong)" stroke="var(--line)" stroke-width="1"/>
        <!-- Traps -->
        <ellipse id="traps-u" cx="60" cy="50" rx="25" ry="10" style="${fill("traps-u")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Chest Left -->
        <ellipse id="chest-l" cx="47" cy="65" rx="13" ry="14" style="${fill("chest-l")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Chest Right -->
        <ellipse id="chest-r" cx="73" cy="65" rx="13" ry="14" style="${fill("chest-r")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Abs -->
        <rect id="abs" x="50" y="80" width="20" height="36" rx="5" style="${fill("abs")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Delt Left -->
        <ellipse id="delt-l" cx="33" cy="58" rx="10" ry="12" style="${fill("delt-l")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Delt Right -->
        <ellipse id="delt-r" cx="87" cy="58" rx="10" ry="12" style="${fill("delt-r")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Bicep Left -->
        <rect id="bicep-l" x="20" y="72" width="11" height="22" rx="5" style="${fill("bicep-l")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Bicep Right -->
        <rect id="bicep-r" x="89" y="72" width="11" height="22" rx="5" style="${fill("bicep-r")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Tricep Left -->
        <rect id="tricep-l" x="18" y="97" width="10" height="20" rx="5" style="${fill("tricep-l")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Tricep Right -->
        <rect id="tricep-r" x="92" y="97" width="10" height="20" rx="5" style="${fill("tricep-r")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Forearm Left -->
        <rect x="16" y="120" width="9" height="20" rx="4" fill="var(--panel-strong)" stroke="var(--line)" stroke-width="1"/>
        <!-- Forearm Right -->
        <rect x="95" y="120" width="9" height="20" rx="4" fill="var(--panel-strong)" stroke="var(--line)" stroke-width="1"/>
        <!-- Lats Left -->
        <ellipse id="lats-l" cx="40" cy="90" rx="10" ry="18" style="${fill("lats-l")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Lats Right -->
        <ellipse id="lats-r" cx="80" cy="90" rx="10" ry="18" style="${fill("lats-r")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Hips/Pelvis -->
        <rect x="45" y="118" width="30" height="16" rx="6" fill="var(--panel-strong)" stroke="var(--line)" stroke-width="1"/>
        <!-- Glute Left -->
        <ellipse id="glute-l" cx="49" cy="143" rx="12" ry="14" style="${fill("glute-l")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Glute Right -->
        <ellipse id="glute-r" cx="71" cy="143" rx="12" ry="14" style="${fill("glute-r")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Quad Left -->
        <rect id="quad-l" x="46" y="158" width="19" height="38" rx="8" style="${fill("quad-l")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Quad Right -->
        <rect id="quad-r" x="55" y="158" width="19" height="38" rx="8" style="${fill("quad-r")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Ham Left -->
        <rect id="ham-l" x="46" y="158" width="9" height="38" rx="5" style="${fill("ham-l")}; opacity:0.7" stroke="none"/>
        <!-- Ham Right -->
        <rect id="ham-r" x="65" y="158" width="9" height="38" rx="5" style="${fill("ham-r")}; opacity:0.7" stroke="none"/>
        <!-- Knee caps -->
        <circle cx="52" cy="199" r="7" fill="var(--panel)" stroke="var(--line)" stroke-width="1"/>
        <circle cx="68" cy="199" r="7" fill="var(--panel)" stroke="var(--line)" stroke-width="1"/>
        <!-- Calf Left -->
        <rect id="calf-l" x="45" y="209" width="14" height="34" rx="6" style="${fill("calf-l")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Calf Right -->
        <rect id="calf-r" x="61" y="209" width="14" height="34" rx="6" style="${fill("calf-r")}" stroke="var(--line)" stroke-width="1"/>
        <!-- Feet -->
        <rect x="42" y="243" width="20" height="10" rx="4" fill="var(--panel-strong)" stroke="var(--line)" stroke-width="1"/>
        <rect x="58" y="243" width="20" height="10" rx="4" fill="var(--panel-strong)" stroke="var(--line)" stroke-width="1"/>
      </svg>
    </div>
  `;
}

function renderGuide() {
  const exerciseId = state.ui.selectedGuideExerciseId;
  const exercise = exerciseById(exerciseId);
  if (!exercise) {
    return `<div class="empty-state">Exercise nahi mila. Wapas jao.</div>`;
  }

  const guide = window.getExerciseGuide ? window.getExerciseGuide(exerciseId) : null;
  const videoUrl = window.buildYouTubeUrl
    ? window.buildYouTubeUrl(guide?.youtubeId, exercise.name)
    : `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(exercise.name + " exercise tutorial form")}`;

  // Bench angle card
  const benchAngleHtml = guide?.benchAngle ? (() => {
    const { label, value, type } = guide.benchAngle;
    const icon = type === "decline" ? "📉" : type === "flat" ? "➖" : "📈";
    const color = type === "decline" ? "var(--heat)" : type === "flat" ? "var(--cool)" : "var(--accent)";
    return `
      <div class="bench-angle-card">
        <div class="bench-angle-icon">${icon}</div>
        <div>
          <p class="bench-angle-title">Optimal Bench Angle</p>
          <p class="bench-angle-value" style="color:${color}">${escapeHtml(label)}</p>
        </div>
        <div class="bench-angle-visual">
          <div class="bench-stick" style="transform: rotate(${Math.max(-45, Math.min(90, value))}deg)"></div>
        </div>
      </div>
    `;
  })() : "";

  // Instructions sections
  const setupHtml = guide?.setup?.length ? `
    <div class="guide-section">
      <h4 class="guide-section-title">⚙️ Setup</h4>
      <ol class="guide-list">
        ${guide.setup.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
      </ol>
    </div>
  ` : "";

  const executionHtml = guide?.execution?.length ? `
    <div class="guide-section">
      <h4 class="guide-section-title">▶️ Execution</h4>
      <ol class="guide-list">
        ${guide.execution.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
      </ol>
    </div>
  ` : "";

  const checklistHtml = (guide?.dos?.length || guide?.donts?.length) ? `
    <div class="guide-checklist-grid">
      ${guide.dos?.length ? `
        <div class="guide-check-col dos">
          <h4 class="guide-section-title">✅ Do's</h4>
          <ul class="guide-list">
            ${guide.dos.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      ` : ""}
      ${guide.donts?.length ? `
        <div class="guide-check-col donts">
          <h4 class="guide-section-title">❌ Don'ts</h4>
          <ul class="guide-list">
            ${guide.donts.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      ` : ""}
    </div>
  ` : "";

  return `
    <div class="guide-container">
      <!-- Back button -->
      <div class="guide-back-row">
        <button class="button small" type="button" data-guide-back>← Back</button>
        <div>
          <span class="badge">${escapeHtml(exercise.muscleGroup)}</span>
          <span class="badge" style="margin-left:6px">${escapeHtml(exercise.difficulty)}</span>
        </div>
      </div>

      <h2 class="guide-title">${escapeHtml(exercise.name)}</h2>
      <p class="muted guide-subtitle">${escapeHtml(exercise.description)}</p>

      <!-- Bench angle -->
      ${benchAngleHtml}

      <!-- Main layout: video + muscle map -->
      <div class="guide-main-layout">
        <div class="guide-video-col">
          <div class="video-wrapper">
            <iframe
              class="guide-video"
              src="${videoUrl}"
              title="${escapeHtml(exercise.name)} tutorial"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div class="guide-info-col">
          ${renderMuscleMap(exercise.muscleGroup)}
        </div>
      </div>

      <!-- Instructions -->
      <div class="guide-instructions">
        ${setupHtml}
        ${executionHtml}
        ${checklistHtml}
      </div>

      ${!guide ? `
        <div class="guide-no-data">
          <p class="muted">Is exercise ke liye detailed instructions available nahi hain. Video dekho upar.</p>
        </div>
      ` : ""}
    </div>
  `;
}

function attachGuideHandlers(view) {
  const backBtn = view.querySelector("[data-guide-back]");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      const from = state.ui.guideFrom || "library";
      setRoute(from === "workout" ? "workout" : "library");
    });
  }
}

function renderSettings() {
  return `
    <div class="profile-layout">
      <section class="panel">
        <h3>Profile</h3>
        <div class="sync-card">
          <span>Logged In</span>
          <strong>${escapeHtml(authUser?.displayName || authUser?.email || "User")}</strong>
        </div>
        <form id="settingsForm" class="form-grid">
          <label class="label">Weight Unit<select class="control" name="unit"><option ${state.settings.unit === "kg" ? "selected" : ""}>kg</option><option ${state.settings.unit === "lbs" ? "selected" : ""}>lbs</option></select></label>
          <label class="label">Theme<select class="control" name="theme"><option value="dark" ${state.settings.theme === "dark" ? "selected" : ""}>dark</option><option value="light" ${state.settings.theme === "light" ? "selected" : ""}>light</option></select></label>
          <label class="label">Default Sets<input class="control" name="defaultSets" value="${state.settings.defaultSets}" inputmode="numeric" /></label>
          <button class="button primary" type="submit">Save Profile</button>
          <button class="button" type="button" data-action="logout">Logout</button>
        </form>
      </section>
    </div>
  `;
}

function authErrorMessage(error) {
  const code = String(error?.code || "");
  if (code.includes("email-already-in-use")) return "Ye email already registered hai. Login karo.";
  if (code.includes("invalid-email")) return "Email address valid nahi hai.";
  if (code.includes("weak-password")) return "Password kam se kam 6 characters ka rakho.";
  if (code.includes("wrong-password") || code.includes("invalid-credential")) return "Email ya password galat hai.";
  if (code.includes("user-not-found")) return "Is email ka account nahi mila. Create Account dabao.";
  return error?.message || "Login failed";
}

function attachAuthHandlers() {
  const form = document.getElementById("authForm");
  if (!form) return;

  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      authMode = button.dataset.authMode;
      render();
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const name = String(data.name || "").trim();
    const phone = String(data.phone || "").trim();
    const email = String(data.email || "").trim();
    const password = String(data.password || "");
    const submitButton = form.querySelector(".auth-main-action");
    if (authMode === "register" && (!name || !phone)) {
      toast("Create account ke liye name aur phone required hai");
      return;
    }
    if (submitButton) submitButton.disabled = true;
    updateCloudStatus(authMode === "register" ? "Creating account" : "Logging in");

    try {
      if (authMode === "register") {
        await window.GRAVITAS_FIREBASE.register(email, password, { displayName: name, phone });
        toast("Account created");
      } else {
        await window.GRAVITAS_FIREBASE.login(email, password);
        toast("Logged in");
      }
    } catch (error) {
      updateCloudStatus("Login failed");
      toast(authErrorMessage(error));
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}

function attachScreenHandlers(route) {
  const view = document.getElementById("view");

  view.querySelectorAll("[data-route-jump]").forEach((button) => {
    button.addEventListener("click", () => setRoute(button.dataset.routeJump));
  });

  view.querySelectorAll("[data-day-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      state.ui.selectedDay = button.dataset.dayJump;
      setRoute("planner");
    });
  });

  view.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => runAction(button.dataset.action));
  });

  if (route === "library") attachLibraryHandlers(view);
  if (route === "planner") attachPlannerHandlers(view);
  if (route === "workout") {
    if (state.ui._freestylePicker && !state.activeWorkout) {
      attachFreestyleHandlers(view);
    } else {
      attachWorkoutHandlers(view);
    }
    // 📖 Quick Form Video popup inside active workout
    view.querySelectorAll("[data-workout-guide]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = Number(btn.dataset.workoutGuide);
        showFormVideoModal(id);
      });
    });
  }
  if (route === "history") attachHistoryHandlers(view);
  if (route === "stats") attachStatsHandlers(view);
  if (route === "settings") attachSettingsHandlers(view);
  if (route === "guide") attachGuideHandlers(view);

  if (state.ui.keepLibraryFocus) {
    const search = view.querySelector("#librarySearch");
    if (search) {
      search.focus();
      search.setSelectionRange(search.value.length, search.value.length);
    }
    state.ui.keepLibraryFocus = false;
  }
  if (state.ui._keepFreestyleFocus) {
    const fsSearch = view.querySelector("#freestyleSearch");
    if (fsSearch) {
      fsSearch.focus();
      fsSearch.setSelectionRange(fsSearch.value.length, fsSearch.value.length);
    }
    state.ui._keepFreestyleFocus = false;
  }
}

function attachLibraryHandlers(view) {
  view.querySelector("#librarySearch").addEventListener("input", (event) => {
    state.ui.librarySearch = event.target.value;
    state.ui.keepLibraryFocus = true;
    render();
  });
  view.querySelector("#libraryMuscle").addEventListener("change", (event) => {
    state.ui.libraryMuscle = event.target.value;
    render();
  });
  view.querySelector("#exerciseForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    state.exercises.push({
      id: nextId(state.exercises),
      name: data.name.trim(),
      muscleGroup: data.muscleGroup.trim(),
      equipment: data.equipment.trim(),
      difficulty: data.difficulty,
      description: data.description.trim() || "Custom exercise.",
      isCustom: true
    });
    toast("Custom exercise added");
    render();
  });
  view.querySelectorAll("[data-delete-exercise]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.deleteExercise);
      state.exercises = state.exercises.filter((exercise) => exercise.id !== id || !exercise.isCustom);
      state.plans = state.plans.filter((plan) => plan.exerciseId !== id);
      toast("Custom exercise deleted");
      render();
    });
  });
  // Open Form Guide from library cards
  view.querySelectorAll("[data-open-guide]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.closest("[data-delete-exercise]")) return; // don't intercept delete
      const id = Number(el.dataset.openGuide);
      if (!id) return;
      state.ui.selectedGuideExerciseId = id;
      state.ui.guideFrom = "library";
      setRoute("guide");
    });
  });
}

function attachPlannerHandlers(view) {
  view.querySelectorAll("[data-select-day]").forEach((button) => {
    button.addEventListener("click", () => {
      state.ui.selectedDay = button.dataset.selectDay;
      render();
    });
  });

  const exerciseSearch = view.querySelector("#planExerciseSearch");
  const suggestions = view.querySelector("#planExerciseSuggestions");
  const closeSuggestions = () => {
    if (!suggestions) return;
    suggestions.classList.remove("show");
    suggestions.innerHTML = "";
  };
  const showSuggestions = () => {
    if (!exerciseSearch || !suggestions) return;
    const query = exerciseSearch.value.trim().toLowerCase();
    const matches = state.exercises
      .filter((exercise) => {
        const haystack = `${exercise.name} ${exercise.muscleGroup} ${exercise.equipment}`.toLowerCase();
        return !query || haystack.includes(query);
      })
      .slice(0, 8);

    if (!matches.length) {
      closeSuggestions();
      return;
    }

    suggestions.innerHTML = matches.map((exercise) => `
      <button class="plan-suggestion" type="button" data-exercise-name="${escapeHtml(exercise.name)}">
        <strong>${escapeHtml(exercise.name)}</strong>
        <span>${escapeHtml(exercise.muscleGroup)} - ${escapeHtml(exercise.equipment)}</span>
      </button>
    `).join("");
    suggestions.classList.add("show");
  };

  if (exerciseSearch) {
    exerciseSearch.addEventListener("focus", showSuggestions);
    exerciseSearch.addEventListener("input", () => {
      state.ui.planExerciseSearch = exerciseSearch.value;
      showSuggestions();
    });
    exerciseSearch.addEventListener("blur", () => setTimeout(closeSuggestions, 160));
  }

  suggestions?.addEventListener("mousedown", (event) => {
    const button = event.target.closest("[data-exercise-name]");
    if (!button || !exerciseSearch) return;
    event.preventDefault();
    exerciseSearch.value = button.dataset.exerciseName;
    state.ui.planExerciseSearch = exerciseSearch.value;
    closeSuggestions();
  });

  const customForm = view.querySelector("#planCustomForm");
  if (customForm) {
    customForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(customForm));
      const name = String(data.name || "").trim();
      const muscleGroup = String(data.muscleGroup || "").trim();
      const equipment = String(data.equipment || "").trim();
      if (!name || !muscleGroup || !equipment) {
        toast("Custom exercise details fill karo");
        return;
      }
      const existing = exerciseByName(name);
      const exercise = existing || {
        id: nextId(state.exercises),
        name,
        muscleGroup,
        equipment,
        difficulty: data.difficulty,
        description: String(data.description || "").trim() || "Custom exercise.",
        isCustom: true
      };
      if (!existing) state.exercises.push(exercise);
      state.ui.planExerciseSearch = exercise.name;
      state.ui.showPlanCustomForm = false;
      toast(existing ? "Exercise already selected" : "Custom exercise created");
      render();
    });
  }

  view.querySelector("#planForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const query = String(data.exerciseName || "").trim().toLowerCase();
    if (!query) {
      toast("Add Exercise ke liye pehle exercise select karo");
      return;
    }
    const exercise = state.exercises.find((item) => item.name.toLowerCase() === query);
    if (!exercise) {
      toast("Search dropdown se exercise select karo");
      return;
    }
    state.plans.push({
      id: nextId(state.plans),
      dayOfWeek: state.ui.selectedDay,
      exerciseId: Number(exercise.id),
      targetWeight: 0,
      targetReps: 10,
      numberOfSets: Math.max(1, Math.round(numberValue(state.settings.defaultSets, 3))),
      restSeconds: Math.max(15, Math.round(numberValue(state.settings.restTimer, 60)))
    });
    state.ui.planExerciseSearch = "";
    toast("Exercise added to planner");
    render();
  });
  view.querySelectorAll("[data-delete-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      state.plans = state.plans.filter((plan) => Number(plan.id) !== Number(button.dataset.deletePlan));
      toast("Plan item removed");
      render();
    });
  });
}

function attachWorkoutHandlers(view) {
  view.querySelectorAll("[data-workout-day]").forEach((button) => {
    button.addEventListener("click", () => {
      state.ui.workoutDay = button.dataset.workoutDay;
      render();
    });
  });
  view.querySelectorAll("[data-start-day]").forEach((button) => {
    button.addEventListener("click", () => startWorkoutFromDay(button.dataset.startDay));
  });
  view.querySelectorAll("[data-add-set]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.activeWorkout.exercises[Number(button.dataset.addSet)];
      if (item.finished) return;
      item.sets.push({ weight: item.targetWeight || 0, reps: item.targetReps || 10 });
      render();
    });
  });
  view.querySelectorAll("[data-finish-exercise]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.activeWorkout.exercises[Number(button.dataset.finishExercise)];
      if (!item) return;
      saveWorkoutExercise(state.activeWorkout, item);
      saveState();
      toast(`✅ ${item.name} saved!`);
      render();
    });
  });
  view.querySelectorAll("[data-remove-set]").forEach((button) => {
    button.addEventListener("click", () => {
      const [exerciseIndex, setIndex] = button.dataset.removeSet.split(":").map(Number);
      const sets = state.activeWorkout.exercises[exerciseIndex].sets;
      if (state.activeWorkout.exercises[exerciseIndex].finished) return;
      if (sets.length > 1) sets.splice(setIndex, 1);
      render();
    });
  });
  view.querySelectorAll("[data-set-field]").forEach((input) => {
    input.addEventListener("input", () => {
      const [exerciseIndex, setIndex, field] = input.dataset.setField.split(":");
      if (state.activeWorkout.exercises[Number(exerciseIndex)].finished) return;
      state.activeWorkout.exercises[Number(exerciseIndex)].sets[Number(setIndex)][field] = input.value;
      saveState();
    });
  });
  view.querySelectorAll(".weight-adjust-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const adjust = parseFloat(button.dataset.weightAdjust);
      const [exerciseIndex, setIndex] = button.dataset.setIndex.split(":").map(Number);
      if (state.activeWorkout.exercises[exerciseIndex].finished) return;
      const input = view.querySelector(`[data-set-field="${exerciseIndex}:${setIndex}:weight"]`);
      if (input) {
        let currentWeight = parseFloat(input.value) || 0;
        currentWeight += adjust;
        if (currentWeight < 0) currentWeight = 0;
        const formattedWeight = Number(currentWeight.toFixed(2));
        input.value = formattedWeight;
        state.activeWorkout.exercises[exerciseIndex].sets[setIndex].weight = formattedWeight;
        saveState();
      }
    });
  });
  const notes = view.querySelector("#workoutNotes");
  if (notes) {
    notes.addEventListener("input", () => {
      state.activeWorkout.notes = notes.value;
      updateActiveSessionMetadata(state.activeWorkout);
      saveState();
    });
  }
}

let _deleteModalResolve = null;

function showDeleteModal() {
  return new Promise((resolve) => {
    _deleteModalResolve = resolve;
    const modal = document.getElementById("deleteModal");
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("show");

    document.getElementById("deleteModalConfirm").onclick = () => {
      hideDeleteModal();
      resolve(true);
    };
    document.getElementById("deleteModalCancel").onclick = () => {
      hideDeleteModal();
      resolve(false);
    };
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        hideDeleteModal();
        resolve(false);
      }
    }, { once: true });
  });
}

function hideDeleteModal() {
  const modal = document.getElementById("deleteModal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  _deleteModalResolve = null;
}

// ── Quick Form Video Modal (used during active workout) ──

function showFormVideoModal(exerciseId) {
  const exercise = exerciseById(exerciseId);
  if (!exercise) return;

  const guide = window.getExerciseGuide ? window.getExerciseGuide(exerciseId) : null;
  const videoUrl = window.buildYouTubeUrl
    ? window.buildYouTubeUrl(guide?.youtubeId, exercise.name)
    : `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(exercise.name + " exercise tutorial form")}`;

  const modal = document.getElementById("formVideoModal");
  document.getElementById("formVideoTitle").textContent = exercise.name + " — Form Guide";
  document.getElementById("formVideoIframe").src = videoUrl;

  // Bench angle info
  const benchEl = document.getElementById("formVideoBenchAngle");
  if (guide?.benchAngle) {
    const { label, type } = guide.benchAngle;
    const icon = type === "decline" ? "📉" : type === "flat" ? "➖" : "📈";
    benchEl.innerHTML = `<span class="bench-badge">${icon} Bench Angle: <strong>${escapeHtml(label)}</strong></span>`;
    benchEl.style.display = "";
  } else {
    benchEl.style.display = "none";
  }

  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("show");

  // Close handlers
  document.getElementById("formVideoClose").onclick = hideFormVideoModal;
  modal.addEventListener("click", (e) => {
    if (e.target === modal) hideFormVideoModal();
  }, { once: true });
}

function hideFormVideoModal() {
  const modal = document.getElementById("formVideoModal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  // Stop video playback by clearing src
  document.getElementById("formVideoIframe").src = "";
}

function deleteSessionById(id) {
  state.sessions = state.sessions.filter((session) => session.id !== id);
  state.logs = state.logs.filter((log) => log.sessionId !== id);
  toast("Workout session deleted");
  render();
}

function attachLongPressDelete(view) {
  view.querySelectorAll("[data-delete-session]").forEach((button) => {
    let holdTimer = null;
    let holdComplete = false;

    const startHold = (e) => {
      e.preventDefault();
      holdComplete = false;
      button.classList.add("hold-active");
      holdTimer = setTimeout(async () => {
        holdComplete = true;
        button.classList.remove("hold-active");
        button.classList.add("hold-done");

        // Vibrate on mobile if supported
        if (navigator.vibrate) navigator.vibrate(50);

        const confirmed = await showDeleteModal();
        button.classList.remove("hold-done");
        if (confirmed) {
          deleteSessionById(Number(button.dataset.deleteSession));
        }
      }, 3000);
    };

    const cancelHold = () => {
      if (holdTimer) {
        clearTimeout(holdTimer);
        holdTimer = null;
      }
      button.classList.remove("hold-active");
      if (!holdComplete) {
        button.classList.remove("hold-done");
      }
    };

    // Touch events
    button.addEventListener("touchstart", startHold, { passive: false });
    button.addEventListener("touchend", cancelHold);
    button.addEventListener("touchcancel", cancelHold);
    button.addEventListener("touchmove", cancelHold);

    // Mouse events
    button.addEventListener("mousedown", startHold);
    button.addEventListener("mouseup", cancelHold);
    button.addEventListener("mouseleave", cancelHold);

    // Block normal click
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!holdComplete) {
        toast("3 second hold karo delete karne ke liye");
      }
    });
  });
}

function attachHistoryHandlers(view) {
  attachLongPressDelete(view);
}

function attachStatsHandlers(view) {
  const select = view.querySelector("#statsExercise");
  if (select) {
    select.addEventListener("change", () => {
      const id = Number(select.value);
      state.ui.statsExerciseId = id;
      const exercise = exerciseById(id);
      state.ui.statsExerciseSearch = exercise ? exercise.name : "";
      render();
    });
  }

  const exerciseSearch = view.querySelector("#statsExerciseSearch");
  const suggestions = view.querySelector("#statsExerciseSuggestions");
  const closeSuggestions = () => {
    if (!suggestions) return;
    suggestions.classList.remove("show");
    suggestions.innerHTML = "";
  };
  const showSuggestions = () => {
    if (!exerciseSearch || !suggestions) return;
    const query = exerciseSearch.value.trim().toLowerCase();
    const matches = state.exercises
      .filter((exercise) => {
        const haystack = `${exercise.name} ${exercise.muscleGroup} ${exercise.equipment}`.toLowerCase();
        return !query || haystack.includes(query);
      })
      .slice(0, 8);

    if (!matches.length) {
      closeSuggestions();
      return;
    }

    suggestions.innerHTML = matches.map((exercise) => `
      <button class="plan-suggestion" type="button" data-exercise-id="${exercise.id}" data-exercise-name="${escapeHtml(exercise.name)}">
        <strong>${escapeHtml(exercise.name)}</strong>
        <span>${escapeHtml(exercise.muscleGroup)} - ${escapeHtml(exercise.equipment)}</span>
      </button>
    `).join("");
    suggestions.classList.add("show");
  };

  if (exerciseSearch) {
    exerciseSearch.addEventListener("focus", showSuggestions);
    exerciseSearch.addEventListener("input", () => {
      state.ui.statsExerciseSearch = exerciseSearch.value;
      showSuggestions();
    });
    exerciseSearch.addEventListener("blur", () => setTimeout(closeSuggestions, 160));
  }

  suggestions?.addEventListener("mousedown", (event) => {
    const button = event.target.closest("[data-exercise-id]");
    if (!button || !exerciseSearch) return;
    event.preventDefault();
    const id = Number(button.dataset.exerciseId);
    const name = button.dataset.exerciseName;
    state.ui.statsExerciseId = id;
    state.ui.statsExerciseSearch = name;
    exerciseSearch.value = name;
    closeSuggestions();
    render();
  });

  attachLongPressDelete(view);
}

function attachSettingsHandlers(view) {
  view.querySelector("#settingsForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    state.settings = {
      unit: data.unit,
      theme: data.theme,
      defaultSets: Math.max(1, Math.round(numberValue(data.defaultSets, 3))),
      restTimer: state.settings.restTimer
    };
    toast("Profile saved");
    render();
  });
}

function runAction(action) {
  if (action === "start-today") {
    startWorkoutFromDay(todayName());
  }
  if (action === "repeat-last") {
    repeatLastWorkout();
  }
  if (action === "start-freestyle") {
    state.ui._freestylePicker = true;
    state.ui.freestyleSelected = [];
    state.ui.freestyleSearch = "";
    state.ui.freestyleMuscle = "All";
    state.ui.route = "workout";
    render();
  }
  if (action === "cancel-freestyle") {
    state.ui._freestylePicker = false;
    state.ui.freestyleSelected = [];
    render();
  }
  if (action === "clear-freestyle-selection") {
    state.ui.freestyleSelected = [];
    render();
  }
  if (action === "launch-freestyle") {
    state.ui._freestylePicker = false;
    startFreestyleWorkout();
  }
  if (action === "discard-workout") {
    if (confirm("Discard this workout?")) {
      state.activeWorkout = null;
      toast("Workout discarded");
      render();
    }
  }
  if (action === "finish-workout") {
    finishWorkout();
  }
  if (action === "toggle-plan-custom") {
    state.ui.showPlanCustomForm = !state.ui.showPlanCustomForm;
    render();
  }
  if (action === "reset-all") {
    if (confirm("Reset all web app data?")) {
      localStorage.removeItem(STORAGE_KEY);
      state = loadState();
      toast("Demo data reset");
      render();
    }
  }
  if (action === "logout") {
    window.GRAVITAS_FIREBASE?.logout?.()
      .then(() => toast("Logged out"))
      .catch((error) => toast(authErrorMessage(error)));
  }
}

function setRoute(route) {
  state.ui.route = route;
  render();
}

function startWorkoutFromDay(day) {
  const plans = state.plans.filter((plan) => plan.dayOfWeek === day).map(planWithExercise);
  if (!plans.length) {
    state.ui.selectedDay = day;
    state.ui.route = "planner";
    toast("No plan found. Add exercises first.");
    render();
    return;
  }
  state.activeWorkout = {
    id: Date.now(),
    sessionId: null,
    day,
    startedAt: Date.now(),
    notes: "",
    exercises: plans.map((plan) => ({
      exerciseId: plan.exerciseId,
      name: plan.exercise.name || "Exercise",
      muscleGroup: plan.exercise.muscleGroup || "",
      targetWeight: plan.targetWeight,
      targetReps: plan.targetReps,
      targetSets: plan.numberOfSets,
      finished: false,
      savedToSession: false,
      sets: Array.from({ length: Math.max(1, plan.numberOfSets) }, () => ({
        weight: plan.targetWeight || 0,
        reps: plan.targetReps || 10
      }))
    }))
  };
  state.ui.route = "workout";
  toast("Workout started");
  render();
}

function repeatLastWorkout() {
  const last = [...state.sessions].sort((a, b) => b.workoutDate - a.workoutDate)[0];
  if (!last) {
    toast("No previous workout to repeat");
    return;
  }
  const logs = state.logs.filter((log) => log.sessionId === last.id);
  const groups = new Map();
  logs.forEach((log) => {
    if (!groups.has(log.exerciseId)) groups.set(log.exerciseId, []);
    groups.get(log.exerciseId).push(log);
  });
  state.activeWorkout = {
    id: Date.now(),
    sessionId: null,
    day: todayName(),
    startedAt: Date.now(),
    notes: "",
    exercises: Array.from(groups.entries()).map(([exerciseId, setLogs]) => {
      const exercise = exerciseById(exerciseId) || {};
      return {
        exerciseId: Number(exerciseId),
        name: exercise.name || "Exercise",
        muscleGroup: exercise.muscleGroup || "",
        targetWeight: setLogs[0]?.actualWeight || 0,
        targetReps: setLogs[0]?.actualReps || 10,
        targetSets: setLogs.length,
        finished: false,
        savedToSession: false,
        sets: setLogs.map((log) => ({ weight: log.actualWeight, reps: log.actualReps }))
      };
    })
  };
  state.ui.route = "workout";
  toast("Last workout loaded");
  render();
}

function updateActiveSessionMetadata(workout) {
  if (!workout?.sessionId) return null;
  const session = state.sessions.find((item) => item.id === workout.sessionId);
  if (!session) return null;
  session.notes = workout.notes || "";
  session.durationMinutes = Math.max(1, Math.round((Date.now() - workout.startedAt) / 60000));
  return session;
}

function ensureActiveWorkoutSession(workout) {
  if (workout.sessionId) return updateActiveSessionMetadata(workout);

  const sessionId = nextId(state.sessions);
  workout.sessionId = sessionId;
  const session = {
    id: sessionId,
    workoutDate: Date.now(),
    notes: workout.notes || "",
    splitName: SPLIT_TEMPLATES.find((split) => split.id === state.activeSplit)?.name || workout.day || "Session",
    durationMinutes: Math.max(1, Math.round((Date.now() - workout.startedAt) / 60000))
  };
  state.sessions.push(session);
  return session;
}

function saveWorkoutExercise(workout, exercise) {
  if (!workout || !exercise || exercise.savedToSession) return;

  const session = ensureActiveWorkoutSession(workout);
  exercise.sets.forEach((set, index) => {
    state.logs.push({
      id: nextId(state.logs),
      sessionId: session.id,
      exerciseId: Number(exercise.exerciseId),
      setNumber: index + 1,
      actualWeight: numberValue(set.weight),
      actualReps: Math.max(0, Math.round(numberValue(set.reps)))
    });
  });
  exercise.finished = true;
  exercise.savedToSession = true;
  updateActiveSessionMetadata(workout);
}

function finishWorkout() {
  const workout = state.activeWorkout;
  if (!workout) return;

  workout.exercises.forEach((exercise) => saveWorkoutExercise(workout, exercise));
  updateActiveSessionMetadata(workout);

  state.activeWorkout = null;
  state.ui.route = "history";
  toast("Workout saved successfully");
  render();
}

function applySplitToPlans(targetState, splitId, replace) {
  const split = SPLIT_TEMPLATES.find((item) => item.id === splitId) || SPLIT_TEMPLATES[0];
  if (replace) targetState.plans = [];
  targetState.activeSplit = split.id;
  const plans = [];

  DAYS.forEach((day) => {
    (split.days[day] || []).forEach((entry) => {
      const [name, sets, repsMin, repsMax, restSeconds] = entry;
      let exercise = targetState.exercises.find((item) => item.name === name);
      if (!exercise) {
        exercise = {
          id: nextId(targetState.exercises),
          name,
          muscleGroup: "General",
          equipment: "Other",
          difficulty: "Beginner",
          description: "Imported from split.",
          isCustom: false
        };
        targetState.exercises.push(exercise);
      }
      plans.push({
        id: plans.length + 1,
        dayOfWeek: day,
        exerciseId: exercise.id,
        targetWeight: 0,
        targetReps: repsMax || repsMin || 10,
        numberOfSets: sets || targetState.settings.defaultSets,
        restSeconds: restSeconds || targetState.settings.restTimer
      });
    });
  });

  if (replace) {
    targetState.plans = plans.map((plan, index) => ({ ...plan, id: index + 1 }));
  } else if (!targetState.plans.length) {
    targetState.plans = plans.map((plan, index) => ({ ...plan, id: index + 1 }));
  }
}

function getLastSessionDetails(exerciseId) {
  const exerciseLogs = state.logs.filter((log) => Number(log.exerciseId) === Number(exerciseId));
  if (!exerciseLogs.length) return null;

  const logsWithDates = exerciseLogs.map((log) => {
    const session = state.sessions.find((s) => s.id === log.sessionId);
    return { log, date: session ? session.workoutDate : 0 };
  }).filter((item) => item.date > 0);

  if (!logsWithDates.length) return null;

  const latestDate = Math.max(...logsWithDates.map(item => item.date));
  const latestLogs = logsWithDates
    .filter(item => item.date === latestDate)
    .map(item => item.log)
    .sort((a, b) => a.setNumber - b.setNumber);

  return {
    date: latestDate,
    sets: latestLogs
  };
}

function personalBestRows() {
  const map = new Map();
  state.logs.forEach((log) => {
    const exercise = exerciseById(log.exerciseId);
    if (!exercise) return;
    const row = map.get(log.exerciseId) || {
      exerciseId: log.exerciseId,
      name: exercise.name,
      bestWeight: 0,
      bestReps: 0,
      volume: 0
    };
    row.bestWeight = Math.max(row.bestWeight, numberValue(log.actualWeight));
    row.bestReps = Math.max(row.bestReps, numberValue(log.actualReps));
    row.volume += numberValue(log.actualWeight) * numberValue(log.actualReps);
    map.set(log.exerciseId, row);
  });
  return Array.from(map.values()).sort((a, b) => b.volume - a.volume);
}

function progressChart(exerciseId) {
  const points = state.logs
    .filter((log) => Number(log.exerciseId) === Number(exerciseId))
    .map((log) => {
      const session = state.sessions.find((item) => item.id === log.sessionId);
      return session ? { date: session.workoutDate, weight: numberValue(log.actualWeight) } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.date - b.date);

  if (!points.length) return `<div class="empty-state">Selected exercise ke liye abhi chart data nahi hai.</div>`;

  const width = 600;
  const height = 220;
  const max = Math.max(...points.map((point) => point.weight), 1);
  const min = Math.min(...points.map((point) => point.weight), 0);
  const spread = Math.max(1, max - min);
  const coords = points.map((point, index) => {
    const x = points.length === 1 ? width / 2 : (index / (points.length - 1)) * width;
    const y = height - ((point.weight - min) / spread) * (height - 28) - 14;
    return `${x},${y}`;
  }).join(" ");

  return `
    <svg class="chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Strength progress chart">
      <rect width="${width}" height="${height}" rx="8" fill="rgba(255,255,255,0.04)"></rect>
      <polyline fill="none" stroke="var(--accent)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="${coords}"></polyline>
      ${points.map((point, index) => {
        const [x, y] = coords.split(" ")[index].split(",");
        return `<circle cx="${x}" cy="${y}" r="6" fill="var(--heat)"><title>${formatDate(point.date)}: ${point.weight}${state.settings.unit}</title></circle>`;
      }).join("")}
      <text x="16" y="30" fill="var(--muted)" font-size="16">Max ${max}${state.settings.unit}</text>
    </svg>
  `;
}

let swipeStart = { x: 0, y: 0 };
let currentSwipeElement = null;
let currentSwipeContainer = null;
let isSwipeDragging = false;
const swipeOpenOffset = -90; // 90px translation to show Delete button

function initSwipeToDelete() {
  const view = document.getElementById("view");
  if (!view) return;

  const closeOtherSwipes = (current) => {
    view.querySelectorAll('.swipe-container[data-swipe-open="true"]').forEach((openContainer) => {
      if (openContainer !== current) {
        const openContent = openContainer.querySelector(".swipe-content");
        if (openContent) {
          openContent.style.transition = "transform 0.15s ease-out";
          openContent.style.transform = "translateX(0)";
        }
        openContainer.dataset.swipeOpen = "false";
      }
    });
  };

  // Touch Handlers
  view.addEventListener("touchstart", (e) => {
    const interactive = e.target.closest("button, summary, a, input, select, option, textarea");
    if (interactive) return;

    const content = e.target.closest(".swipe-content");
    if (!content) return;

    currentSwipeElement = content;
    currentSwipeContainer = content.closest(".swipe-container");
    swipeStart.x = e.touches[0].clientX;
    swipeStart.y = e.touches[0].clientY;
    isSwipeDragging = true;
    currentSwipeElement.style.transition = "none";

    closeOtherSwipes(currentSwipeContainer);
  }, { passive: true });

  view.addEventListener("touchmove", (e) => {
    if (!isSwipeDragging || !currentSwipeElement) return;
    const diffX = e.touches[0].clientX - swipeStart.x;
    const diffY = e.touches[0].clientY - swipeStart.y;

    // If scrolling vertically, cancel swipe drag
    if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffX) < 10) {
      isSwipeDragging = false;
      currentSwipeElement.style.transition = "transform 0.15s ease-out";
      currentSwipeElement.style.transform = "";
      return;
    }

    const isAlreadyOpen = currentSwipeContainer?.dataset.swipeOpen === "true";
    let translateX = diffX + (isAlreadyOpen ? swipeOpenOffset : 0);

    if (translateX < 0) {
      translateX = Math.max(swipeOpenOffset - 20, translateX);
      currentSwipeElement.style.transform = `translateX(${translateX}px)`;
    } else {
      translateX = Math.min(0, translateX);
      currentSwipeElement.style.transform = `translateX(${translateX}px)`;
    }
  }, { passive: true });

  view.addEventListener("touchend", () => {
    if (!isSwipeDragging || !currentSwipeElement) return;
    isSwipeDragging = false;
    currentSwipeElement.style.transition = "transform 0.15s ease-out";

    const transform = currentSwipeElement.style.transform;
    const match = transform.match(/translateX\((-?\d+(?:\.\d+)?)px\)/);
    const currentX = match ? parseFloat(match[1]) : 0;

    if (currentX < swipeOpenOffset / 2) {
      currentSwipeElement.style.transform = `translateX(${swipeOpenOffset}px)`;
      if (currentSwipeContainer) currentSwipeContainer.dataset.swipeOpen = "true";
    } else {
      currentSwipeElement.style.transform = "translateX(0)";
      if (currentSwipeContainer) currentSwipeContainer.dataset.swipeOpen = "false";
    }
  });

  // Mouse Handlers
  view.addEventListener("mousedown", (e) => {
    const interactive = e.target.closest("button, summary, a, input, select, option, textarea");
    if (interactive) return;

    const content = e.target.closest(".swipe-content");
    if (!content) return;

    currentSwipeElement = content;
    currentSwipeContainer = content.closest(".swipe-container");
    swipeStart.x = e.clientX;
    swipeStart.y = e.clientY;
    isSwipeDragging = true;
    currentSwipeElement.style.transition = "none";

    closeOtherSwipes(currentSwipeContainer);
  });

  view.addEventListener("mousemove", (e) => {
    if (!isSwipeDragging || !currentSwipeElement) return;
    const diffX = e.clientX - swipeStart.x;
    const isAlreadyOpen = currentSwipeContainer?.dataset.swipeOpen === "true";
    let translateX = diffX + (isAlreadyOpen ? swipeOpenOffset : 0);

    if (translateX < 0) {
      translateX = Math.max(swipeOpenOffset - 20, translateX);
      currentSwipeElement.style.transform = `translateX(${translateX}px)`;
    } else {
      translateX = Math.min(0, translateX);
      currentSwipeElement.style.transform = `translateX(${translateX}px)`;
    }
  });

  const handleMouseUp = () => {
    if (!isSwipeDragging || !currentSwipeElement) return;
    isSwipeDragging = false;
    currentSwipeElement.style.transition = "transform 0.15s ease-out";

    const transform = currentSwipeElement.style.transform;
    const match = transform.match(/translateX\((-?\d+(?:\.\d+)?)px\)/);
    const currentX = match ? parseFloat(match[1]) : 0;

    if (currentX < swipeOpenOffset / 2) {
      currentSwipeElement.style.transform = `translateX(${swipeOpenOffset}px)`;
      if (currentSwipeContainer) currentSwipeContainer.dataset.swipeOpen = "true";
    } else {
      currentSwipeElement.style.transform = "translateX(0)";
      if (currentSwipeContainer) currentSwipeContainer.dataset.swipeOpen = "false";
    }
  };

  view.addEventListener("mouseup", handleMouseUp);
  view.addEventListener("mouseleave", handleMouseUp);
}

function toast(message) {
  const element = document.getElementById("toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("show"), 2200);
}

document.querySelectorAll(".bottom-tab").forEach((button) => {
  button.addEventListener("click", () => setRoute(button.dataset.route));
});

initSwipeToDelete();
render();

if (window.GRAVITAS_FIREBASE?.connect) {
  window.GRAVITAS_FIREBASE.connect({
    getState: () => state,
    setState: applyCloudState,
    onSynced: markCloudSynced,
    onStatus: updateCloudStatus,
    onAuthReady: (user) => {
      if (!user && authUser) {
        localStorage.removeItem(STORAGE_KEY);
        state = loadState();
      }
      authReady = true;
      authUser = user;
      render();
    }
  });
} else {
  authReady = true;
  updateCloudStatus("Firebase unavailable");
  render();
}

if (
  typeof window !== "undefined" &&
  typeof navigator !== "undefined" &&
  "serviceWorker" in navigator &&
  typeof location !== "undefined" &&
  location.protocol !== "file:"
) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}
