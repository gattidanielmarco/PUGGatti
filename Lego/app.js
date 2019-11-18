var express = require('express');
var app = express();
const lego = require('./lego.json');
app.set('view engine', 'pug');   //Dico a express di usare pug come motore di template
app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici
app.get('/', function (req, res) {
  //res.send('Hello World!');
   res.render('index', {
   title: 'Homepage',
   lego: lego.lego 
 });
});
/*app.get('/l', (req, res) => {
  const legos = lego.lego.find((p) => p.Numero === req.query.Numero);
  res.render('l', {
    Nome: `About ${legos.Nome}`,
    legos,
  });
});*/
app.get('/lego', (req, res) => {
    const r = lego.lego.find(p => {p.Numero === req.query.id});
    console.log(r);
    res.render('l', {r}); // l è il nome del file
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});