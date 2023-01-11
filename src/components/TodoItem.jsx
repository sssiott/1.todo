import React from 'react';
import Checked from './Checked';
import DeleteBtn from './DeleteBtn';

export default function TodoItem({item, itemList,setItemList}) {
    return (
        <li>
            <Checked/>
            {item.content}
            <DeleteBtn itemList={itemList} setItemList={setItemList} itemID={item.itemID}/>
        </li>
    );
}

