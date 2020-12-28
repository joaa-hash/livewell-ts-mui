import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Restore, Favorite, LocationOn } from "@material-ui/icons";

const Footer = () => {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label="Recents" icon={<Restore />} />
      <BottomNavigationAction label="Favorites" icon={<Favorite />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
    </BottomNavigation>
  );
};

export default Footer;
