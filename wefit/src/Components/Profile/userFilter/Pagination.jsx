import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ onSwitchPage, totalPages }) => {
  const handleClick = async (data) => {
    onSwitchPage(data.selected + 1);
  };
  return (
    <div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel="Next"
        breakLabel="..."
        pageCount={Math.floor(totalPages / 10)}
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
