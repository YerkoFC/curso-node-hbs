const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers'); // Se importan los helpers

// Express HBS engine
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');


// settings
const port = process.env.PORT || 3000;

// Midleware
// La carpeta public sera de dominio publico, es decir que cualquier persona podra verlo.
app.use(express.static(__dirname + '/public'));


// Routes
app.get('/', (req, res) => {
    res.render('home', {
        name: 'yerko foncea',
    });
});

app.get('/about', (req, res)=> {

    // Simula una respuesta de una base de datos
    let cars = [
        {
            id: 1,
            car: "Chevrolet Aveo 2011"
        },
        {
            id: 2,
            car: "Ford EcoSport 2019"
        }
    ]

    // Renderizamos about.hbs y enviamos como parametro el objeto 'cars'
    res.render('about', {cars} );
});


// Server listening
app.listen(port, ()=>  {
    console.log(`Server running on ${port}`);
});