const dbs = require('mongodb').MongoClient;

const schema = require('./schema');
const Schema = new schema();

const tiket = require('./Tiket/Tiket');
const Tiket = new tiket();

class Mongo{

    constructor(){

        this.db = "Database";
        this.tiket = "Tiket";
    }

     startDB(url){
        dbs.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, async (err, con) => {
             if (!err) {
                 await Schema.createCol(err, con);
                 this.db = con.db('tiket5');
                 console.log(this.db);
                 this.tiket = this.db.collection('TiketHistory');
                 console.log(this.tiket);
                 console.log("DB Succesfuly running");

             } else {
                 console.log("DB Failed to Running");
             }
         });
    }

    //Insert
    insertTiket(paramTiket){
        console.log(this.tiket);
        return Tiket.insertTiket(this.tiket ,paramTiket);
    }
}

module.exports = Mongo;