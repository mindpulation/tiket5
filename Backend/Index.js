const Express = require('express');
const http = require('http');
const bp = require('body-parser');

const Admin = require('./Router/Index');
const app = new Express();

const server = http.createServer(app);

const sio = require('socket.io');

const io = sio(server);

const model = require('./Model/Index');
const mdl = new model("mongodb://127.0.0.1:27017/tiket5");

app.use(Express.static(__dirname));
app.use('/', Admin);
app.use(bp.json());

const getAPI = async () => {
    let res = await mdl.getAllTiket();
    io.emit("sendAll", res);
}

io.on('connection', (soc)=>{

    console.log('(+) New user connected');    

    soc.on('getAll', async ()=>{
        console.log('Hello');
        await getAPI();        
    });

    soc.on('disconnect', ()=>{ console.log('(-) One user disconnect') });
});

server.listen(2020, async (err) => {
    if(err) {console.log(`Backend Error : ${err}`);}
    else{                
        console.log("Server Succesfuly running at : http://localhost:2020/");
    }
});





