import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./Add.module.css";

export default function Add({ items, setItems }) {
  const [text, setText] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (text.trim().length > 0) {
      const val = text;
      setItems([...items, { content: val, checked: false, id: uuid() }]);
      setText("");
    } else {
      setText("");
      alert("할 일을 입력하세요!");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleAdd}>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Add Todo"
        value={text}
      />
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
}
