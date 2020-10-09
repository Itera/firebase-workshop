import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "someKey",
    authDomain: "yourApp.firebaseapp.com",
    databaseURL: "https://yourApp.firebaseio.com",
    projectId: "yourApp",
    storageBucket: "yourApp.appspot.com",
    messagingSenderId: "someId",
    appId: "someId",
    measurementId: "someId"
  });