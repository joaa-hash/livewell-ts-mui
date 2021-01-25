import React from "react";
import {
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import logo from "../../media/livewell_fish_logo.png";
import tacklebox from "../../media/tacklebox.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
    },
    message: {
      textAlign: "center",
      padding: "40px 0px",
      marginTop: 30,
      borderRadius: 5,
      backgroundImage: `url(${tacklebox})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "relative",
      zIndex: 1,
      boxShadow: "9px 11px 16px #ffff0012",
      border: "2px solid #ffff0024",
      "&::after": {
        content: "''",
        borderRadius: 5,
        position: "absolute",
        top: 0,
        left: 0,
        background: "rgba(0,0,0,0.72)",
        width: "100%",
        height: "100%",
        zIndex: -1,
      },
    },
  })
);

export const NoMatch = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src={logo}
        alt="fish"
        style={{
          width: 314,
          height: 155,
          padding: "0px 10px 0px",
          marginTop: 20,
        }}
      />
      <div className={classes.message}>
        <Typography variant="h4" color="primary">
          Sorry you must have entered a incorrect path
        </Typography>
        <Button variant="contained" color="secondary">
          <Link to="/">Return to Main page</Link>
        </Button>
      </div>
    </div>
  );
};
