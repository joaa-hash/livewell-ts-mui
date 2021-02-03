import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import { LockOpen } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: "yellow",
      color: theme.palette.primary.contrastText,
      fontWeight: 800,
      "& .MuiSvgIcon-root": {
        fill: "#3a3a3a",
      },
    },
  })
);

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();
  return (
    <Button
      size="large"
      variant="contained"
      onClick={() => loginWithRedirect()}
      className={classes.button}
      endIcon={<LockOpen />}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
