import { Button } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
const CustomToolTip = ({
  continuous,
  index,
  step,
  backProps,
  closeProps,
  primaryProps,
  tooltipProps,
  skipProps,
  size,
  isLastStep
}) => {
  return (
    <div
      {...tooltipProps}
      style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
        color: "#333",
        maxWidth: "400px", // Tooltip width
      }}
    >
      <p>{step.content}</p>
      <div>
        <div>{index+1}/{size}</div>
        <Button {...skipProps}>
          <CloseIcon /> Skip
        </Button>
        {index > 0 && <Button {...backProps}>Back</Button>}
        {!isLastStep && <Button {...primaryProps}>Next</Button>}
        {isLastStep && <Button {...primaryProps}>Get STarted Now</Button>}
      </div>
    </div>
  );
};

export default CustomToolTip;
