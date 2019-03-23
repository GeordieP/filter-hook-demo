import { useState } from "react";

export default function useFilterState(defaultFilters = {}) {
  const [filters, setFilters] = useState(defaultFilters);

  const addOrUpdateFilter = (name, filterFn) => {
    setFilters({
      ...filters,
      [name]: filterFn
    });
  };

  const filtersArr = Object.values(filters);

  const applyFilters = items =>
    filtersArr.reduce((acc, filterFn) => acc.filter(filterFn), items);

  return { addOrUpdateFilter, applyFilters };
}
