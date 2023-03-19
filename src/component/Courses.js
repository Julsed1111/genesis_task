import React, { useState } from "react";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import PreviewCourse from "./PreviewCourse";
import { Link } from "react-router-dom";

const Courses = ({ data }) => {
  const [buttonID, setButtonId] = useState();

  function handleButtonClick(event) {
    const id = event.target.id;
    console.log(id);
    setButtonId(id);
  }

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Courses List
      </Typography>
      <Grid container spacing={4}>
        {data.map((course) => (
          <Grid item xs={12} key={course.id}>
            <Paper elevation={3} className="course-paper">
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <img
                    src={course.previewImageLink + "/cover.webp"}
                    className="style-img"
                    alt="alt img"
                    width="200"
                    height="113"
                  />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography variant="h6">{course.title}</Typography>
                  <Typography variant="body1">{course.description}</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <Typography variant="body1">{course.lessonsCount}</Typography>
                      <Typography variant="caption">Lessons Count</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="body1">{course.rating}</Typography>
                      <Typography variant="caption">Rating</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      {course.meta.skills ? (
                        <>
                          <Typography variant="body1">Skills:</Typography>
                          {course.meta.skills.map((item) => (
                            <Typography variant="caption" key={item}>{item}</Typography>
                          ))}
                        </>
                      ) : (
                        <Typography variant="body1">No skills available</Typography>
                      )}
                    </Grid>
                  </Grid>
                  <Link to={`/course/${course.id}`}>
                    <Button
                      variant="contained"
                      id={course.id}
                      onClick={handleButtonClick}
                      className="course-button"
                      style={{margin: "16px 0px"}}
                    >
                      View course details
                    </Button>
                  </Link>
                  {buttonID && <PreviewCourse id={buttonID} />}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Courses;
