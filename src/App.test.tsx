import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should have a Title", () => {
    render(<App />);
    const element = screen.getByText("Top Wikipedia Articles");
    expect(element).toBeInTheDocument();
  });
  it("should have a DatePicker", () => {
    render(<App />);
    const element = screen.getByText("Date");
    expect(element).toBeInTheDocument();
  });
  it("should have a Dropdown", () => {
    render(<App />);
    const element = screen.getByText("Num Results");
    expect(element).toBeInTheDocument();
  });
  it("should have a SearchButton", () => {
    render(<App />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });
});
