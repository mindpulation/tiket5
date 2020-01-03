import React, { useContext, useEffect, useState } from 'react';

import EmptyPrint from './Empty';
import DataPrint from './Data';

import {PrintList} from '../../../Global/Store';

export default function IndexPrint(){

    const [ListPrint] = useContext(PrintList);

    const [status, setStatus] = useState(false);    

    useEffect(()=>{        

        if(ListPrint.length === 0){
            setStatus(false);
        }
        else{
            setStatus(true);
        }

    },[ListPrint, setStatus]);    

    if(status === false){
        return(<EmptyPrint></EmptyPrint>);
    }
    else{
        return(<DataPrint></DataPrint>);
    }

}