import React, { useState } from 'react';

export default function Add({itemList,setItemList}) {
    const [add ,setAdd] = useState("");
    const [itemID, setItemID] = useState(0);
    function sett(e) {
        const str = e.target.value;
        setAdd(str);
    }
    function addItem() {
        if (add) {
            const val = add;
            setItemList([...itemList,{content:val,checked:false,itemID}]);
            setAdd("");
            setItemID((prev)=>prev+1)
        }
        else {
            alert("할 일을 입력하세요!");
        }
    }
    function enter(f) {
        if (f.keyCode === 13) {
            if (add) {
                const val = add;
                setItemList([...itemList,{content:val,checked:false,itemID}]);
                setAdd("");
                setItemID((prev)=>prev+1)
            }
            else {
                alert("할 일을 입력하세요!");
        }
    }}
    return (
        <>
            <p>검색입니다</p>
            <input type="text" onChange={sett} placeholder='Add Todo' value={add} onKeyDown={enter}/>
            <button type='submit' onClick={addItem}>Add</button>
        </>
    );
}

