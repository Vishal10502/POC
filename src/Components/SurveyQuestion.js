import React, {useState } from "react";
import "./SurveyQuestion.css";
import Typography from "@mui/material/Typography";
import { Box, Button, Container } from "@mui/material";
const SurveyQuestion = () => {
  // const percentages ={
  //  savings:10,
  //  travel:20,
  //  shopping:30,
  //  others:40
  // };
  const [showPercentage, setshowPercentage] = useState(false);
  const [Percentage, setPercentage] = useState({
    savings: 15,
    travel: 20,
    shopping: 25,
    others: 40,
  });
  const handlePercentage = (button) => {
    console.log(`Clicked button: ${button.text}`);
    console.log("percentages", Percentage);
    setshowPercentage(true);
  };
  const buttonData = [
    { className: "savings-button", text: "Savings", key: "savings" },
    { className: "travel-button", text: "Travel", key: "travel" },
    { className: "shopping-button", text: "Shopping", key: "shopping" },
    { className: "others-button", text: "Others", key: "others" },
  ];
  return (
    <Container>
      <Box className="survey-container">
        {showPercentage && (
          <Typography variant="body1" color="green" sx={{ textAlign: 'left' }}>
            Thank You for Participating!
          </Typography>
        )}
        <Typography variant="body1" color="initial" sx={{ textAlign: 'left', marginBottom: 2 }}>
          See how other bankers spend their reward amount
        </Typography>

        <Box className="buttons-container">
          {buttonData.map((button) => (
            <Button
              className={button.className}
              key={button.key}
              onClick={() => handlePercentage(button)}>
              <Typography className="text" variant="body1" >
                {button.text}
              </Typography>
              {showPercentage && (
                <Box
                  className="bar"
                  sx={{ width: `${Percentage[button.key]}%` }}
                />
                )}
                {showPercentage && (
                  <Typography variant="body1" sx={{ marginLeft: 20 }}>
                    {Percentage[button.key]}%
                  </Typography>
                )}
            </Button>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default SurveyQuestion;
