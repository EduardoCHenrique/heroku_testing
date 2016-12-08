// var app = require('express')();
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
//
// app.get('/', function(req, res) {
//   console.log('requisição de teste');
//   res.send('deu certo ae mano')
// });
//
// app.listen(process.env.PORT || 3332, function() {
//   console.log('Rodando na porta 3332');
// })



var express = require("express");
var mysql      = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-04.cleardb.net',
  user     : 'be9d41e962e89d',
  password : 'eeb022b7',
  database : 'heroku_ab7c55c476b592d'
});

connection.connect();

app.get('/', function(request, response) {
  connection.query('SELECT * from t_users', function(err, rows, fields) {
      if (err) {
        console.log('error: ', err);
        throw err;
      }
      response.send(['Hello World!!!! HOLA MUNDO!!!!', rows]);
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
