const db = require('mongodb').MongoClient;

const schema = require('./schema');
const Schema = new schema();

class Mongo{

    constructor(url){
        this.url = url;
        this.db = '';
        this.tiket = '';
    }

    async startDB(){
         db.connect(this.url, { useNewUrlParser : true, useUnifiedTopology : true }, (err, con) => {
            if(err){ console.log("DB Succesful Running")}
            this.db = con.db('tiket5');
            this.tiket = this.db.collection('TiketHistory');
            console.log("DB Succesfuly running");

            Schema.createCol(err, con);
        });
    }

}

module.exports = Mongo;