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
import { ArrowForwardIos, CameraAlt } from "@mui/icons-material";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import {
  validateEmail,
  validatePhoneNumber1,
} from "../../../store/otherMethods";
import { imgFromLocalToBase64 } from "../../../store/base64ImgConverter";

const RegOwnerInfo = ({ onNext, spOwner, setSPowner }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [middleman, setMiddleman] = useState({
    position: "",
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    tel: "",
    desc: "",
    avator: "",
  });

  useEffect(() => {
    setMiddleman(spOwner);
  }, [spOwner]);

  const onHandleNext = () => {
    // console.log(middleman);
    if (
      // middleman.position?.length > 1 &&
      middleman.firstName?.length > 1 &&
      middleman.lastName?.length > 1 &&
      middleman.location?.length > 2 &&
      middleman.email?.length > 6 &&
      middleman.tel?.length > 9 &&
      middleman.desc?.length > 10
    ) {
      if (validateEmail(middleman.email)) {
        if (validatePhoneNumber1(middleman.tel)) {
          setSPowner(middleman);
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

  //Image change handler
  const editAvatorHandler = (e) => {
    //console.log(e.target.files);
    if (e.target.files?.length > 0) {
      imgFromLocalToBase64(e.target.files[0]).then((base64str) => {
        setMiddleman({ ...middleman, avator: base64str });
      });
    }
    e.target.value = null;
  };

  const resetFields = () => {
    setMiddleman({
      position: "",
      firstName: "",
      lastName: "",
      location: "",
      email: "",
      tel: "",
      desc: "",
      avator: "",
    });
  };

  return (
    <Card>
      <CardHeader
        subheader="Fields with an asterisk (*) are not optional"
        title="Owner's Info"
      />
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ margin: "20px 0px 10px 0px" }}>
          <Stack flexDirection="row" justifyContent="center" gap={2}>
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
                    id="admiImageUpload"
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
                    {middleman.avator && (
                      <img
                        src={middleman.avator}
                        alt="logo"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Card>
                  <label htmlFor="admiImageUpload">
                    <UploadBtn>
                      Upload DP
                      <SvgIcon size="large">
                        <CameraAlt />
                      </SvgIcon>
                    </UploadBtn>
                  </label>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="First Name"
                  required
                  value={middleman.firstName}
                  onChange={(e) =>
                    setMiddleman({
                      ...middleman,
                      firstName: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Last Name"
                  required
                  value={middleman.lastName}
                  onChange={(e) =>
                    setMiddleman({
                      ...middleman,
                      lastName: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Location"
                  helperText="Include your Country, district, division and village"
                  name="location"
                  required
                  value={middleman.location}
                  onChange={(e) =>
                    setMiddleman({
                      ...middleman,
                      location: e.target.value,
                    })
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
                    setMiddleman({
                      ...middleman,
                      email: e.target.value,
                    })
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
                    setMiddleman({
                      ...middleman,
                      tel: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Self Description"
                  helperText="Not More than 120 words"
                  multiline
                  rows={10}
                  required
                  value={middleman.desc}
                  onChange={(e) =>
                    setMiddleman({
                      ...middleman,
                      desc: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
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
          onClick={() => onHandleNext()}
        >
          Next
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

export default RegOwnerInfo;
