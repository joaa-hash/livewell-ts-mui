import React from "react";
import {
  Button,
  createStyles,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import SignInButton from "./authComponents/SignInButton";
import { Link } from "react-router-dom";
import logo from "../media/livewell_fish_logo.png";
import { Rowing } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: 40,
      marginBottom: 20,
    },
    subheader: {
      color: "green",
    },
    gridItem: {
      textAlign: "center",
    },
    menuItem: {
      margin: "0 auto",
      background: "linear-gradient(45deg,  #fbff00, #c8ffdb)",
    },
    paper: {
      // background: "linear-gradient(45deg,lightyellow,white)",
    },
    divider: {
      alignSelf: "center",
      width: "60%",
    },
    tackleBoxButton: {
      backgroundColor: "yellow",
      color: "forestgreen",
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
      <Grid item xs={12} className={classes.gridItem}>
        <img src={logo} alt="fish" style={{ width: 314, height: 209 }} />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Typography variant="h6" color="initial" className={classes.subheader}>
          Sign In or go to Dashboard
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
        <Button variant="contained" className={classes.tackleBoxButton}>
          <Link to="/user/fish-view">Tackle Box</Link>
        </Button>
      </Grid>
      <Grid item xs={12} className={classes.menuItem}>
        <Paper elevation={3} className={classes.paper}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Rowing />
              </ListItemIcon>
              <ListItemText primary="Single-line item" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Single-line item" />
              <ListItemIcon>
                <Rowing />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Rowing />
              </ListItemIcon>
              <ListItemText primary="Single-line item" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};
