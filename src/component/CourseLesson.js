import React from "react";
import { Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";

import VideoCourse from "./VideoCorse";

function CourseLesson({
  videoLink,
  videoId,
  order,
  videoPreviewImageLink,
  videoStatus,
  title,
}) {
  const rootStyle = {
    marginBottom: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    maxWidth: 640,
    maxHeight: 360,
    marginBottom: "8px",
  };

  const lockedStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const lockIconStyle = {
    fontSize: "4rem",
    color: "rgba(0, 0, 0, 0.54)",
    marginBottom: "8px",
  };

  if (videoStatus === "locked") {
    return (
      <div style={rootStyle}>
        <img
          src={`${videoPreviewImageLink}/lesson-${order}.webp`}
          style={imageStyle}
          alt="Preview img"
        />
        <Typography variant="h6">{title}</Typography>
        <div style={lockedStyle}>
          <Lock style={lockIconStyle} />
          <Typography variant="body1">
            This video is currently locked.
          </Typography>
        </div>
      </div>
    );
  } else {
    return (
      <div style={rootStyle}>
        <VideoCourse
          videoLink={videoLink}
          videoId={videoId}
          videoPreviewImageLink={videoPreviewImageLink}
          order={order}
        />
        <Typography variant="h6">{title}</Typography>
      </div>
    );
  }
}

export default CourseLesson;
