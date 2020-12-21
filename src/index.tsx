import React from "react";
import ReactDOM from "react-dom";
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

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
