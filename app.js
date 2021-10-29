const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const renjaRoutes = require('./routes/renjaRoute');
const configRoutes = require('./routes/configRoute');

const viewPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
    res.render('home', {
        title: 'SIPD Scraper Tools',
        name: 'Ekhel'
    });
});

app.use('/data/listing', renjaRoutes);
app.use('/data/config', configRoutes);

module.exports = app;