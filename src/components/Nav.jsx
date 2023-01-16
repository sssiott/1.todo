import React from "react";
import styles from "./Nav.module.css";

export default function Nav({ statList, filter, onFilterChange }) {
  const handlefilter = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        {statList.map((i) => (
          <li key={i.code}>
            <button
              className={`${styles.button} ${
                i.stat === filter && styles.selected
              }`}
              onClick={handlefilter}
              value={i.stat}
            >
              {i.stat}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
