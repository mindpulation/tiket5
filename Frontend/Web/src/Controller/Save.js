import axios from 'axios';

export default function SaveController(){

    this.saveTiket = async (param) => {
        return await axios.post("https://138.201.173.65:2021/insert",param);
    }

}