import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDewWYr90QzNmD30ogSOsfn41o_l-LZBIg",
    authDomain: "studique-462e8.firebaseapp.com",
    databaseURL: "https://studique-462e8.firebaseio.com",
    projectId: "studique-462e8",
    storageBucket: "studique-462e8.appspot.com",
    messagingSenderId: "143790838653",
    appId: "1:143790838653:web:07d61428c36a3e2505f214",
    measurementId: "G-RKXTEKXW7X"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppDB = firebase.database();
const AppAUTH = firebase.auth();
export { AppDB, AppAUTH };