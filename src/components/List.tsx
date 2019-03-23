import React from "react";
import styled from "@emotion/styled";

// hooks
import useFilterState from "../hooks/useFilterState";

// filter components
import StartsWithFilter from "./StartsWithFilter";
import SearchFilter from "./SearchFilter";

const initialItems = [
  "first item",
  "second item",
  "third item",
  "fourth item",
  "fifth item",
  "sixth item",
  "seventh item"
];

export default function List() {
  const { addOrUpdateFilter, applyFilters } = useFilterState({});
  const items = applyFilters(initialItems);

  return (
    <div className="u-flexV u-centerCross u-fullHeight">
      <h5>Search</h5>
      <SearchFilter addOrUpdateFilter={addOrUpdateFilter} />

      <br />

      <h5>Starts With Character</h5>
      <StartsWithFilter addOrUpdateFilter={addOrUpdateFilter} />

      <Divider />

      <h4>Filtered List Items</h4>
      {items.map(i => (
        <li key={i}>{i}</li>
      ))}
    </div>
  );
}

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background: rgba(0, 0, 0, 0.1);
`;
