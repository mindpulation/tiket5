
class Schema {

    async createCol(err, con){
        let db = con.db('tiket5');
        db.createCollection("TiketHistory", (err) => {
            if(err){ console.log("Failed Created TiketHistory Collection") }
            console.log("Succesfuly Created TiketHistory Collection");
        })
    }

}

module.exports = Schema;