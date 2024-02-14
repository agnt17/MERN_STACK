// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernstack-fa479.firebaseapp.com",
  projectId: "mernstack-fa479",
  storageBucket: "mernstack-fa479.appspot.com",
  messagingSenderId: "691735437819",
  appId: "1:691735437819:web:182204d8c336e5d3ecab5e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
