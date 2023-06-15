import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography, Card } from "@mui/material";
import SpCompanyProfile from "../../components/sp/account/SpCompanyProfile";
import EditCompanyInfo from "../../components/sp/account/EditCompanyInfo";
import SpOwnerProfile from "../../components/sp/account/SpOwnerProfile";
import { useState } from "react";
import EditOwnerInfo from "../../components/sp/account/EditOwnerInfo";

// ----------------------------------------------------------------------
const SPInfo = () => {
  const userActive = false;
  const theme = useTheme();
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

      {userActive === false && (
        <Card
          sx={{
            backgroundColor: "#f6050583",
            width: "100%",
            height: "60px",
            margin: "30px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4">Activation Pending</Typography>
        </Card>
      )}

      <Grid container spacing={3}>
        {!editMode.company && !editMode.owner && (
          <>
            <Grid item xs={12} md={6} lg={6}>
              <SpCompanyProfile editCompany={() => editModeHandler(1)} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <SpOwnerProfile editOwner={() => editModeHandler(0)} />
            </Grid>
          </>
        )}
        {editMode.company && (
          <Grid item xs={12} md={6} lg={12}>
            <EditCompanyInfo closeEditor={() => closeEditMode()} />
          </Grid>
        )}
        {editMode.owner && (
          <Grid item xs={12} md={6} lg={12}>
            <EditOwnerInfo closeEditor={() => closeEditMode()} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default SPInfo;
