import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should have a title", () => {
    render(<App />);
    const element = screen.getByText("TopdWikipedia Articles");
    expect(element).toBeInTheDocument();
  });
});
