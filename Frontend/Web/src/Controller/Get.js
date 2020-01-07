import axios from 'axios';

export default function GetController(){

    this.getData = async () => {
        return await axios.get("http://88.99.38.173:2020/get_all");
    }

}