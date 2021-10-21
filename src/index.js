const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

const { database } = require('./keys');

//Init
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Globales
app.use((req, res, next) => {
    next();
});

//Rutas
app.use(require('./routes'));
app.use(require('./routes/auth'));
app.use(require('./routes/enfermeras'));

//Publicos
app.use(express.static(path.join(__dirname, 'public')));

//Servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});
