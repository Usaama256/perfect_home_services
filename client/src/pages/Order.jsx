import React from "react";
import styled from "styled-components";
import checkedImg from "../store/images/checked.png";
import paidImg from "../store/images/paid.png";
import bakeImg from "../store/images/bake.png";
import bikeImg from "../store/images/bike.png";
import deliveredImg from "../store/images/delivered.png";
import Layout from "../components/Layout";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return "done";
    if (index - status === 1) return "inProgress";
    if (index - status > 1) return "undone";
  };
  return (
    <Layout>
      <Container>
        <div className="left">
          <div className="row">
            <table className="table">
              <tr className="trTitle">
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr className="tr">
                <td>
                  <span className="id">129837819237</span>
                </td>
                <td>
                  <span className="name">John Doe</span>
                </td>
                <td>
                  <span className="address">Elton st. 212-33 LA</span>
                </td>
                <td>
                  <span className="total">$79.80</span>
                </td>
              </tr>
            </table>
          </div>
          <div className="row">
            <div className={statusClass(0)}>
              <img src={paidImg} width={30} height={30} alt="" />
              <span>Payment</span>
              <div className="checkedIcon">
                <img
                  className="checkedIcon"
                  src={checkedImg}
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
            <div className={statusClass(1)}>
              <img src={bakeImg} width={30} height={30} alt="" />
              <span>Preparing</span>
              <div className="checkedIcon">
                <img
                  className="checkedIcon"
                  src={checkedImg}
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
            <div className={statusClass(2)}>
              <img src={bikeImg} width={30} height={30} alt="" />
              <span>On the way</span>
              <div className="checkedIcon">
                <img
                  className="checkedIcon"
                  src={checkedImg}
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
            <div className={statusClass(3)}>
              <img src={deliveredImg} width={30} height={30} alt="" />
              <span>Delivered</span>
              <div className="checkedIcon">
                <img
                  className="checkedIcon"
                  src={checkedImg}
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2 className="title">CART TOTAL</h2>
            <div className="totalText">
              <b className="totalTextTitle">Subtotal:</b>$79.60
            </div>
            <div className="totalText">
              <b className="totalTextTitle">Discount:</b>$0.00
            </div>
            <div className="totalText">
              <b className="totalTextTitle">Total:</b>$79.60
            </div>
            <button disabled className="button">
              PAID
            </button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  padding: 50px;
  display: flex;
  margin-top: 100px;

  .left {
    flex: 2;
  }

  .table {
    width: 100%;
    text-align: left;
    margin-bottom: 50px;
  }

  .row:last-child {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }

  .done {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inProgress {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: inProgress 1s ease infinite alternate;
  }

  @keyframes inProgress {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .undone {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.3;
  }

  .undone .checkedIcon,
  .inProgress .checkedIcon {
    display: none;
  }

  .right {
    flex: 1;
  }

  .wrapper {
    width: 90%;
    max-height: 300px;
    background-color: #333;
    color: white;
    padding: 10px 50px 50px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .totalTextTitle {
    margin-right: 10px;
  }

  .button {
    background-color: white;
    height: 30px;
    color: #d1411e;
    font-weight: bold;
    margin-top: 20px;
    cursor: not-allowed;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;

    .trTitle {
      display: none;
    }

    .tr {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }

    .id::before {
      content: "Order ID: ";
      font-weight: 500;
    }
    .name::before {
      content: "Customer: ";
      font-weight: 500;
    }
    .address::before {
      content: "Address: ";
      font-weight: 500;
    }
    .total::before {
      content: "Total: ";
      font-weight: 500;
    }

    .row:last-child {
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .done,
    .undone,
    .inProgress {
      margin-bottom: 20px;
    }

    .wrapper {
      width: 100%;
    }
  }
`;
export default Order;
