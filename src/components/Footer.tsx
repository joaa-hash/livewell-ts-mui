import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { AddCircleOutline, LocationOn, TableChart } from "@material-ui/icons";

const Footer = () => {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label="View Fish" icon={<TableChart />} />
      <BottomNavigationAction label="Add Fish" icon={<AddCircleOutline />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
    </BottomNavigation>
  );
};

export default Footer;
