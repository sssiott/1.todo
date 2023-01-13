import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Add from './Add';
export default function Main() {
    const [items, setItems] = useState([]);
    return (
        <main>
            <ul>
                {items.map((i)=>{
                    return <TodoItem key={i.id} item={i} onHandleItems={setItems} items={items}/>
                })}
            </ul>
            <Add items={items} setItems={setItems}/>
        </main>
    );
}

