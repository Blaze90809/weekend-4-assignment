var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('server/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var pictures = [ski = {name: 'ski', location: '../images/skiing.jpg', description: 'A great day to ski.'},
couple = {name: 'couple', location: '../images/couple.jpg', description: 'A lovely couple.'},
mercury = {name: 'mercury', location: '../images/mercury.jpg', description: 'My family\'s dog.'},
twinsgame = {name: 'Twins', location: '../images/twinsgame.jpg', description: 'Play ball!'},
fall = {name: 'Fall', location: '../images/fall.jpg', description: 'A beautiful fall day.'},
wild = {name: 'Wild', location: '../images/wild.jpg', description: 'A fun day to watch the Wild.'}]

app.get('/pictures', function(req, res){
    res.send(pictures)
})

app.listen(port, function(){
    console.log('listening on port', port);
}); //End of server