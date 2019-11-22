var express = require('express');
var app = express();
const lego = require('./lego.json');
const http = require('http');
var cors = require('cors');
app.use(cors());
app.set('view engine', 'pug');   //Dico a express di usare pug come motore di template
app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici
app.get('/', function (req, res) {
  //res.send('Hello World!');
   res.render('index', {
   title: 'Homepage',
   lego: lego.legos 
 });
});
/*app.get('/l', (req, res) => {
  const legos = lego.lego.find((p) => p.Numero === req.query.Numero);
  res.render('l', {
    Nome: `About ${legos.Nome}`,
    legos,
  });
});*/
app.get('/l', (req, res) => {
    const r = lego.legos.find(p => p.Numero === req.query.id);
    console.log(r);
    res.render('l', {title : `About ${r.Nome}` ,r}); // l è il nome del file
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});