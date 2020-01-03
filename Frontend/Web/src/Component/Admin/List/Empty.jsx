import React from 'react';

export default function EmptyList(){
    return(
        <div className="BodData">
            <div className="container">
                
                <div className="row1">
                    <div className="col">
                        <div className="input">
                            
                            <input type="search" />                            

                            <div className="btn">
                                <button >Search</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row2">
                    <div className="col">                        
                        <div className="list">                                                              
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}