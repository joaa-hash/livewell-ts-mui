import { Container } from "@material-ui/core";
import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import { FishEnter } from "./components/formComponents/FishEnter";
import Header from "./components/Header";
import { Main } from "./components/Main";
import FishView from "./components/tableComponents/FishView";

export const App = () => {
  return (
    <Container maxWidth="sm">
      <div className="App">
        <Header />
        {/* <Main /> */}
        {/* <FishEnter /> */}
        <FishView />
        <Footer />
      </div>
    </Container>
  );
};
