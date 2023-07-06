import React, { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Block, DoneAll } from "@mui/icons-material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ApproveDisapproveDialog = ({
  open,
  setOpen,
  approved,
  approveFn,
  disapproveFn,
}) => {
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
        <DialogTitle>
          {approved === true
            ? "Confirm Account Disapproval"
            : "Confirm Account Approval"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {approved === true
              ? "This will block the Service Provider from logging into the account. And users will not be able to see this service provider"
              : "This will allow the service provider to log into their account."}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Cancel
          </Button>
          {approved === true ? (
            <Button
              variant="contained"
              color="error"
              endIcon={<Block />}
              onClick={() => {
                disapproveFn();
                handleClose();
              }}
            >
              Disapprove
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              endIcon={<DoneAll />}
              onClick={() => {
                approveFn();
                handleClose();
              }}
            >
              Approve
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ApproveDisapproveDialog;
