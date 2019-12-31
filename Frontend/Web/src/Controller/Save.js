import axios from 'axios';

export default function SaveController(){

    this.saveTiket = async (param) => {
        return await axios.post("http://localhost:3000/insert",param);
    }

}