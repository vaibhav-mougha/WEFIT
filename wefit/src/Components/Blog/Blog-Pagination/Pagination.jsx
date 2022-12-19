import styled from "@emotion/styled";
import React from "react";
import ReactPaginate from "react-paginate";
import "../../Profile/userFilter/Filters.scss";
const Pagination = ({ onSwitchPage, totalPages }) => {
  const handleClick = async (data) => {
    onSwitchPage(data.selected + 1);
  };
  return (
    <div>
      {/* <ReactPaginate
        previousLabel="← Previous Page"
        nextLabel="Next Page →"
        breakLabel="..."
        pageCount={Math.floor(totalPages / 10)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handleClick}
        containerClassName="paginationBlog"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      /> */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel="Next"
        breakLabel="..."
        pageCount={Math.floor(totalPages / 10)}
        // pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handleClick}
        containerClassName="app__pagination"
        pageClassName="app__page-item"
        pageLinkClassName="page-link"
        previousClassName="prev-next"
        previousLinkClassName="prev-next-a"
        nextClassName="prev-next"
        nextLinkClassName="prev-next-a"
        breakClassName="breaks-class"
        breakLinkClassName="breaks-class-a"
        activeClassName="active-link"
      />
    </div>
  );
};

export default Pagination;
