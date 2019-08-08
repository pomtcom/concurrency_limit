console.log('concurrentcy limit web service is executing');


var express = require('express'),
  bodyParser = require('body-parser');
// app_express = express(),
  port = process.env.PORT || 3000;

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


var express = require('express');
var app_express = express();
app_express.use(bodyParser.json());

// Our handler function is passed a request and response object
app_express.get('/', function (req, res) {
  // We must end the request when we are done handling it
  res.end('hello');
});

app_express.post('/testpost', (req, res) => {


  console.log('post web service is executing');
  console.log('request.body is ', req.body);
  console.log('SSO is ', req.body.SSO);
  console.log('DEVICE is ', req.body.DEVICE);

  ssoEndNumber = req.body.SSO % 10;
  console.log('ssoEndNumber is ', ssoEndNumber);

  auth.signInWithEmailAndPassword('', '').then(cred => {
    console.log('login with email and password');
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('login by user email');
        console.log('writing database');
        db.collection("concurrency").doc(ssoEndNumber.toString())
          .collection(req.body.SSO).doc(req.body.DEVICE)
          .set({ timestamp: firebase.firestore.FieldValue.serverTimestamp() });

        delayTime();
        console.log('writing database is completed');
      } else {
        console.log('terminate session because already signout')
      }
    })
  })

  return res.send('Received a POST HTTP method');
});

app_express.listen(3000);
console.log('todo list RESTful API server started on: ' + '3000');



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


