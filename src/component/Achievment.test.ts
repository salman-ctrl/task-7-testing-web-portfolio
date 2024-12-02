import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Achievment from "../component/achievment";

// Mock useNavigate
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

describe("Achievment Component", () => {
    it("navigates to /achievment when the 'See More' button is clicked", () => {
        const mockNavigate = jest.fn();
        const { useNavigate } = require("react-router-dom");
        useNavigate.mockReturnValue(mockNavigate);

        // Render the component
        render(
            <Router>
            <Achievment />
            </Router>
        );

        // Find and click the button
        const button = screen.getByRole("button", { name: /See More/i });
        fireEvent.click(button);

        // Assert the navigate function is called with the correct argument
        expect(mockNavigate).toHaveBeenCalledWith("/achievment");
    });
});
