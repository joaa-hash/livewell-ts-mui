import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deleteFish } from "../../actions";
import logo from "../../media/livewell_fish_logo.png";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    deleteButton: {
      backgroundColor: "#ff2f2f",
      color: "white",
    },
    deleteAllButton: {
      background: theme.palette.primary.contrastText,
      boxShadow: `7px 8px 8px 0px #ffff0036`,
      border: "1px solid #f4ff0091",
      color: theme.palette.primary.main,
    },
    paper: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      backgroundImage: "linear-gradient(45deg, #000000ab, #00000029)",
      border: "1px solid yellow",
    },
    continueButton: {
      background: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
    },
  })
);

export default function TransitionsModal(props: any) {
  const dispatch = useDispatch();
  const deleteFishActionCaller = () => {
    props.deleteAll
      ? dispatch(deleteFish(-1))
      : dispatch(deleteFish(props.fishId));
    handleClose();
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {props.deleteAll ? (
        <Button
          type="button"
          onClick={handleOpen}
          variant="contained"
          size="large"
          endIcon={<Delete color="primary" />}
          className={classes.deleteAllButton}
        >
          Clear Livewell
        </Button>
      ) : (
        <Button
          type="button"
          onClick={handleOpen}
          variant="contained"
          color="primary"
          className={classes.deleteButton}
        >
          Delete
        </Button>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <img
              src={logo}
              alt="fish"
              style={{
                width: 208,
                height: 80,
                padding: "0px 10px 0px",
                margin: "20px auto 10px",
                display: "block",
              }}
            />
            <h2 id="transition-modal-title">Delete Fish</h2>
            <p id="transition-modal-description">
              are you sure you want to delete {props.deleteAll ? `all` : `this`}{" "}
              fish?
            </p>
            <p id="transition-modal-description" style={{ color: "white" }}>
              {!props.deleteAll
                ? `${props.fish.species} ${props.fish.inches} inches ${props.fish.pounds} lbs ${props.fish.ounces} ounces`
                : ``}
            </p>
            <Button
              onClick={deleteFishActionCaller}
              className={classes.continueButton}
            >
              Continue
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
