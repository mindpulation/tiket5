class Tiket {

    insertTiket(tiketCol ,paramTiket){

        let checkInsertTiket, statusInsertTiket = "";        

        checkInsertTiket =  tiketCol.insertOne(paramTiket);                

        if(checkInsertTiket ? statusInsertTiket = true : statusInsertTiket = false);        

        return statusInsertTiket;

    }

    async getAllTiket(tiketCol){

        let resultGetAllTiket;

        let findAllTiket = await tiketCol.find().toArray();
                
        if(findAllTiket ? resultGetAllTiket = { result : findAllTiket } : resultGetAllTiket = { result : false });

        return resultGetAllTiket;
    }

    async findSpecificTiket(tiketCol){



    }
}

module.exports = Tiket;