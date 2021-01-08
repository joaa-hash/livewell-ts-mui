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
import FishDeleteModal from "./FishDeleteModal";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
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
    backgroundColor: "white",
    width: "100%",
    marginTop: 40,
    marginBottom: 40,
    textAlign: "center",
  },
  table: {
    minWidth: 700,
  },
});

const FishView = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Species</StyledTableCell>
            <StyledTableCell align="right">Length</StyledTableCell>
            <StyledTableCell align="right">Weight</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">
                <FishDeleteModal />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FishView;
