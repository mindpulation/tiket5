const Express = require('express');
const bp = require('body-parser');

const MDB = require('./Model/Index');

const db = new MDB();

const Admin = require('./Router/Index');
const app = new Express();

app.use(Express.static(__dirname));
app.use('/', Admin);
app.use(bp.json());

app.listen(3000, async (err) => {
    if(err) {console.log(`Backend Error : ${err}`);}
    else{
        db.startDB("mongodb://127.0.0.1:27017/tiket5");
        console.log("Server Succesfuly running at : http://localhost:3000/");
    }
});





