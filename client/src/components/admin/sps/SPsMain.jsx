import { Grid, Container, Typography, Tooltip, Card } from "@mui/material";
import { SearchSharp } from "@material-ui/icons";
import { Close } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styled from "styled-components";
import { useSnackbar } from "notistack";
import { useState } from "react";
import CircularLoader from "../../CircularLoader";
import CompanyCard from "./CompanyCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSPsAdmin } from "../../../redux/apiCalls";

// ----------------------------------------------------------------------
const SPsMain = () => {
  const { sps, services } = useSelector((state) => state.adminData);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [displayed, setDisplayed] = useState(null);
  const [filterBy, setfilterBy] = useState("All-0");
  const [searchTxt, setSearchTxt] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  const [searching, setSearching] = useState(false);
  // const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    fetchSPsAdmin(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sps) {
      const Sid = parseInt(filterBy.split("-")[1], 10);
      if (Sid === 0) {
        setDisplayed(sps);
      } else {
        setDisplayed(sps.filter((i) => parseInt(i.Sid, 10) === Sid));
      }
    }
  }, [filterBy, sps]);

  const searchHandler = async (txt) => {
    try {
      if (txt?.length > 1) {
        setSearching(true);
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
                value={filterBy.split("-")[0]}
                label="Filter By"
                onChange={(e) => setfilterBy(e.target.value)}
              >
                <MenuItem value="All-0">All</MenuItem>
                {services?.map((i, n) => {
                  return (
                    <MenuItem value={`${i.name}-${i.Sid}`} key={i.id}>
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
              {displayed?.map((item, index) => {
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
