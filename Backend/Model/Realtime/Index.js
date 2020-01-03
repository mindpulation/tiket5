const sio = require('socket.io');
const http = require('http');

let server;
let io;

class IndexIO{

    constructor(app){
        server = http.createServer(app);
        io = sio(server);
    }

    initialFunc(){
        io.on('connection', (socket)=>{
            console.log("connect");

            

            socket.on('disconnect', ()=>{
                console.log("Disconnect");
            });
        });
    }

}

module.exports = IndexIO;