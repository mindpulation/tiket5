import React, {useEffect, useState, useContext} from 'react'

import View from './View';
import IndexList from './List/Index';
import IndexPrint from './Print/Index';

import GetController from '../../Controller/Get';
import {DataList} from '../../Global/Store';

import io from 'socket.io-client';

export default function IndexAdmin(){

    const endpoint = "http://88.99.38.173:2020/";    

    const [,setListData] = useContext(DataList);

    const [GC] = useState(new GetController());

    useEffect(()=>{
        (async()=>{
            let res = await GC.getData();            
            setListData(res.data.result);
        })();
    },[GC, setListData]);

    useEffect(()=>{        
        const socket = io(endpoint);        
        socket.on("sendAll", res => {setListData(res.result)});                
    },[setListData]);        

    return(
        <div className="BodAdmin">
            <div className="col1">
                <View/>                            
            </div>
            <div className="col2">
                <IndexList/>                
            </div>
            <div className="col3">
                <IndexPrint/>
            </div>
        </div>
    );
}