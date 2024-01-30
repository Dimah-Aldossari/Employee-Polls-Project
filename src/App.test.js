import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import store from "./Store.js";
import { BrowserRouter } from "react-router-dom";

import { login } from "./actions/Creat_Users";

describe("App", () => {
  test("should render the component", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    // expect(view).toMatchSnapshot();
  });

  test("should show Login page when not logged in", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const heading = screen.getByTestId("login-heading");
    expect(heading).toBeInTheDocument();
    expect(view).toMatchSnapshot();

  });
  test("should show Dashboard page when logged in", () => {
    store.dispatch(login({ id: "", password: "" }));

    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
    expect(view).toMatchSnapshot();

  });

});
