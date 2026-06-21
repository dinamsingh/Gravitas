# GRAVITAS Web App

This is now a web-only version of GymTrackerPro.

Open `index.html` in a browser, or serve this folder with any static server. The app stores workout plans, logs, settings, and custom exercises in browser `localStorage`. Firebase sync is also wired in, so the same state can be backed up to Firestore after configuration.

Phone use:

- For quick testing, open `index.html` in a phone browser.
- For install/offline behavior, serve the folder over localhost/HTTPS, then use the browser's "Add to Home Screen" option.
- The layout uses a phone bottom nav, safe-area padding, touch-sized buttons, and mobile-friendly inputs.

Seed data:

- `data.js` contains 340 built-in exercises for the web app.
- `app.js` contains the web app logic, login, workout splits, planner, logging, stats, and cloud profile behavior.

Implemented flows:

- Home dashboard with today's plan and quick stats
- Exercise library with custom exercises
- Weekly workout planner
- Built-in workout split application
- Active workout logging
- Workout history
- Personal bests and progress chart
- Profile settings plus Firebase cloud sync

Firebase cloud sync:

1. Create a Firebase project.
2. Enable Authentication, then enable Email/Password sign-in.
3. Create a Firestore database.
4. Copy your web app config into `firebase-config.js`.
5. Use these Firestore security rules:

```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Workout data is saved at `users/{uid}/private/gravitas`. Login profile metadata, including name, email, and phone, is saved at `users/{uid}/profile/details`. Passwords are not stored in Firestore; Firebase Auth handles them securely.
