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
import { imgFromLocalToBase64 } from "../../../store/base64ImgConverter";
import { useSnackbar } from "notistack";
import { myRequest } from "../../../store/requestMethods";
import { useDispatch } from "react-redux";
import { fetchSpProductsSP } from "../../../redux/apiCalls";

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

const AddProduct = ({ SPid }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);
  const [newPdt, setNewPdt] = useState({
    name: "",
    price: "",
    desc: "",
    currency: "",
  });
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imgs, setImgs] = useState({
    img1: "",
    img2: "",
    img3: "",
  });

  //Image change handler
  const uploadHandler = (e, n) => {
    //console.log(e.target.files);
    if (e.target.files.length !== 0) {
      setUploadingImg(true);
      enqueueSnackbar("Please Wait While Uploading Images", {
        variant: "info",
      });
      imgFromLocalToBase64(e.target.files[0]).then((base64Str) => {
        if (n === 1) {
          setImgs({ ...imgs, img1: base64Str });
          setUploadingImg(false);
          enqueueSnackbar("Image 1 Uploaded Successfully", {
            variant: "success",
          });
        } else if (n === 2) {
          setImgs({ ...imgs, img2: base64Str });
          setUploadingImg(false);
          enqueueSnackbar("Image 1 Uploaded Successfully", {
            variant: "success",
          });
        } else if (n === 3) {
          setImgs({ ...imgs, img3: base64Str });
          setUploadingImg(false);
          enqueueSnackbar("Image 1 Uploaded Successfully", {
            variant: "success",
          });
        }
      });
    }
    e.target.value = null;
  };

  const addServiceHandler = async () => {
    if (uploadingImg === true) {
      enqueueSnackbar("Please Wait While Uploading Images", {
        variant: "info",
      });
    } else {
      if (newPdt.name.length < 2) {
        enqueueSnackbar("Enter A Valid Product/Service Name", {
          variant: "error",
        });
      } else {
        try {
          enqueueSnackbar("Please wait while adding the New Product", {
            variant: "info",
          });
          setIsFetching(true);
          const res = await myRequest.post(`/sp.api/addPdt/${SPid}`, {
            ...newPdt,
            imgsArr: [
              imgs.img1 ? imgs.img1 : "",
              imgs.img2 ? imgs.img2 : "",
              imgs.img3 ? imgs.img3 : "",
            ],
          });
          if (res.status === 200) {
            enqueueSnackbar("Product/Service Added Successfully", {
              variant: "success",
            });
            resetFields();
            fetchSpProductsSP(dispatch);
          } else {
            enqueueSnackbar("Error: Product/Service Not Added", {
              variant: "error",
            });
          }
        } catch (err) {
          enqueueSnackbar("Error: Product/Service Not Added", {
            variant: "error",
          });
          enqueueSnackbar(err.response?.data, { variant: "error" });
          console.log(err);
          if (err.response) {
            console.log(err.response, err.message);
          } else if (err.request) {
            if (err.request.status) {
              console.error(err.message, err.request);
            } else {
              console.log(err.request, err.message);
            }
          } else {
            console.log(err.message);
          }
        } finally {
          setIsFetching(false);
        }
      }
    }
  };

  const resetFields = () => {
    setNewPdt({
      name: "",
      price: "",
      desc: "",
      currency: "",
      imagesArr: [],
    });
    setImgs({ img1: "", img2: "", img3: "" });
  };

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
                required
                value={newPdt.name}
                onChange={(e) => setNewPdt({ ...newPdt, name: e.target.value })}
                disabled={isFetching}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Price"
                value={newPdt.price}
                onChange={(e) =>
                  setNewPdt({ ...newPdt, price: e.target.value })
                }
                disabled={isFetching}
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
                  value={newPdt.currency}
                  label="currency"
                  onChange={(e) =>
                    setNewPdt({ ...newPdt, currency: e.target.value })
                  }
                  disabled={isFetching}
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
                required
                value={newPdt.desc}
                onChange={(e) => setNewPdt({ ...newPdt, desc: e.target.value })}
                disabled={isFetching}
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
                    disabled={isFetching || uploadingImg}
                    name="imageUpload"
                    accept="image/*"
                    onChange={(e) => uploadHandler(e, 1)}
                  />
                  <label
                    htmlFor="img1Upload"
                    disabled={isFetching || uploadingImg}
                  >
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
                    disabled={
                      isFetching || uploadingImg || imgs.img1.length === 0
                    }
                    name="imageUpload"
                    accept="image/*"
                    onChange={(e) => uploadHandler(e, 2)}
                  />
                  <label
                    htmlFor="img2Upload"
                    disabled={
                      isFetching || uploadingImg || imgs.img1.length === 0
                    }
                  >
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
                    disabled={
                      isFetching || uploadingImg || imgs.img2.length === 0
                    }
                    name="imageUpload"
                    accept="image/*"
                    onChange={(e) => uploadHandler(e, 3)}
                  />
                  <label
                    htmlFor="img3Upload"
                    disabled={
                      isFetching || uploadingImg || imgs.img2.length === 0
                    }
                  >
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
        <Button
          variant="outlined"
          color="secondary"
          disabled={isFetching}
          onClick={() => resetFields()}
        >
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
          disabled={isFetching}
          onClick={() => addServiceHandler()}
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
