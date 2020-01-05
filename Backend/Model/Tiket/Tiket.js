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

    async countAllTiket(tiketCol){
        
        let res = 0;

        res = await tiketCol.countDocuments();        

        return res;

    }
    
}

module.exports = Tiket;