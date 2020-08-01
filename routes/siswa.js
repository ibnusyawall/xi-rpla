var express = require('express');
var router = express.Router();
var nedb = require('nedb')

db = new nedb('dbsiswa.db')

db.loadDatabase((err) => console.log('[*] database connected.'))

var key = {keys: 'sMkb1s4!!'}

router.get('/get/:username', async (req, res, next) => {
  db.find({ nama: req.params.username }, async (err, result) => {
/*    if (result.length <= 3) res.status(201).json({error: 'not match.'})
    else res.status(200).json(result)*/
    res.status(200).json(result)
  })
});

router.post('/getall', async (req, res, next) => {
  db.find({}, async (err, result) => {
    res.status(200).json(result)
  })
});

module.exports = router
