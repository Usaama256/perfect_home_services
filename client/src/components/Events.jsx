import React from "react";
import styled from "styled-components";

const Events = () => {
  return (
    <Container id="menu">
      <h1 className="title">Events</h1>
      <div className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </div>
      <div className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </div>
      <div className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </div>
      <div className="wrapper"></div>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 100px);
  padding: 100px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #aa0000;

  .desc {
    text-align: center;
    font-size: 22px;
    color: #444;
    width: 70%;
  }

  .wrapper {
    width: 100%;
    margin-top: 10px;
    display: flex;
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
  }
`;

export default Events;
