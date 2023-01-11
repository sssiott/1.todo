import { useState } from "react";

export default function useTodo() {
    const [items, setItems] = useState([]);
    
    return items;
}