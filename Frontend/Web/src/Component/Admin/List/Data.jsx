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

    const atSearch = () => {           
        tempList.forEach((res)=>{
            let convertTxt = txtSearch.toLowerCase();
            let convertRes = res.noreg.toLowerCase();
            if(convertRes.search(convertTxt) >= 0){                
                sercList.push(res);
            }                                    
        });                
        setPrimaryList(sercList);
    }    

    const atEnter = (e) => {
        if(e.key === 'Enter'){
            atSearch();
        }
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
                                                <span>{res.full_name}</span>
                                            </div>
                                            <div className="txt-data">
                                                <span>No.Reg : <b>{res.noreg}</b></span>                                                
                                            </div>
                                            <div className="txt-data">
                                                <span>School : {`(${res.school}) ${res.vocation} ${res.class}`}</span>                                                
                                            </div>                                            
                                            <div className="btn">
                                                <button onClick={()=>atChoose(res)} ><i className="fa fa-save" aria-hidden="true"></i>Choose</button>
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