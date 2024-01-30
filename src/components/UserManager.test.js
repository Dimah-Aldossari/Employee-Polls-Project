import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../Store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import UserManager from "./UserManager";
import { handleInitialData } from "../actions/shared";

describe("Login", () => {
    it("should render the component", () => {
        const view = render(
            <Provider store={store}>
                <BrowserRouter>
                    <UserManager />
                </BrowserRouter>
            </Provider>
        );
        expect(view).toBeDefined();
        expect(view).toMatchSnapshot();
    });

    it('should clear input elements after clicking submit button', async () => {
        await store.dispatch(handleInitialData());

        const view = render(
            <Provider store={store}>
                <BrowserRouter>
                    <UserManager />
                </BrowserRouter>
            </Provider>
        );

        const usernameInputElement = screen.getByTestId("username");
        const passwordInputElement = screen.getByTestId("password");
        const submitButtonElement = screen.getByTestId("submit");

        expect(usernameInputElement).toBeInTheDocument();
        expect(passwordInputElement).toBeInTheDocument();
        expect(submitButtonElement).toBeInTheDocument();

        fireEvent.change(usernameInputElement, { target: { value: 'sarahedo' } });
        fireEvent.change(passwordInputElement, { target: { value: 'wrongpassword' } });

        expect(usernameInputElement.value).toBe("sarahedo");
        expect(passwordInputElement.value).toBe("wrongpassword");

        fireEvent.click(submitButtonElement);


        fireEvent.change(passwordInputElement, { target: { value: 'password123' } });

        expect(usernameInputElement.value).toBe("sarahedo");
        expect(passwordInputElement.value).toBe("password123");

    });
});
