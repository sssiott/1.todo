import React, { useState } from 'react';
import Add from './components/Add';
import Main from './components/Main';
import Nav from './components/Nav';

export default function App1() {

    const [itemList, setItemList] = useState([]);
    
    return (
        <>
            <div>
                <Nav />
                <Main itemList={itemList} setItemList={setItemList}/>
                <Add itemList={itemList} setItemList={setItemList}/>  
            </div>
        </>
    );
}

