import React from "react";
import ReactPaginate from "react-paginate";
import { PaginationComponentProps } from "../../Types/types";
import "./Pagination.css";

function PaginationComponent({
  pageCount,
  handlePageChange,
}: PaginationComponentProps): React.ReactElement {
  return (
    <div className="PaginationContainer">
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={""}
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
        activeClassName={"active "}
        breakClassName={"item break "}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        marginPagesDisplayed={0}
        nextClassName={"item next "}
        pageClassName={"item pagination-page "}
        previousClassName={"item previous"}
      />
    </div>
  );
}

export default PaginationComponent;
