import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import GenLayout from "../components/GenLayout";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import { dummySPs } from "../store/dummies";
import { Tooltip } from "@mui/material";
import { useSnackbar } from "notistack";
import Breadcrumb from "../components/Breadcrumb";
import ProgressiveImage from "../components/ProgressiveImage";
import { servicesArr } from "../store/services";
import { laundry, logo_g } from "../store/images";
import { Chat, Email, LocationOn, Phone } from "@material-ui/icons";
import MyRating from "../components/MyRating";
import ViewImgDialog from "../components/ViewImgDialog";
import ButtonPrimary from "../components/ButtonPrimary";
import PricesTb from "../components/PricesTb";

const ServiceProvider = () => {
  // window.scrollTo(0, 0);
  const spId = useLocation().pathname.split("/")[3];
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [currentSP, setCurrentSP] = useState({});
  const [currentService, setCurrentService] = useState({});
  const [rating, setRating] = useState(0);
  const [seeImg, setSeeImg] = useState(false);
  const [seeImgUrl, setSeeImgUrl] = useState("");
  const [seeContacts, setSeeContacts] = useState({
    email: false,
    tel: false,
  });

  //Fetching Selected Service provider
  useEffect(() => {
    const index = dummySPs.findIndex((item) => item.id === spId);
    if (index === -1) {
      navigate("/404");
    } else {
      setCurrentSP(dummySPs[index]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spId]);

  //Fetching Service Details
  useEffect(() => {
    if (currentSP) {
      const index = servicesArr.findIndex((item) => item.id === currentSP.sId);
      if (index === -1) {
        // navigate("/404");
      } else {
        setCurrentService(servicesArr[index]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSP]);

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
                placeholder={logo_g}
                style={{ maxWidth: 200, maxHeight: 200 }}
              />
            </div>
            <div className="details">
              <div className="detail_item">
                <Email />
                &ensp;&ensp;
                {seeContacts.email ? (
                  currentSP?.email?.map((i, n) => {
                    if (n === currentSP?.email?.length - 1) {
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
                  currentSP?.tel?.map((i, n) => {
                    if (n === currentSP?.tel?.length - 1) {
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
              {!isNaN(currentSP?.rating?.value) && (
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
              )}
            </div>
          </div>
          <div className="row3">
            {laundry?.map((i, n) => {
              return (
                <div className="sp_img" key={n}>
                  <ProgressiveImage
                    src={i.src}
                    // placeholder={logo_g}
                    onClick={() => {
                      setSeeImgUrl(i.src);
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
          {/* <div className="row5"></div> */}
          <div className="row6" id="rate_us">
            <h3 className="sub_title"> Rate Us</h3>
            <MyRating setValue={setRating} valueOut={rating} />
            <ButtonPrimary variant="contained">SUBMIT RATING</ButtonPrimary>
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
