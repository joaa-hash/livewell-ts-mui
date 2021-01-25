import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import logo from "../../media/livewell_fish_logo.png";
import tacklebox from "../../media/tacklebox.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 30,
      marginBottom: 100,
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
    gridItem: {
      textAlign: "center",
      padding: "40px 0",
    },
    button: {
      background: theme.palette.primary.contrastText,
      boxShadow: `7px 8px 8px 0px #ffff0036`,
    },
    route: {
      color: theme.palette.primary.main,
    },
  })
);

export const TackleBox = () => {
  const classes = useStyles();
  return (
    <div>
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
      <Grid
        alignContent="center"
        justify="space-around"
        className={classes.root}
      >
        <Grid item className={classes.gridItem}>
          <Button variant="contained" className={classes.button} size="large">
            <Link to="/user/fish-view" className={classes.route}>
              Fish View
            </Link>
          </Button>
        </Grid>
        <Grid item className={classes.gridItem}>
          {" "}
          <Button variant="contained" className={classes.button} size="large">
            <Link to="/user/fish-enter" className={classes.route}>
              Fish Enter
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TackleBox;
