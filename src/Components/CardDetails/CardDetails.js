import React, { useContext } from "react";
import Player from "../Player";
import { MusicContext } from "../../Context/music-context";
import { useParams, Link } from "react-router-dom";
import { Typography, AppBar, Toolbar } from "@mui/material";
const CardDetails = () => {
  const { id } = useParams();
  const music = useContext(MusicContext).find((element) => {
    return element.id === id;
  });
  const myStyle = {
    backgroundImage: `url(${music.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgronudPosition: "center",
  };
  return (
    <div style={myStyle}>
      <AppBar
        position="absolute"
        style={{ background: "none", boxShadow: "none", opacity: "0.6" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            color="primary"
            component="div"
            fontWeight="fontWeightMedium"
            sx={{ fontSize: "calc(10px + 1.5vmin)", flexGrow: 1 }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              უძილობა.
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Player music={music} />
    </div>
  );
};

export default CardDetails;
