import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../Store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import AddQuestion from "./AddQuestion"

describe("AddQuestion", () => {
    it("should render the component", () => {
        const view = render(
            <Provider store={store}>
                <BrowserRouter>
                    <AddQuestion />
                </BrowserRouter>
            </Provider>
        );
        expect(view).toBeDefined();
        expect(view).toMatchSnapshot();
    });

    it("should display all elements", () => {
        const view = render(
            <Provider store={store}>
                <BrowserRouter>
                    <AddQuestion />
                </BrowserRouter>
            </Provider>
        );

        const firstOptionLabelElement = screen.getByTestId("firstOptionLabel");
        const firstOptionInputElement = screen.getByTestId("firstOption");
        const secondOptionLabelElement = screen.getByTestId("secondOptionLabel");
        const secondOptionInputElement = screen.getByTestId("secondOption");
        const submitButtonElement = screen.getByTestId("submit-poll");

        expect(firstOptionLabelElement.textContent).toBe("Option One:");
        expect(secondOptionLabelElement.textContent).toBe("Option Two:");
        expect(submitButtonElement.textContent).toBe("Create Question");

        fireEvent.change(firstOptionInputElement, { target: { value: 'Texas' } });
        fireEvent.change(secondOptionInputElement, { target: { value: 'New Hampshire' } });
        expect(firstOptionInputElement.value).toBe("Texas");
        expect(secondOptionInputElement.value).toBe("New Hampshire");
    });
});
