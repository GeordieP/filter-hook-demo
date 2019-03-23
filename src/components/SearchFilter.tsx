import React, { useState } from "react";

export default function SearchFilter({ addOrUpdateFilter }) {
  const [searchVal, setSearchVal] = useState("");

  const updateSearch = e => {
    const newValue = e.target.value;

    setSearchVal(newValue);
    return addOrUpdateFilter("search", val => val.includes(newValue));
  };

  return <input type="text" onChange={updateSearch} value={searchVal} />;
}
