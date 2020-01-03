import axios from 'axios';

export default function GetController(){

    this.getData = async () => {
        return await axios.get("http://localhost:2020/get_all");
    }

}