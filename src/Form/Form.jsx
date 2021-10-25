import React, { useEffect, useState } from "react";
import UserData from "./UserData";
import PersonalData from "./PersonalData";
import DeliveryData from "./DeliveryData";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function Form({toSendForm, validateCpf}) {
  const [actualStage, setActualStage] = useState(0);
  const [dataCollected, setDataCollected] = useState({});
  useEffect(() => {
    if (actualStage === forms.length-1) toSendForm(dataCollected);
  });

  const forms = [
    <UserData toSendForm={dataCollector}  />,
    <PersonalData toSendForm={dataCollector} validateCpf={validateCpf}/>,
    <DeliveryData toSendForm={dataCollector} />,
    <Typography variant="h5"> Thank you !!</Typography>,
  ];

  function dataCollector(data) {
    setDataCollected({ ...dataCollected, data });
    next();
  }

  function next() {
    setActualStage(actualStage + 1);
  }

  return (
    <>
      <Stepper activeStep={actualStage}>
        <Step>
          <StepLabel> Login</StepLabel>
        </Step>
        <Step>
          <StepLabel> Personal</StepLabel>
        </Step>
        <Step>
          <StepLabel> Address</StepLabel>
        </Step>
        <Step>
          <StepLabel> Finish</StepLabel>
        </Step>
      </Stepper>
      {forms[actualStage]}
    </>
  );
}

export default Form;
