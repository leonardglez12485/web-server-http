const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Leonard gonZalez',
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Leonard goNzalez',
    });
});

app.listen(port, () => {

    console.log(`Escuchando peticiones en le puerto ${port}`);
});