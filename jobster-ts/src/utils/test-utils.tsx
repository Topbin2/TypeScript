// import React, { PropsWithChildren } from "react";
// import { render } from "@testing-library/react";
// import type { RenderOptions } from "@testing-library/react";
// import { configureStore } from "@reduxjs/toolkit";
// import type { PreloadedState } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";

// import { AppStore, RootState, setupStore } from "../store/store";
// import { allJobsReducer } from "../reducers/allJobsSlice";
// import { jobReducer } from "../reducers/jobSlice";
// import { userReducer } from "../reducers/userSlice";
// import { BrowserRouter } from "react-router-dom";
// // As a basic setup, import your same slice reducers

// // This type interface extends the default options for render from RTL, as well
// // as allows the user to specify other things such as initialState, store.
// interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
//   preloadedState?: PreloadedState<RootState>;
//   store?: AppStore;
// }

// export function renderWithProviders(
//   ui: React.ReactElement,
//   {
//     preloadedState = {},
//     // Automatically create a store instance if no store was passed in
//     store = setupStore(preloadedState),
//     ...renderOptions
//   }: ExtendedRenderOptions = {}
// ) {
//   function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
//     return (
//       <BrowserRouter>
//         <Provider store={store}>{children}</Provider>
//       </BrowserRouter>
//     );
//   }

//   // Return an object with the store and all of RTL's query functions
//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
// }

import React, { PropsWithChildren } from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { AppStore, RootState } from "../store/store";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";

import { allJobsReducer } from "../reducers/allJobsSlice";
import { jobReducer } from "../reducers/jobSlice";
import { userReducer } from "../reducers/userSlice";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

function render(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { user: userReducer, allJobs: allJobsReducer, job: jobReducer },
      preloadedState,
    }),
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

export * from "@testing-library/react";
export { render };
