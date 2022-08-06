import React, { PropsWithChildren } from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import setupStore, { AppStore, RootState } from "../store/store";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

function render(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    ...rtlRender(ui, { wrapper: BrowserRouter }),
  };
};

export * from "@testing-library/react";
export { render, renderWithRouter };
