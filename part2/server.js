var express = require('express');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 8000;

app.get('/yourroute', function(req, res) {
  res.send("Howdy Galvanize!!!");
});

// Challenge 1 starts here
app.get('/create/:name/:age', function(req, res){
  fs.readFile('./storage.json', function(err, data){
    let temp = JSON.parse(data);

    let userName = req.params.name;
    for(let i=0; i<temp.length; i++){
      if(userName === temp[i].name){
        res.send('Error! User already exist. Try different name.');
        return;
      }
    }

    let id = temp.length + 1;
    let myObject = {
          "name": req.params.name,
          "age": req.params.age,
          "id": id
        };
    temp.push(myObject);
    fs.writeFile('./storage.json', JSON.stringify(temp), function(err){
        if(err) throw err
        res.send('Success!');
    });

  });

}); // Challenge 1 ends here



// Challenge 2 starts here
app.get('/', function(req, res){
  fs.readFile('./storage.json', 'utf8', function(err, fileData){
    if(err) throw err;
    let currentData = JSON.parse(fileData);
    res.json(currentData);

  });
}); // Challenge 2 ends here


// Challenge 3 starts here
app.get('/:name', function(req, res){
  let name = req.params.name;
  fs.readFile('./storage.json', function(err, myData){
    let temp = JSON.parse(myData);
    for(let i=0; i<temp.length; i++){
      console.log(i);
      if(name === temp[i].name){
        res.json(temp[i]);
        return;
      }
    }
    res.sendStatus(400);
  });

}); // Challenge 3 ends here

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
