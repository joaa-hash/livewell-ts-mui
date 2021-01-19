import React from "react";
import { connect } from "react-redux";
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
import tackle from "../../media/tackle_box.jpg";
import { AddCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
      width: "100%",
      paddingTop: 40,
      paddingBottom: 50,
      textAlign: "center",
    },
    formControl: {
      margin: theme.spacing(1),
    },
    formHeader: {
      color: "white",
      width: "100%",
      position: "relative",
      backgroundImage: `url(${tackle})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      "&::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        background: "rgba(0,0,0,0.54)",
        width: "100%",
        height: "100%",
      },
    },
    select: {
      height: 60,
      padding: "0 0 0 20px !important",
      fontSize: 37,
      lineHeight: "37px",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    inputLabel: {
      backgroundColor: "white",
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
  meta: { touched: string; error: any };
  children: any;
  classes: { formControl: any; selectEmpty: any; select: any; inputLabel: any };
}) => (
  <FormControl
    variant="outlined"
    error={touched && error}
    className={classes?.formControl}
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
        {error}
      </div>
    )}
  </FormControl>
);

const required = (value: any) => (value ? undefined : "Required");

const _FishEnter = (props: any) => {
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
      <form className={classes.root}>
        <Grid
          container
          spacing={6}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} className={classes.formHeader}>
            <Typography variant="h4">Add Fish</Typography>
            <AddCircle fontSize="large"></AddCircle>
          </Grid>
          <Grid item>
            <Typography variant="h4" color="initial">
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
              <option value={"lb"}>Largemouth Bass</option>
              <option value="bg">Bluegill</option>
              <option value="wp">White Perch</option>
              <option value="cf">Catfish</option>
            </Field>
          </Grid>
          <Grid item>
            <Typography variant="h4" color="initial">
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
          <Grid item>
            <Typography variant="h4" color="initial">
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
          <Button variant="contained" color="primary">
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
