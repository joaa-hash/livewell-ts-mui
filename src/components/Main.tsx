import React from "react";
import {
  Button,
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import SignInButton from "./authComponents/SignInButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: 40,
      marginBottom: 40,
    },
    gridItem: {
      textAlign: "center",
    },
    divider: {
      alignSelf: "center",
      width: "60%",
    },
  })
);

export const Main = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      spacing={4}
      direction="column"
      className={classes.root}
    >
      <Grid item xs={12}>
        <Typography variant="h4" color="primary" align="center">
          Livewell App
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <SignInButton />
      </Grid>
      <Divider
        variant="middle"
        orientation="horizontal"
        className={classes.divider}
      />
      <Grid item xs={12} className={classes.gridItem}>
        <Button variant="contained">
          <Link to="/user/fish-view">Tackle Box</Link>
        </Button>
      </Grid>
    </Grid>
  );
};
