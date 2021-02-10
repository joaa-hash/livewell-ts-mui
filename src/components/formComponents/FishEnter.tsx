import React from "react";
import { connect, useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  Button,
  createStyles,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  Theme,
  Typography,
} from "@material-ui/core";
import logo from "../../media/livewell_fish_logo.png";
import { addFish } from "../../actions";
import { Today } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
      width: "100%",
      paddingTop: 40,
      paddingBottom: 50,
      textAlign: "center",
    },
    header: {
      textAlign: "center",
      marginTop: 57,
      color: "#80c531",
      background: "#0095da38",
      fontWeight: "bolder",
      fontSize: "4rem",
    },
    gridItem: {
      width: "100%",
    },
    formControl: {
      margin: theme.spacing(1),
      width: "80%",
      "& .MuiFormLabel-root.Mui-focused": {
        color: theme.palette.primary.contrastText,
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.contrastText,
      },
    },
    inputHeader: {
      color: theme.palette.primary.contrastText,
      fontWeight: 800,
    },
    formHeader: {
      color: theme.palette.primary.main,
      // color:"#e0e0e0",
      width: "100%",
      position: "relative",
      padding: "0 !important",
      // backgroundImage: `url(${tackle})`,
      // backgroundSize: "cover",
      // backgroundRepeat: "no-repeat",
      "& h4": {
        fontWeight: 1000,
      },
      zIndex: 1,
      // "&::before": {
      //   content: "''",
      //   position: "absolute",
      //   top: 0,
      //   left: 0,
      //   background: "rgba(0,0,0,0.72)",
      //   // background: "rgb(58 78 27 / 88%)",
      //   width: "100%",
      //   height: "100%",
      //   zIndex: -1,
      // },
      "& .MuiSvgIcon-root": {
        fontSize: "6rem",
        margin: "13px 3px -7px",
        fill: theme.palette.primary.contrastText,
      },
      "& .MuiTypography-root": {
        marginBottom: 8,
        display: "block",
        fontFamily: "cursive",
        fontWeight: "bold",
        fontSize: 32,
        height: 86,
        background: "#5b822e",
        backgroundImage: "linear-gradient(45deg, #ffffff78, #ffffff00)",
        letterSpacing: 2,
        padding: "13px 0",
      },
    },
    select: {
      height: 60,
      padding: "0 0 0 20px !important",
      fontSize: 25,
      lineHeight: "29px",
      appearance: "none",
      border: "1px solid #5b822e",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    inputLabel: {
      backgroundColor: "white",
    },
    addFishBtn: {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
      fontWeight: 900,
    },
  })
);

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  classes,
  ...custom
}: {
  label: any;
  input: any;
  meta: { touched: any; error: any };
  children: any;
  classes: { formControl: any; selectEmpty: any; select: any; inputLabel: any };
}) => (
  <FormControl
    variant="outlined"
    error={touched && error}
    className={classes.formControl}
  >
    <InputLabel htmlFor="color-native-simple" className={classes.inputLabel}>
      {label}
    </InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: "color-native-simple",
        className: classes.select,
      }}
    >
      {children}
    </Select>
    {touched && error && (
      <div className="ui error message" style={{ color: "red" }}>
        Required
      </div>
    )}
  </FormControl>
);

const required = (value: any) => (value ? undefined : true);

const _FishEnter = (props: any) => {
  const dispatch = useDispatch();
  const onSubmit = (formData: {}) => {
    dispatch(addFish(formData, props));
  };
  const classes = useStyles();
  return (
    <div>
      {/* <Typography className={classes.header}>Add Fish</Typography> */}
      <img
        src={logo}
        alt="fish"
        style={{
          width: 351,
          height: 128,
          padding: "0px 10px 0px",
          margin: "35px auto",
          display: "block",
          boxShadow: "1px 1px 20px 9px #0000002e",
          background: "#505050",
        }}
      />
      <form className={classes.root} onSubmit={props.handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={6}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} className={classes.formHeader}>
            <Typography>Today's Catch</Typography>
            <Today />
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography variant="h4" className={classes.inputHeader}>
              Species:
            </Typography>
            <Field
              name="species"
              component={renderSelectField}
              classes={classes}
              validate={required}
            >
              {" "}
              <option value="" />
              <option value="Largemouth Bass">Largemouth Bass</option>
              <option value="Bluegill">Bluegill</option>
              <option value="White Perch">White Perch</option>
              <option value="Catfish">Catfish</option>
            </Field>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography variant="h4" className={classes.inputHeader}>
              Length:
            </Typography>
            <Field
              name="inches"
              label="inches"
              component={renderSelectField}
              classes={classes}
              validate={required}
            >
              <option key="hardCodedKey" className="firstChildOption" />
              {Array.from({ length: 37 }).map((element, index) => (
                <option key={index}>{index}</option>
              ))}
            </Field>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography variant="h4" className={classes.inputHeader}>
              Weight:
            </Typography>
            <Field
              name="pounds"
              label="pounds"
              component={renderSelectField}
              classes={classes}
              validate={required}
            >
              <option key="hardCodedKey" className="firstChildOption" />
              {Array.from({ length: 50 }).map((element, index) => (
                <option key={index}>{index}</option>
              ))}
            </Field>
            <Field
              name="ounces"
              label="ounces"
              component={renderSelectField}
              classes={classes}
              validate={required}
            >
              <option key="hardCodedKey" className="firstChildOption" />
              {Array.from({ length: 17 }).map((element, index) => (
                <option key={index}>{index}</option>
              ))}
            </Field>
          </Grid>
          <Button
            variant="contained"
            className={classes.addFishBtn}
            type="submit"
          >
            Add Fish
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export const FishEnter = connect(
  null,
  null
)(
  reduxForm<any, any>({
    form: "fishEnter",
  })(_FishEnter)
);
