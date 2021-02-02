import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import React, { Fragment } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    item: {
      backgroundColor: "#2185d0",
      margin: "0 1px",
      padding: "6px 25px",
      borderRadius: "5px",
      color: "yellow",
      fontSize: "19px",
    },
  })
);

export const Pagination = (props: any) => {
  const { setLoading, setPage, length = 1 } = props;
  const classes = useStyles();

  const pagesArray = Array.from(Array(Math.ceil(length / 5)).keys());

  const changeBothStates = (currentPage: number) => {
    setPage(currentPage);
    setLoading(false);
  };

  const renderItems = () => {
    return pagesArray.map((page, index) => {
      let currentPage = index + 1;
      return (
        <Grid
          item
          key={currentPage}
          className={classes.item}
          onClick={() => {
            setLoading(true);
            setTimeout(() => changeBothStates(currentPage), 1000);
          }}
        >
          {currentPage}
        </Grid>
      );
    });
  };

  return (
    <Grid direction="row" container={true} justify="center">
      {renderItems()}
    </Grid>
  );
};
