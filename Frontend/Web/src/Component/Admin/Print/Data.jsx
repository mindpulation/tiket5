import React, {useContext } from 'react';

import {PrintList} from '../../../Global/Store';

export default function DataPrint(){        

    const [ListPrint, setListPrint] = useContext(PrintList);    

    const atRemove = (reg) => {
        setListPrint(ListPrint.filter(item => item.noreg !== reg));
    }

    const atClick = () => {
        window.print();
    }

    return(

        <div className="BodPrint">
            <div className="container">
                <div className="row">
                    
                    {
                        ListPrint.map((res, id)=>

                            <div className="box" key={id}>
                                <div className="group">
                                    <span>{`${res.full_name}  `}</span>
                                    <button onClick={()=>atRemove(res.noreg)}><i className="fa fa-times" aria-hidden="true"/></button>
                                </div>
                            </div>

                        )
                    }

                </div>
                
                <div className="btnPrint">
                    <button onClick={atClick}><i className="fa fa-print" aria-hidden="true"></i>Print documents</button>
                </div>

            </div>
        </div>
      
    );
}