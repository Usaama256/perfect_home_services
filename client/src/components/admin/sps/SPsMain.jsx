import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography, Tooltip, Card } from "@mui/material";

import { SearchSharp } from "@material-ui/icons";
import { Close } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styled from "styled-components";
import { useSnackbar } from "notistack";
import { myRequest } from "../../../store/requestMethods";
import { useState } from "react";
import CircularLoader from "../../CircularLoader";
import { servicesArr } from "../../../store/services";
import { dummySPs } from "../../../store/dummies";
import CompanyCard from "./CompanyCard";
// import { myRequest } from "../../store/requestMethods";
// import { servicesArr } from "../../store/services";
// import CircularLoader from "../../components/CircularLoader";
// import { dummySPs } from "../../store/dummies";
// import CompanyCard from "../../components/admin/sps/CompanyCard";

// ----------------------------------------------------------------------
const SPsMain = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [searchTxt, setSearchTxt] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  const searchHandler = async (txt) => {
    const ctrl = new AbortController();
    try {
      if (txt?.length > 1) {
        setSearching(true);
        const res = await myRequest.get(``, {
          signal: ctrl.signal,
        });
        if (res.status === 200) {
          setSearchMode(true);
          setSearchResults(res.data.filtered);
        } else {
          console.log("Search Failed: E42174");
          enqueueSnackbar("Search Failed: E42174", { variant: "error" });
        }
      } else {
        enqueueSnackbar("Search with at least 2 characters", {
          variant: "warning",
        });
      }
    } catch (error) {
      console.error("Error: Search Failed");
      enqueueSnackbar("Error: Search Failed", { variant: "error" });
      if (error.response) {
        console.log(error.response, error.message);
        enqueueSnackbar(error.response.data, { variant: "error" });
      } else if (error.request) {
        if (error.request.status) {
          console.error(error.message, error.request);
          enqueueSnackbar(error.request.response, { variant: "error" });
        } else {
          console.log(error.request, error.message);
          enqueueSnackbar("Connection Failed Or Refused", {
            variant: "error",
          });
        }
      } else {
        console.log(error.message);
        enqueueSnackbar(error.message, { variant: "error" });
      }
    } finally {
      setSearching(false);
    }
    return () => ctrl.abort();
  };

  const onSearching = (e) => {
    const str = e.target.value;
    if (e.key === "Enter") {
      if (str?.length > 1) {
        searchHandler(str);
      } else {
        setSearchMode(false);
      }
    }
    if (e.key === "Escape") {
      setSearchMode(false);
    }
  };

  const searchBtnHandler = () => {
    if (searchTxt.length > 1) {
      searchHandler(searchTxt);
    } else {
      return;
    }
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Service Providers
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Search>
            <input
              type="search"
              placeholder="Search"
              onKeyDown={(e) => onSearching(e)}
              onChange={(e) => setSearchTxt(e.target.value)}
            />
            {searching ? (
              <CircularLoader size={25} color="primary" />
            ) : (
              <>
                {!searchMode && (
                  <SearchSharp
                    style={{ cursor: "pointer" }}
                    onClick={() => searchBtnHandler()}
                  />
                )}
              </>
            )}
            {!searching && searchMode && (
              <Tooltip title="Close Search" arrow>
                <Close
                  onClick={() => setSearchMode(false)}
                  style={{ color: "red" }}
                />
              </Tooltip>
            )}
            <FormControl
              sx={{ m: 1, width: "100%", margin: "10px 0px", flex: 1 }}
              size="small"
            >
              <InputLabel id="select-small">Filter By</InputLabel>
              <Select
                labelId="select-small"
                id="select-small"
                value={"All"}
                label="Filter By"
                // onChange={(event) => setfilterBy(event.target.value)}
              >
                <MenuItem value="All">All</MenuItem>
                {servicesArr.map((i, n) => {
                  return (
                    <MenuItem value={i.name} key={i.id}>
                      {i.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Search>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Card style={{ padding: "10px" }}>
            <Grid container spacing={3} xs={12} md={12} lg={12}>
              {[...dummySPs, ...dummySPs].map((item, index) => {
                return (
                  <Grid item xs={12} md={12} lg={4}>
                    <CompanyCard {...item} key={index} />
                  </Grid>
                );
              })}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #666;
  gap: 1rem;
  padding: 6px 10px;
  margin-top: 18px;
  border-radius: 6px;
  svg {
    color: #184aff;
    cursor: pointer;
    &:hover {
      color: #666;
    }
  }
  input {
    flex: 3;
    background-color: transparent;
    border: 0.4px solid #345;
    border-radius: 4px;
    padding: 10px;
    color: #666;
    letter-spacing: 0.2rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #666;
      font-family: "Montserrat", sans-serif;
    }
  }
`;
export default SPsMain;
