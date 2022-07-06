import { render, screen } from "@testing-library/react";
import Button from "./Button";

const onClick = jest.fn();

describe("Button", () => {
  it("should render a button", () => {
    const { container } = render(
      <Button progressToClick={0} clickCallback={onClick} />
    );
    expect(container.getElementsByClassName("button").length).toBe(1);
  });

  it("should be a 150px x 50px square", () => {
    const { container } = render(
      <Button progressToClick={0} clickCallback={onClick} />
    );
    expect(container.getElementsByClassName("button")[0]).toHaveStyle({
      width: "100px",
      height: "50px",
    });
  });

  it("should have no border", () => {
    const { container } = render(
      <Button progressToClick={0} clickCallback={onClick} />
    );
    expect(container.getElementsByClassName("button")[0]).toHaveStyle({
      border: "0px",
    });
  });

  it("should render a button of a given colour", () => {
    const { container, rerender } = render(
      <Button progressToClick={0} colour="red" clickCallback={onClick} />
    );
    expect(container.getElementsByClassName("button")[0]).toHaveStyle({
      backgroundColor: "red",
    });

    rerender(
      <Button progressToClick={0} colour="ff00ff" clickCallback={onClick} />
    );
    expect(container.getElementsByClassName("button")[0]).toHaveStyle({
      backgroundColor: "ff00ff",
    });
  });
});
