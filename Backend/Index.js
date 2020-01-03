const Express = require('express');
const bp = require('body-parser');

const Admin = require('./Router/Index');
const app = new Express();

const Realtime = require('./Model/Realtime/Index');
const rl = new Realtime(app);

app.use(Express.static(__dirname));
app.use('/', Admin);
app.use(bp.json());

app.listen(2020, async (err) => {
    if(err) {console.log(`Backend Error : ${err}`);}
    else{        
        console.log("Server Succesfuly running at : http://localhost:3000/");
    }
});





