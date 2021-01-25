import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "./auth/protected-route";
import Footer from "./components/Footer";
import { FishEnter } from "./components/formComponents/FishEnter";
import Header from "./components/Header";
import { Main } from "./components/Main";
import FishView from "./components/tableComponents/FishView";
import TackleBox from "./components/tackleBoxComponents/TackleBox";
import { AttachAuthHeader } from "./services/http";
import { NoMatch } from "./components/noMatchComponent/NoMatch";

export const App = () => {
  const [isToken, setIsToken] = useState(false);
  AttachAuthHeader(setIsToken);
  return (
    <Container maxWidth="sm">
      <div className="App">
        <Route path="/user" component={Header} />
        <Switch>
          <Route exact path="/" component={Main} />
          <ProtectedRoute
            exact
            path="/user/tacklebox"
            component={isToken ? TackleBox : Main}
          />
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
          <Route component={NoMatch} />
        </Switch>
        <Route path="/user" component={Footer} />
      </div>
    </Container>
  );
};
