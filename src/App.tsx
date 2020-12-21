import { Container } from "@material-ui/core";
import React from "react";
import "./App.css";
import { FishEnter } from "./components/formComponents/FishEnter";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <Container maxWidth="xs">
      <div className="App">
        <Main />
        <FishEnter />
      </div>
    </Container>
  );
};
