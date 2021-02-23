import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import logo from "../../media/livewell_fish_logo.png";
import tacklebox from "../../media/largemouth_bass.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getUserFish } from "../../actions";
import {
  AddCircleOutline,
  Cloud,
  TableChart,
  WbSunny,
} from "@material-ui/icons";
import { dialog } from "./dialog";
import Switch from "../helperComponents/Switch";
import FishDeleteModal from "../helperComponents/FishDeleteModal";
import { AppState } from "../..";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "80vh",
    },
    header: {
      textAlign: "center",
      marginTop: 57,
      color: "#80c531",
      background: "#0095da38",
      fontWeight: "bolder",
      fontSize: "4rem",
    },
    grid: {
      marginTop: 30,
      marginBottom: 100,
      borderRadius: 5,
      backgroundImage: `url(${tacklebox})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      position: "relative",
      zIndex: 1,
      boxShadow: "9px 11px 16px #ffff0012",
      // border: "2px solid #ffff0024",
      // border: "1px solid white",
      "&::after": {
        content: "''",
        borderRadius: 5,
        position: "absolute",
        top: 0,
        left: 0,
        // background: "rgba(0,0,0,0.72)",
        // background: "rgb(0 168 195 / 20%)",
        background: "rgb(1 94 109 / 64%)",
        width: "100%",
        height: "100%",
        zIndex: -1,
      },
    },
    gridItem: {
      textAlign: "center",
      padding: "22px 0",
    },
    button: {
      background: theme.palette.primary.contrastText,
      boxShadow: `7px 8px 8px 0px #ffff0036`,
      border: "1px solid #f4ff0091",
      color: theme.palette.primary.main,
    },
    card: {
      margin: "10px 8px 57px",
      textAlign: "center",
      backgroundImage: "linear-gradient(45deg, #5eff541f, #ffffff40)",
      boxShadow: "inset 1px 1px 20px 2px #81b11e4a",
      background: "#5b822e94",
      border: "2px solid #5bff0063",
      "& .MuiTypography-root": {
        fontSize: 21,
        textShadow: "1px 1px #327132",
        fontFamily: "cursive",
        color: "#fff704",
        lineHeight: "40px",
      },
    },
    switchGridItem: {
      textAlign: "center",
      color: theme.palette.secondary.main,
    },
  })
);

const dialogShuffler = (array: any) => {
  let len = array.length;
  let randomIndex = Math.floor(Math.random() * len);
  return (
    <div>
      <Typography>{array[randomIndex].d1}</Typography>
      <Typography>{array[randomIndex].d2}</Typography>
    </div>
  );
};

export const TackleBox = () => {
  const [checked, setChecked] = useState(false);
  const fish = useSelector((state: AppState) => state.fish);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserFish());
  }, [dispatch, fish]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Tacklebox</Typography>
      <img
        src={logo}
        alt="fish"
        style={{
          width: 148,
          height: 65,
          padding: "0px 10px 0px",
          margin: "20px auto 0",
          display: "block",
          boxShadow: "1px 1px 15px 3px #00000040",
        }}
      />
      <Grid className={classes.grid}>
        <Grid item className={classes.gridItem}>
          <Button
            variant="contained"
            component={RouterLink}
            to="/user/fish-view"
            className={classes.button}
            size="large"
            endIcon={<TableChart color="primary" />}
          >
            View Fish
          </Button>
        </Grid>

        <Grid item className={classes.gridItem}>
          <FishDeleteModal deleteAll={true} />
        </Grid>
        <Grid item className={classes.gridItem}>
          <Button
            variant="contained"
            component={RouterLink}
            to="/user/fish-enter"
            className={classes.button}
            size="large"
            endIcon={<AddCircleOutline color="primary" />}
          >
            Add Fish
          </Button>
        </Grid>
        {!checked ? (
          <div></div>
        ) : (
          <Grid item>
            <Card className={classes.card}>
              <CardContent>
                <WbSunny color="primary" fontSize="large" />
                {dialogShuffler(dialog)}
                <Cloud color="secondary" fontSize="large" />
              </CardContent>
            </Card>
          </Grid>
        )}

        <Grid item className={classes.switchGridItem}>
          <Switch setChecked={setChecked} />
          <label>turn {checked ? "off" : "on"} dialog</label>
        </Grid>
      </Grid>
    </div>
  );
};
