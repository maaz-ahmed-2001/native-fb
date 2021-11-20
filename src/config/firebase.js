import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCrDJVmMeFbD5h54vd3mZdrJkMwMsAdPmE",
    authDomain: "applications-js.firebaseapp.com",
    databaseURL: "https://applications-js-default-rtdb.firebaseio.com",
    projectId: "applications-js",
    storageBucket: "applications-js.appspot.com",
    messagingSenderId: "921820609090",
    appId: "1:921820609090:web:deb3d3f6de58fdeb308bdb"
};

initializeApp(firebaseConfig);
const auth = getAuth()
export {auth,createUserWithEmailAndPassword};