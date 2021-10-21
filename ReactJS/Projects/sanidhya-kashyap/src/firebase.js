import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "your api",
    authDomain: "tinder-clone-69ae3.firebaseapp.com",
    databaseURL:"",
    projectId: "tinder-clone-69ae3",
    storageBucket: "tinder-clone-69ae3.appspot.com",
    messagingSenderId: "767652821538",
    appId: "1:767652821538:web:ce364a51a6569dd638687b",
    measurementId: "G-WDMBBXLMT0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database
