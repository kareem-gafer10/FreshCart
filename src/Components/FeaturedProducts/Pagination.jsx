import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ pageCount, handlePageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      onPageChange={handlePageChange}
      containerClassName="pagination"
      activeClassName="activeclassname"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
    />
  );
};

export default Pagination;
