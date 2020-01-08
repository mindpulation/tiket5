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

    async compareNoreg(tiketCol, noreg){

        let statusCheckNoreg, checkNoreg;
        checkNoreg = await tiketCol.find( { noreg : noreg } ).toArray();

        if(checkNoreg.length === 0 ? statusCheckNoreg = { result : false } : statusCheckNoreg = { result : true });

        console.log(checkNoreg, statusCheckNoreg);
        return statusCheckNoreg;

    }

}

module.exports = Tiket;