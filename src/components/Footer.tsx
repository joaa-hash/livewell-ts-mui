import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import {
  AddCircleOutline,
  BusinessCenter,
  TableChart,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 60,
      marginTop: 42,
      background: theme.palette.primary.contrastText,
    },
    nav: {
      color: theme.palette.primary.main,
    },
  })
);

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        component={Link}
        to="tacklebox"
        label="Tacklebox"
        className={classes.nav}
        icon={<BusinessCenter color="primary" />}
      />
      <BottomNavigationAction
        component={Link}
        to="fish-view"
        label="Livewell"
        className={classes.nav}
        icon={<TableChart color="primary" />}
      />

      <BottomNavigationAction
        component={Link}
        to="fish-enter"
        label="Add Fish"
        className={classes.nav}
        icon={<AddCircleOutline color="primary" />}
      />
    </BottomNavigation>
  );
};

export default Footer;
