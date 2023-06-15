import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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

const AddProduct = ({}) => {
  const [imgs, setImgs] = useState({
    img1: null,
    img2: null,
    img3: null,
  });
  //Image change handler
  const editAvatorHandler = (e) => {
    //console.log(e.target.files);
    if (e.target.files.length !== 0) {
    }
    e.target.value = null;
  };

  const resetFields = () => {};

  return (
    <Card>
      <CardHeader title="Add Product / Service" />
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ margin: "20px 0px 10px 0px" }}>
          <Grid container spacing={3} columns={12}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Product/Service Name"
                // onChange={() => {}}
                required
                // value={SP.title}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Price"
                // onChange={() => {}}
                // value={SP.location}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl
                sx={{ m: 1, width: "100%", margin: "0px 0px", flex: 1 }}
                size="large"
              >
                <InputLabel id="select-small">Currency</InputLabel>
                <Select
                  labelId="select-small"
                  id="select-small"
                  value={"UGX"}
                  label="currency"
                  // onChange={(event) => setCurrency(event.target.value)}
                >
                  <MenuItem value="UGX"> UGX</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                label="Description"
                helperText="Not More than 100 words"
                multiline
                rows={4}
                // onChange={() => {}}
                required
                // value={SP.desc}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={3}
                sx={{ width: "100%" }}
              >
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
                    onChange={editAvatorHandler}
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
                    onChange={editAvatorHandler}
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
                    onChange={editAvatorHandler}
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
              </Stack>
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
          Add
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

export default AddProduct;
