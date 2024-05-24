import { screen, render } from "@testing-library/react";
import Recipe from "../src/components/Recipe";

describe ("Recipe", () => {
    it("should render with the correct title", () => {
        render(<Recipe title="make a hotdog"/>);
        expect(screen.getByText("make a hotdog"));
    });

    it("should render with the correct type", () => {
        render(<Recipe type="desert"/>);
        expect(screen.getByText("desert"));
    });

    it("should render with the correct duration", () => {
        render(<Recipe duration="50"/>);
        expect(screen.getByText("50"));
    });
});