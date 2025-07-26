import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it('should render the title of the app, "YATA"', () => {
    render(<App />);
    const titleElement = screen.getByText(/YATA/i);
    expect(titleElement).toBeInTheDocument();
  });
});
