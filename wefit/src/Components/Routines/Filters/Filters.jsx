import React, { useEffect, useState } from "react";
import FilterByCat from "./FilterByCat";
import "./Filters.scss";
import Search from "./Search";
import axios from "axios";
const Filters = () => {
  // const [q, setQ] = useState('')
  const [dataDB, setDB] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotal] = useState(0);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/exercise?_page=${currPage}&_limit=10`)
      .then((res) => {
        setDB(res.data);
        setTotal(res.headers.get("x-total-count"));
      });
  }, [currPage]);
  const searchHandler = (query) => {
    console.log(query);
  };

  const setCurrPageHandler = (currPage) => {
    setCurrPage(currPage);
  };

  return (
    <div className="app__filters-container">
      <Search onSearch={searchHandler} />
      <FilterByCat
        data={dataDB}
        setCurrPageHandler={setCurrPageHandler}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Filters;
