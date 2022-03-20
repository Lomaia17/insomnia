import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Typography, Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box } from "@mui/system";
import CardContainer from "../Components/CardContainer/CardContainer";

function Modal({ isOpen, setIsOpen }) {
  console.log(isOpen);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      scroll="paper"
      width="500px"
      maxWidth="100%"
      sx={{ opacity: "0.92" }}
    >
      <Box
        spacing={3}
        sx={{ backgroundColor: "black", padding: "1vmin", display: "flex" }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "#D093C3",
            fontWeight: "200",
            flex: "1",
          }}
        >
          აირჩიე მელოდია
        </Typography>
        <Button onClick={handleClose}>ჩახურვა</Button>
      </Box>
      <DialogContent dividers={true}>
        <DialogContentText tabIndex={-1}>
          <CardContainer setIsOpen={setIsOpen} />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
