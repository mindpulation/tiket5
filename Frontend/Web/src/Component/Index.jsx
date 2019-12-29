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
            (cty.data.kabupatens == null) ? setCity([]) :  setCity(cty.data.kabupatens)            
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

    const cnslData = () => {
        console.log(prov);
        console.log(city);
        console.log(kec);
        console.log(desa);
    }

    return(
        <div className="BodIndex">
            <div className="container">
                <div className="box">
                    <div className="group">
                        <div className="row1">
                            
                            <p className="txt-title">
                                Selamat Datang!
                            </p>
                            
                            <div className="txt-group">
                                <span className="txt-captions">No registrasi</span>
                            </div>
                            <div className="input-group">
                                <input type="number" className="" />
                            </div>
                            
                            <div className="txt-group">
                                <span className="txt-captions">Nama Lengkap</span>
                            </div>
                            <div className="input-group">
                                <input type="text"  className=""/>
                            </div>
                            
                            <div className="txt-group">
                                <span className="txt-captions">Nama Panggilan</span>
                            </div>
                            <div className="input-group">
                                <input type="text"  className=""/>
                            </div>
                            
                            <div className="txt-group">
                                <span className="txt-captions">Provinsi</span>
                            </div>
                            <div className="input-group">
                                <select value={optionProv} onChange={(e)=>setOptionProv(e.target.value)}>
                                    <option className="option">Choose..</option>
                                    {
                                        prov.map((res) =>
                                            <option className="option" key={res.id} value={res.id}> {res.nama} </option>                                        
                                        )
                                    }
                                </select>
                            </div>
                            
                            <div className="txt-group">
                                <span className="txt-captions">Kota atau Kabupaten</span>
                            </div>
                            <div className="input-group">
                                <select value={optionCity} onChange={(e)=>setOptionCity(e.target.value)}>
                                    <option className="option">Choose..</option>
                                    {
                                        city.map((res)=>
                                            <option className="option" key={res.id} value={res.id}> {res.nama} </option>
                                        )
                                    }
                                </select>
                            </div>
                            
                            <div className="txt-group">
                                <span className="txt-captions">Kecamatan</span>
                            </div>
                            <div className="input-group">
                                <select value={optionKec} onChange={(e)=>setOptionKec(e.target.value)}>
                                    <option className="option">Choose..</option>
                                    {
                                        kec.map((res)=>
                                            <option className="option" key={res.id} value={res.id}> {res.nama} </option>
                                        )
                                    }
                                </select>
                            </div>
                            
                            <div className="txt-group">
                                <span className="txt-captions">Kelurahan</span>
                            </div>
                            <div className="input-group">
                                <select value={optionDesa} onChange={(e)=>setOptionDesa(e.target.value)}>
                                    <option className="option">Choose..</option>
                                    {
                                        desa.map((res)=>
                                            <option className="option" key={res.id} value={res.id}> {res.nama} </option>
                                        )
                                    }
                                </select> 
                            </div>
                            
                            <div className="btn-group">
                                <button onClick={cnslData}>Click</button>                                                   
                            </div>

                        </div>
                        <div className="row2">
                            
                            <p className="txt-title">
                                Selamat Datang!
                            </p>
                            
                            <div className="txt-group">
                                <span className="txt-captions">Asal Sekolah</span>
                            </div>
                            <div className="input-group">
                                <input type="text"  className=""/>
                            </div>
                            
                            <div className="txt-group">
                                <span className="txt-captions">Kelas</span>
                            </div>
                            <div className="input-group">
                                <select>
                                    <option> Kelas </option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            
                            <div className="txt-group">
                                <span className="txt-captions">Jurusan</span>
                            </div>
                            <div className="input-group">
                                <select>
                                    <option> Jurusan </option>
                                    <option value="IPA">IPA</option>
                                    <option value="IPS">IPS</option>
                                    <option value="BAHASA">BAHASA</option>
                                </select>
                            </div>
                            
                            <div className="txt-group">
                                <span className="txt-captions">No Handphone</span>
                            </div>
                            <div className="input-group">
                                <input type="number"  className=""/>
                            </div>
                            
                            <div className="txt-group">
                                <span className="txt-captions">Email</span>
                            </div>
                            <div className="input-group">
                                <input type="email"  className=""/>
                            </div>
                            
                            <div className="txt-group">
                                <span className="txt-captions">Kesan dan Pesan</span>
                            </div>
                            <div className="input-group">
                                <textarea  className="" cols="30" rows="10">

                                </textarea>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}