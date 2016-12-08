var app = require('express')();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  console.log('requisição de teste');
  res.send('deu certo ae mano')
});
app.listen(proccess.env.port || 3332, function() {
  console.log('Rodando na porta 3332');
})
