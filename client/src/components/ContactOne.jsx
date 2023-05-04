import React from "react";
import styled from "styled-components";

const ContactOne = () => {
  return (
    <Container>
      <div className="contact-head">
        <div className="col-12">
          <div className="section-title">
            <h3>Contact</h3>
            <h2>We’d Love To Help You</h2>
            <p></p>
          </div>
        </div>
        <div className="contact-info">
          <div className="single-info">
            <i className="lni lni-map"></i>
            <h3>Address</h3>
            <ul>
              <li>Plot 032, Luthuli Avenue, Kampala, Uganda.</li>
            </ul>
            <ul>
              <li>P.O. Box 13128</li>
            </ul>
          </div>
          <div className="single-info">
            <i className="lni lni-phone"></i>
            <h3>Call us on</h3>
            <ul>
              <li>
                <a href="tel:+256394010501">+256 3940 10 501 (MTN)</a>
              </li>
              <li>
                <a href="tel:+256200910501">+256 2009 10 501 (AIRTEL)</a>
              </li>
            </ul>
          </div>
          <div className="single-info">
            <i className="lni lni-envelope"></i>
            <h3>Mail at</h3>
            <ul>
              <li>
                <a href="mailto:info@kawu.ug">info@breusa.ug</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: #fff;

  .section-title {
    text-align: center;
    margin-bottom: 50px;
    padding: 0 300px;
    position: relative;
    z-index: 5;
  }

  .section-title h3 {
    font-size: 15px;
    font-weight: 600;
    display: block;
    margin-bottom: 8px;
    color: #d1411e;
    text-transform: uppercase;
  }

  .section-title h2 {
    font-size: 34px;
    margin-bottom: 25px;
    line-height: 42px;
    text-transform: capitalize;
    position: relative;
    font-weight: 800;
  }

  .section-title p {
    font-size: 15px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .section-title {
      padding: 0px 200px;
      margin-bottom: 70px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .section-title {
      padding: 0px 20px;
      margin-bottom: 70px;
    }
    .section-title h3 {
      font-size: 14px;
    }
    .section-title h2 {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 20px;
    }
    .section-title p {
      font-size: 14px;
    }
  }

  @media (max-width: 767px) {
    .section-title {
      padding: 0px 10px;
      margin-bottom: 60px;
    }
    .section-title h3 {
      font-size: 14px;
    }
    .section-title h2 {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 18px;
    }
    .section-title p {
      font-size: 14px;
    }
  }

  .section-title.align-right {
    padding: 0;
    padding-left: 600px;
  }

  .section-title.align-right h2:before {
    display: none;
  }

  .section-title.align-right h2:after {
    position: absolute;
    right: 0;
    bottom: -1px;
    height: 2px;
    width: 50px;
    background: #d1411e;
    content: "";
  }

  .section-title.align-left {
    padding: 0;
    padding-right: 600px;
  }

  .section-title.align-left h2:before {
    left: 0;
    margin-left: 0;
  }

  .contact-info {
    display: flex:
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .contact-info .single-info {
    width: 30%;
    margin-top: 30px;
    padding: 40px;
    padding-left: 100px;
    border-radius: 8px;
    overflow: hidden;
    -webkit-box-shadow: 0px 1px 20px 0px rgba(32, 32, 32, 0.11);
    box-shadow: 0px 1px 20px 0px rgba(32, 32, 32, 0.11);
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .contact-info .single-info:hover {
    background-color: #d1411e;
  }

  .contact-info .single-info:hover i {
    color: #fff;
  }

  .contact-info .single-info:hover h3 {
    color: #fff;
  }

  .contact-info .single-info:hover ul li {
    color: #fff;
  }

  .contact-info .single-info:hover ul li a {
    color: #fff;
  }

  .contact-info .single-info:hover ul li a:hover {
    opacity: 0.8 !important;
    color: #fff;
  }

  .contact-info .single-info i {
    font-size: 30px;
    color: #d1411e;
    position: absolute;
    left: 40px;
    top: 40px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .contact-info .single-info h3 {
    font-size: 16px;
    font-weight: 600;
    color: #081828;
    margin-bottom: 15px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .contact-info .single-info ul li {
    display: block;
    margin-bottom: 2px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .contact-info .single-info ul li:last-child {
    margin: 0;
  }

  .contact-info .single-info ul li a {
    color: #888;
    font-weight: 500;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .contact-info .single-info ul li a:hover {
    color: #d1411e;
  }
`;
export default ContactOne;
