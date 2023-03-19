import React, { useEffect, useState } from "react";
import Hls from "hls.js";
import { Button, Grid } from "@mui/material";

function VideoCourse({ videoLink, videoId, order, videoPreviewImageLink }) {
  const [videoRef, setVideoRef] = useState(null);

  useEffect(() => {
    const initVideo = () => {
      if (videoRef) {
          const hls = new Hls();
          hls.loadSource(videoLink);
          hls.attachMedia(videoRef);
      }
    };

    if (videoRef && videoLink) {
        initVideo();
    }

  }, [videoRef, videoLink]);

  const handleEnterPiP = () => {
    if (videoRef && document.pictureInPictureEnabled) {
      videoRef.requestPictureInPicture();
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        {(
          <video
            id={`video-${videoId}`}
            ref={setVideoRef}
            className="video-course"
            controls
            poster={`${videoPreviewImageLink}/lesson-${order}.webp`}
            style={{width: "640px", height: "360px"}}
          ></video>
        )}
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleEnterPiP}>
          Смотреть в режиме Picture-in-Picture
        </Button>
      </Grid>
    </Grid>
  );
}

export default VideoCourse;
