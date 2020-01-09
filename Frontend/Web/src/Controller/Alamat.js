import axios from 'axios';

export default function AlamatController(){

    this.getProv = async () => {
        return await axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi");
    }

    this.getKota = async (param) => {
        return await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/provinsi/${param}/kabupaten`);
    }

    this.getKec = async (param) => {
        return await axios.get(` https://dev.farizdotid.com/api/daerahindonesia/provinsi/kabupaten/${param}/kecamatan`);
    }

    this.getDes = async (param) => {
        return await axios.get(` https://dev.farizdotid.com/api/daerahindonesia/provinsi/kabupaten/kecamatan/${param}/desa`);
    }

}

