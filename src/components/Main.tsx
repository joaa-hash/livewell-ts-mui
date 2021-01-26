import React from "react";
import {
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import SignInButton from "./authComponents/SignInButton";
import { Link } from "react-router-dom";
import logo from "../media/livewell_fish_logo.png";
import lakeVid from "../media/lake_vid.mp4";
import { BusinessCenter } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: "100vh",
    },
    header: {
      color: theme.palette.primary.main,
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
    },
    tackleBoxButton: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 5,
      fontSize: "1.1rem",
    },
    tackleBoxButtonLink: {
      color: theme.palette.primary.contrastText,
      paddingRight: 12,
      "&:visited": {
        color: theme.palette.primary.contrastText,
      },
    },
    tackleBoxIcon: {
      color: theme.palette.primary.contrastText,
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
      <Grid item xs={12} className={classes.gridItem}>
        <img
          src={logo}
          alt="fish"
          style={{
            width: 314,
            height: 170,
            padding: "0px 10px 0px",
          }}
        />
        <Typography variant="h1" color="initial" className={classes.header}>
          Livewell App
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Typography variant="h6" color="initial" className={classes.subheader}>
          Sign In or go to Tacklebox
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <SignInButton />
      </Grid>
      <Grid item xs={12} className={classes.buttonContainer}>
        <IconButton className={classes.tackleBoxButton}>
          <Link to="/user/tacklebox" className={classes.tackleBoxButtonLink}>
            Tackle Box
          </Link>
          <BusinessCenter className={classes.tackleBoxIcon} />
        </IconButton>
      </Grid>
      <div className={classes.videoContainer}>
        <video autoPlay loop className={classes.video}>
          <source src={lakeVid} type="video/mp4"></source>
        </video>
      </div>
    </Grid>
  );
};
