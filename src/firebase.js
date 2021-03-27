import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6ACBVRiCQE3rsEQX-V3ferVGaeY8QI8w",
    authDomain: "impar-challenge.firebaseapp.com",
    projectId: "impar-challenge",
    storageBucket: "impar-challenge.appspot.com",
    messagingSenderId: "805982136831",
    appId: "1:805982136831:web:0d4410f6e97f379ef4dfca",
    measurementId: "G-G86LQKE52Z"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };