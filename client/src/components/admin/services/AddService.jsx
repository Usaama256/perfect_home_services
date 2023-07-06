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
import { imgFromLocalToBase64 } from "../../../store/base64ImgConverter";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { myRequest } from "../../../store/requestMethods";
import { fetchServicesAdmin } from "../../../redux/apiCalls";

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

const AddService = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [isFetching, setIsFetching] = useState(false);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [newService, setNewService] = useState({
    Sname: "",
    desc: "",
  });
  const [imgs, setImgs] = useState({
    one: "",
    two: "",
    three: "",
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
          setImgs({ ...imgs, one: base64Str });
          setUploadingImg(false);
          enqueueSnackbar("Image 1 Uploaded Successfully", {
            variant: "success",
          });
        } else if (n === 2) {
          setImgs({ ...imgs, two: base64Str });
          setUploadingImg(false);
          enqueueSnackbar("Image 2 Uploaded Successfully", {
            variant: "success",
          });
        } else if (n === 3) {
          setImgs({ ...imgs, three: base64Str });
          setUploadingImg(false);
          enqueueSnackbar("Image 3 Uploaded Successfully", {
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
      if (newService.Sname < 2) {
        enqueueSnackbar("Enter A Valid Service Name", { variant: "error" });
      } else {
        try {
          enqueueSnackbar("Please wait while adding the New Service", {
            variant: "info",
          });
          setIsFetching(true);
          const res = await myRequest.post(`/admin.api/addService`, {
            ...newService,
            imgsArr: [
              imgs.one ? imgs.one : "",
              imgs.two ? imgs.two : "",
              imgs.three ? imgs.three : "",
            ],
          });
          if (res.status === 200) {
            enqueueSnackbar("Service Added Successfully", {
              variant: "success",
            });
            resetFields();
            fetchServicesAdmin(dispatch);
          } else {
            enqueueSnackbar("Error: Service Not Added", { variant: "error" });
          }
        } catch (err) {
          enqueueSnackbar("Error: Service Not Added", { variant: "error" });
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
    setNewService({
      Sname: "",
      desc: "",
      imgsArr: [],
    });
    setImgs({
      one: "",
      two: "",
      three: "",
    });
  };

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
                required
                value={newService.Sname}
                onChange={(e) =>
                  setNewService({ ...newService, Sname: e.target.value })
                }
                disabled={isFetching}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                label="Description"
                helperText="Not More than 100 words"
                multiline
                rows={4}
                value={newService.desc}
                onChange={(e) =>
                  setNewService({ ...newService, desc: e.target.value })
                }
                disabled={isFetching}
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
                    {imgs.one && (
                      <img
                        src={imgs.one}
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
                    <UploadBtn disabled={isFetching || uploadingImg}>
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
                    {imgs.two && (
                      <img
                        src={imgs.two}
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
                      isFetching || uploadingImg || imgs.one.length === 0
                    }
                    name="imageUpload"
                    accept="image/*"
                    onChange={(e) => uploadHandler(e, 2)}
                  />
                  <label
                    htmlFor="img2Upload"
                    disabled={
                      isFetching || uploadingImg || imgs.one.length === 0
                    }
                  >
                    <UploadBtn
                      disabled={
                        isFetching || uploadingImg || imgs.one.length === 0
                      }
                    >
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
                    {imgs.three && (
                      <img
                        src={imgs.three}
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
                      isFetching || uploadingImg || imgs.two.length === 0
                    }
                    name="imageUpload"
                    accept="image/*"
                    onChange={(e) => uploadHandler(e, 3)}
                  />
                  <label
                    htmlFor="img3Upload"
                    disabled={
                      isFetching || uploadingImg || imgs.two.length === 0
                    }
                  >
                    <UploadBtn
                      disabled={
                        isFetching || uploadingImg || imgs.two.length === 0
                      }
                    >
                      Upload Image Three
                      <SvgIcon size="large">
                        <CameraAlt />
                      </SvgIcon>
                    </UploadBtn>
                  </label>
                </Stack>
              </Grid>
              {/* <Grid item xs={12} md={4} columns={4}>
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
              </Grid> */}
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => resetFields()}
          disabled={isFetching}
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
          onClick={() => addServiceHandler()}
          disabled={isFetching}
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
