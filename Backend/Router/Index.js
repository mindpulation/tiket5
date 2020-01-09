
const express = require('express');
const app = express.Router();

const bp = require("body-parser");
const cors = require("cors");

const model = require('./../Model/Index');
const mdl = new model("mongodb://127.0.0.1:27017/tiket5");


app.use(bp.json());
app.use(cors());

app.post('/insert', (req, res) => {

    let noreg = req.body.noreg;
    let full_name = req.body.full_name;
    let nick_name = req.body.nick_name;
    let address = req.body.address;
    let school = req.body.school;
    let classes = req.body.class;
    let vocation = req.body.vocation;
    let phone_number = req.body.phone_number;
    let email = req.body.email;
    let know_from = req.body.know_from;
    let feedback = req.body.feedback;

    let tiketParam = {
        noreg: noreg,
        full_name: full_name,
        nick_name: nick_name,
        address: address,
        school: school,
        class: classes,
        vocation: vocation,
        phone_number: phone_number,
        email: email,
        know_from: know_from,
        feedback: feedback,
        status : true
    };

    res.send( { status : mdl.insertTiket(tiketParam)} );

});

app.get('/get_all', async (req,res) => {
   res.send( await mdl.getAllTiket());
});

app.get('/get_count', async (req, res)=>{
    res.send({result: await mdl.countTiket()})
});

app.post('/check_noreg', async (req,res) => {

    let noreg = req.body.noreg;
    console.log(noreg);
    res.send ( await mdl.checkNoreg(noreg) );

});

module.exports = app;
