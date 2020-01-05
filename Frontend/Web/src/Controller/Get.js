import axios from 'axios';

export default function GetController(){

    this.getData = async () => {
        return await axios.get("http://192.168.8.102:2020/get_all");
    }

}