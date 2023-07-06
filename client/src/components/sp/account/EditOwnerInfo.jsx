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
import { CameraAlt, Close, SaveAs } from "@mui/icons-material";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useSnackbar } from "notistack";

const EditOwnerInfo = ({ closeEditor, sp }) => {
  const { owner } = sp;
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
    setMiddleman({
      position: owner.position,
      firstName: owner.firstName,
      lastName: owner.lastName,
      location: owner.location,
      email: owner.email,
      tel: owner.tel,
      desc: owner.desc,
      avator: owner.avator,
    });
  }, [owner]);

  //Image change handler
  const editAvatorHandler = (e) => {
    //console.log(e.target.files);
    if (e.target.files.length !== 0) {
    }
    e.target.value = null;
  };

  const resetFields = () => {
    setMiddleman({
      position: owner.position,
      firstName: owner.firstName,
      lastName: owner.lastName,
      location: owner.location,
      email: owner.email,
      tel: owner.tel,
      desc: owner.desc,
      avator: owner.avator,
    });
  };

  const closeHandler = () => {
    resetFields();
    closeEditor();
  };

  return (
    <Card>
      <CardHeader
        subheader="The information can be edited"
        title="Edit Owner's Info"
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
                    id="admiImageUpload"
                    disabled={false}
                    name="imageUpload"
                    accept="image/*"
                    onChange={editAvatorHandler}
                  />
                  <Card
                    style={{
                      overflow: "hidden",
                      padding: "10px",
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
                    <img
                      src={middleman.avator && middleman.avator}
                      alt="logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
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
                  label="Description"
                  helperText="Not More than 200 words"
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
          </Grid>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          color="error"
          endIcon={
            <SvgIcon size="small">
              <Close />
            </SvgIcon>
          }
          onClick={() => closeHandler()}
        >
          Close Editor
        </Button>
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
              <SaveAs />
            </SvgIcon>
          }
          onClick={() =>
            enqueueSnackbar("Our Team Is Working On It", { variant: "info" })
          }
        >
          Save details
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

export default EditOwnerInfo;
