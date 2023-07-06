import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
// import TopSlider from "./TopSlider";
// import SimpleBar from "simplebar-react";
// import "simplebar/dist/simplebar.css";

const GenLayout = ({ children, title, nav }) => {
  const scrollTest = (e) => {
    console.log(e);
  };
  return (
    <Container onScroll={scrollTest}>
      <Helmet>
        <title>
          {title ? `${title} | Perfect Home Services` : "Perfect Home Services"}
        </title>
      </Helmet>

      {children}
      <Footer />
      <ScrollToTop />
    </Container>
  );
  // if (nav === true) {
  //   return (
  //     <Container>
  //       <Helmet>
  //         <title>
  //           {title
  //             ? `${title} | Perfect Home Services`
  //             : "Perfect Home Services"}
  //         </title>
  //       </Helmet>

  //       {children}
  //       <Footer />
  //       <ScrollToTop />
  //     </Container>
  //   );
  // } else {
  //   return (
  //     <Container>
  //       <Helmet>
  //         <title>
  //           {title
  //             ? `${title} | Perfect Home Services`
  //             : "Perfect Home Services"}
  //         </title>
  //       </Helmet>
  //       {children}
  //       <ScrollToTop />
  //     </Container>
  //   );
  // }
};

const Container = styled.div`
  background: "#fff4f2";
`;
// const MainContainer = styled.div``;
export default GenLayout;
