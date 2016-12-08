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
  user     : 'bd868e046ae1a7',
  password : '1d20704a',
  database : 'heroku_ab7c55c476b592d'
});

connection.connect(function(err) {
  console.log(err); // 'ECONNREFUSED'
});
app.get('/', function(request, response) {
  connection.query('SHOW TABLES', function(err, rows, fields) {
      console.log('deu certo', err, rows, fields);
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
