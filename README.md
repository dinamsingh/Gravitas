# GRAVITAS Gym Tracker PWA

GRAVITAS is a premium, dark-themed, local-first Progressive Web Application (PWA) designed for tracking gym workouts, scheduling routine splits, and guiding exercises with detailed form instructions and video streams. 

The application is built using **vanilla JavaScript, HTML5, and CSS3** (no heavy frameworks) to guarantee lightning-fast performance, full offline capability, and easy customization.

---

## 🚀 Key Features

*   **Local-First & Offline Ready:** All workout plans, logs, settings, and custom exercises are saved instantly to the browser's `localStorage`. You can track your workouts in the gym without an internet connection.
*   **Firebase Cloud Sync & Secure Auth:** Optional registration/login using Firebase Authentication. Once logged in, your workout history, active splits, and settings sync automatically in the background to Google Cloud Firestore.
*   **Comprehensive Exercise Database:** Includes a pre-seeded library of **542 unique exercises** covering all muscle groups, complete with equipment labels and difficulty ratings.
*   **Form & Technique Guides:**
    *   **In-App YouTube Streaming:** Watch curated tutorials directly inside the app.
    *   **Jeet Selal Priority Search:** Fallback searches automatically prioritize YouTube Shorts and videos by fitness creator *Jeet Selal* for quality Hinglish guidance.
    *   **Interactive Muscle Map:** High-contrast SVG body maps that visually highlight target muscle groups in accent color.
    *   **Bench Angle Indicator:** Displays optimal bench inclination/decline degrees (e.g. `30° – 45° Incline`) with a visual tilted bench simulator.
*   **Active Workout Steppers:**
    *   **Weight Steppers:** Quick `+` and `-` buttons to adjust weights in `2.5 kg` steps.
    *   **Reps Steppers:** Quick `+` and `-` buttons to adjust reps by `1`.
*   **Safe Workout Deletion:** Built-in 3-second long-press safeguard on history items to prevent accidental session deletions.

---

## 📁 File Structure & Architecture

All application files are located in the `/web` directory:

```text
gym-tracker/
├── README.md                  # Root documentation (this file)
└── web/
    ├── index.html             # Single-page shell & modal structures
    ├── app.js                 # Core application logic, routing, & UI render loop
    ├── data.js                # Database seed data containing 542 exercises
    ├── exercise-guides.js     # Step-by-step form guides & YouTube IDs
    ├── styles.css             # Custom dark theme and responsive glassmorphism styles
    ├── service-worker.js      # PWA caching logic for offline use
    ├── manifest.webmanifest   # PWA installation configurations
    ├── firebase-config.js     # Firebase credentials and configuration
    ├── firebase-sync.js       # Background Firestore sync & Auth listeners
    └── icon.svg               # App launcher icon
```

### Routing & State Management
The app operates as a Single Page Application (SPA).
1.  **State:** Maintained in a single global `state` object inside [app.js](file:///c:/Users/singu/gravita%20pwa/gym-tracker/web/app.js).
2.  **Render Loop:** A reactive `render()` function parses `state.ui.route` and dynamically injects template literals into the `#view` container.
3.  **Persistence:** Any state change triggers `saveState()`, writing to `localStorage` and calling `window.GRAVITAS_FIREBASE.save()` if connected.

---

## 🛠 How to Run & Test Locally

Since it is a vanilla JS application, you do not need to install node packages or run a build step. However, because it uses ES modules and service workers, it **must be served via HTTP/HTTPS** (opening index.html directly from your file system via `file://` will cause CORS/Service Worker blocks).

### Option 1: Using Node.js (Recommended)
If you have Node.js installed, run a static server in the root or `/web` folder:
```bash
# Install a light server globally
npm install -g serve

# Serve the web folder
serve web
```

### Option 2: Using Python
If you have Python installed:
```bash
# Python 3
python -m http.server 8000 --directory web
```

Open `http://localhost:8000` (or the port specified) in your browser.

---

## 📦 How to Rebuild / Extend the Application

### 1. Adding New Exercises
To add new exercises permanently to the app database, edit [data.js](file:///c:/Users/singu/gravita%20pwa/gym-tracker/web/data.js) and append objects to `window.GRAVITAS_EXERCISES`:
```json
{
    "id": 543,
    "name": "Exercise Name",
    "muscleGroup": "Chest",
    "equipment": "Dumbbell",
    "difficulty": "Beginner",
    "description": "Short explanation of the movement.",
    "isCustom": false
}
```

### 2. Adding Custom Technique & Video Guides
Form guides are keyed by the **lowercase normalized name** of the exercise inside [exercise-guides.js](file:///c:/Users/singu/gravita%20pwa/gym-tracker/web/exercise-guides.js). To add a guide:
```javascript
"exercise name": {
  youtubeId: "YOUTUBE_VIDEO_ID",
  benchAngle: { label: "30° – 45° Incline", value: 37, type: "incline" }, // Set to null if not a bench exercise
  setup: [
      "Step 1 setup detail.",
      "Step 2 setup detail."
  ],
  execution: [
      "Step 1 execution detail."
  ],
  dos: [
      "Important form tip."
  ],
  donts: [
      "Common mistake to avoid."
    ]
}
```

---

## 🔥 Firebase Configuration & Firestore Security Rules

To wire up the cloud backup database:

1.  Create a project on the [Firebase Console](https://console.firebase.google.com/).
2.  Enable **Authentication** (under Build) and activate **Email/Password** sign-in.
3.  Create a **Firestore Database** and choose a location.
4.  Copy your Web App configurations and paste them into [firebase-config.js](file:///c:/Users/singu/gravita%20pwa/gym-tracker/web/firebase-config.js):
    ```javascript
    window.firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };
    ```
5.  Set your Firestore **Security Rules** to restrict users to only access their own private data:
    ```javascript
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /users/{userId}/{allPaths=**} {
          allow read, write: if request.auth != null && request.auth.uid == userId;
        }
      }
    }
    ```
