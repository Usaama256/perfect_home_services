import { DomainDisabled, Grading } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { servicesArr } from "../../../store/services";
import MyRating from "../../MyRating";

const CompanyInfo = ({ data }) => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    setCategory(servicesArr.filter((i) => i.id === data.sId)[0]);
  }, [data]);
  return (
    <Card>
      <CardHeader
        subheader="The information can not be edited!!"
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
                      src={data.logo}
                      alt="logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Card>
                  <Stack alignItems="center" direction="row">
                    <MyRating
                      valueIn={data.rating?.value}
                      readOnly
                      input={true}
                      sx={{ svg: { color: "#2065d1" } }}
                    />
                    &ensp;({data?.rating?.reviews} Reviews)
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Name"
                  InputProps={{ readOnly: true }}
                  value={data.title}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Account Status"
                  InputProps={{ readOnly: true }}
                  value={
                    data.status === "active" ? "Active" : "Activation Pending"
                  }
                  color={data.status === "active" ? "success" : "error"}
                  focused
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
                  label="Category"
                  InputProps={{ readOnly: true }}
                  value={category?.name}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Description"
                  // helperText="Not More than 200 words"
                  multiline
                  rows={10}
                  InputProps={{ readOnly: true }}
                  value={data.desc}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        {data.status === "active" ? (
          <Button variant="outlined" color="error" endIcon={<DomainDisabled />}>
            Disable Account
          </Button>
        ) : (
          <Button variant="contained" color="success" endIcon={<Grading />}>
            Activate Account
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CompanyInfo;
