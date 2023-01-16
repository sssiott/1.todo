import React from "react";
import { BsTrashFill } from "react-icons/bs";
import styles from "./TodoItem.module.css";

export default function TodoItem({ item, items, onHandleItems }) {
  const handleChecked = (e) => {
    const checked = e.target.checked ? true : false;
    const curItem = { ...item, checked };
    onHandleItems(items.map((i) => (i.id === curItem.id ? curItem : i)));
  };
  const handleDelete = () => {
    onHandleItems(items.filter((i) => i.id !== item.id));
  };

  return (
    <li className={styles.item}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={item.id}
        onChange={handleChecked}
        checked={item.checked}
      />
      <label
        className={`${styles.text} ${item.checked && styles.comp}`}
        htmlFor={item.id}
      >
        {item.content}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <BsTrashFill />
        </button>
      </span>
    </li>
  );
}
