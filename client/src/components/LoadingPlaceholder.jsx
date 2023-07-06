import { Skeleton } from "@mui/material";
import styled from "styled-components";
const mySx = { borderRadius: "10px !important" };

export const LoadingPlaceholder1 = ({ width, height }) => {
  return (
    <Container>
      <Skeleton
        // animation="wave"
        style={mySx}
        variant="rounded"
        width={width ? width : "100%"}
        height={height ? height : "100%"}
      />
    </Container>
  );
};

export const TextLineLoading = ({ fontSize, width }) => {
  return (
    <Container>
      <Skeleton
        animation="wave"
        variant="rounded"
        width={width ? width : ""}
        sx={{ fontSize: fontSize ? fontSize : "1rem" }}
      />
    </Container>
  );
};

export const RoundLoadingPlaceholder = ({ height, width }) => {
  return (
    <Container>
      <Skeleton
        animation="wave"
        variant="circular"
        width={width ? width : 40}
        height={height ? height : 40}
      />
    </Container>
  );
};

export const LoadingPlaceholder2 = () => {
  return (
    <Container>
      <Skeleton
        variant="rounded"
        width={"100%"}
        height={100}
        // style={mySx}
      />
      <br />
      <Skeleton
        animation="wave"
        variant="rounded"
        // style={mySx}
        width={"100%"}
        height={80}
      />
      <br />
      <Skeleton
        animation={false}
        width={"100%"}
        height={50}
        // tyle={mySx}
        variant="rounded"
      />
    </Container>
  );
};

const Container = styled.div``;
