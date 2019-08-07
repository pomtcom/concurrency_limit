var firebase = require("firebase/app");
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