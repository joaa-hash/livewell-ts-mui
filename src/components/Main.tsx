import React from "react";
import { Button, Container, Divider, Typography } from "@material-ui/core";

export const Main = () => {
  return (
    <Container>
      <Typography variant="h1" component="h2" color="primary">
        Livewell App
      </Typography>
      <Button variant="contained">Sign In</Button>
      <Divider variant="middle" />
      <Button variant="contained">Tackle Box</Button>
    </Container>
  );
};
