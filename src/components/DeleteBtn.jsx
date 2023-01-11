import React from 'react';

export default function DeleteBtn({itemList,setItemList,itemID}) {
    function deleteItem(id){
        // setItemList((items)=>{
        //     items.filter((element)=>{
        //         return element.itemID !== id
        //     })
        // })
        setItemList(itemList.filter(item => item.itemID !== id));
    }
    return (
        <>
            <button onClick={()=>deleteItem(itemID)}>삭제</button>
        </>
    );
}

