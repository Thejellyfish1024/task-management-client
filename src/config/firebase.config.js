// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOKgWJ6rfjhfQv2N8nSX91w3Go8d7r2mM",
  authDomain: "task-management-client-590c9.firebaseapp.com",
  projectId: "task-management-client-590c9",
  storageBucket: "task-management-client-590c9.appspot.com",
  messagingSenderId: "752043495500",
  appId: "1:752043495500:web:5c492d048ba8ea9549a4e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);