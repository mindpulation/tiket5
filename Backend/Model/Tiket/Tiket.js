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

    async getAllTiket(tiketCol){

        let resultGetAllTiket;

        let findAllTiket = await tiketCol.find().toArray();
        console.log(findAllTiket);
        if(findAllTiket ? resultGetAllTiket = { result : findAllTiket } : resultGetAllTiket = { result : false });

        return resultGetAllTiket;
    }

    async findSpecificTiket(tiketCol){



    }
}

module.exports = Tiket;