import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("renders App component", () => {
  it("renders App component", () => {
    render(<App />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
