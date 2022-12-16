import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ onSwitchPage, totalPages }) => {
  const handleClick = async (data) => {
    onSwitchPage(data.selected + 1);
  };
  return (
    <div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel="next"
        breakLabel="..."
        pageCount={Math.floor(totalPages / 10)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handleClick}
        containerClassName="app__pagination"
        pageClassName="app__prev"
        pageLinkClassName=""
        previousClassName=""
        previousLinkClassName=""
        nextClassName=""
        nextLinkClassName=""
        breakClassName=""
        breakLinkClassName=""
        activeClassName=""
      />
    </div>
  );
};

export default Pagination;
