const dotenv  = require('dotenv');
const app = require('./app');
const mysql = require('mysql');

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});


