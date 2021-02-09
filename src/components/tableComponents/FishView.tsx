import React, { useState } from "react";
import {
  CircularProgress,
  createStyles,
  makeStyles,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import logo from "../../media/livewell_fish_logo.png";
import FishDeleteModal from "../helperComponents/FishDeleteModal";
import { useSelector } from "react-redux";
import { AppState } from "../..";
import { Pagination } from "./Pagination";
import { Waves } from "@material-ui/icons";

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
    header: {
      textAlign: "center",
      marginTop: 57,
      color: "#80c531",
      background: "#0095da38",
      fontWeight: "bolder",
      fontSize: "4rem",
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
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const fish = useSelector((state: AppState) => state.fish);
  let fishArrayClone = [...fish];
  fishArrayClone = fishArrayClone.slice(page * 5 - 5, page * 5);
  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Livewell</Typography>
      <img
        src={logo}
        alt="fish"
        style={{
          width: 148,
          height: 65,
          padding: "0px 10px 0px",
          margin: "20px auto 45px",
          display: "block",
          boxShadow: "1px 1px 15px 3px #00000040",
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
            {loading ? (
              <StyledTableRow>
                <StyledTableCell>
                  <CircularProgress color="secondary" />
                </StyledTableCell>
              </StyledTableRow>
            ) : fishArrayClone.length ? (
              fishArrayClone.map((fish, index) => (
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
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell>
                  <Waves />
                  <Typography variant="h4">No fish in livewell</Typography>
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        length={fish.length}
        setPage={setPage}
        setLoading={setLoading}
      />
    </div>
  );
};

export default FishView;
