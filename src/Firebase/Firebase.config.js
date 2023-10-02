// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN9jNTrpVjYsa4XDWiG2ub9u0CYI1Ebtk",
  authDomain: "context-api-firebase-a9fe5.firebaseapp.com",
  projectId: "context-api-firebase-a9fe5",
  storageBucket: "context-api-firebase-a9fe5.appspot.com",
  messagingSenderId: "61181817351",
  appId: "1:61181817351:web:d424ca7e9e5ebc387df0a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth