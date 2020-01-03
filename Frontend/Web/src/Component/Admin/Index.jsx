import React, {useEffect, useState, useContext} from 'react'

import View from './View';
import IndexList from './List/Index';
import IndexPrint from './Print/Index';

import GetController from '../../Controller/Get';
import {DataList} from '../../Global/Store';

export default function IndexAdmin(){

    const [,setListData] = useContext(DataList);

    const [GC] = useState(new GetController());

    useEffect(()=>{
        (async()=>{
            let res = await GC.getData();            
            setListData(res.data.result);
        })();
    },[GC, setListData]);

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