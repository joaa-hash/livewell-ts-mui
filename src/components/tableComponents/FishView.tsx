import React from "react";
import {
  Button,
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

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#00a6ff",
      color: "yellow",
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

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

const rows = [
  createData("Catfish", 12, 6),
  createData("Catfish", 12, 6),
  createData("Catfish", 12, 6),
  createData("Catfish", 12, 6),
  createData("Catfish", 12, 6),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: 40,
  },
  table: {
    minWidth: 700,
  },
  head: {
    backgroundColor: "#00a6ff",
    color: "yellow",
    backgroundImage: "linear-gradient(45deg, #00000033, transparent);",
    textAlign: "left",
  },
});

const FishView = () => {
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
      <TableContainer component={Paper} className={classes.root}>
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
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.calories}</StyledTableCell>
                <StyledTableCell align="left">{row.fat}</StyledTableCell>
                <StyledTableCell align="center">
                  <FishDeleteModal />
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
