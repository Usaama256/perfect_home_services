import React, { useEffect } from "react";
import { useState } from "react";
import placeholder from "../store/images/clipart2131416.png";
import styled from "styled-components";
// import image from "../store/images/size.png";
// import image2 from "../store/images/pizza.png";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProgressiveImage from "../components/ProgressiveImage";
import { addItemToCart } from "../redux/apiCalls";

const Product = () => {
  window.scrollTo(0, 0);
  const products = useSelector((state) => state.products.data);
  const cart = useSelector((state) => state.cart.items);
  const id = useLocation().pathname.split("/")[2];
  const dispatch = useDispatch();
  const [currentPdt, setCurrentPdt] = useState({});
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    setCurrentPdt(
      products[products.findIndex((item) => item.prod_id === parseInt(id))]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onChangeQty = (e) => {
    const v = e.target.value;
    if (v > 0) {
      setQty(v);
      setTotalPrice(v * currentPdt.prod_price);
      return;
    } else {
      return;
    }
  };
  // const [size, setSize] = useState(0);
  // const pizza = {
  //   id: 1,
  //   img: image2,
  //   name: "CAMPAGNOLA",
  //   price: [19.9, 23.9, 27.9],
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  // };

  const addToCart = () => {
    const newCartItem = {
      total_price: totalPrice ? totalPrice : currentPdt.prod_price,
      qty: parseInt(qty, 10),
      ...currentPdt,
    };
    //console.log(newCartItem);
    addItemToCart(cart, newCartItem, dispatch);
  };

  return (
    <Layout>
      <Container>
        <div className="left">
          <div className="imgContainer">
            <ProgressiveImage
              src={currentPdt?.prod_image}
              placeholder={placeholder}
            />
            {/* <img src={pizza.img} alt="" /> */}
          </div>
        </div>
        <div className="right">
          <h1 className="title">{currentPdt?.prod_name}</h1>
          <span className="price">UGX {currentPdt?.prod_price}</span>
          <p className="desc">{currentPdt?.prod_description}</p>
          {/* <h3 className="choose">Choose the size</h3>
          <div className="sizes">
            <div className="size" onClick={() => setSize(0)}>
              <img src={image} className="sizeS" layout="fill" alt="" />
              <span className="number">Small</span>
            </div>
            <div className="size" onClick={() => setSize(1)}>
              <img src={image} className="sizeM" layout="fill" alt="" />
              <span className="number">Medium</span>
            </div>
            <div className="size" onClick={() => setSize(2)}>
              <img src={image} className="sizeL" layout="fill" alt="" />
              <span className="number">Large</span>
            </div>
          </div>
          <h3 className="choose">Choose additional ingredients</h3> 
          <div className="ingredients">
            <div className="option">
              <input
                type="checkbox"
                id="double"
                name="double"
                className="checkbox"
              />
              <label htmlFor="double">Double Ingredients</label>
            </div>
            <div className="option">
              <input
                className="checkbox"
                type="checkbox"
                id="cheese"
                name="cheese"
              />
              <label htmlFor="cheese">Extra Cheese</label>
            </div>
            <div className="option">
              <input
                className="checkbox"
                type="checkbox"
                id="spicy"
                name="spicy"
              />
              <label htmlFor="spicy">Spicy Sauce</label>
            </div>
            <div className="option">
              <input
                className="checkbox"
                type="checkbox"
                id="garlic"
                name="garlic"
              />
              <label htmlFor="garlic">Garlic Sauce</label>
            </div>
          </div> */}
          <div className="add">
            <input
              type="number"
              /*defaultValue={1}*/
              value={qty}
              className="quantity"
              onChange={onChangeQty}
            />
            <button className="button" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
          <span className="price2">
            UGX {totalPrice ? totalPrice : currentPdt?.prod_price}
          </span>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  height: calc(100vh - 100px);
  margin-top: 100px;
  display: flex;
  border: 2px solid #d1411e;

  .left {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .imgContainer {
    width: 80%;
    height: 80%;
    position: relative;

    img {
      object-fit: cover;
      box-shadow: 0px 2px 6px;
      border-radius: 15px;
      width: 400px;
      height: 400px;
    }
  }

  .price {
    color: #d1411e;
    font-size: 24px;
    font-weight: 400;
    border-bottom: 1px solid #d1411e;
  }

  .price2 {
    margin: 10px 0px;
    color: #d1411e;
    font-size: 24px;
    font-weight: 700;
    border-bottom: 1px solid #d1411e;
  }

  .sizes {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .size {
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  .size:nth-child(2) {
    width: 40px;
    height: 40px;
  }

  .size:last-child {
    width: 50px;
    height: 50px;
  }

  .number {
    position: absolute;
    top: -5px;
    right: -20px;
    background-color: teal;
    color: white;
    font-size: 12px;
    padding: 0 5px;
    border-radius: 10px;
  }

  .ingredients {
    display: flex;
    margin-bottom: 30px;
  }

  .option {
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 500;
  }

  .checkbox {
    width: 20px;
    height: 20px;
  }

  .quantity {
    width: 50px;
    height: 30px;
  }

  .button {
    height: 30px;
    margin-left: 10px;
    background-color: #d1411e;
    color: white;
    border: none;
    font-weight: 500;
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
      color: #d1411e;
      background-color: white;
      border: 1px solid #d1411e;
    }
  }

  @media screen and (max-width: 480px) {
    height: auto;
    text-align: center;
    flex-direction: column;
    margin-top: 20px;

    .imgContainer {
      width: 70vw;
      height: 70vw;
    }

    .title {
      margin: 5px;
    }

    .sizes {
      width: 100%;
      padding: 0px 20px;
    }

    .ingredients {
      flex-direction: column;
    }

    .option {
      margin: 10px;
      font-size: 18px;
    }

    .checkbox {
      width: 25px;
      height: 25px;
    }

    .quantity,
    .button {
      height: 50px;
      padding: 10px 20px;
    }
  }
`;
export default Product;
