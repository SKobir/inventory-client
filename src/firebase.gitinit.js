// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4eOxvv85HojI2EsHMsyCvZuKPM5PR5aA",
    authDomain: "inventory-3c192.firebaseapp.com",
    projectId: "inventory-3c192",
    storageBucket: "inventory-3c192.appspot.com",
    messagingSenderId: "618454594839",
    appId: "1:618454594839:web:64ca3c804474a069baf352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;