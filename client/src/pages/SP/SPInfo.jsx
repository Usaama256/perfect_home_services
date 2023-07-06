import { Grid, Container, Typography } from "@mui/material";
import SpCompanyProfile from "../../components/sp/account/SpCompanyProfile";
import EditCompanyInfo from "../../components/sp/account/EditCompanyInfo";
import SpOwnerProfile from "../../components/sp/account/SpOwnerProfile";
import { useState } from "react";
import EditOwnerInfo from "../../components/sp/account/EditOwnerInfo";
import SpAccountSuspendedPop from "../../components/sp/SpAccountSuspended";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------
const SPInfo = () => {
  const { user } = useSelector((state) => state.user);
  const userActive = user.status === "active";
  const [editMode, setEditMode] = useState({
    company: false,
    owner: false,
  });

  const editModeHandler = (mode) => {
    if (mode === 1) {
      setEditMode({
        company: true,
        owner: false,
      });
    } else if (mode === 0) {
      setEditMode({
        company: false,
        owner: true,
      });
    }
  };

  const closeEditMode = () => {
    setEditMode({
      company: false,
      owner: false,
    });
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Company Information
      </Typography>

      {userActive === false && <SpAccountSuspendedPop />}

      <Grid container spacing={3}>
        {!editMode.company && !editMode.owner && (
          <>
            <Grid item xs={12} md={6} lg={6}>
              <SpCompanyProfile
                editCompany={() => editModeHandler(1)}
                sp={user}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <SpOwnerProfile editOwner={() => editModeHandler(0)} sp={user} />
            </Grid>
          </>
        )}
        {editMode.company && (
          <Grid item xs={12} md={6} lg={12}>
            <EditCompanyInfo closeEditor={() => closeEditMode()} sp={user} />
          </Grid>
        )}
        {editMode.owner && (
          <Grid item xs={12} md={6} lg={12}>
            <EditOwnerInfo closeEditor={() => closeEditMode()} sp={user} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default SPInfo;
