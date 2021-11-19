const con = require('../conn');

exports.program = (req, res) => {
    con.getConnection((err, connection) => {
        if (err) throw err;
        console.log('Connected to DB' + connection.threadId);

        const query = "SELECT * FROM v_rkpd_program";

        connection.query(query, (err, result) => {
            connection.release();

            if (!err) {
                res.render('r-program', { result });
            } else {
                console.log(err);
            }
        });
    });
}