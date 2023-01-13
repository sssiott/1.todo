import React, { useState } from 'react';
import { v4 as uuid} from 'uuid';
export default function Add({items,setItems}) {
    const [text ,setText] = useState("");

    function handleAdd(e) {
        e.preventDefault()
        if (text.trim().length > 0) {
            const val = text;
            setItems([...items,{content:val, checked:false, id : uuid()}]);
            setText("");
        }
        else {
            setText("");
            alert("할 일을 입력하세요!");
        }
    }

    return (
        <form onSubmit={handleAdd}>
            <p>검색입니다</p>
            <input type="text" onChange={e=>{setText(e.target.value)}} placeholder='Add Todo' value={text}/>
            <button type='submit'>Add</button>
        </form>
    );
}

