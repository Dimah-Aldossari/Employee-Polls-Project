import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../Store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import { login } from "../actions/Creat_Users"; // Update the import

describe("Navbar", () => {
    it("should render the component", () => {
        // Dispatch login action
        store.dispatch(login({ id: "sarahedo", name: "Sarah Edo" })); // Use the login action creator

        // Render the Navbar component
        const view = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        // Assert that the component renders correctly
        expect(view).toBeDefined();
        expect(view).toMatchSnapshot();
    });

    it("should display username of logged-in user", () => {
        // Dispatch login action
        store.dispatch(login({ id: "sarahedo", name: "Sarah Edo" })); // Use the login action creator

        // Render the Navbar component
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        // Find the element with data-testid="user-information"
        const userSpanElement = screen.getByTestId("user-information");

        // Assert that the content of the element is as expected
        expect(userSpanElement.textContent).toBe("welcome: Sarah Edo");
    });
});
