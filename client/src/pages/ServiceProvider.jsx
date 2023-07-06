import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import GenLayout from "../components/GenLayout";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { useSnackbar } from "notistack";
import Breadcrumb from "../components/Breadcrumb";
import ProgressiveImage from "../components/ProgressiveImage";
import MyRating from "../components/MyRating";
import ViewImgDialog from "../components/ViewImgDialog";
import ButtonPrimary from "../components/ButtonPrimary";
import PricesTb from "../components/PricesTb";
import { useSelector } from "react-redux";
import { myRequest } from "../store/requestMethods";
import { Call, Email, LocationOn, Phone, Send } from "@mui/icons-material";
import ReviewCard from "../components/ReviewCard";

const ServiceProvider = () => {
  const { services } = useSelector((state) => state.services); //All Services from redux state
  const { sPs } = useSelector((state) => state.sPs); //All SPd from redux state
  const { user } = useSelector((state) => state.user); //Current User from redux state
  const SPid = parseInt(useLocation().pathname.split("/")[3], 10); //SP id from url
  const navigate = useNavigate(); //Dynamic page transition
  const { enqueueSnackbar } = useSnackbar(); //For User feedback popups
  const [currentSP, setCurrentSP] = useState(null); //current SP useState
  const [currentService, setCurrentService] = useState(null); //current service useState
  const [spImgs, setSpImgs] = useState(null); //SP images useState
  const [oldRating, setOldRating] = useState(null); //useState for initial SP rating value
  const [newRating, setNewRating] = useState(0); //useState for new SP rating value
  const [isRating, setIsRating] = useState(false); //useState for Rating fetch status
  const [ratedAlready, setRatedAlready] = useState(false); //useState for if current user already rated
  const [userComments, setUsercomments] = useState(null); //useState for all SP Comments from users
  const [userComment, setUserComment] = useState(null); //useState for Rating from current user
  const [isCommenting, setIsCommenting] = useState(false); //useState for fetching current user comment
  const [commentedAlready, setCommentedAlready] = useState(false); //useState for if current user already commented
  const [isCallReq, setIsCallReq] = useState(false);
  const [callReqAlready, setCallReqAlready] = useState(false);
  const [seeImg, setSeeImg] = useState(false);
  const [seeImgUrl, setSeeImgUrl] = useState(null);
  const [seeContacts, setSeeContacts] = useState({
    email: false,
    tel: false,
  });

  //Fetching Selected Service provider
  useEffect(() => {
    if (sPs) {
      const index = sPs.findIndex((item) => item.id === SPid);
      if (index === -1) {
        navigate("/404");
      } else {
        setCurrentSP(sPs[index]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SPid]);

  //Fetching Service Details and SP images
  useEffect(() => {
    if (currentSP && services) {
      //SP Service Category
      const index = services.findIndex((item) => item.id === currentSP.sId);
      if (index === -1) {
        // navigate("/404");
      } else {
        setCurrentService(services[index]);
      }
      //SP Rating
      setOldRating(currentSP.rating);
      //SP Service Images
      const tempImgs = [];
      currentSP.pricing?.forEach((i) => {
        i.images?.forEach((img) => {
          tempImgs.push(img);
        });
      });
      setSpImgs(tempImgs);
      //Fetching SP Comments
      fetchSpComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSP]);

  //Submit Rating
  const onSubmitRate = async () => {
    if (user.type === "client") {
      if (newRating > 0 && isRating === false && ratedAlready === false) {
        try {
          setIsRating(true);
          const res = await myRequest.post(
            `/user.api/rateSp/${SPid}/${newRating}`
          );
          if (res.status === 200) {
            setOldRating(res.data);
            enqueueSnackbar("Rate Sumbitted Successfully", {
              variant: "success",
            });
            setRatedAlready(true);
          }
        } catch (err) {
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
          enqueueSnackbar("Rating Failed", { variant: "error" });
          setIsRating(false);
        }
      }
    } else {
      enqueueSnackbar("Only Clients Can Rate Service Providers", {
        variant: "warning",
      });
      enqueueSnackbar("Login As Client", {
        variant: "info",
      });
    }
  };

  //Submit Call Request
  const onRequestSPcall = async () => {
    if (user.type === "client") {
      try {
        setIsCallReq(true);
        const reqBody = { type: "tel", time: new Date().toISOString() };
        const res = await myRequest.post(
          `/user.api/contactAttempt/${user.Uid}/${SPid}`,
          reqBody
        );
        if (res.status === 200) {
          enqueueSnackbar("Call Request Sumbitted Successfully", {
            variant: "success",
          });
          setCallReqAlready(true);
        }
      } catch (err) {
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
        enqueueSnackbar("Call Request Failed", { variant: "error" });
        setIsCallReq(false);
      }
    } else {
      enqueueSnackbar("Only Clients Can Request Calls", {
        variant: "warning",
      });
      enqueueSnackbar("Login As Client", {
        variant: "info",
      });
    }
  };

  //Fetch SP Comments
  const fetchSpComments = async () => {
    try {
      const res = await myRequest.get(`/user.api/fetchSpComments/${SPid}`);
      if (res.status === 200) {
        setUsercomments(res.data);
      }
    } catch (err) {
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
    }
  };

  //Submit user comment on SP
  const onSubmitComment = async () => {
    if (userComment?.length > 3) {
      if (user.type === "client") {
        try {
          setIsCommenting(true);
          const reqBody = { comment: userComment };
          const res = await myRequest.post(
            `/user.api/commentOnsp/${user.Uid}/${SPid}`,
            reqBody
          );
          if (res.status === 200) {
            fetchSpComments();
            enqueueSnackbar("Comment Sumbitted Successfully", {
              variant: "success",
            });
            setUserComment("");
            setCommentedAlready(true);
          }
        } catch (err) {
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
          enqueueSnackbar("Commenting Failed", {
            variant: "error",
          });
        } finally {
          setIsCommenting(false);
        }
      } else {
        enqueueSnackbar("Only Clients Can Comment", {
          variant: "warning",
        });
        enqueueSnackbar("Login As Client", {
          variant: "info",
        });
      }
    }
  };

  //See SP's Contacts Handler
  const seeContactsHandler = (type) => {
    if (type === 1) {
      setSeeContacts({
        ...seeContacts,
        email: true,
      });
    } else if (type === 0) {
      setSeeContacts({
        ...seeContacts,
        tel: true,
      });
    }
    return;
  };

  //SP Call Handler
  const onCallSP = (tel) => {
    window.open(`tel:${tel}`);
  };
  //SP email Handler
  const onEmailSP = (email) => {
    window.open(`mailto:${email}`);
  };

  return (
    <GenLayout title={currentSP?.title} nav={true}>
      <Container>
        {seeImg && (
          <ViewImgDialog open={seeImg} setOpen={setSeeImg} url={seeImgUrl} />
        )}
        <Breadcrumb
          style={{ width: "80%" }}
          crumbs={[
            { name: "Home", link: "/home" },
            {
              name: currentService
                ? `${currentService.name}`
                : "Service Providers",
              link: currentService ? `/service/${currentService.id}` : "",
            },
            { name: currentSP?.title, link: "" },
          ]}
        />
        <div className="wrapper">
          <div className="row1">
            <h1 className="title">{currentSP?.title}</h1>
            <div className="desc">{currentSP?.desc}</div>
          </div>
          <div className="row2">
            <div className="company_logo">
              <ProgressiveImage
                src={currentSP?.logo}
                // placeholder={logo_g}
                style={{ maxWidth: 200, maxHeight: 200 }}
              />
            </div>
            <div className="details">
              <div className="detail_item">
                <Email />
                &ensp;&ensp;
                {seeContacts.email ? (
                  [currentSP?.email].map((i, n) => {
                    if (n === [currentSP?.email].length - 1) {
                      return (
                        <span key={n} onClick={() => onEmailSP(i)}>
                          {i}.
                        </span>
                      );
                    } else {
                      return (
                        <span key={n} onClick={() => onEmailSP(i)}>
                          {i},&ensp;
                        </span>
                      );
                    }
                  })
                ) : (
                  <span onClick={() => seeContactsHandler(1)}>
                    Click to reveal email(s)
                  </span>
                )}
              </div>

              <div className="detail_item">
                <Phone />
                &ensp;&ensp;
                {seeContacts.tel ? (
                  [currentSP?.tel].map((i, n) => {
                    if (n === [currentSP?.tel].length - 1) {
                      return (
                        <span key={n} onClick={() => onCallSP(i)}>
                          {i}.
                        </span>
                      );
                    } else {
                      return (
                        <span key={n} onClick={() => onCallSP(i)}>
                          {i},&ensp;
                        </span>
                      );
                    }
                  })
                ) : (
                  <span onClick={() => seeContactsHandler(0)}>
                    Click to reveal contact(s)
                  </span>
                )}
              </div>
              <div className="detail_item">
                <LocationOn />
                &ensp;&ensp;{currentSP?.location}
              </div>
              {oldRating && (
                <a href="#rate_us">
                  <div className="detail_item">
                    <MyRating
                      valueIn={parseInt(oldRating.value, 10)}
                      readOnly
                      input={true}
                    />
                    &ensp;({oldRating.reviews} Reviews)
                  </div>
                </a>
              )}
              <div className="detail_item">
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  startIcon={<Call />}
                  onClick={() => onRequestSPcall()}
                  disabled={callReqAlready || isCallReq}
                >
                  <Typography variant="h5" style={{ color: "#aa0000" }}>
                    Request Call
                  </Typography>
                </Button>
              </div>
              {/* {!isNaN(currentSP?.rating?.value) && (
                <a href="#rate_us">
                  <div className="detail_item">
                    <MyRating
                      valueIn={currentSP?.rating?.value}
                      readOnly
                      input={true}
                    />
                    &ensp;({currentSP?.rating?.reviews} Reviews)
                  </div>
                </a>
              )} */}
            </div>
          </div>
          <div className="row3">
            {spImgs?.map((i, n) => {
              return (
                <div className="sp_img" key={n}>
                  <ProgressiveImage
                    src={i}
                    // placeholder={logo_g}
                    onClick={() => {
                      setSeeImgUrl(i);
                      setSeeImg(true);
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="row4">
            <h3 className="sub_title">Pricing</h3>
            <PricesTb data={currentSP?.pricing} />
          </div>
          <div className="row5">
            <h3 className="sub_title">Comments</h3>
            {userComments ? (
              userComments?.map((i, n) => {
                return (
                  <ReviewCard
                    key={n}
                    review={i}
                    userId={user.type === "client" ? user.Uid : "90923467"}
                    SPid={SPid}
                    setComments={() => fetchSpComments()}
                  />
                );
              })
            ) : (
              <Typography variant="h5">No Comments Yet</Typography>
            )}
            <Card style={{ width: "100%" }}>
              <CardHeader title="Give Your Comment" />
              <CardContent sx={{ pt: 0 }}>
                <Box>
                  <Grid container spacing={3} columns={12}>
                    <Grid item xs={12} md={12}>
                      <br />
                      <TextField
                        fullWidth
                        label="Comment"
                        helperText="Not More than 200 words"
                        multiline
                        rows={6}
                        disabled={isCommenting || commentedAlready}
                        onChange={(e) => setUserComment(e.target.value)}
                        value={userComment}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
              <Divider />
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={
                    <SvgIcon size="small">
                      <Send />
                    </SvgIcon>
                  }
                  disabled={isCommenting || commentedAlready}
                  onClick={() => onSubmitComment()}
                >
                  Submit
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="row6" id="rate_us">
            <h3 className="sub_title"> Rate Us</h3>
            <MyRating
              setValue={setNewRating}
              valueOut={newRating}
              disabled={ratedAlready || isRating}
            />
            <ButtonPrimary
              variant="contained"
              disabled={ratedAlready || isRating}
              onClick={() => onSubmitRate()}
            >
              SUBMIT RATING
            </ButtonPrimary>
          </div>
        </div>
      </Container>
    </GenLayout>
  );
};

const Container = styled.div`
  padding: 50px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff4f2;

  .wrapper {
    width: 78%;
    height: 100%;
    margin-top: 18px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    gap: 25px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    }

    .row1 {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .title {
        text-align: center;
        font-size: 40px;
        margin-bottom: 16px;
        color: #aa0000;
      }
      .desc {
        text-align: center;
        font-size: 22px;
        color: #444;
        width: 80%;
      }
    }

    .row2 {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;

      .company_logo {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        /* padding-right: 40px; */
        overflow: hidden;
      }

      .details {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        gap: 10px;

        .detail_item {
          display: flex;
          align-items: center;
        }

        span {
          cursor: pointer;

          &:hover {
            color: #aa0000;
          }
        }

        svg {
          color: #aa0000;
        }
      }
    }

    .row3 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;

      .sp_img {
        width: 360px;
        height: 360px;
        border-radius: 6px;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        overflow: hidden;

        img {
          object-fit: cover;
          border-radius: 6px;
          width: 100%;
          height: 100%;
        }
        &:hover {
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
        }
      }
    }

    .row4 {
      width: 100%;
      padding: 20px;
      border-radius: 6px;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

      &:hover {
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
      }

      .sub_title {
        font-size: 24px;
        color: #444;
      }
    }

    .row5 {
      width: 100%;
      padding: 20px;
      border-radius: 6px;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

      &:hover {
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
      }

      .sub_title {
        font-size: 24px;
        color: #444;
      }
    }

    .row6 {
      width: 100%;
      padding: 20px;
      border-radius: 6px;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

      &:hover {
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
      }

      .sub_title {
        font-size: 24px;
        color: #444;
      }
    }
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

export default ServiceProvider;
