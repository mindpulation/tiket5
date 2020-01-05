import axios from 'axios';

export default function SaveController(){

    this.saveTiket = async (param) => {
        return await axios.post("http://88.99.38.173:2020/insert",param);
    }

}