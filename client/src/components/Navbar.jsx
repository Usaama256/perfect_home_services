import React from "react";
import telephone from "../store/gallery/telephone.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";
import { Tooltip } from "@material-ui/core";
import { signOutUser } from "../redux/apiCalls";
import LoginNavMenu from "./LoginNavMenu";

const Navbar = ({ fixed }) => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCallOrder = () => {
    window.open("tel:256700605769");
  };

  const onOpenAdmin = () => {
    if (user?.level !== "admin") {
    } else {
      navigate("/admin");
    }
  };
  return (
    <Container>
      <div id="topNav" className="nav">
        <div
          className="item"
          style={{ cursor: "pointer" }}
          onClick={() => onCallOrder()}
        >
          <div className="callButton">
            <img src={telephone} alt="" width="32" height="32" />
          </div>
          <div className="texts">
            <div className="text">INQUIRIES!</div>
            <div className="text">+256 7006 05 769</div>
          </div>
        </div>
        <div className="item">
          <ul className="list">
            <li className="listItem" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="listItem">
              <a href="#products" onClick={() => navigate("/")}>
                Services
              </a>
            </li>
            <div className="logo" onClick={() => navigate("/")}>
              Perfect Home Services
            </div>
            <li className="listItem">Events</li>
            {user?.level === "admin" && (
              <li
                className="listItem"
                onClick={() => {
                  onOpenAdmin();
                }}
              >
                Admin
              </li>
            )}
            <li className="listItem">Contact</li>
          </ul>
        </div>
        <div className="item">
          <LoginNavMenu>
            <Tooltip title="Login" arrow>
              <LoginOutlined
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: "30px",
                }}
              />
            </Tooltip>
          </LoginNavMenu>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .nav {
    width: 100vw;
    height: 100px;
    padding: 0px 50px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.33);
    position: absolute;
    top: 150px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
  }

  .fixedNav {
    height: fit-content;
    padding: 5px 50px;
    border-radius: 0;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000c1;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
  }
  .item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item:nth-child(2) {
    flex: 3;
  }

  .item:last-child {
    justify-content: flex-end;
    gap: 15px;
  }

  .callButton {
    background-color: white;
    border-radius: 50%;
    padding: 10px;
    width: 50px;
    height: 50px;
  }

  .texts {
    margin-left: 20px;
    color: white;
  }

  .text:first-child {
    font-size: 12px;
    font-weight: 500;
  }

  .text:last-child {
    font-size: 20px;
    font-weight: bold;
  }

  .list {
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;
    color: white;

    .logo {
      font-size: 45px;
      font-weight: 600;
      font-family: "Inspiration", cursive;
      text-shadow: 2px 2px 6px black;
      margin: 0 20px;
      cursor: pointer;
    }
  }

  .listItem {
    margin: 20px;
    font-weight: 500;
    cursor: pointer;
  }
  .cart {
    position: relative;
  }

  .counter {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #aa0000;
  }

  @media screen and (max-width: 480px) {
    .item:nth-child(2) {
      display: none;
    }

    .item:nth-child(1) {
      flex: 3;
    }
  }
`;
export default Navbar;
