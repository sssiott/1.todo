import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Add from './Add';
export default function Main({filter}) {
    const [items, setItems] = useState([]);

    const showItems = getItems(items,filter);


    return (
        <main>
            <ul>
                {showItems.map((i)=>{
                    return <TodoItem key={i.id} item={i} onHandleItems={setItems} items={items}/>
                })}
            </ul>
            <Add items={items} setItems={setItems}/>
        </main>
    );
}

function getItems(item, filter) {
    switch (filter) {
        case 'active':
            return item.filter((i)=>i.checked === false);
        case 'complete':
            return item.filter((i)=>i.checked === true);
        default :
            return item;
    }
}