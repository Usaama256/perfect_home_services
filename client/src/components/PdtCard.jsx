import React from "react";
import placeholder from "../store/images/clipart2131416.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import ProgressiveImage from "./ProgressiveImage";
import { addItemToCart } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const PdtCard = ({
  prod_id,
  prod_image,
  prod_name,
  prod_price,
  prod_status,
  prod_description,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const addToCart = () => {
    const newCartItem = {
      total_price: prod_price,
      qty: 1,
      prod_id,
      prod_image,
      prod_name,
      prod_price,
      prod_status,
      prod_description,
    };
    //console.log(newCartItem);
    addItemToCart(cart, newCartItem, dispatch);
  };
  return (
    <Container>
      <ProgressiveImage src={prod_image} placeholder={placeholder} />
      {/* <img src={prod_image} alt="" /> */}
      <h1 className="title">{prod_name}</h1>
      <span className="price">UGX {prod_price}</span>
      {/* <div className="desc">{prod_description}</div> */}
      <div className="info">
        <div
          className="icon"
          onClick={() => {
            addToCart();
          }}
        >
          <ShoppingCartOutlined />
        </div>
        <div className="icon">
          <Link to={`/product/${prod_id}`}>
            <SearchOutlined />
          </Link>
        </div>
        <div className="icon" onClick={() => {}}>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 22%;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 20px 40px;
  cursor: pointer;

  img {
    width: 260px;
    height: 260px;
    border-radius: 15px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    color: #d1411e;
  }

  .price {
    font-size: 18px;
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
    cursor: pointer;
    z-index: 3;
  }

  .icon {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin: 10px;
    background-color: white;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    &:hover {
      background-color: #d1421e;
      transform: scale(1.1);
      svg {
        color: white;
      }
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

    .title {
      font-size: 30px;
    }

    .price,
    .desc {
      font-size: 24px;
    }
  }
`;

export default PdtCard;
