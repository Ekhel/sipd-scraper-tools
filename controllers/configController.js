const fs = require('fs');

exports.saveconfig = async function(req,res) {
    const set = { 
        tahun_anggaran: req.body.tahun_anggaran, 
        id_daerah: req.body.id_daerah, 
        sipd_url: req.body.sipd_url, 
        user_name: req.body.user_name, 
        user_pass: req.body.user_pass 
    }

    const finished = (err) => {
        if (err) {
            console.log(err)
            return;
        }
    }
    
    const dataSetJson = JSON.stringify(set);
    await fs.writeFile('./data.json',dataSetJson,finished);

    return res.json(req.body);
}