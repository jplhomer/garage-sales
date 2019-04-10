import firebase from "firebase/app";
import "firebase/functions";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBVWA9Dh7ATwsdTuhYLv30dicNTxDyGE34",
    authDomain: "waukee-garage-sales.firebaseapp.com",
    databaseURL: "https://waukee-garage-sales.firebaseio.com",
    projectId: "waukee-garage-sales",
    storageBucket: "waukee-garage-sales.appspot.com",
    messagingSenderId: "959879534818"
  });
}

export const functions = firebase.functions();
