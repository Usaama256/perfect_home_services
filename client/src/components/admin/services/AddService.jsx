import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  SvgIcon,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { AddCard, CameraAlt } from "@mui/icons-material";
import styled from "styled-components";
import { useState } from "react";

const imgCardSx = {
  overflow: "hidden",
  //   padding: "10px",
  boxShadow: "0px 2px 5px #0000008e",
  // borderRadius: "50%",
  //   marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 320,
  width: 320,
};

const AddService = ({}) => {
  const [imgs, setImgs] = useState({
    img1: null,
    img2: null,
    img3: null,
    img4: null,
    img5: null,
    img6: null,
  });
  //Image change handler
  const uploadHandler = (e) => {
    //console.log(e.target.files);
    if (e.target.files.length !== 0) {
    }
    e.target.value = null;
  };

  const resetFields = () => {};

  return (
    <Card>
      <CardHeader title="Add Service" />
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ margin: "20px 0px 10px 0px" }}>
          <Grid container spacing={3} columns={12}>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                label="Service Title"
                // onChange={() => {}}
                required
                // value={SP.title}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                label="Description"
                helperText="Not More than 100 words"
                multiline
                rows={4}
                // onChange={() => {}}
                // value={SP.desc}
              />
            </Grid>
            <Grid container spacing={1} xs={12} md={12} columns={12}>
              <Grid item xs={12} md={4} columns={4}>
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  <Card style={imgCardSx}>
                    {imgs.img1 && (
                      <img
                        src={imgs.img1}
                        alt="img"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Card>
                  <input
                    style={{
                      display: "none",
                    }}
                    type="file"
                    id="img1Upload"
                    disabled={false}
                    name="imageUpload"
                    accept="image/*"
                    onChange={uploadHandler}
                  />
                  <label htmlFor="img1Upload">
                    <UploadBtn>
                      Upload Image One
                      <SvgIcon size="large">
                        <CameraAlt />
                      </SvgIcon>
                    </UploadBtn>
                  </label>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4} columns={4}>
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  <Card style={imgCardSx}>
                    {imgs.img2 && (
                      <img
                        src={imgs.img2}
                        alt="img"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Card>
                  <input
                    style={{
                      display: "none",
                    }}
                    type="file"
                    id="img2Upload"
                    disabled={false}
                    name="imageUpload"
                    accept="image/*"
                    onChange={uploadHandler}
                  />
                  <label htmlFor="img2Upload">
                    <UploadBtn>
                      Upload Image Two
                      <SvgIcon size="large">
                        <CameraAlt />
                      </SvgIcon>
                    </UploadBtn>
                  </label>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4} columns={4}>
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  <Card style={imgCardSx}>
                    {imgs.img3 && (
                      <img
                        src={imgs.img3}
                        alt="img"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Card>
                  <input
                    style={{
                      display: "none",
                    }}
                    type="file"
                    id="img3Upload"
                    disabled={false}
                    name="imageUpload"
                    accept="image/*"
                    onChange={uploadHandler}
                  />
                  <label htmlFor="img3Upload">
                    <UploadBtn>
                      Upload Image Three
                      <SvgIcon size="large">
                        <CameraAlt />
                      </SvgIcon>
                    </UploadBtn>
                  </label>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4} columns={4}>
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  <Card style={imgCardSx}>
                    {imgs.img4 && (
                      <img
                        src={imgs.img4}
                        alt="img"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Card>
                  <input
                    style={{
                      display: "none",
                    }}
                    type="file"
                    id="img4Upload"
                    disabled={false}
                    name="imageUpload"
                    accept="image/*"
                    onChange={uploadHandler}
                  />
                  <label htmlFor="img4Upload">
                    <UploadBtn>
                      Upload Image Four
                      <SvgIcon size="large">
                        <CameraAlt />
                      </SvgIcon>
                    </UploadBtn>
                  </label>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4} columns={4}>
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  <Card style={imgCardSx}>
                    {imgs.img5 && (
                      <img
                        src={imgs.img5}
                        alt="img"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Card>
                  <input
                    style={{
                      display: "none",
                    }}
                    type="file"
                    id="img5Upload"
                    disabled={false}
                    name="imageUpload"
                    accept="image/*"
                    onChange={uploadHandler}
                  />
                  <label htmlFor="img1Upload">
                    <UploadBtn>
                      Upload Image Five
                      <SvgIcon size="large">
                        <CameraAlt />
                      </SvgIcon>
                    </UploadBtn>
                  </label>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4} columns={4}>
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  <Card style={imgCardSx}>
                    {imgs.img6 && (
                      <img
                        src={imgs.img6}
                        alt="img"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Card>
                  <input
                    style={{
                      display: "none",
                    }}
                    type="file"
                    id="img6Upload"
                    disabled={false}
                    name="imageUpload"
                    accept="image/*"
                    onChange={uploadHandler}
                  />
                  <label htmlFor="img2Upload">
                    <UploadBtn>
                      Upload Image Six
                      <SvgIcon size="large">
                        <CameraAlt />
                      </SvgIcon>
                    </UploadBtn>
                  </label>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button variant="outlined" color="secondary">
          Reset Fields
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={
            <SvgIcon size="small">
              <AddCard />
            </SvgIcon>
          }
        >
          Add Service
        </Button>
      </CardActions>
    </Card>
  );
};

const UploadBtn = styled.div`
  margin: 10px 10px;
  padding: 10px 10px;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.3s linear;
  background-color: rgba(0, 0, 0, 0);
  border: 0.5px solid #2064d17c;
  color: #2065d1;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  /* text-transform: uppercase; */

  &:hover {
    background-color: #2064d114;
    border: 1px solid #114fb2;
  }
`;

export default AddService;
