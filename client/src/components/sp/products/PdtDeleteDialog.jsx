import React, { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Delete } from "@mui/icons-material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PdtDeleteDialog = ({ open, setOpen, data, deleteFn }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Confirm Product Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Product/Service:&ensp;{data.name}
            <br />
            Price:&ensp;
            {data.price
              ? `${data.currency ? data.currency : ""} ${data.price}`
              : "NA"}
            <br />
            Description:&ensp;{data.desc ? data.desc : "NA"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            endIcon={<Delete />}
            onClick={() => {
              deleteFn(data.id);
              handleClose();
            }}
          >
            Delete Item
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PdtDeleteDialog;
