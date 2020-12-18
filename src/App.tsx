import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { FishEnter } from "./components/formComponents/FishEnter";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <div className="App">
      <Main />
      <FishEnter />
    </div>
  );
};
