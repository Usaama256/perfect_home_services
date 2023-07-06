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
import { ArrowBackIos, ArrowForwardIos, CameraAlt } from "@mui/icons-material";
import styled from "styled-components";
import { imgFromLocalToBase64 } from "../../../store/base64ImgConverter";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  validateEmail,
  validatePhoneNumber1,
} from "../../../store/otherMethods";
import { useSnackbar } from "notistack";

const RegCompanyInfo = ({ onBack, onNext, spInfo, setSpInfo }) => {
  const { services } = useSelector((state) => state.services);
  const { enqueueSnackbar } = useSnackbar();
  const [middleman, setMiddleman] = useState({
    email: "",
    title: "",
    tel: "",
    location: "",
    desc: "",
    Sid: "",
    logo: "",
  });
  const [service, setService] = useState(null);

  useEffect(() => {
    setMiddleman(spInfo);
    if (spInfo.Sid) {
      const index = services.filter(
        (i) => parseInt(i.id, 10) === parseInt(spInfo.Sid, 10)
      );
      setService(services[index]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spInfo]);

  useEffect(() => {
    if (middleman.Sid) {
      const index = services.filter(
        (i) => parseInt(i.id, 10) === parseInt(middleman.Sid, 10)
      );
      setService(services[index]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [middleman.Sid]);

  //Image change handler
  const editAvatorHandler = (e) => {
    //console.log(e.target.files);
    if (e.target.files?.length > 0) {
      imgFromLocalToBase64(e.target.files[0]).then((base64str) => {
        setMiddleman({ ...middleman, logo: base64str });
      });
    }
    e.target.value = null;
  };

  const onNextHandler = () => {
    console.log(middleman);
    if (
      middleman.email?.length > 6 &&
      middleman.title?.length > 2 &&
      middleman.location?.length > 2 &&
      middleman.tel?.length > 9 &&
      `${middleman.Sid}`?.length > 0 &&
      middleman.desc?.length > 10
    ) {
      if (validateEmail(middleman.email)) {
        if (validatePhoneNumber1(middleman.tel)) {
          setSpInfo(middleman);
          onNext();
        } else {
          enqueueSnackbar("Enter a valid email phone number", {
            variant: "error",
          });
        }
      } else {
        enqueueSnackbar("Enter a valid email address", { variant: "error" });
      }
    } else {
      enqueueSnackbar("Enter All Fields", { variant: "error" });
    }
  };

  const onBackHandler = () => {
    setSpInfo(middleman);
    onBack();
  };

  const resetFields = () => {
    setMiddleman({
      email: "",
      title: "",
      tel: "",
      location: "",
      desc: "",
      Sid: "",
      pass: "",
      logo: "",
    });
  };

  return (
    <Card>
      <CardHeader
        subheader="Fields with an asterisk (*) are not optional"
        title="Company Info"
      />
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ margin: "20px 0px 10px 0px" }}>
          <Grid container spacing={3} columns={12}>
            <Grid container spacing={1} xs={12} md={6} columns={6}>
              <Grid item xs={12} md={6}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                  padding="0px"
                >
                  <input
                    style={{
                      display: "none",
                    }}
                    type="file"
                    id="logoUpload"
                    disabled={false}
                    name="imageUpload"
                    accept="image/*"
                    onChange={(e) => editAvatorHandler(e)}
                  />
                  <Card
                    style={{
                      overflow: "hidden",
                      // padding: "10px",
                      boxShadow: "0px 2px 5px #0000008e",
                      // borderRadius: "50%",
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 220,
                      width: 220,
                    }}
                  >
                    {middleman.logo && (
                      <img
                        src={middleman.logo}
                        alt="logo"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Card>
                  <label htmlFor="logoUpload">
                    <UploadBtn>
                      Upload Company Logo
                      <SvgIcon size="large">
                        <CameraAlt />
                      </SvgIcon>
                    </UploadBtn>
                  </label>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Name"
                  required
                  value={middleman.title}
                  onChange={(e) =>
                    setMiddleman({ ...middleman, title: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  required
                  value={middleman.location}
                  onChange={(e) =>
                    setMiddleman({ ...middleman, location: e.target.value })
                  }
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} xs={12} md={6} columns={6}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  required
                  value={middleman.email}
                  onChange={(e) =>
                    setMiddleman({ ...middleman, email: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  required
                  value={middleman.tel}
                  onChange={(e) =>
                    setMiddleman({ ...middleman, tel: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl
                  sx={{ m: 1, width: "100%", margin: "0px 0px", flex: 1 }}
                  size="large"
                >
                  <InputLabel id="select-small">Category</InputLabel>
                  <Select
                    labelId="select-small"
                    id="select-small"
                    value={service?.name}
                    label="Category"
                    required
                    onChange={(e) =>
                      setMiddleman({
                        ...middleman,
                        Sid: parseInt(e.target.value.split("+")[1], 10),
                      })
                    }
                  >
                    {services.map((i, n) => {
                      return (
                        <MenuItem value={`${i.name}+${i.id}`} key={i.id}>
                          {i.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Description"
                  helperText="Not More than 120 words"
                  multiline
                  rows={6}
                  required
                  value={middleman.desc}
                  onChange={(e) =>
                    setMiddleman({ ...middleman, desc: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          variant="contained"
          color="inherit"
          startIcon={
            <SvgIcon size="small">
              <ArrowBackIos />
            </SvgIcon>
          }
          onClick={() => onBackHandler()}
        >
          Back
        </Button>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          spacing={3}
        >
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => resetFields()}
          >
            Reset Fields
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={
              <SvgIcon size="small">
                <ArrowForwardIos />
              </SvgIcon>
            }
            onClick={() => onNextHandler()}
          >
            Next
          </Button>
        </Stack>
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

export default RegCompanyInfo;
