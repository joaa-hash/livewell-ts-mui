import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Auth0ProviderWithHistory } from "./auth0-provider-with-history";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { reducers } from "./reducers";
import thunk from "redux-thunk";
import { App } from "./App";
//css
import "./index.css";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export type AppState = ReturnType<typeof reducers>;

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <App />
        </Provider>
      </ThemeProvider>
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById("root")
);
