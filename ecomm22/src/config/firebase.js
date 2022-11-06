import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB9HJ-D1NHXgC1yhc5Ftw5UyCNGvDWpA2U",
    authDomain: "ecomm22.firebaseapp.com",
    projectId: "ecomm22",
    storageBucket: "ecomm22.appspot.com",
    messagingSenderId: "23822844502",
    appId: "1:23822844502:web:15340ce35caee2f486f1f7"
  };


// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
// firebase.auth = firebase.auth();

export default firebase; 