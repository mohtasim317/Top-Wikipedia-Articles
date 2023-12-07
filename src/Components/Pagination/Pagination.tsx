import React from "react";
import ReactPaginate from "react-paginate";
import { PaginationComponentProps } from "../../Types/types";

function PaginationComponent({
  pageCount,
  handlePageChange,
}: PaginationComponentProps): React.ReactElement {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={handlePageChange}
      previousLabel={"<<"}
      nextLabel={">>"}
      breakLabel="..."
      pageRangeDisplayed={5}
      renderOnZeroPageCount={null}
    />
  );
}

export default PaginationComponent;
