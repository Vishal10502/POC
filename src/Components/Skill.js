import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Popper from "@mui/material/Popper";
import CancelIcon from '@mui/icons-material/Cancel';
const Skill = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleOutsideClick=(event)=>{
    if(anchorEl && !anchorEl.contains(event.target)){
      setAnchorEl(null);
    }
  }

  useEffect(()=>{
    if(anchorEl){
      document.addEventListener('click',handleOutsideClick);
    }
    else{
      document.removeEventListener('click',handleOutsideClick);
    }

    return()=>{
      document.removeEventListener('click',handleOutsideClick);
    };
  },[anchorEl]);
  

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Container className="skill-section">
      <IconButton onClick={handleClick}>
        <TipsAndUpdatesIcon />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          textAlign={"center"}
          width={250}
          height={150}
          sx={{ border: 1, p: 1, bgcolor: "background.paper" }}
        >
          <CancelIcon onClick={handleOutsideClick}></CancelIcon>
          <div>Do You Know?</div>
          <Typography variant="body2" padding={1}>
            Know your numbers. Before you can determine which areas of your
            financial life are going well and which may need a tune-up.
          </Typography>
        </Box>
      </Popper>
    </Container>
  );
};

export default Skill;
