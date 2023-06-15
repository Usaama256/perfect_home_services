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
import { dummySPs } from "../../../store/dummies";
import styled from "styled-components";
import { servicesArr } from "../../../store/services";

const RegCompanyInfo = ({ onBack, onNext }) => {
  const SP = dummySPs[0];

  //Image change handler
  const editAvatorHandler = (e) => {
    //console.log(e.target.files);
    if (e.target.files.length !== 0) {
    }
    e.target.value = null;
  };

  const resetFields = () => {};

  const closeHandler = () => {
    resetFields();
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
                      src={SP.logo}
                      alt="logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
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
                <FormControl
                  sx={{ m: 1, width: "100%", margin: "0px 0px", flex: 1 }}
                  size="large"
                >
                  <InputLabel id="select-small">Category</InputLabel>
                  <Select
                    labelId="select-small"
                    id="select-small"
                    value={servicesArr[0].name}
                    label="currency"
                    required
                    // onChange={(event) => setCurrency(event.target.value)}
                  >
                    {servicesArr.map((i, n) => {
                      return (
                        <MenuItem value={i.name} key={i.id}>
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
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          variant="contained"
          color="inherit"
          startIcon={
            <SvgIcon size="small">
              <ArrowBackIos />
            </SvgIcon>
          }
          onClick={() => onBack()}
        >
          Back
        </Button>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          spacing={3}
        >
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
