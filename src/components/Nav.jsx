import React, { useRef } from 'react';

export default function Nav({statList, filter, onFilterChnage}) {
    
    return (
        <header>
            <ul>
                {statList.map((i)=>
                <li key={i.code}>
                    <button>{i.stat}</button>
                </li>
                )}
            </ul>
        </header>
    );
}

