import axios from 'axios';

export default function SaveController(){

    this.saveTiket = async (param) => {
        return await axios.post("http://192.168.8.102:2020/insert",param);
    }

}