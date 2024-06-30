// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoaFm6XzBf7ZlZXxIAxvz9lzh5AcTPeXE",
  authDomain: "netflixgpt-react-c886d.firebaseapp.com",
  projectId: "netflixgpt-react-c886d",
  storageBucket: "netflixgpt-react-c886d.appspot.com",
  messagingSenderId: "521686560508",
  appId: "1:521686560508:web:de4c2bdf4bb68313c9b179",
  measurementId: "G-GGDYGV2VTF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
