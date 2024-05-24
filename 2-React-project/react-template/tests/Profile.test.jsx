import { render, screen } from "@testing-library/react";
import Profile from "../src/components/Profile";

test("renders with the correct name ", () => {
    render(<Profile name="Kathey"/>);
    expect(screen.getByRole("heading")).toHaveTextContent("Quackie Kathey");
});

test("renders with the job ", () => {
    render(<Profile job="cleaner"/>);
    expect(screen.getByText("Makers' favourite cleaner"));
});

test("renders with the job ", () => {
    render(<Profile birthdate="90928"/>);
    expect(screen.getByText("90928"));
});