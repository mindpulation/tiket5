import React, { useContext } from 'react';

import {PrintList} from '../../Global/Store';

export default function View(){

    const [ListPrint] = useContext(PrintList);

    return(
        <div className="BodView">
            <div className="box">
                <div className="row">
            
            {
                ListPrint.map((res, id)=>

                        <div className="col" key={id}>
                            <div className="group">
                                <div className="txt-title">
                                    <span>Selamat Datang!</span>
                                </div>              
                                <div className="join">
                                    <div className="group-print" id="group-print">
                                        <div className="txt-data">
                                            <span><b>Selamat Datang</b> di Edu Fair 2020 MGMP BK SMA KOTA BEKASI</span>
                                        </div>
                                        <div className="txt-data">
                                            <span>{`NO REG : ${res.noreg}`}</span>
                                        </div>    
                                        <div className="txt-data">
                                            <span>{`Nama : ${res.full_name}`}</span>
                                        </div>                                                             
                                    </div>                                                        
                                </div>
                            </div>
                            <div className="group2">
                                <div className="txt-title">
                                    <span>Selamat Datang!</span>
                                </div>             
                                <div className="join">
                                    <div className="group-print" id="group-print">
                                        <div className="txt-data">
                                            <span><b>Selamat Datang</b> di Edu Fair 2020 MGMP BK SMA KOTA BEKASI</span>
                                        </div>
                                        <div className="txt-data">
                                            <span>{`NO REG : ${res.noreg}`}</span>
                                        </div>    
                                        <div className="txt-data">
                                            <span>{`Nama : ${res.full_name}`}</span>
                                        </div>                                                             
                                    </div>                                                        
                            
                                </div> 
                            </div>
                        </div>                    

                )
            }
            
                </div>                


                <div className="row2">
                        
                    <div className="col" >
                        <div className="group">
                            <div className="txt-title">
                                <span>Selamat Datang!</span>
                            </div>              
                            <div className="join">
                                <div className="group-print" id="group-print">
                                    <div className="txt-data">
                                        <span><b>Selamat Datang</b> di Edu Fair 2020 MGMP BK SMA KOTA BEKASI</span>
                                    </div>
                                    <div className="txt-data">
                                        <span>{`NO REG : `}</span>
                                    </div>    
                                    <div className="txt-data">
                                        <span>{`Nama : `}</span>
                                    </div>                                                             
                                </div>                                                        
                            </div>
                        </div>                                        
                    </div>
                </div>
            </div>
        </div>
    );
}