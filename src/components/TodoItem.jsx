import React from 'react';

export default function TodoItem({item, items,onHandleItems}) {
    const handleChecked = (e) => {
        const checked = e.target.checked? true : false;
        const curItem = {...item, checked};
        onHandleItems(items.map((i)=> i.id===curItem.id? curItem : i));
    };
    const handleDelete = () => {
        onHandleItems(items.filter((i)=> i.id !== item.id));
    };

    return (
        <li>
            <input type="checkbox" id={item.id} onChange={handleChecked} checked={item.checked}/>
            <label htmlFor={item.id}>{item.content}</label>
            <button onClick={handleDelete} >삭제</button>
        </li>
    );
}

