import React from "react";
import FilterByCat from "./FilterByCat";
import "./Filters.scss";
import Search from "./Search";
const Filters = () => {
  return (
    <div className="app__filters-container">
      <Search />
      <FilterByCat />
    </div>
  );
};

export default Filters;
