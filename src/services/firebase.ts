import firebase from 'firebase'

import 'firebase/auth';
import 'firebase/database'

  const firebaseConfig = {
    apiKey: "AIzaSyAtWP6vljdOBBSBMdJ6B5grcy2ql2Ux5Vg",
    authDomain: "letmeask-6a903.firebaseapp.com",
    databaseURL: "https://letmeask-6a903-default-rtdb.firebaseio.com",
    projectId: "letmeask-6a903",
    storageBucket: "letmeask-6a903.appspot.com",
    messagingSenderId: "520320415810",
    appId: "1:520320415810:web:92b5fd11b38423992c15db",
    measurementId: "G-XMQQKNNNKZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.analytics();
  
export const auth = firebase.auth();
 export const database = firebase.database();
