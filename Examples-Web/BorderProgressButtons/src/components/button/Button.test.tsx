import { render, screen } from "@testing-library/react";
import Button from "./Button";

const onClick = jest.fn();

describe("Button", () => {
    it("should render a button", () => {
        render(<Button progressToClick={0} clickCallback={onClick} />);
        expect(screen.getAllByRole("button").length).toBe(1);
    });

    it("should be a 200px x 100px box", () => {
        render(<Button progressToClick={0} clickCallback={onClick} />);
        expect(screen.getByRole("button")).toHaveStyle({
            width: "200px",
            height: "100px",
        });
    });

    it("should have no border", () => {
        render(<Button progressToClick={0} clickCallback={onClick} />);
        expect(screen.getByRole("button")).toHaveStyle({
            border: "0px",
        });
    });

    it("should render a button of a given colour", () => {
        const { rerender } = render(
            <Button progressToClick={0} colour="red" clickCallback={onClick} />
        );
        expect(screen.getByRole("button")).toHaveStyle({
            backgroundColor: "red",
        });

        rerender(
            <Button
                progressToClick={0}
                colour="ff00ff"
                clickCallback={onClick}
            />
        );
        expect(screen.getByRole("button")).toHaveStyle({
            backgroundColor: "ff00ff",
        });
    });
});
