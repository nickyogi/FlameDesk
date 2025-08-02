// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK_wiMOor1so2DVBirUsx45_gcVAadjLc",
  authDomain: "login-ab14a.firebaseapp.com",
  projectId: "login-ab14a",
  storageBucket: "login-ab14a.firebasestorage.app",
  messagingSenderId: "255060974422",
  appId: "1:255060974422:web:8ceea4a762f6147b7bd4f7",
  measurementId: "G-LYW4BVX05B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };