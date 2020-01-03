import React, {useContext } from 'react';

import {PrintList} from '../../../Global/Store';

export default function DataPrint(){        

    const [ListPrint, setListPrint] = useContext(PrintList);    

    const atRemove = (reg) => {
        setListPrint(ListPrint.filter(item => item.noreg !== reg));
    }

    return(
      <div className="">
          <div className="">
              <div className="">
                  <div className="">
                      <div className="">
                        
                        {
                            ListPrint.map((res, id)=>

                                <div className="" key={id}>
                                    <p>No Reg: {res.noreg}</p>
                                    <button onClick={()=>atRemove(res.noreg)}>x</button>
                                </div>

                            )
                        }

                      </div>
                  </div>
              </div>
          </div>
      </div>  
    );
}