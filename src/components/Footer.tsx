import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import { AddCircleOutline, LocationOn, TableChart } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    height: 60,
    marginTop: 42,
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction label="View Fish" icon={<TableChart />} />
      <BottomNavigationAction label="Add Fish" icon={<AddCircleOutline />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
    </BottomNavigation>
  );
};

export default Footer;
