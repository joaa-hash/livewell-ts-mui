import React from "react";
import {
  createStyles,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  withStyles,
} from "@material-ui/core";
import logo from "../../media/livewell_fish_logo.png";
import FishDeleteModal from "./FishDeleteModal";
import { useSelector } from "react-redux";
import { AppState } from "../..";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#00a6ff",
      color: theme.palette.primary.main,
      backgroundImage: "linear-gradient(45deg, #00000033, transparent);",
      textAlign: "left",
    },
    body: {
      fontSize: 14,
      color: "rgb(15 130 249)",
      fontWeight: "bold",
      // textAlign: "left",
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "rgb(78 255 227 / 20%)",
      },
    },
  })
)(TableRow);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "80vh",
    },
    tableContainer: {
      width: "100%",
      marginBottom: 40,
    },
    table: {
      minWidth: 700,
    },
    head: {
      backgroundColor: "#00a6ff",
      color: theme.palette.primary.main,
      backgroundImage: "linear-gradient(45deg, #00000033, transparent);",
      textAlign: "left",
    },
  })
);

const FishView = () => {
  const classes = useStyles();
  const fish = useSelector((state: AppState) => state.fish);
  return (
    <div className={classes.root}>
      <img
        src={logo}
        alt="fish"
        style={{
          width: 314,
          height: 155,
          padding: "0px 10px 0px",
          margin: "20px auto 10px",
          display: "block",
        }}
      />
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Species</StyledTableCell>
              <StyledTableCell align="left">Length</StyledTableCell>
              <StyledTableCell align="left">Weight</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fish.map((fish, index) => (
              <StyledTableRow key={`${fish.species}${index * 2}`}>
                <StyledTableCell component="th" scope="row">
                  {fish.species}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {fish.inches} inches
                </StyledTableCell>
                <StyledTableCell align="left">
                  {fish.pounds} lbs {fish.ounces} ounces
                </StyledTableCell>
                <StyledTableCell align="center">
                  <FishDeleteModal fishId={fish.id} fish={fish} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FishView;
