import React, { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { DomainDisabled, Grading } from "@mui/icons-material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ActivateSuspendDialog = ({
  open,
  setOpen,
  active,
  activateFn,
  suspendFn,
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
          {active === true
            ? "Confirm SP Account Suspension"
            : "Confirm SP Account Activation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {active === true
              ? "Users will not be able to see this service provider, However the service provider will be able to log in."
              : "Users will see this service providers products and details"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Cancel
          </Button>
          {active === true ? (
            <Button
              variant="contained"
              color="error"
              endIcon={<DomainDisabled />}
              onClick={() => {
                suspendFn();
                handleClose();
              }}
            >
              Suspend Account
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              endIcon={<Grading />}
              onClick={() => {
                activateFn();
                handleClose();
              }}
            >
              Activate
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ActivateSuspendDialog;
