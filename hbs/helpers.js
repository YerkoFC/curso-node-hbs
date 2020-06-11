const hbs = require('hbs');
// Helpers


// Obtiene el año actual
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

// Transforma la primera letra de cada palabra en mayuscula y las demas en minusculas
hbs.registerHelper('capitalize', (text) => {

    let words = text.split(' ');

    words.forEach((word, index) => {
        words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() ;
    });

    return words.join(' ');
});