import React from "react";
import ReactPaginate from "react-paginate";

interface PaginationComponentProps {
  pageCount: number;
  handlePageChange: any;
}

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
