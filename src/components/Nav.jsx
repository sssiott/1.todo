import React from "react";
import styles from "./Nav.module.css";
import { HiMoon, HiSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

export default function Nav({ statList, filter, onFilterChange }) {
  const handlefilter = (e) => {
    onFilterChange(e.target.value);
  };
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {darkMode ? <HiSun /> : <HiMoon />}
      </button>
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
