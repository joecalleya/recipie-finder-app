import  firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA1OTb0X8hgMc0zlciQnNVZTlJNLvFs2Bc",
    authDomain: "random-recipie.firebaseapp.com",
    databaseURL: "https://random-recipie.firebaseio.com",
    projectId: "random-recipie",
    storageBucket: "random-recipie.appspot.com",
    messagingSenderId: "1031019304024",
    appId: "1:1031019304024:web:1d84c54792a4487998e62d"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;











