/*=========================================================
ST. JOSEPH SECONDARY SCHOOL NYAMITYOBORA
DEBATE CLUB WEBSITE

Firebase Configuration

=========================================================*/

// Import Firebase SDK Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

import {
    getStorage
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-storage.js";

/*=========================================================
YOUR FIREBASE CONFIGURATION
Replace the values below with your Firebase project details.
=========================================================*/

const firebaseConfig = {

apiKey: "AIzaSyDH5Vz8G7c6M23S0nd3K0ksHHruwEj0sD8",

authDomain: "jovoc-web.firebaseapp.com",

projectId: "jovoc-web",

storageBucket: "jovoc-web.firebasestorage.app",

messagingSenderId: "101489846558",

appId: "1:101489846558:web:3149ba2b9764c2656e410f"

};

/*=========================================================
INITIALIZE FIREBASE
=========================================================*/

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

/*=========================================================
EXPORT SERVICES
=========================================================*/

export { auth, db, storage };

/*=========================================================
STATUS MESSAGE
=========================================================*/

console.log("Firebase Connected Successfully!");