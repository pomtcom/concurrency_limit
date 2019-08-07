console.log('concurrentcy limit web service is executing');


var express = require('express'),
bodyParser = require('body-parser');
  app = express(),
  port = process.env.PORT || 3000;


var express = require('express');
var app = express();
app.use(bodyParser.json());

// Our handler function is passed a request and response object
app.get('/', function(req, res) {
  // We must end the request when we are done handling it
  res.end('hello');
});

app.post('/testpost', (req, res) => {
    console.log('post web service is executing');
    console.log('request.body is ', req.body);
    console.log('SSO is ', req.body.SSO);
    console.log('DEVICE is ', req.body.DEVICE);
    return res.send('Received a POST HTTP method');
});

app.listen(3000);
console.log('todo list RESTful API server started on: ' + '3000');


