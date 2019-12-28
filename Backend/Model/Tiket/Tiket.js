class Tiket {

    async insertTiket(tiketCol ,paramTiket){

        let checkInsertTiket, statusInsertTiket = "";

        console.log(paramTiket);

        checkInsertTiket =  await tiketCol.insertOne(paramTiket);

        console.log(checkInsertTiket);
        //checkInsertTiket = await tiketCol.inse(paramTiket);

        if(checkInsertTiket ? statusInsertTiket = true : statusInsertTiket = false);

        console.log(statusInsertTiket);

        return statusInsertTiket;

    }

}

module.exports = Tiket;