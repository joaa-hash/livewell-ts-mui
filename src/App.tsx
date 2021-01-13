import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "./auth/protected-route";
import Footer from "./components/Footer";
import { FishEnter } from "./components/formComponents/FishEnter";
import Header from "./components/Header";
import { Main } from "./components/Main";
import FishView from "./components/tableComponents/FishView";
import { AttachAuthHeader } from "./services/http";

export const App = () => {
  const [isToken, setIsToken] = useState(false);
  AttachAuthHeader(setIsToken);
  return (
    <Container maxWidth="sm">
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route path="/user" component={Header} />
        <ProtectedRoute
          exact
          path="/user/fish-view"
          component={isToken ? FishView : Main}
        />
        <ProtectedRoute
          exact
          path="/user/fish-enter"
          component={isToken ? FishEnter : Main}
        />
        {/* <Footer /> */}
      </div>
    </Container>
  );
};
