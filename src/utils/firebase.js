// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6xmtAivoYw121r2tJH_dGE3syLpESSng",
  authDomain: "netflixgpt-d175c.firebaseapp.com",
  projectId: "netflixgpt-d175c",
  storageBucket: "netflixgpt-d175c.firebasestorage.app",
  messagingSenderId: "662916129476",
  appId: "1:662916129476:web:d0157c3f33056138c69f91",
  measurementId: "G-0DZHLZX7LZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
