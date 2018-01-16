const express = require('express');
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(bodyParser.json());
var db = require('./model/db');
app.use(bodyParser.urlencoded({ extended: true }));
//app.set('view engine','ejs');
app.use(express.static("public"));

var controllers = require('./controllers');
app.use(controllers);




//app.set('views', path.join(__dirname, "views"));
//app.use(express.static(path.join(__dirname, 'public')));
db.connect('mongodb://<dbuser>:<dbpassword>@<mlabconnectivity>/<databaseame>',function(err)
{
  if(err){  console.log('connection failed');}
  else{

app.listen(process.env.PORT || 8000, function () {
  console.log('Local host running on port 8000')
})
}
})
