# Pet Grooming Service Counter

This is a simple web application to track services for a pet grooming business, designed to run on the Firebase free tier.

## Firebase Setup

Before you can deploy the application, you need to set up a Firebase project.

### Step 1: Create a Firebase Project

1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Click "Add project" and follow the on-screen instructions to create a new project.

### Step 2: Set Up Firebase Services

1.  **Authentication**:
    *   In the Firebase Console, go to the "Authentication" section.
    *   Click on the "Sign-in method" tab.
    *   Enable the **Email/Password** provider. This will be for you, the groomer, to log in.
    *   Add a user (e.g., your email and a password) in the "Users" tab so you can log in.

2.  **Firestore Database**:
    *   Go to the "Firestore Database" section.
    *   Click "Create database" and start in **test mode**. We will secure it later with the provided `firestore.rules`.

3.  **Hosting**:
    *   Go to the "Hosting" section and click "Get started". Follow the setup wizard.

### Step 3: Get Your Firebase Configuration

1.  In your Firebase project, go to "Project settings" (click the gear icon).
2.  In the "General" tab, scroll down to "Your apps".
3.  Click the web icon (`</>`) to create a new web app.
4.  Give it a nickname (e.g., "Pet Grooming App") and register the app.
5.  Firebase will provide you with a configuration object. It looks like this:

    ```javascript
    const firebaseConfig = {
      apiKey: "AIza...",
      authDomain: "your-project-id.firebaseapp.com",
      projectId: "your-project-id",
      storageBucket: "your-project-id.appspot.com",
      messagingSenderId: "...",
      appId: "1:..."
    };
    ```

6.  Copy this `firebaseConfig` object. You will paste it into `public/app.js`.

### Step 4: Install Firebase CLI and Deploy

1.  **Install the Firebase CLI**: If you don't have it, install it globally:
    ```bash
    npm install -g firebase-tools
    ```

2.  **Login to Firebase**:
    ```bash
    firebase login
    ```

3.  **Initialize Firebase in your project folder**:
    *   Navigate to the `pet-grooming-app` directory in your terminal.
    *   Run the command:
        ```bash
        firebase init
        ```
    *   Choose **"Use an existing project"** and select the project you created.
    *   For "What do you want to use as your public directory?", enter **`public`**.
    *   Configure as a single-page app: **Yes**.
    *   Set up automatic builds and deploys with GitHub: **No**.

4.  **Deploy**:
    *   After following all the steps and adding your Firebase config to `app.js`, you can deploy your application.
    *   Run the following command from the `pet-grooming-app` directory:
        ```bash
        firebase deploy
        ```

    Firebase will give you a URL where your application is live.

