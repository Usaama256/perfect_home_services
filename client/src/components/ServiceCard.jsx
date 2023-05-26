import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Explore } from "@material-ui/icons";
import { Button } from "@mui/material";
import Slider from "./Slider";

const ServiceCard = ({ id, name, desc, imgs }) => {
  const navigate = useNavigate();
  return (
    <Container>
      {/* <ProgressiveImage src={imgs[0].src} /> */}
      <Slider
        images={imgs}
        width="100%"
        height="320px"
        autoplay={true}
        duration={5000}
        dots={false}
        style={{ borderRadius: "15px" }}
      />
      <h1 className="title">{name}</h1>
      <span className="desc">{desc}</span>
      <div className="info">
        <div className="btnCont">
          <Button
            onClick={() => navigate(`/service/${id}`)}
            variant="outlined"
            color="primary"
            endIcon={<Explore />}
          >
            Explore
          </Button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 20px 40px;
  /* cursor: pointer; */

  /* img {
    width: 100%;
    height: 320px;
    border-radius: 15px;
  } */
  .title {
    margin-top: 15px;
    font-size: 20px;
    font-weight: bold;
    color: #aa0000;
  }

  .desc {
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #666;
  }

  .desc {
    text-align: center;
    color: #777;
    font-size: 16px;
  }

  .info {
    opacity: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    /* cursor: pointer; */
    z-index: 3;

    .btnCont {
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.642);
      border-radius: 6px;
    }
  }

  &:hover {
    .info {
      opacity: 1;
    }
    .icon {
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;

    .info {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.102);
    }

    .title {
      font-size: 16px;
    }

    .desc {
      font-size: 14px;
    }
  }
`;

export default ServiceCard;
