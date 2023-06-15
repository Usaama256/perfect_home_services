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
import { SaveAs } from "@mui/icons-material";

const OwnerInfo = ({ data }) => {
  return (
    <Card>
      <CardHeader
        subheader="The information can not be edited!"
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
                      src={data.avator}
                      alt="logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="First Name"
                  InputProps={{ readOnly: true }}
                  value={data.firstName}
                  sx={{ cursor: "pointer !important" }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Last Name"
                  InputProps={{ readOnly: true }}
                  value={data.lastName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Location"
                  InputProps={{ readOnly: true }}
                  value={data.location}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} xs={12} md={6} columns={6}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  InputProps={{ readOnly: true }}
                  value={data.email[0]}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  InputProps={{ readOnly: true }}
                  value={data.tel[0]}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Description"
                  // helperText="Not More than 200 words"
                  multiline
                  rows={10}
                  value={data.desc}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}></CardActions>
    </Card>
  );
};

export default OwnerInfo;
