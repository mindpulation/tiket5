class Tiket {

    insertTiket(tiketCol ,paramTiket){

        let checkInsertTiket, statusInsertTiket = "";

        console.log(paramTiket);

        checkInsertTiket =  tiketCol.insertOne(paramTiket);

        console.log(checkInsertTiket);
        //checkInsertTiket = await tiketCol.inse(paramTiket);

        if(checkInsertTiket ? statusInsertTiket = true : statusInsertTiket = false);

        console.log(statusInsertTiket);

        return statusInsertTiket;

    }

}

module.exports = Tiket;