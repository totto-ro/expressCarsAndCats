
const express = require( 'express' );
const app = express();
const path = require('path');

app.set('static', __dirname + '/static'); 
app.set('view engine', 'ejs');

app.use( express.static(__dirname + '/static') );

app.get('/cats',function(request, response){
    response.sendFile(path.join(__dirname +'/static/cats.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/cars',function(request, response){
    response.sendFile(path.join(__dirname +'/static/cars.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/new',function(request, response){
    response.sendFile(path.join(__dirname +'/static/new.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(7077, function() {
    console.log("running on port 7077");
});

