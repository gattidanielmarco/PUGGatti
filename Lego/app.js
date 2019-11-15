var express = require('express');
var app = express();
const lego = require('./lego.json');
app.set('view engine', 'pug');   //Dico a express di usare pug come motore di template
app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici
app.get('/', function (req, res) {
  //res.send('Hello World!');
   res.render('index', {
   title: 'Homepage',
   l: l.lego 
 });
});
app.get('/l', (req, res) => {
  const legos = l.lego.find((p) => p.id === req.query.id);
  res.render('l', {
    Nome: `About ${legos.Nome}`,
    legos,
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});