// import { useSnackbar } from "notistack";
import React, { useState } from "react";
import styled from "styled-components";
// import { validateEmail } from "../../store/otherMethods";
// import { myRequest } from "../../store/methods";
// import SendSuccessFul from "./SendSuccessFul";

const ContactForm = () => {
  // const { enqueueSnackbar } = useSnackbar();
  const [sending, setSending] = useState(false);
  const [seeSendSuccess, setSeeSendSuccess] = useState(false);
  const [sms, setSms] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    body: "",
  });
  const submitSmsHandler = async (e) => {
    // e.preventDefault();
    // if (sms.name === "" || sms.name === null) {
    //   enqueueSnackbar("Name field is blank", { variant: "error" });
    // } else if (sms.subject === "" || sms.subject === null) {
    //   enqueueSnackbar("Subject field is blank", { variant: "error" });
    // } else if (sms.email === "" || sms.email === null) {
    //   enqueueSnackbar("Email field is blank", { variant: "error" });
    // } else if (sms.phone === "" || sms.phone === null) {
    //   enqueueSnackbar("Phone field is blank", { variant: "error" });
    // } else if (sms.body === "" || sms.body === null) {
    //   enqueueSnackbar("Message field is blank", { variant: "error" });
    // } else {
    //   if (validateEmail(sms.email)) {
    //     try {
    //       setSending(true);
    //       const submitTime = new Date().toString();
    //       console.log(sms);
    //       const res = await myRequest.post("/smsfromweb", {
    //         ...sms,
    //         submitTime,
    //       });
    //       console.log(res.data);
    //       setSms({
    //         name: "",
    //         subject: "",
    //         email: "",
    //         phone: "",
    //         body: "",
    //       });
    //       setSeeSendSuccess(true);
    //     } catch (error) {
    //       if (error.request) {
    //         if (error.request.status) {
    //           console.log(error.request, error.message);
    //           if (error.request.status === 404) {
    //             console.log("Not Apps Found");
    //           } else {
    //             console.log(error.request, error.message);
    //           }
    //         } else {
    //           console.log(error.request, error.message);
    //         }
    //       } else if (error.response) {
    //         console.log(error.response, error.message);
    //       } else {
    //         console.log(error.message);
    //       }
    //     } finally {
    //       setSending(false);
    //     }
    //   } else {
    //     enqueueSnackbar("Bad Email format", { variant: "error" });
    //   }
    // }
  };
  return (
    <Container className="contact-form-head section">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="contact-inner-title">
            <h2>
              HAVE A QUESTION? <br />
              Send Us A Message
            </h2>
            <p>Just send us your questions or concerns.</p>
            <div className="question">
              {/* <img src="https://via.placeholder.com/200x200" alt="#" /> */}
              <h4>
                <span>
                  <a href="tel:+256750782781">+256 7507 81 781 (MTN)</a>
                </span>
                <span>
                  <a href="tel:+256787441875">+256 7874 41 875 (AIRTEL)</a>
                </span>
              </h4>
            </div>
            <ul className="day-list">
              <li>Monday - Saturday:</li>
              <li>9.00 AM - 9.00 PM</li>
              <li>Sunday & Public Holidays (Closed)</li>
            </ul>
            <a href={() => false} className="call-back">
              Request a call back <i className="lni lni-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className="form-main">
            <form className="form" method="post" action="assets/mail/mail.php">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required="required"
                      value={sms.name}
                      onChange={(e) => setSms({ ...sms, name: e.target.value })}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="form-group">
                    <input
                      name="subject"
                      type="text"
                      placeholder="Your Subject"
                      required="required"
                      value={sms.subject}
                      onChange={(e) =>
                        setSms({ ...sms, subject: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required="required"
                      value={sms.email}
                      onChange={(e) =>
                        setSms({ ...sms, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="form-group">
                    <input
                      name="phone"
                      type="text"
                      placeholder="Your Phone"
                      required="required"
                      value={sms.phone}
                      onChange={(e) =>
                        setSms({ ...sms, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group message">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={sms.body}
                      onChange={(e) => setSms({ ...sms, body: e.target.value })}
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group button">
                    <button
                      //type="submit"
                      className="btn"
                      disabled={sending}
                      onClick={submitSmsHandler}
                    >
                      Submit Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-image: url("https://via.placeholder.com/1440x960");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 2;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 60%;
    background-color: #aa0000;
    z-index: -1;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px),
    (max-width: 767px) {
    &::before {
      width: 100%;
    }
  }

  .contact-inner-title h2 {
    font-size: 30px;
    font-weight: 700;
    display: block;
    margin-bottom: 10px;
    color: #fff;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .contact-inner-title h2 {
      font-size: 25px;
      line-height: 32px;
    }
  }

  @media (max-width: 767px) {
    .contact-inner-title h2 {
      font-size: 20px;
      line-height: 30px;
    }
  }

  .contact-inner-title p {
    color: #fff;
  }

  .contact-inner-title .question {
    display: block;
    min-height: 70px;
    margin-top: 40px;
  }

  .contact-inner-title .question img {
    height: 70px;
    width: 70px;
    border-radius: 70px;
    float: left;
    margin-right: 20px;
  }

  .contact-inner-title .question h4 {
    font-size: 20px;
    font-weight: 600;
    padding-top: 15px;
    color: #fff;
  }

  .contact-inner-title .question h4 span {
    font-size: 13px;
    font-weight: 500;
    display: block;
    margin-bottom: 5px;
  }

  .contact-inner-title .day-list {
    display: block;
    margin-top: 40px;
  }

  .contact-inner-title .day-list li {
    color: #fff;
    font-weight: 500;
    margin-bottom: 3px;
    display: block;
  }

  .contact-inner-title .day-list li:last-child {
    margin: 0;
  }

  .contact-inner-title .call-back {
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    display: inline-block;
    margin-top: 30px;
    text-transform: capitalize;
  }

  .contact-inner-title .call-back i {
    font-size: 15px;
    display: inline-block;
    margin-left: 5px;
  }

  .form-main {
    padding: 50px 50px;
    background-color: #fff;
    -webkit-box-shadow: 0px 1px 30px 0px rgba(32, 32, 32, 0.11);
    box-shadow: 0px 1px 30px 0px rgba(32, 32, 32, 0.11);
    border-radius: 8px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px),
    (max-width: 767px) {
    .form-main {
      padding: 35px;
      margin-top: 40px;
    }
  }

  .form-main .form-title {
    margin-bottom: 30px;
  }

  .form-main .form-title h2 {
    margin-bottom: 35px;
    font-size: 22px;
  }

  .form-main .form-title p {
    font-size: 16px;
  }

  .form-main .form .form-group {
    margin-bottom: 15px;
    display: block;
  }

  .form-main .form .form-group input {
    height: 52px;
    line-height: 52px;
    width: 100%;
    border: 1px solid #e6e2f5;
    padding: 0px 20px;
    color: #333;
    font-weight: 400;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .form-main .form .form-group textarea {
    height: 180px;
    width: 100%;
    border: 1px solid #e6e2f5;
    padding: 15px 20px;
    color: #333;
    resize: none;
    font-weight: 400;
    resize: vertical;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .form-main .form .form-group.button {
    width: 100%;
    margin-bottom: 0;
  }

  .form-main .form .form-group.button .btn {
    height: 50px;
    border: none;
    width: 100%;
  }
`;
export default ContactForm;
