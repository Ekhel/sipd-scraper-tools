const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

const renjaRoutes = require('./routes/renjaRoute');
const configRoutes = require('./routes/configRoute');

const viewPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('', (req, res) => {
    res.render('home', {
        title: 'SIPD Scraper Tools',
        name: 'Ekhel'
    });
});

app.get('/config', (req, res) => {
    res.render('config', {
        title: 'Config Auth'
    });
});

app.post('/saveconfig', (req, res) => {
    const body = req.body;
    var set = { 
        tahun_anggaran: body.tahun_anggaran, 
        id_daerah:body.id_daerah, 
        sipd_url: body.sipd_url, 
        user_name: body.user_name, 
        user_pass: body.user_pass 
    }

    const finished = (err) => {
        if (err) {
            console.log(err)
            return;
        }
    }
    
    const dataSetJson = JSON.stringify(set);
    fs.writeFile('./utils/dataConfig.json',dataSetJson,finished);

    return res.json(req.body);
})

app.use('/data/listing', renjaRoutes);


module.exports = app;