import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchButton from "./SearchButton";

describe("SearchButton Component", () => {
  it("should fire an onClick when clicked", () => {
    const fetchArticles = jest.fn();

    render(<SearchButton fetchArticles={fetchArticles} />);
    const button = screen.getByText(/Search/i);
    fireEvent.click(button);
    expect(fetchArticles).toHaveBeenCalledTimes(1);
  });
});
