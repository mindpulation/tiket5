import React, { useState, useEffect, useContext } from 'react';

import {PrintList, DataList} from '../../../Global/Store';

export default function DataTable(){
    
    const [ListPrint,setListPrint] = useContext(PrintList);
    const [ListData] = useContext(DataList);

    let tempList = [];
    let sercList = [];        
    
    const [txtSearch, seTxtSearch] = useState("");
    const [primaryList, setPrimaryList] = useState([]);

    tempList = ListData;

    useEffect(()=>{                    
        setPrimaryList(ListData);                
    },[ListData, setPrimaryList]);    

    const atEnter = (e) => {
        if(e.key === 'Enter'){
            atSearch();
        }
    }

    const atSearch = () => {           
        tempList.forEach((res)=>{
            if(res.noreg.search(txtSearch) >= 0){                
                sercList.push(res);
            }                                    
        });                
        setPrimaryList(sercList);
    }

    const atChoose = (param) => {        
        let found = 0;
        if(ListPrint.length === 0){
            setListPrint(ListPrint => [...ListPrint, param]);
        }    
        else{
            ListPrint.forEach((res)=>{                    
                if(param.noreg.search(res.noreg) >= 0){
                    found++;                                
                }
            });
            if(found === 0){
                setListPrint(ListPrint => [...ListPrint, param]);         
            }
        }                
    }

    return(
        <div className="BodData">
            <div className="container">
                
                <div className="row1">
                    <div className="col">
                        <div className="input">
                            
                            <input type="search" placeholder="Search by no-reg" value={txtSearch}  onChange={(e)=>{seTxtSearch(e.target.value)}} onKeyDown={atEnter} />                                                        

                        </div>
                    </div>
                </div>

                <div className="row2">
                    <div className="col">
                        
                        <div className="list">  
                         
                            {
                                primaryList.map((res, id)=>

                                    <div className="box" key={id}>                                
                                        <div className="group">
                                            <div className="txt-title">
                                                <span>No Reg: {res.noreg}</span>
                                            </div>
                                            <div className="txt-data">
                                                <span>Nama: {res.full_name}</span>
                                            </div>
                                            <div className="btn">
                                                <button onClick={()=>atChoose(res)} ><i className="fa fa-print" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                )
                            }                     

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}