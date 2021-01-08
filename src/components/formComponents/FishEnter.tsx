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
import WbSunnyIcon from "@material-ui/icons/WbSunny";

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
      minWidth: 220,
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
    <form className={classes.root}>
      <Grid
        container
        spacing={6}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <WbSunnyIcon fontSize="large" />
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
            <option>Largemouth Bass</option>
            <option>Bluegill</option>
            <option>White Perch</option>
            <option>Catfish</option>
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
