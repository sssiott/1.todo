import React, { useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";

export default function App1() {
    const [filter, setFilter] = useState(status[0].stat)
  return (
    <>
      <Nav statList={status} filter={filter} onFilterChange={setFilter}/>
      <Main filter={filter}/>
    </>
  );
}

const status = [
    {stat:'all',code:'0'},
    {stat:'active',code:'1'},
    {stat:'complete',code:'2'},
];
