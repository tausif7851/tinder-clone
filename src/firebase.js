import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBcMaOemn72kojUx6E80xdknE3IHwQm1is",
    authDomain: "tinder-clone-df00a.firebaseapp.com",
    databaseURL: "https://tinder-clone-df00a.firebaseio.com",
    projectId: "tinder-clone-df00a",
    storageBucket: "tinder-clone-df00a.appspot.com",
    messagingSenderId: "696828411550",
    appId: "1:696828411550:web:a5129a10e1a5d4856f858f",
    measurementId: "G-4QHFYYNLQR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;


