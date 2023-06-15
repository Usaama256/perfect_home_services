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

const steps = [
  "Owner's Info",
  "Company Info",
  "Service Provider Account Security",
  "Confirmation",
];

const RegStepper = () => {
  const [agreements, setAgreements] = useState({
    age: false,
    TCs: false,
  });
  const tabs = [
    {
      title: "Owner's Info",
      element: <RegOwnerInfo onNext={() => handleNext()} />,
    },
    {
      title: "Company Info",
      element: (
        <RegCompanyInfo
          onBack={() => handleBack()}
          onNext={() => handleNext()}
        />
      ),
    },

    {
      title: "Profile Security",
      element: (
        <RegSecurity onBack={() => handleBack()} onNext={() => handleNext()} />
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
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    if (activeStep !== steps.length) {
      return setActiveTab(tabs[activeStep]);
    } else {
      return;
    }
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

  const handleReset = () => {
    setActiveStep(0);
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
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset} color="success" variant="contained">
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
