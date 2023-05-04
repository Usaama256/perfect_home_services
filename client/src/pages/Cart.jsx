import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import OrderDetails from "../components/OrderDetails";
import { useDispatch, useSelector } from "react-redux";
import placeholder from "../store/images/clipart2131416.png";
import ProgressiveImage from "../components/ProgressiveImage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Delete } from "@material-ui/icons";
import { removeItemFromCart } from "../redux/apiCalls";
import { useSnackbar } from "notistack";
import { myRequest } from "../store/methods";
import { cartCleanUp } from "../redux/ReduxSlices";

const Cart = () => {
  window.scrollTo(0, 0);
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [discount, setDiscount] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const gotToPdt = (id) => {
    navigate(`/product/${id}`);
  };

  const onRemove = (id) => {
    removeItemFromCart(cart, id, dispatch);
  };

  const onCheckout = () => {
    if (!user) {
      enqueueSnackbar("Make sure you're logged in", { variant: "warning" });
      navigate("/breusa-auth");
    } else {
      if (cart?.length === 0) {
        enqueueSnackbar("There're no items in your cart", {
          variant: "info",
        });
      } else {
        var prod_id = [],
          quantity = [],
          prod_name = [],
          prod_price = [],
          prod_image = [],
          sub_total_price = [];
        cart?.forEach((item) => {
          prod_id = [...prod_id, item.prod_id];
          prod_name = [...prod_name, item.prod_name];
          prod_price = [...prod_price, item.prod_price];
          prod_image = [...prod_image, item.prod_image];
          sub_total_price = [...sub_total_price, item.total_price];
          quantity = [...quantity, item.qty];
        });
        const newOrder = {
          grand_total_price: total,
          prod_id: JSON.stringify(prod_id),
          prod_name: JSON.stringify(prod_name),
          prod_price: JSON.stringify(prod_price),
          quantity: JSON.stringify(quantity),
          prod_image: JSON.stringify(prod_image),
          sub_total_price: JSON.stringify(sub_total_price),
          user_id: user.id,
        };
        sendOrder(newOrder);
      }
    }
  };

  const sendOrder = async (order) => {
    try {
      setIsFetching(true);
      const res = await myRequest.post("/orders/addingorder", order);
      if (res.status === 200) {
        dispatch(cartCleanUp());
        navigate("/");
        enqueueSnackbar("Order Submitted Successfully", { variant: "success" });
      } else {
        enqueueSnackbar("Failed To Submit Order", { variant: "error" });
      }
      setIsFetching(false);
    } catch (err) {
      setIsFetching(false);
      enqueueSnackbar("Failed To Submit Order", { variant: "error" });
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
  return (
    <Layout>
      <Container>
        <div className="left">
          <table className="table">
            <tr className="trTitle">
              <th>Product</th>
              <th>Name</th>
              {/* <th>Description</th> */}
              <th>Price (UGX)</th>
              <th>Qty</th>
              <th>Total (UGX)</th>
              <th>Rem</th>
            </tr>
            {cart?.map((item) => {
              return (
                <tr className="tr">
                  <td>
                    <div className="imgContainer">
                      <ProgressiveImage
                        src={item.prod_image}
                        placeholder={placeholder}
                        style={{ cursor: "pointer" }}
                        onClick={() => gotToPdt(item.prod_id)}
                      />
                    </div>
                  </td>
                  <td>
                    <span
                      className="name"
                      onClick={() => gotToPdt(item.prod_id)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.prod_name}
                    </span>
                  </td>
                  {/* <td>
                    <span className="extras">{item.prod_description}</span>
                  </td> */}
                  <td>
                    <span className="price">{item.prod_price}</span>
                  </td>
                  <td>
                    <span className="quantity">{item.qty}</span>
                  </td>
                  <td>
                    <span className="total">{item.total_price}</span>
                  </td>
                  <td>
                    <Delete
                      style={{
                        color: "red",
                        cursor: "pointer",
                        fontSize: "30px",
                      }}
                      disabled={isFetching}
                      onClick={() => onRemove(item.prod_id)}
                    />
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="right">
          <div className="wrapper">
            <h3 className="title">CART SUMMARY</h3>
            <div className="totalText">
              <b className="totalTextTitle">Subtotal:</b>UGX {total}
            </div>
            <div className="totalText">
              <b className="totalTextTitle">Discount:</b>UGX {discount}
            </div>
            <button
              className="button"
              disabled={isFetching}
              onClick={() => {
                onCheckout();
              }}
            >
              CHECKOUT (UGX {total})
            </button>
          </div>
        </div>
        {/* <OrderDetails /> */}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  margin-top: 100px;
  padding: 50px;
  display: flex;

  .left {
    flex: 3;
  }

  .right {
    flex: 1;
  }

  .imgContainer {
    width: 100px;
    height: 100px;
    position: relative;

    img {
      width: 100px;
      height: 100px;
      border-radius: 15px;
      object-fit: cover;
    }
  }

  .table {
    width: 100%;
    /* border-spacing: 20px; */
    border-collapse: collapse;

    tr {
      border-bottom: 1px solid #d1411e;

      td,
      th {
        text-align: left;
        padding: 10px 0px;
      }
    }
  }

  .name {
    font-weight: 500;
    color: #d1411e;
    font-size: 18px;
  }

  .total {
    font-weight: 500;
    font-size: 18px;
  }

  .wrapper {
    width: 90%;
    max-height: 300px;
    background-color: #333;
    padding: 50px;
    margin-left: 10px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
  }
  .totalText {
    margin-top: 10px;
  }
  .totalTextTitle {
    margin-right: 10px;
  }

  .button {
    margin-top: 20px;
    height: 30px;
    background-color: #d1411e;
    color: white;
    border: none;
    font-weight: 700;
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
      color: #d1411e;
      background-color: white;
      border: 1px solid #d1411e;
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 20px;

    .table {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .trTitle {
      display: none;
    }

    .tr {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    .imgContainer {
      width: 35vw;
      height: 35vw;
    }

    .name,
    .total {
      font-size: 24px;
    }

    .extras,
    .price,
    .quantity {
      font-size: 22px;
    }

    .price::before {
      content: "Price: ";
      font-weight: 500;
    }
    .quantity::before {
      content: "Quantity: ";
      font-weight: 500;
    }
    .total::before {
      content: "Total: ";
      font-weight: 500;
    }

    .wrapper {
      width: 100%;
    }
  }

  .paymentMethods {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }

  .payButton {
    padding: 10px 5px;
    cursor: pointer;
    margin-bottom: 5px;
    background-color: white;
    color: teal;
    font-weight: bold;
  }
`;
export default Cart;
