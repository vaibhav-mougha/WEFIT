import styled from "@emotion/styled";
import React from "react";
import ReactPaginate from "react-paginate";




const Pagination = ({ onSwitchPage, totalPages }) => {
  const handleClick = async (data) => {
    onSwitchPage(data.selected + 1);
  };
  return (
    <div>
      <ReactPaginate
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
      />
    </div>
  );
};

export default Pagination;
