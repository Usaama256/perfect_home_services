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
import { ownerSample } from "../../../store/dummies";
import styled from "styled-components";

const RegOwnerInfo = ({ onNext }) => {
  const SpOwner = ownerSample;

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
      <CardHeader
        subheader="Fields with an asterisk (*) are not optional"
        title="Owner's Info"
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
                    <img
                      src={SpOwner.avator}
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
                  // onChange={() => {}}
                  required
                  // value={SP.title}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Last Name"
                  // onChange={() => {}}
                  required
                  // value={SP.title}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  // onChange={() => {}}
                  required
                  // value={SP.location}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} xs={12} md={6} columns={6}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  // onChange={() => {}}
                  required
                  // value={SP.email[0]}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Phone Number (Primary)"
                  // onChange={() => {}}
                  required
                  // value={SP.tel[0]}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Phone Number (Optional)"
                  // onChange={() => {}}
                  // value={SP.tel[0]}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Self Description"
                  helperText="Not More than 120 words"
                  multiline
                  rows={10}
                  // onChange={() => {}}
                  required
                  // value={SP.desc}
                />
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
              <ArrowForwardIos />
            </SvgIcon>
          }
          onClick={() => onNext()}
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
