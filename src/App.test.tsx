import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should have a Title, DatePicker, DropDownm and SearchButton components", () => {
    render(<App />);
    const Title = screen.getByText("Top Wikipedia Articles");
    expect(Title).toBeInTheDocument();
    const DatePicker = screen.getByText("Date");
    expect(DatePicker).toBeInTheDocument();
    const DropDown = screen.getByText("Num Results");
    expect(DropDown).toBeInTheDocument();
    const SearchButton = screen.getByRole("button");
    expect(SearchButton).toBeInTheDocument();
  });
});
