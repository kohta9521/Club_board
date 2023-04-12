// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9TFJcN0Q2MxynebzdKUnRg_zWpevN-kw",
  authDomain: "gakushuin-club-board.firebaseapp.com",
  projectId: "gakushuin-club-board",
  storageBucket: "gakushuin-club-board.appspot.com",
  messagingSenderId: "797562073791",
  appId: "1:797562073791:web:cc6ef7cc3e68913d0b0c0a",
  measurementId: "G-E7E1KB1SBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);