import React, {useState} from 'react';

export const DataList = React.createContext({});
export const PrintList = React.createContext({});
export const ModalState = React.createContext({});

export default function Store({children}){

    const [ListData, setListData] = useState([]);
    const [ListPrint, setListPrint] = useState([]);
    const [ModalVis, setModalVis] = useState('hidden');
    
    return(
        <ModalState.Provider value={[ModalVis, setModalVis]}>
            <PrintList.Provider value={[ListPrint, setListPrint]}>
                <DataList.Provider value={[ListData, setListData]}>
                    {children}
                </DataList.Provider>
            </PrintList.Provider>
        </ModalState.Provider>
    )

}