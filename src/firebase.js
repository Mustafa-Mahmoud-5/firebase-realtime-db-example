// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB9o1VvVTWV_SMxdnFRIoLgrvjcc2un5s",
  authDomain: "task1-8d74a.firebaseapp.com",
  databaseURL: "https://task1-8d74a-default-rtdb.firebaseio.com/",
  projectId: "task1-8d74a",
  storageBucket: "task1-8d74a.firebasestorage.app",
  messagingSenderId: "1040668441570",
  appId: "1:1040668441570:web:7d46dff3c79ede1b9617bb",
  measurementId: "G-CH7Q2803G4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
