import React, { useState, useEffect, useContext } from 'react';

import {ModalState} from '../../Global/Store';
import useQrCode from 'react-qrcode-hook';

export default function Genqr({nama, cd}){    
    
    const [name, setName] = useState(nama);
    const [code, setCode] = useState(cd);    

    const [ModalVis, setModalVis] = useContext(ModalState);

    const qrCode = useQrCode(code);

    const klikClose = () => {
        setModalVis('hidden');
    }

    // useEffect(()=>{          
    //     setSV(style);
    // },[style]);

    useEffect(()=>{
        setName(nama)
    },[nama]);

    useEffect(()=>{
        setCode(cd)
    },[cd]);
    
    const visible = {
        visibility: ModalVis
    }

    return(
        <div className="Modalcon" style={visible}>
            <div className="background">
                <div className="modal">
                    <div className= "container">
                        <div className="row1">
                            <button onClick={()=>{klikClose()}} className="btn-close"><i className="fa fa-close"></i></button>
                        </div>
                        <div className="row2">
                            <p className="txt-big">Hello {name}</p>
                            <p className="txt-normal">
                                <b>{code} </b>this code is your identify for event EDUEXPO please screen capture for your ticket.
                            </p>
                        </div>
                        <div className="row3">
                            <div className=""
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <img src={qrCode} alt="qr" style={{width:"300px", height:"300px"}}/>
                            </div>                                                        

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}