import React, { useEffect, useState } from "react";
import FilterByCat from "./FilterByCat"
import axios from "axios";
const getData = async (currPage, searchTerm) => {
  let res = await axios.get(
    `http://localhost:8080/exercise?q=${searchTerm}&_page=${currPage}&_limit=10`
  );
  return res;
};
const Filters = () => {
  // const [q, setQ] = useState('')
  const [dataDB, setDB] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getData(currPage, searchTerm).then((res) => {
      setDB(res.data);
      setTotal(res.headers.get("x-total-count"));
    });
  }, [currPage, searchTerm]);
  const searchHandler = (query) => {
    // axios
    //   .get(
    //     `http://localhost:8080/exercise?q=${query}&_page=${currPage}&_limit=10`
    //   )
    //   .then((res) => {
    //     setDB(res.data);
    //     setTotal(res.headers.get("x-total-count"));
    //     console.log(res);
    //   });
    setSearchTerm(query);
    console.log(query);
  };

  const setCurrPageHandler = (currPage) => {
    setCurrPage(currPage);
  };

  return (
    <div>
      {/* <Search onSearch={searchHandler} /> */}
      <FilterByCat
        data={dataDB}
        setCurrPageHandler={setCurrPageHandler}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Filters;
