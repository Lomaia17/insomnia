import React from "react";
import ReactPlayer from "react-player";

export default function Player({ music }) {
  const playing = true;
  const controls = false;
  return (
    <div style={{ height: "100vh", opacity: "0" }}>
      <ReactPlayer
        url={music.youtube}
        volume={1}
        playing={playing}
        height="90vh"
        width="0"
        controls={controls}
        config={{
          youtube: {
            playerVars: {
              modestbranding: true,
              color: "black",
              controlsList: "nofullscreen",
              fs: 0,
            },
          },
        }}
      />
    </div>
  );
}
