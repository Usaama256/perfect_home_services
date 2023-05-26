import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import ProgressiveImage from "./ProgressiveImage";

const DraggableComponent = (props) => {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
};

const ViewImgDialog = ({ url, open, setOpen }) => {
  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={closeHandler}
      maxWidth="xl"
      fullWidth={true}
      onClick={() => closeHandler()}
      TransitionComponent={Transition}
      aria-labelledby="draggable-dialog-titles"
      style={{ backgroundColor: "#000000be", overflow: "hidden" }}
      PaperComponent={DraggableComponent}
    >
      <Container>
        <ProgressiveImage src={url} />
      </Container>
    </Dialog>
  );
};

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default ViewImgDialog;
