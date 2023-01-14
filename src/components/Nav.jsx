import React from 'react';

export default function Nav({statList, filter, onFilterChange}) {
    const handlefilter = (e) => {
        onFilterChange(e.target.value);
    };
    
    return (
        <header>
            <ul>
                {statList.map((i)=>
                <li key={i.code}>
                    <button onClick={handlefilter} value={i.stat}>{i.stat}</button>
                </li>
                )}
            </ul>
        </header>
    );
}

