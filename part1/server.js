var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

// Challenge 1 starts here
app.get('/hello', function(req, res) {
  res.send("Howdy Galvanize!!!");
});
// Challenge 1 ends here

// Challenge 2 starts here
app.post('/create/:name', function(req, res) {
  let input = req.params.name;
  let name = {
    "id":"12",
    "name":input
  };
  res.json(name);
});
// Challenge 2 ends here

// Challenge 3 starts here
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
// Challenge 3 ends here

// Challenge 4 starts here
app.get('/verify/:age', function(req, res) {
  let inputAge = parseInt(req.params.age);
    if(inputAge > 13){
      res.sendStatus(200);
    } else{
      res.sendStatus(403);
    }

});
// Challenge 4 ends here


app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
