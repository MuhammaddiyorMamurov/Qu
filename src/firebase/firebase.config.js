// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUI7f6B7GwFJv72ZdwqYklU14-POsxUC4",
  authDomain: "quote-project-6dabd.firebaseapp.com",
  projectId: "quote-project-6dabd",
  storageBucket: "quote-project-6dabd.firebasestorage.app",
  messagingSenderId: "817057030101",
  appId: "1:817057030101:web:0505644f6cc54aa3d6e75c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)