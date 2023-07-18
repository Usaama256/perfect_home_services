import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import GenLayout from "../components/GenLayout";
import { useLocation, useNavigate } from "react-router-dom";
import CompanyCard from "../components/CompanyCard";
import { Tooltip } from "@mui/material";
import { myRequest } from "../store/requestMethods";
import { useSnackbar } from "notistack";
import { SearchSharp } from "@material-ui/icons";
import { Close } from "@mui/icons-material";
import CircularLoader from "../components/CircularLoader";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { LoadingPlaceholder2 } from "../components/LoadingPlaceholder";
import { fetchSPs } from "../redux/apiCalls";

const ServiceProviders = () => {
  const { services } = useSelector((state) => state.services);
  const { sPs, isFetching } = useSelector((state) => state.sPs);
  const sId = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [currentService, setCurrentService] = useState(null);
  const [displayedSPs, setDisplayedSPs] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  //Setting SPs
  useEffect(() => {
    if (sId && sPs) {
      const tempArr = [];
      sPs.forEach((i, n) => {
        if (parseInt(i.sId, 10) === parseInt(sId, 10)) {
          return tempArr.push(i);
        } else {
          return;
        }
      });
      // console.log(tempArr, sId, sPs);
      setDisplayedSPs(tempArr);
    }
    fetchSPs(dispatch, true, sPs);

    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sId, sPs]);

  //Setting Service
  useEffect(() => {
    if (sId && services) {
      // console.log(services, sId);
      const index = services.findIndex(
        (item) => parseInt(item.id, 10) === parseInt(sId, 10)
      );
      if (index === -1) {
        navigate("/404");
      } else {
        // console.log(services[index]);
        setCurrentService(services[index]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sId, services]);

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
    <GenLayout title={currentService?.name} nav={true}>
      {/* <SlideContainer>
        <Slider
          images={currentSercvice?.imgs}
          width="100vw"
          height="calc(100vh - 100px)"
          autoplay={true}
          duration={2000}
          dots={false}
        />
      </SlideContainer> */}
      <SPsSection>
        <h1 className="title">{currentService ? currentService.name : ""}</h1>
        <div className="desc">Check Out Our Trusted Service Providers</div>
        <div className="desc-extra">
          "We care for your home like it's our own"
        </div>
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
            <InputLabel id="select-small">Search By</InputLabel>
            <Select
              labelId="select-small"
              id="select-small"
              value=""
              label="filterBy"
              // onChange={(event) => setfilterBy(event.target.value)}
            >
              <MenuItem value="Any">Any</MenuItem>
              <MenuItem value={"Location"}>Location</MenuItem>
            </Select>
          </FormControl>
        </Search>

        {displayedSPs?.length === 0 && !isFetching && (
          <h2 style={{ margin: "20px 0px" }}>No Service Providers Yet</h2>
        )}

        <div className="wrapper">
          {displayedSPs ? (
            displayedSPs?.map((item, index) => {
              return <CompanyCard {...item} key={index} />;
            })
          ) : (
            <>
              {isFetching && (
                <>
                  <LoadingPlaceholder2 />
                  <LoadingPlaceholder2 />
                  <LoadingPlaceholder2 />
                  <LoadingPlaceholder2 />
                  <LoadingPlaceholder2 />
                  <LoadingPlaceholder2 />
                </>
              )}
            </>
          )}
        </div>
      </SPsSection>
    </GenLayout>
  );
};

const SPsSection = styled.div`
  padding: 100px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff4f2;

  .title {
    text-align: center;
    font-size: 40px;
    margin-bottom: 10px;
    color: #aa0000;
  }

  .desc {
    text-align: center;
    font-size: 22px;
    margin-bottom: 10px;
    color: #444;
    width: 70%;
  }

  .desc-extra {
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
    color: #444;
    width: 70%;
  }

  .wrapper {
    width: 78%;
    margin-top: 18px;
    /* padding: 0px 160px; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 480px) {
    .title {
      text-align: center;
    }

    .desc {
      width: 90%;
    }
    .wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const Search = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #666;
  gap: 1rem;
  padding: 6px 10px;
  margin-top: 18px;
  border-radius: 6px;
  svg {
    color: #aa0000;
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

export default ServiceProviders;
