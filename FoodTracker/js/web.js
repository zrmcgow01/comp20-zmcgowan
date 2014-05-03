//Final  Project
//Comp-20

var express = require('express');
var mongo = require('mongodb');
var logfmt = require("logfmt");
var twilio = require('twilio');
var sanitizer = require('sanitizer'); //security added by Corey R- harder to inject code => see app.post
var device = require('express-device');

var app = express(express.logger());
app.use(express.bodyParser());  

//ejs
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.static(__dirname));

app.configure(function(){
    //app.set('view engine', 'ejs');
    app.set('view options', { layout: true });
    //app.set('views', __dirname + '/views');

    //app.use(express.bodyParser());
    app.use(device.capture());

    app.enableViewRouting();
});


app.all('/incomingText', function(req, res, next) {
  // Enabling CORS
  // See http://stackoverflow.com/questions/11181546/node-js-express-cross-domain-scripting
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


app.all('/userData.json', function(req, res, next) {
  // Enabling CORS
  // See http://stackoverflow.com/questions/11181546/node-js-express-cross-domain-scripting
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
 
app.all('/', function(req, res, next) {
  // Enabling CORS
  // See http://stackoverflow.com/questions/11181546/node-js-express-cross-domain-scripting
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

//Setup a mongo Uri
var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/local';


var db = mongo.Db.connect(mongoUri, function (error, databaseConnection) {
	db = databaseConnection;
});


app.post('/incomingText', function (request, response) {
    mongo.Db.connect(mongoUri, function (err, db) {
      if(err){
        response.send('500');
      }
      db.collection("texts", function (er, collection){
      	var text = sanitizer.escape(request.body.Body); //escapes this data
      	var from = sanitizer.escape(request.body.From); //escapes data (less likely but still)
        var date = sanitizer.escape(request.body.date);
      	console.log(text + "    " + from);
        var res = text.split(" ");
        var location = "";
        for(var p in res){
          if(p!=0){
            location = location + res[p] + " ";
          }
        }

          var date_array = date.split(",");
          if(date_array[1] == undefined){
            var date_obj = new Date();
            var month = 1 + date_obj.getMonth();
            var day = date_obj.getDate();
            var year = date_obj.getUTCFullYear();
            date_array = [year, month, day];
          }

        if(parseInt(res[0]) != NaN){  
      	  collection.insert({"Amount": res[0], "Location": location, "From": from, "Date": date_array}, function (err, r){});
      	  response.send('{"status":"good"}');
        }
        else{
          response.send('500');
        }
      });
    });
});

app.get('/userData.json', function (req, res){
 mongo.Db.connect(mongoUri, function (err, db){
    db.collection("texts", function (er, col){
      col.find({}).toArray(function(e, x){
        res.send(x);
      });
    });
  });
});

app.get('/', function(req, res) { 
  if(req.device.type == 'desktop'){
    console.log(req.device.type);
    res.render("index", {});
  }
  else{
    console.log(req.device.type);
    res.render("mobile", {});
  }
});


app.listen(process.env.PORT || 3000);

