import React, { useEffect } from "react";
import PdtCard from "./PdtCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPdts } from "../redux/apiCalls";

const Products = () => {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();
  //console.log(products);
  useEffect(() => {
    fetchAllPdts(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container id="products">
      <h1 className="title">Where every flavor tells a story</h1>
      <div className="desc">For the love of delicious food</div>
      <div className="wrapper">
        {products?.map((item, index) => {
          return <PdtCard {...item} key={index} />;
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 100px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff4f2;

  .desc {
    text-align: center;
    font-size: 22px;
    color: #444;
    width: 70%;
  }

  .wrapper {
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 480px) {
    .title {
      text-align: center;
    }

    .desc {
      width: 90%;
    }
  }
`;

export default Products;
