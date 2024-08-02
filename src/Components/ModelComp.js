import React, { useEffect, useState } from "react";

import Modal from "@mui/material/Modal";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   justifyContent:"center",
//   alignItems:"center",
//   transform: 'translate(-50%, -50%)',
//   width: 345,
//   bgcolor: 'background.paper',
//   borderRadius: 5,
//   boxShadow: 24,
//   p: 4,
// };
const ModalComp = (props) => {
  const [open, setOpen] = useState(false);
  const {func} = props;
 
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  useEffect(()=>{
    setOpen(true)
  },[])

  const handleDiveIn =()=>{
    func(true)
    setOpen(false)
  }
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/aRGdDy18qfY?si=7MUfbix373uFTtVe"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <Typography sx={{ textAlign: "center" }} component="div">
              Introducing the all New cashin
            </Typography>
            <Typography
              sx={{ textAlign: "center" }}
              variant="body2"
              color="text.secondary"
            >
              Explore CASHIN 2.0 and use it to earn more rewards than before
            </Typography>
            <CardActions>
              <Button size="small" onClick={handleDiveIn}>Let's Dive In</Button>
              <Button size="small" onClick={()=>{setOpen(false)}}>Skip</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

export default ModalComp;
