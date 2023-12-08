import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import PaginationComponent from "./Pagination";

describe("Pagination Component", () => {
  it("should have a disabled back button when there is only one page", () => {
    const handlePageChange = jest.fn();
    render(
      <PaginationComponent pageCount={1} handlePageChange={handlePageChange} />
    );
    const element = screen.getByText("<");
    fireEvent.click(element);
    expect(handlePageChange).toBeCalledTimes(0);
  });

  it("should have a disabled next button when there is only one page", () => {
    const handlePageChange = jest.fn();
    render(
      <PaginationComponent pageCount={1} handlePageChange={handlePageChange} />
    );
    const element = screen.getByText(">");
    fireEvent.click(element);
    expect(handlePageChange).toBeCalledTimes(0);
  });

  it("should have a disabled back button when first clicked, and an enabled next button", () => {
    const handlePageChange = jest.fn();
    render(
      <PaginationComponent pageCount={12} handlePageChange={handlePageChange} />
    );
    const previousButton = screen.getByText("<");
    fireEvent.click(previousButton);
    expect(handlePageChange).toBeCalledTimes(0);
    const nextButton = screen.getByText(">");
    fireEvent.click(nextButton);
    expect(handlePageChange).toBeCalledTimes(1);
  });

  it("should not change pages when the active page is clicked", () => {
    const handlePageChange = jest.fn();
    render(
      <PaginationComponent pageCount={12} handlePageChange={handlePageChange} />
    );
    const element = screen.getByText("1");
    fireEvent.click(element);
    expect(handlePageChange).toBeCalledTimes(0);
  });

  it("should not change pages when the next button is pressed while on the last page", () => {
    const handlePageChange = jest.fn();
    render(
      <PaginationComponent pageCount={12} handlePageChange={handlePageChange} />
    );
    const element = screen.getByText(">");
    for (let i = 0; i < 14; i++) {
      fireEvent.click(element);
    }
    expect(handlePageChange).toBeCalledTimes(11);
  });
});
