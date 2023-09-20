// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// import "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
}

// Initialize analytics
// const analytics = getAnalytics(app);

export default firebase;
