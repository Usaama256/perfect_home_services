import React, { useState } from "react";
import styled from "styled-components";

const OrderDetails = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <Container>
      <div className="wrapper">
        <h1 className="title">You will pay $12 after delivery.</h1>
        <div className="item">
          <label className="label">Name Surname</label>
          <input
            placeholder="Name"
            type="text"
            className="input"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className="item">
          <label className="label">Phone Number</label>
          <input type="text" placeholder="+1 234 567 89" className="input" />
        </div>
        <div className="item">
          <label className="label">Address</label>
          <textarea
            rows={5}
            placeholder="Elton St. 505 NY"
            type="text"
            className="textarea"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className="button" onClick={handleClick}>
          Order
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 999;
  align-items: center;
  justify-content: center;
  background-color: rgba(197, 197, 197, 0.568);

  .wrapper {
    width: 500px;
    background-color: white;
    border-radius: 20px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-weight: 300;
  }

  .item {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
  }

  .label {
    margin-bottom: 10px;
  }

  .input {
    height: 40px;
  }

  .button {
    border: none;
    background-color: teal;
    color: white;
    padding: 10px 20px;
    font-weight: 500;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default OrderDetails;
