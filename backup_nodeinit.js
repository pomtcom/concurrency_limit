console.log("Hello world by firestore test");


var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCf9t-Iu2W67wawn3kFeHG6hDxVZnML1Do",
    authDomain: "usage-meter-staging.firebaseapp.com",
    databaseURL: "https://usage-meter-staging.firebaseio.com",
    projectId: "usage-meter-staging",
    storageBucket: "usage-meter-staging.appspot.com",
    messagingSenderId: "399833628089",
    appId: "1:399833628089:web:57a7ae7fd912389d"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

auth.signInWithEmailAndPassword('trueidapp@truedigital.com', 'YsYsFcRBcjpCPFxKxYrCBcnMYn2Dy7GB').catch(function(error) {
    // Handle Errors here.
    // console.log("Authentication");
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // document.getElementById('quickstart-sign-in').disabled = false;
    // [END_EXCLUDE]
  });


  auth.onAuthStateChanged(user => {
    // if (user) {
/*      this.setState({
        currentUser: user
      })*/
//   this.interval = setInterval(() => {

//      }, 3000);


     db.collection("concurrency").doc("1")
     .collection('112149541999999998').doc("qwertyuiop")
     .set({timestamp:firebase.firestore.FieldValue.serverTimestamp()});
    // }
  })






// const admin = require('firebase-admin');

// let serviceAccount = require('path/to/serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// firebase.auth().createUserWithEmailAndPassword('trueidapp@truedigital.com', 'YsYsFcRBcjpCPFxKxYrCBcnMYn2Dy7GB').catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//     console.log("Authentication fail with email and password") ;
// });


// let db = admin.firestore();

// let docRef = db.collection('users').doc('alovelace');

// let setAda = docRef.set({
//   first: 'Ada',
//   last: 'Lovelace',
//   born: 1815
// });

// let aTuringRef = db.collection('users').doc('aturing');

// let setAlan = aTuringRef.set({
//   'first': 'Alan',
//   'middle': 'Mathison',
//   'last': 'Turing',
//   'born': 1912
// });

