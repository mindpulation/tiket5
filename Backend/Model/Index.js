const dbs = require('mongodb').MongoClient;

const Schema = require('./Schema');
const schm = new Schema();

const tiket = require('./Tiket/Tiket');
const Tiket = new tiket();

class Mongo{
    
    constructor(url){    
        this.db = "Database";
        this.tiket = "Collections";
        this.startDB(url);
    }

    startDB(url){
        dbs.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, async (err, con) => {
             if (!err) {
                 
                schm.createCol(con);

                this.db = con.db('tiket5');                            
                
                this.tiket = this.db.collection('TiketHistory');                            
                
                console.log("(+) Database running");

             } else {
                 console.log("(-) Database can't running");
             }
         });
    }

    //Insert
    insertTiket(paramTiket){        
        return Tiket.insertTiket(this.tiket ,paramTiket);
    }

    //Get
    getAllTiket(){
        return Tiket.getAllTiket(this.tiket);
    }

    countTiket(){        
        return Tiket.countAllTiket(this.tiket);
    }
   
}

module.exports = Mongo;