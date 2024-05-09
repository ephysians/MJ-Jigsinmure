import React from "react";
import YouTube from "react-youtube";

const YoutubeEmbed = ({ videoId }) => (
  <div className="video-container">
    <YouTube videoId={videoId} opts={{ width: "380", height: "315" }} />
  </div>
);

export default YoutubeEmbed;
