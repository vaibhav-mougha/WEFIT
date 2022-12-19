import React, { useEffect, useState } from "react";
import FilterByCat from "./FilterByCat";
import "./Filters.scss";
import Search from "./Search";
import axios from "axios";
const getData = async (currPage, searchTerm) => {
  let res = await axios.get(
    `https://we-fit-database-api.vercel.app/exercise?q=${searchTerm}&_page=${currPage}&_limit=10`
  );
  return res;
};
const Filters = () => {
  // const [q, setQ] = useState('')
  const [dataDB, setDB] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getData(currPage, searchTerm)
      .then((res) => {
        setDB(res.data);
        setTotal(res.headers.get("x-total-count"));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [currPage, searchTerm]);
  const searchHandler = (query) => {
    setSearchTerm(query);
  };

  const setCurrPageHandler = (currPage) => {
    setCurrPage(currPage);
  };
  const allClickCat = () => {
    setLoading(true);
    getData("", currPage).then((res) => {
      setDB(res.data);
      setTotal(res.headers.get("x-total-count"));
      setLoading(false);
    });
  };
  return (
    <div className="app__filters-container">
      <Search onSearch={searchHandler} />
      <FilterByCat
        loading={loading}
        data={dataDB}
        setCurrPageHandler={setCurrPageHandler}
        totalPages={totalPages}
        allClickCat={allClickCat}
      />
    </div>
  );
};

export default Filters;
