import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Modal from "./Modal";
export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const myStyle = {
    height: "100vh",
    justifyContent: "center",
    whiteSpace: "pre-line",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div className="App">
      <AppBar
        position="absolute"
        style={{ background: "none", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            color="primary"
            component="div"
            fontWeight="fontWeightMedium"
            sx={{ fontSize: "calc(10px + 1.5vmin)" }}
          >
            უძილობა.
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={myStyle}>
        <Typography
          sx={{ fontSize: "calc(10px + 13vmin)" }}
          color="rgb(208, 147, 195)"
          fontWeight="fontWeightBold"
        >
          უძილობა.
        </Typography>
        <Typography
          color="white"
          fontWeight="fontWeightLight"
          style={{ fontSize: "calc(10px + 1.3vmin)" }}
        >
          ჰეი, ეს აპლიკაცია დაგეხმარება რომ დაიძინო უკეთ და დაისვენო თავისუფალ
          დროს(თუ გაქვს ოდესმე).
          <br />
          დააჭირე გამოსაცდელად.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          style={{
            marginTop: "5vmin",
            fontSize: "calc(10px + 1.5vmin)",
            padding: "3px 25px",
          }}
        >
          დააჭირე
        </Button>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
