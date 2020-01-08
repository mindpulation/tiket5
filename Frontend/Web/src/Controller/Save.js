import axios from 'axios';

export default function SaveController(){

    this.saveTiket = async (param) => {
        return await axios.post("http://138.201.173.65:2020/insert",param);
    }

}