import axios from 'axios';

export default function GetController(){

    this.getData = async () => {
        return await axios.get("http://localhost:2020/get_all");
    }

    this.ceReg = async (param) => {
        return await axios.post("http://localhost:2020/check_noreg", param);
    }

}