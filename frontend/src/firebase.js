// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnuOTUeJZSKc9bXCfZVr0sZGRYTQIMk1Q",
  authDomain: "stackoverflow-8d724.firebaseapp.com",
  projectId: "stackoverflow-8d724",
  storageBucket: "stackoverflow-8d724.appspot.com",
  messagingSenderId: "953246707744",
  appId: "1:953246707744:web:ee19564d9a9a74ddee0c45",
  measurementId: "G-2JRT2JDY5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();