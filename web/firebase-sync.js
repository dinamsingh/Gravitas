(function () {
  const appStateDoc = "gravitas";
  let connected = false;
  let initialized = false;
  let loadComplete = false;
  let saving = false;
  let pendingState = null;
  let saveTimer = null;
  let docRef = null;
  let db = null;
  let auth = null;
  let options = null;

  function hasFirebaseConfig() {
    const config = window.GRAVITAS_FIREBASE_CONFIG || {};
    return Boolean(config.apiKey && config.authDomain && config.projectId && config.appId);
  }

  function setStatus(message) {
    window.GRAVITAS_FIREBASE_STATUS = message;
    if (options?.onStatus) options.onStatus(message);
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function latestTimestamp(payload) {
    return Number(payload?.updatedAt || payload?.state?.updatedAt || 0);
  }

  function userPayload(user) {
    if (!user) return null;
    return {
      uid: user.uid,
      email: user.email || "",
      displayName: user.displayName || "",
      phoneNumber: user.phoneNumber || "",
      emailVerified: Boolean(user.emailVerified)
    };
  }

  async function saveUserProfile(user, isNew = false, extraProfile = {}) {
    if (!db || !user) return;
    if (extraProfile.displayName && user.displayName !== extraProfile.displayName) {
      await user.updateProfile({ displayName: extraProfile.displayName });
    }
    const profile = {
        uid: user.uid,
        email: user.email || "",
        displayName: extraProfile.displayName || user.displayName || "",
        phone: extraProfile.phone || "",
        emailVerified: Boolean(user.emailVerified),
        provider: "password",
        lastLoginAt: Date.now()
      };
    if (isNew) profile.createdAt = Date.now();
    await db.collection("users").doc(user.uid).collection("profile").doc("details").set(profile, { merge: true });
  }

  async function flush() {
    if (!connected || !loadComplete || !docRef || !pendingState || saving) return;
    saving = true;
    const state = clone(pendingState);
    pendingState = null;
    const updatedAt = Date.now();
    state.updatedAt = updatedAt;

    try {
      await docRef.set(
        {
          updatedAt,
          state
        },
        { merge: true }
      );
      if (options?.onSynced) options.onSynced(updatedAt);
      setStatus("Cloud saved");
    } catch (error) {
      pendingState = state;
      setStatus("Cloud save failed");
      console.warn("Firebase save failed", error);
    } finally {
      saving = false;
      if (pendingState) flush();
    }
  }

  function save(state) {
    if (!connected) return;
    pendingState = clone(state);
    clearTimeout(saveTimer);
    saveTimer = setTimeout(flush, 450);
  }

  async function loadUserState(user) {
    docRef = db.collection("users").doc(user.uid).collection("private").doc(appStateDoc);
    connected = true;
    loadComplete = false;
    pendingState = null;

    await saveUserProfile(user);

    const snapshot = await docRef.get();
    const localState = options.getState();
    const localUpdatedAt = latestTimestamp(localState);
    const localCloudUpdatedAt = Number(localState.cloudUpdatedAt || 0);

    if (snapshot.exists) {
      const remoteData = snapshot.data() || {};
      const remoteUpdatedAt = latestTimestamp(remoteData);
      const remoteState = remoteData.state || {};
      const hasUnsyncedLocal = localCloudUpdatedAt > 0 && localUpdatedAt > localCloudUpdatedAt;

      if (!hasUnsyncedLocal || remoteUpdatedAt >= localUpdatedAt) {
        options.setState({
          ...remoteState,
          updatedAt: remoteUpdatedAt,
          cloudUpdatedAt: remoteUpdatedAt
        });
        setStatus("Cloud loaded");
      } else {
        pendingState = localState;
        setStatus("Saving local changes");
      }
    } else {
      pendingState = localState;
      setStatus("Creating cloud backup");
    }

    loadComplete = true;
    flush();
  }

  async function connect(nextOptions) {
    if (initialized) return;
    initialized = true;
    options = nextOptions;

    if (!hasFirebaseConfig()) {
      setStatus("Firebase config missing");
      options?.onAuthReady?.(null);
      return;
    }

    if (!window.firebase?.initializeApp || !window.firebase?.auth || !window.firebase?.firestore) {
      setStatus("Firebase SDK missing");
      options?.onAuthReady?.(null);
      return;
    }

    try {
      firebase.initializeApp(window.GRAVITAS_FIREBASE_CONFIG);
      auth = firebase.auth();
      db = firebase.firestore();
      await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      setStatus("Login required");

      auth.onAuthStateChanged(async (user) => {
        connected = false;
        loadComplete = false;
        docRef = null;
        clearTimeout(saveTimer);

        if (!user) {
          setStatus("Login required");
          options?.onAuthReady?.(null);
          return;
        }

        options?.onAuthReady?.(userPayload(user));
        setStatus("Connecting cloud");

        try {
          await loadUserState(user);
        } catch (error) {
          setStatus("Cloud unavailable");
          console.warn("Firebase user load failed", error);
        }
      });
    } catch (error) {
      setStatus("Cloud unavailable");
      options?.onAuthReady?.(null);
      console.warn("Firebase connection failed", error);
    }
  }

  async function register(email, password, profile = {}) {
    if (!auth) throw new Error("Firebase is not ready");
    const credential = await auth.createUserWithEmailAndPassword(email, password);
    await saveUserProfile(credential.user, true, profile);
    return userPayload(credential.user);
  }

  async function login(email, password) {
    if (!auth) throw new Error("Firebase is not ready");
    const credential = await auth.signInWithEmailAndPassword(email, password);
    await saveUserProfile(credential.user);
    return userPayload(credential.user);
  }

  async function logout() {
    if (!auth) return;
    await auth.signOut();
  }

  window.GRAVITAS_FIREBASE = {
    connect,
    save,
    register,
    login,
    logout
  };
})();
