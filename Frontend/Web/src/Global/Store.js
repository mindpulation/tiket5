import React, {useState} from 'react';

export const DataList = React.createContext({});
export const PrintList = React.createContext({});

export default function Store({children}){

    const [ListData, setListData] = useState([]);
    const [ListPrint, setListPrint] = useState([]);
    
    return(
        <PrintList.Provider value={[ListPrint, setListPrint]}>
            <DataList.Provider value={[ListData, setListData]}>
                {children}
            </DataList.Provider>
        </PrintList.Provider>
    )

}