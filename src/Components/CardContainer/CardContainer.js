import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import CardItems from "./CardItems";
import { MusicContext } from "../../Context/music-context";

const CardContainer = ({ setIsOpen }) => {
  const musics = useContext(MusicContext);
  console.log(musics);
  return (
    <Grid container alignItems="stretch" spacing={4}>
      {musics.map((music) => (
        <Grid key={music.id} xs={12} sm={6} lg={3} item>
          <CardItems music={music} setIsOpen={setIsOpen} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardContainer;
