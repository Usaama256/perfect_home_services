import React, { useEffect, useState } from "react";
import placeholder from "../../store/images/clipart2131416.png";
import styled from "styled-components";
import LayoutNoFooter from "../../components/LayoutNoFooter";
import { useSelector } from "react-redux";
import ProgressiveImage from "../../components/ProgressiveImage";
import { myRequest } from "../../store/methods";

const Index = ({ orders }) => {
  const products = useSelector((state) => state.products.data);
  const [isFetching, setIsFetching] = useState(false);
  const [allOrders, setAllOrders] = useState(null);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];

  const handleDelete = async (id) => {};

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = async () => {
    try {
      setIsFetching(true);
      const res = await myRequest.get("/orders/getorders");
      if (res.status === 200) {
        setOrderList(res.data);
      } else {
      }
      setIsFetching(false);
    } catch (err) {
      setIsFetching(false);
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
    <LayoutNoFooter>
      <Container>
        <div className="item">
          <h1 className="title">Products</h1>
          <button className="button">Add Product</button>
          <table className="table">
            <tbody>
              <tr className="trTitle">
                <th>Img</th>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </tbody>
            {products?.map((product) => (
              <tbody key={product._id}>
                <tr className="trTitle">
                  <td>
                    <ProgressiveImage
                      src={product.prod_image}
                      placeholder={placeholder}
                    />
                  </td>
                  <td>{product.prod_id}...</td>
                  <td>{product.prod_name}</td>
                  <td>${product.prod_price}</td>
                  <td>
                    <button className="button">Edit</button>
                    <button
                      className="button"
                      onClick={() => handleDelete(product.prod_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="item">
          <h1 className="title">Orders</h1>
          <table className="table">
            <tbody>
              <tr className="trTitle">
                <th>Id</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </tbody>
            {orderList?.map((order) => (
              <tbody key={order._id}>
                <tr className="trTitle">
                  <td>{order._id.slice(0, 5)}...</td>
                  <td>{order.customer}</td>
                  <td>${order.total}</td>
                  <td>
                    {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                  </td>
                  <td>{status[order.status]}</td>
                  <td>
                    <button onClick={() => handleStatus(order._id)}>
                      Next Stage
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </Container>
    </LayoutNoFooter>
  );
};

const Container = styled.div`
  margin-top: 100px;
  padding: 50px;
  display: flex;

  .item {
    flex: 1;
  }

  .table {
    width: 100%;
    border-spacing: 20px;
    text-align: left;
  }
  .trTitle {
    img {
      width: 30px;
      height: 30px;
    }
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
  .button {
    border: none;
    color: white;
    padding: 5px;
    cursor: pointer;
  }

  .button:first-child {
    background-color: teal;
    margin-right: 10px;
  }

  .button:last-child {
    background-color: crimson;
  }
`;
export default Index;
