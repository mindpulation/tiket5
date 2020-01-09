const Express = require('express');
const fs = require('fs');

const http = require('http');
const https = require('https');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/eduexpo.my.id/privkey.pem', 'utf-8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/eduexpo.my.id/fullchain.pem', 'utf-8');
const credential = { key : privateKey, cert : certificate };

const bp = require('body-parser');

const Admin = require('./Router/Index');
const app = new Express();

const server = http.createServer(app);
const secureServer = https.createServer(credential, app);

const sio = require('socket.io');
const io = sio(secureServer);

const model = require('./Model/Index');
const mdl = new model("mongodb://138.201.173.65:27017/tiket5");

app.use(Express.static(__dirname));
app.use('/', Admin);
app.use(bp.json());

const getAPI = async () => {
    let res = await mdl.getAllTiket();
    io.emit("sendAll", res);
}

const getMany = async () => {    
    let res = await mdl.countTiket();    
    io.emit("sendCount", res);
}

io.on('connection', (soc)=>{    

    soc.on('getAll', async ()=>{        
        await getAPI();        
    });

    soc.on('getCount', async () => {
       await getMany(); 
    });
    
});

secureServer.listen(2021, async (err) => {
    if(err) { console.log(`[-] Secure Backend Error : ${err} `) }
    else {
        console.log("[+] Secure Server Succesfuly running at : https://localhost:2021/");
    }
});

server.listen(2020, async (err) => {
    if(err) {console.log(`[-] Backend Error : ${err}`);}
    else{                
        console.log("[+] Server Succesfuly running at : http://localhost:2020/");
    }
});





