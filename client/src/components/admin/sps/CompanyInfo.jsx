import { Block, DomainDisabled, DoneAll, Grading } from "@mui/icons-material";
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
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSPsAdmin } from "../../../redux/apiCalls";
import { myRequest } from "../../../store/requestMethods";
import MyRating from "../../MyRating";
import ActivateSuspendDialog from "./ActivateSuspendDialog";
import ApproveDisapproveDialog from "./ApproveDisapproveDialog";

const CompanyInfo = ({ data, setCurrentSP }) => {
  const { services } = useSelector((state) => state.adminData);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [category, setCategory] = useState(null);
  const [approveDialog, setApproveDialog] = useState(false);
  const [activateDialog, setActivateDialog] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (data && services) {
      setCategory(services.filter((i) => i.id === data.Sid)[0]);
    }
  }, [data, services]);

  //Allows SP to login
  const approveHandler = async () => {
    try {
      enqueueSnackbar("Approving Service Provider", { variant: "info" });
      setIsFetching(true);
      const res = await myRequest.get(`/admin.api/approveSP/${data.SPid}`);
      if (res.status === 200) {
        enqueueSnackbar("SP Approved Successfully", { variant: "success" });
        setCurrentSP(res.data);
        fetchSPsAdmin(dispatch);
      } else {
        enqueueSnackbar("Error: Approval Failed", { variant: "error" });
      }
    } catch (err) {
      enqueueSnackbar("Error: Approval Failed", { variant: "error" });
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
  };
  //Stope SP From logging in
  const disapproveHandler = async () => {
    try {
      enqueueSnackbar("Disapproving Service Provider", { variant: "info" });
      setIsFetching(true);
      const res = await myRequest.get(`/admin.api/disapproveSP/${data.SPid}`);
      if (res.status === 200) {
        enqueueSnackbar("SP Disapproval Successfully", { variant: "success" });
        setCurrentSP(res.data);
        fetchSPsAdmin(dispatch);
      } else {
        enqueueSnackbar("Error: Disapproval Failed", { variant: "error" });
      }
    } catch (err) {
      enqueueSnackbar("Error: Disapproval Failed", { variant: "error" });
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
  };

  //Allows SPs to interract with clients
  const activateHandler = async () => {
    try {
      enqueueSnackbar("Activating Service Provider", { variant: "info" });
      setIsFetching(true);
      const res = await myRequest.get(`/admin.api/activateSP/${data.SPid}`);
      if (res.status === 200) {
        enqueueSnackbar("SP Activated Successfully", { variant: "success" });
        setCurrentSP(res.data);
        fetchSPsAdmin(dispatch);
      } else {
        enqueueSnackbar("Error: Activation Failed", { variant: "error" });
      }
    } catch (err) {
      enqueueSnackbar("Error: Activation Failed", { variant: "error" });
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
  };

  //Stops SPs from being seen by users but can login
  const suspendHandler = async () => {
    try {
      enqueueSnackbar("Suspending Service Provider", { variant: "info" });
      setIsFetching(true);
      const res = await myRequest.get(`/admin.api/suspendSP/${data.SPid}`);
      if (res.status === 200) {
        enqueueSnackbar("SP Suspended Successfully", { variant: "success" });
        setCurrentSP(res.data);
        fetchSPsAdmin(dispatch);
      } else {
        enqueueSnackbar("Error: Suspending Failed", { variant: "error" });
      }
    } catch (err) {
      enqueueSnackbar("Error: Suspending Failed", { variant: "error" });
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
  };

  return (
    <Card>
      <CardHeader
        subheader="The information can not be edited!!"
        title="Company Info"
      />
      {approveDialog && (
        <ApproveDisapproveDialog
          open={approveDialog}
          setOpen={setApproveDialog}
          approved={parseInt(data.approved, 10) === 1}
          approveFn={() => approveHandler()}
          disapproveFn={() => disapproveHandler()}
        />
      )}
      {activateDialog && (
        <ActivateSuspendDialog
          open={activateDialog}
          setOpen={setActivateDialog}
          active={data.status === "active"}
          activateFn={() => activateHandler()}
          suspendFn={() => suspendHandler()}
        />
      )}
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
                  value={data?.title}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Approval Status"
                  InputProps={{ readOnly: true }}
                  value={
                    parseInt(data?.approved, 10) === 1 ? "Approved" : "Pending"
                  }
                  color={
                    parseInt(data?.approved, 10) === 1 ? "success" : "error"
                  }
                  focused
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Account Status"
                  InputProps={{ readOnly: true }}
                  value={data?.status === "active" ? "Active" : "Suspended"}
                  color={data?.status === "active" ? "success" : "error"}
                  focused
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Location"
                  InputProps={{ readOnly: true }}
                  value={data?.location}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} xs={12} md={6} columns={6}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  InputProps={{ readOnly: true }}
                  value={data?.email}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  InputProps={{ readOnly: true }}
                  value={data?.tel}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Category"
                  InputProps={{ readOnly: true }}
                  value={data?.Sname}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Description"
                  // helperText="Not More than 200 words"
                  multiline
                  rows={12}
                  InputProps={{ readOnly: true }}
                  value={data.desc}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "space-between" }}>
        {data.status === "active" ? (
          <Button
            variant="outlined"
            color="error"
            endIcon={<DomainDisabled />}
            onClick={() => setActivateDialog(true)}
            disabled={isFetching}
          >
            Suspend Account
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            endIcon={<Grading />}
            onClick={() => setActivateDialog(true)}
            disabled={isFetching}
          >
            Activate Account
          </Button>
        )}

        {parseInt(data.approved, 10) === 1 ? (
          <Button
            variant="outlined"
            color="error"
            endIcon={<Block />}
            onClick={() => setApproveDialog(true)}
            disabled={isFetching}
          >
            Disapprove Account
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            endIcon={<DoneAll />}
            onClick={() => setApproveDialog(true)}
            disabled={isFetching}
          >
            Approve Account
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CompanyInfo;
