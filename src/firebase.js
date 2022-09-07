// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER ,
//     appId: process.env.REACT_APP_APP_ID ,
//     measurementId: "G-CW8DZTE509"
// };

const firebaseConfig = {
    apiKey: "AIzaSyBEGd9dUY-zLHVU5BJikHKO7Ykv9UBtBUg",
    authDomain: "netflix-clone-36831.firebaseapp.com",
    projectId: "netflix-clone-36831",
    storageBucket: "netflix-clone-36831.appspot.com",
    messagingSenderId: "90444242160",
    appId: "1:90444242160:web:2b8f38a8dd5556aafb7635",
    measurementId: "G-CW8DZTE509"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)