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
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

console.log("start before signin");
auth.signInWithEmailAndPassword('trueidapp@truedigital.com', 'YsYsFcRBcjpCPFxKxYrCBcnMYn2Dy7GB').then(cred => {
    console.log('login with email and password');
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log('login by user email');
            console.log('writing database');
            db.collection("concurrency").doc("6")
                .collection('5555555555555').doc("QQQQQQQQQQQQQQQ")
                .set({ timestamp: firebase.firestore.FieldValue.serverTimestamp() });

            delayTime();
            console.log('writing database is completed');
        } else {
            console.log('terminate session because already signout')
        }
    })
})

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

const delayTime = async () => {
    console.log('About to snooze without halting the event loop...');
    await snooze(2000);
    console.log('done!');
    auth.signOut().then(function () {
        // Sign-out successful.
        console.log("Signout success");
    }).catch(function (error) {
        // An error happened.
    });
};
