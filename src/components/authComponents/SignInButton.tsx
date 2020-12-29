import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button variant="contained" onClick={() => loginWithRedirect()}>
      Sign In
    </Button>
  );
};

export default SignInButton;
