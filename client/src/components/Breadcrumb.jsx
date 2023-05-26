import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Breadcrumb = ({ crumbs, ...props }) => {
  const navigate = useNavigate();
  return (
    <Container {...props}>
      {crumbs?.map((i, n) => {
        return (
          <div className="breadcrumb-item" key={n}>
            <span
              className="label"
              onClick={() => i?.link && navigate(i?.link)}
            >
              {i?.name}
            </span>
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #aa0000;
  color: #fff;
  display: flex;
  font-size: 14px;
  position: relative;
  /* padding: 4.28px; */
  margin: 20px 0px;

  .breadcrumb-item {
    padding-left: 15px;
    cursor: pointer;
  }

  .breadcrumb-item:first-child {
    padding-left: 10px;
  }

  .breadcrumb-item .label {
    display: block;
    padding: 8px 15px;
    float: left;
    font-size: 15px;
    text-transform: capitalize;
  }

  .breadcrumb-item::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    transform: rotate(130deg) skew(-8deg);
    float: right;
    position: relative;
    top: 6px;
    left: 15px;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    background-color: #aa0000;
    /* box-shadow: -2px -2px 1px 0px #3f0101; */
  }

  .breadcrumb-item.current,
  .breadcrumb-item.current::after {
    background-color: #0ac0c9;
  }
`;

export default Breadcrumb;
