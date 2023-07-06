import React, { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
import RegOwnerInfo from "./RegOwnerInfo";
import RegCompanyInfo from "./RegCompanyInfo";
import RegAgreements from "./RegAgreements";
import RegSecurity from "./RegSecurity";
import { useSnackbar } from "notistack";
import {
  validateEmail,
  validatePhoneNumber1,
} from "../../../store/otherMethods";
import { SPsignup } from "../../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const steps = [
  "Owner's Info",
  "Company Info",
  "Service Provider Account Security",
  "Confirmation",
];

const RegStepper = () => {
  const { isFetching } = useSelector((state) => state.user);
  const { enqueueSnackbar } = useSnackbar();
  const [spOwner, setSPowner] = useState({
    position: "",
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    tel: "",
    desc: "",
    avator: "",
  });
  const [spInfo, setSpInfo] = useState({
    email: "",
    title: "",
    tel: "",
    location: "",
    desc: "",
    Sid: "",
    logo: "",
  });
  const [securityInfo, setSecurityInfo] = useState({
    email: spInfo.email,
    pass: "",
    pass2: "",
  });
  const [agreements, setAgreements] = useState({
    age: false,
    TCs: false,
  });
  const tabs = [
    {
      title: "Owner's Info",
      element: (
        <RegOwnerInfo
          onNext={() => handleNext()}
          spOwner={spOwner}
          setSPowner={setSPowner}
        />
      ),
    },
    {
      title: "Company Info",
      element: (
        <RegCompanyInfo
          onBack={() => handleBack()}
          onNext={() => handleNext()}
          spInfo={spInfo}
          setSpInfo={setSpInfo}
        />
      ),
    },

    {
      title: "Profile Security",
      element: (
        <RegSecurity
          onBack={() => handleBack()}
          onNext={() => handleNext()}
          securityInfo={{ ...securityInfo, email: spInfo.email }}
          setSecurityInfo={setSecurityInfo}
        />
      ),
    },
    {
      title: "Confirmation",
      element: (
        <RegAgreements
          onBack={() => handleBack()}
          onNext={() => handleNext()}
          agreements={agreements}
          setAgreements={setAgreements}
        />
      ),
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    if (activeStep !== steps.length) {
      return setActiveTab(tabs[activeStep]);
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep]);

  const isStepOptional = (step) => {
    // return step === 2;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const resetHandler = () => {
    setActiveStep(0);
  };

  const spRegisterHandler = () => {
    const SP = {
      ...spInfo,
      pass: securityInfo.pass,
      pass2: securityInfo.pass2,
      owner: {
        ...spOwner,
      },
    };

    if (
      SP.email?.length > 6 &&
      SP.title?.length > 2 &&
      SP.location?.length > 2 &&
      SP.tel?.length > 9 &&
      `${SP.Sid}`?.length > 0 &&
      SP.desc?.length > 10
    ) {
      if (validateEmail(SP.email)) {
        if (validatePhoneNumber1(SP.tel)) {
          if (
            // SP.owner.position?.length > 1 &&
            SP.owner.firstName?.length > 1 &&
            SP.owner.lastName?.length > 1 &&
            SP.owner.location?.length > 2 &&
            SP.owner.email?.length > 6 &&
            SP.owner.tel?.length > 9 &&
            SP.owner.desc?.length > 10
          ) {
            if (validateEmail(SP.owner.email)) {
              if (validatePhoneNumber1(SP.owner.tel)) {
                if (SP.pass !== SP.pass2) {
                  enqueueSnackbar("Review your password", {
                    variant: "warning",
                  });
                } else {
                  if (SP.pass.length < 8 && SP.pass2.length < 8) {
                    enqueueSnackbar(
                      "Passwords Must Be At Least 8 Characters Long",
                      {
                        variant: "warning",
                      }
                    );
                  } else {
                    if (agreements.TCs === false || agreements.age === false) {
                      enqueueSnackbar(
                        "Make sure you agree on the terms and conditions",
                        {
                          variant: "warning",
                        }
                      );
                    } else {
                      ////////Signing up sp
                      SPsignup(SP, dispatch, navigate, enqueueSnackbar);
                    }
                  }
                }
              } else {
                enqueueSnackbar("Review onwer phone number", {
                  variant: "error",
                });
              }
            } else {
              enqueueSnackbar("Review owner email address", {
                variant: "error",
              });
            }
          } else {
            enqueueSnackbar("Review Owner information", {
              variant: "error",
            });
          }
        } else {
          enqueueSnackbar("Review your company phone number", {
            variant: "error",
          });
        }
      } else {
        enqueueSnackbar("Review your company email address", {
          variant: "error",
        });
      }
    } else {
      enqueueSnackbar("Review your company information", { variant: "error" });
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Card
        sx={{
          padding: "5px",
          boxShadow: "0px 5px 15px #00000064",
          background: "#ffffff75",
        }}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Card>
      {activeStep === steps.length ? (
        <Fragment>
          <br />
          <Typography sx={{ mt: 2, mb: 1 }}>
            All Steps Completed Successfully
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => resetHandler()}
              color="secondary"
              variant="outlined"
              disabled={isFetching}
            >
              Review Details
            </Button>
            <Button
              onClick={() => spRegisterHandler()}
              color="success"
              variant="contained"
              disabled={isFetching}
            >
              Submit
            </Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <br />
          {activeStep !== steps.length && activeTab.element}

          {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              variant="outlined"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext} color="inherit" variant="contained">
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box> */}
        </Fragment>
      )}
    </Box>
  );
};

export default RegStepper;
