import React, { useState, useEffect } from 'react';

export default function DataTable({param}){
    
    let tempList = [];
    let sercList = [];    

    let tempPrint = [];

    const [txtSearch, seTxtSearch] = useState("");
    const [primaryList, setPrimaryList] = useState([]);

    tempList = param;

    useEffect(()=>{
        setPrimaryList(param);        
    },[setPrimaryList, param]);

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
        if(tempPrint.length === 0){
            tempPrint.push(param);
        }    
        else{
            tempPrint.forEach((res)=>{                    
                if(param.noreg.search(res.noreg) >= 0){
                    found++;                                
                }
            });
            if(found === 0){
                tempPrint.push(param);
            }
        }        
    }

    return(
        <div className="BodData">
            <div className="container">
                
                <div className="row1">
                    <div className="col">
                        <div className="input">
                            
                            <input type="search" value={txtSearch}  onChange={(e)=>{seTxtSearch(e.target.value)}} onKeyDown={atEnter} />                            

                            <div className="btn">
                                <button onClick={atSearch}>Search</button>
                            </div>

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