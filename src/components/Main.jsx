import React from 'react';
import TodoItem from './TodoItem';

export default function Main({itemList,setItemList}) {

    return (
        <>
            <p>메인입니다</p>
            <ul>
                {itemList.map((item)=>{
                    return <TodoItem item={item} key={item.itemID} itemList={itemList} setItemList={setItemList}/>
                })}
            </ul>
        </>
    );
}

