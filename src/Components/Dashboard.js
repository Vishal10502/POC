import React, { useEffect, useState } from "react";
import Joyride from "react-joyride";
import { Container } from "@mui/material";
import CopyCode from "./CopyCode";
import SurveyQuestion from "./SurveyQuestion";
import Skill from "./Skill";
import SSOInput from "./SSOInput";
import Tables from "./Tables";
import { blue } from "@mui/material/colors";
import CustomToolTip from "./CustomToolTip";
import ModalComp from "./ModelComp";

const Dashboard = () => {
  const [run, setRun] = useState(false);
  const steps = [
    {
      content: <h2>Let's begin our journey!</h2>,
      placement: "center",
      target: "body",
    },
    {
      target: ".skill-section",
      content: <h2>this is the skill icon</h2>,
      placement: "bottom",
    },
    {
      target: ".survey-container",
      content: <h2>this is the survey section</h2>,
      placement: "right",
    },
    {
      target: ".buttons-container",
      content: <h2>Buttons inside survey container </h2>,
      placement: "bottom",
    },
    {
      target: ".login-section",
      content: <h2>this is the login part</h2>,
      placement: "right",
    },
    {
      target: ".table-section",
      content: <h2>Table section </h2>,
      placement: "right",
    },
  ];

  const handleToolTip = (val) => {
    setRun(val);
  };
  return (
    <Container className="dashboard-section">
      <ModalComp func={handleToolTip} />
      <Joyride
        continuous
        run={run}
        steps={steps}
        // stepIndex={stepIndex}
        // hideCloseButton
        showProgress
        tooltipComponent={CustomToolTip}
        showSkipButton
        disableBeacon={true}
        disableOverlayClose={true}
        styles={{
          buttonNext: {
            backgroundColor: "darkblue",
            borderRadius: 4,
            color: "white",
          },
          buttonBack: {
            color: "blue",
          },
          options: { zIndex: 10000 },
        }}
      />

      <Skill />
      <CopyCode />
      <SurveyQuestion />
      <Tables />
      <SSOInput />
    </Container>
  );
};

export default Dashboard;
