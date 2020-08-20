var app_fireBase = {};
(function(){

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCJPw0BKI8yhSilS3Rw0z3ky0_s7wsUopE",
    authDomain: "dlidocs.firebaseapp.com",
    databaseURL: "https://dlidocs.firebaseio.com",
    projectId: "dlidocs",
    storageBucket: "dlidocs.appspot.com",
    messagingSenderId: "40588081420",
    appId: "1:40588081420:web:befa1e73dffc2c09d87129",
    measurementId: "G-2ZY8PXR2K1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  app_fireBase = firebase;
}}()