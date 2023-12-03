// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg_4vxiKNgZEboeOb_nBE4RGKOJhKZui0",
  authDomain: "vite-contact-c771c.firebaseapp.com",
  projectId: "vite-contact-c771c",
  storageBucket: "vite-contact-c771c.appspot.com",
  messagingSenderId: "341449001135",
  appId: "1:341449001135:web:b3a8aa52495a243dff2c5a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
