import React, { useContext, useState} from 'react';

import {PrintList} from '../../Global/Store';
import GetController from '../../Controller/Get';

import QrReader from 'react-qr-scanner';
import swal from 'sweetalert';

export default function View(){

    const [ListPrint] = useContext(PrintList);
    const [GC] = useState(new GetController());    

    const onScan = async (res) => {
        if(res !== null){
            
            alert(res);
            
            let sta = await GC.ceReg({noreg:res});                    

            (sta.data.result === true) ? swal("Silahkan Masuk", `Kode : ${res} terdaftar, dan selamat datang..`,"success") : swal('Tidak Terdaftar', `Kode : ${res} tidak terdaftar`,"error")

        }
    }    

    const onError = (res) => {
        alert(res);
    }

    const previewStyle = {
        marginTop: "25px",
        height: "auto",
        width: "100%",
        borderRadius: "5px",
    };

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
                                    <QrReader
                                        delay={100}
                                        style={previewStyle}
                                        onError={onError}
                                        onScan={onScan}
                                    />
                                </div>                                                        
                            </div>
                        </div>                                        
                    </div>
                </div>
            </div>
        </div>
    );
}