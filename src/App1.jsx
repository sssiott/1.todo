import React, { useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";

export default function App1() {
    const [filter, setFilter] = useState(status[0].stat)
  return (
    <>
      <Nav statList={status} filter={filter} onFilterChange={setFilter}/>
      <Main />
    </>
  );
}

const status = [
    {stat:'All',code:'0'},
    {stat:'Active',code:'1'},
    {stat:'Complete',code:'2'},
];
