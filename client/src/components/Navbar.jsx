import React from "react";
import telephone from "../store/images/telephone.png";
import cartImg from "../store/images/cart.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";
import { Tooltip } from "@material-ui/core";
import { signOutUser } from "../redux/apiCalls";

const Navbar = () => {
  const cartNo = useSelector((state) => state.cart.number);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCallOrder = () => {
    window.open("tel:256750781781");
  };

  const onOpenAdmin = () => {
    if (user?.level !== "admin") {
    } else {
      navigate("/admin");
    }
  };
  return (
    <Container>
      <div
        className="item"
        style={{ cursor: "pointer" }}
        onClick={() => onCallOrder()}
      >
        <div className="callButton">
          <img src={telephone} alt="" width="32" height="32" />
        </div>
        <div className="texts">
          <div className="text">ORDER NOW!</div>
          <div className="text">256 7507 81 781</div>
        </div>
      </div>
      <div className="item">
        <ul className="list">
          <li className="listItem" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="listItem">
            <a href="#products" onClick={() => navigate("/")}>
              Products
            </a>
          </li>
          <li className="listItem">Menu</li>
          <div className="logo" onClick={() => navigate("/")}>
            Breusa Foods
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
        <div
          className="cart"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/cart")}
        >
          <img src={cartImg} alt="" width="30px" height="30px" />
          {cartNo > 0 && <div className="counter">{cartNo}</div>}
        </div>
        {user ? (
          <div
            className="cart"
            style={{ cursor: "pointer" }}
            onClick={() => {
              signOutUser(dispatch);
            }}
          >
            <Tooltip title="Logout" arrow>
              <LogoutOutlined
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: "30px",
                }}
              />
            </Tooltip>
          </div>
        ) : (
          <div
            className="cart"
            style={{ cursor: "pointer" }}
            onClick={() => false}
          >
            <Tooltip title="Login" arrow>
              <LoginOutlined
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: "30px",
                }}
                onClick={() => navigate("/breusa-auth")}
              />
            </Tooltip>
          </div>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100px;
  padding: 0px 50px;
  background-color: #d1411e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 999;

  .item {
    flex: 1;
    display: flex;
    align-items: center;
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
      margin: 0 0px;
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
    color: #d1411e;
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
