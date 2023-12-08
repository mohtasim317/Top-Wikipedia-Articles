import React from "react";
import { render, screen } from "@testing-library/react";
import NumResultsDropdown from "./NumResultsDropdown";

describe("NumResultsDropdown Component", () => {
  const setNumResults = jest.fn();
  it("should have options for 25, 50, 75, 100, and 200 results", () => {
    render(
      <NumResultsDropdown numResults={100} setNumResults={setNumResults} />
    );
    const element1 = screen.getByText("25");
    expect(element1).toBeInTheDocument();
    const element2 = screen.getByText("50");
    expect(element2).toBeInTheDocument();
    const element3 = screen.getByText("75");
    expect(element3).toBeInTheDocument();
    const element4 = screen.getByText("100");
    expect(element4).toBeInTheDocument();
    const element5 = screen.getByText("200");
    expect(element5).toBeInTheDocument();
  });
});
