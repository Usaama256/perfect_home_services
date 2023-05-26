import React from "react";
import styled from "styled-components";

const ButtonPrimary = ({ children, variant, ...props }) => {
  if (variant === "contained") {
    return <BtnContained {...props}>{children}</BtnContained>;
  } else {
    return <BtnOutlined {...props}>{children}</BtnOutlined>;
  }
};

const BtnContained = styled.button`
  margin-top: 10px 10px;
  padding: 5px 10px;
  font-size: 1rem;
  transition: all 0.3s linear;
  background-color: #aa0000;
  border: 1.5px solid #aa0000;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0);
    border: 1.5px solid #aa0000;
    color: #aa0000;
  }
`;

const BtnOutlined = styled.button`
  margin-top: 10px 10px;
  padding: 5px 10px;
  font-size: 1rem;
  transition: all 0.3s linear;
  background-color: rgba(0, 0, 0, 0);
  border: 1.5px solid #aa0000;
  color: #aa0000;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #aa0000;
    border: 1.5px solid #aa0000;
    color: #fff;
  }
`;

export default ButtonPrimary;
