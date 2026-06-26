// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAimKVuweY81-5l_wYdcq4UzPjiIwbZiUQ",
  authDomain: "fir-b7505.firebaseapp.com",
  projectId: "fir-b7505",
  storageBucket: "fir-b7505.firebasestorage.app",
  messagingSenderId: "373778161196",
  appId: "1:373778161196:web:401a072aa4edb0b0533b89",
  measurementId: "G-PETL8S1T2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)