const con = require('../conn');
const kegiatanModels = require('../models/kegiatanModels');

exports.kegiatan = (req, res) => {
    con.getConnection((err, connection) => {
        if (err) throw err;
        console.log('Connected to DB' + connection.threadId);

        const query = kegiatanModels.getkegiatan;

        connection.query(query, (err, result) => {
            connection.release();

            if (!err) {
                res.render('r-kegiatan', { result });
            } else {
                console.log(err);
            }
        });
    });
}