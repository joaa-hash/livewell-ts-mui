import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: "yellow",
      color: "black",
    },
  })
);

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      onClick={() => loginWithRedirect()}
      className={classes.button}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
