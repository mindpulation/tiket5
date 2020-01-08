import axios from 'axios';

export default function GetController(){

    this.getData = async () => {
        return await axios.get("http://138.201.173.65:2020/get_all");
    }

    this.ceReg = async (param) => {
        return await axios.post("http://138.201.173.65:2020/check_noreg", param);
    }

}