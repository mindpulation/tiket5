import axios from 'axios';

export default function GetController(){

    this.getData = async () => {
        return await axios.get("https://138.201.173.65:2021/get_all");
    }

    this.ceReg = async (param) => {
        return await axios.post("https://138.201.173.65:2021/check_noreg", param);
    }

}