import React, {useState, useEffect} from 'react';

import AlamatController from '../Controller/Alamat';

export default function Index(){            

    const [AC] = useState(new AlamatController());

    const [prov, setProv] = useState([]);
    const [city, setCity] = useState([]);
    const [kec, setKec] = useState([]);
    const [desa, setDesa] = useState([]);
    
    const [optionProv, setOptionProv] = useState(0); 
    const [optionCity, setOptionCity] = useState(0); 
    const [optionKec, setOptionKec] = useState(0); 
    const [optionDesa, setOptionDesa] = useState(0); 

    useEffect(()=>{
        (async()=>{                        
            let prv = await AC.getProv();                        
            setProv(prv.data.semuaprovinsi);
        })();        
    },[AC]);

    useEffect(()=>{
        (async()=>{            
            let cty = await AC.getKota(optionProv);
            console.log(cty);
            (cty.data.kabupatens == null) ? setCity([]) : setCity(cty.data.kabupatens)            
        })();
    },[optionProv, AC]);

    useEffect(()=>{
        (async()=>{            
            let kec = await AC.getKec(optionCity);
            console.log(kec);
            (kec.data.kecamatans == null) ? setKec([]) : setKec(kec.data.kecamatans)            
        })();
    },[optionCity, AC]);

    useEffect(()=>{
        (async()=>{            
            let des = await AC.getDes(optionKec);
            console.log(des);
            (des.data.desas == null) ? setDesa([]) : setDesa(des.data.desas)            
        })();
    },[optionKec, AC]);

    return(
        <div className="BodIndex">
            <div className="container">
                <div className="box">
                    <div className="group">
                        <div className="row1">
                            
                            <p className="txt-title">
                                Data Pribadi
                            </p>
                            
                            <input type="number" />
                            
                            <input type="text"  className=""/>
                            
                            <input type="text"  className=""/>
                            
                            <select value={optionProv} onChange={(e)=>setOptionProv(e.target.value)}>
                                <option value="">Provinsi</option>
                                {
                                    prov.map((res) =>
                                        <option key={res.id} value={res.id}> {res.nama} </option>                                        
                                    )
                                }
                            </select>

                            <select value={optionCity} onChange={(e)=>setOptionCity(e.target.value)}>
                                <option value="">Kota/Kabupaten</option>
                                {
                                    city.map((res)=>
                                        <option key={res.id} value={res.id}> {res.nama} </option>
                                    )
                                }
                            </select>

                            <select value={optionKec} onChange={(e)=>setOptionKec(e.target.value)}>
                                <option value="">Kecamatan</option>
                                {
                                    kec.map((res)=>
                                        <option key={res.id} value={res.id}> {res.nama} </option>
                                    )
                                }
                            </select>

                            <select value={optionDesa} onChange={(e)=>setOptionDesa(e.target.value)}>
                                <option value="">Desa</option>                                
                                {
                                    desa.map((res)=>
                                        <option key={res.id} value={res.id}> {res.nama} </option>
                                    )
                                }
                            </select>

                            <input type="text"  className=""/>

                            <select>
                                <option> Kelas </option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>

                            <select>
                                <option> Jurusan </option>
                                <option value="IPA">IPA</option>
                                <option value="IPS">IPS</option>
                                <option value="BAHASA">BAHASA</option>
                            </select>

                            <input type="number"  className=""/>

                            <input type="email"  className=""/>

                            <textarea  className="" cols="30" rows="10">

                            </textarea>

                        </div>
                        <div className="row2">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}