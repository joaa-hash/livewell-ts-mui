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
import logo from "../media/livewell_fish_logo.png";
import lakeVid from "../media/lake_vid.mp4";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    header: {
      color: "#fff705",
      textShadow: " 3px 4px 13px black",
    },
    subheader: {
      color: "white",
    },
    gridItem: {
      textAlign: "center",
      zIndex: 1000,
    },
    buttonContainer: {
      textAlign: "center",
      zIndex: 1000,
      // paddingBottom: "0 !important",
    },
    tackleBoxButton: {
      backgroundColor: "yellow",
      color: "forestgreen",
      "&:visited": {
        color: "forestgreen",
      },
    },
    videoContainer: {
      width: "100%",
      minHeight: "106%",
      position: "absolute",
      top: 0,
      left: 0,
      overflow: "hidden",
      "&::after": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        background: "rgba(0,0,0,0.04)",
        width: "100%",
        height: "100%",
      },
    },
    video: {
      minWidth: "100%",
      minHeight: "100%",
      objectFit: "cover",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
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
      {/* <div className={classes.videoContainer}>
        <video autoPlay loop className={classes.video}>
          <source src={lakeVid} type="video/mp4"></source>
        </video>
      </div> */}
      <Grid item xs={12} className={classes.gridItem}>
        <img
          src={logo}
          alt="fish"
          style={{
            width: 314,
            height: 229,
            padding: "0px 10px 0px",
          }}
        />
        <Typography variant="h1" color="initial" className={classes.header}>
          Livewell App
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Typography variant="h6" color="initial" className={classes.subheader}>
          Sign In or go to Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <SignInButton />
        {/* <Button
          size="large"
          variant="contained"
          className={classes.tackleBoxButton}
        >
          <Link to="/user/fish-view">Tackle Box</Link>
        </Button> */}
      </Grid>
      <Grid item xs={12} className={classes.buttonContainer}>
        <Button
          size="large"
          variant="contained"
          className={classes.tackleBoxButton}
        >
          <Link to="/user/fish-view">Tackle Box</Link>
        </Button>
      </Grid>
      <div className={classes.videoContainer}>
        <video autoPlay loop className={classes.video}>
          <source src={lakeVid} type="video/mp4"></source>
        </video>
      </div>
    </Grid>
  );
};
