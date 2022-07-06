import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render 4 buttons", () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName("button")).toHaveLength(4);
  });
});
