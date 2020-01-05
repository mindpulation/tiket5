import React,{useEffect, useContext, useState} from 'react';

import DataTable from './Data';
import EmptyList from './Empty';

import {DataList} from '../../../Global/Store';

export default function IndexList(){    

    const [ListData] = useContext(DataList);

    const [StaList, setStaList] = useState(false);    

    useEffect(()=>{
        if(ListData.length === 0){setStaList(false);}
        else{setStaList(true);}                
    },[ListData]);

    if(StaList === false){
        return(<EmptyList></EmptyList>);
    }
    else{    
        return(<DataTable></DataTable>);
    }
    
}