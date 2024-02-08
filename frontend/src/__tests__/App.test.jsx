import { render, screen } from "@testing-library/react";
import { expect , it} from "vitest";

import App from "../App";

it("renders without crashing", () => {
  render(<App />);
  const msg = screen.getByText(/hello/i);
  expect(msg).toBeVisible();
});
