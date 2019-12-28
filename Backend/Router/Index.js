const express = require('express');
const app = express.Router();

const bp = require("body-parser");

app.use(bp.json());

app.post('/insert', async (req, res) => {
    let tiket_title = req.body.tiket_title;

    res.send( { isi_tiket : tiket_title } )
});

module.exports = app;