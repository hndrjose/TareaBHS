var express = require('express');
var path = require('path');

var exprehbs = require('express-handlebars');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exprehbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

var persona = ['Nombre: Jose', 'Apellido: Mendoza', 'Carrera: Ingenieria Informatica'];


app.get('/', (req, res) => {
    res.render('home', {
        persona: persona
    });
});

app.listen(app.get('port'), () => {
    console.log('server listo en port:' + app.get('port'));
});