import React, { useState, useEffect } from "react";
import { Modal, Button, Typography, Box } from "@mui/material";
import { getCourse } from "../API/Api";

const PreviewCourse = ({ id }) => {
  const [show, setShow] = useState(true);
  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getCourse(id);
      setCourseData(response);
    }
    fetchData();
  }, [id]);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal open={show} onClose={handleClose}>
        <Box p={2}>
          <Typography variant="h4" align="center" gutterBottom>
            {courseData.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {courseData.description}
          </Typography>
          {courseData.sections &&
            courseData.sections.map((section) => (
              <Box mt={2} key={section.id}>
                <Typography variant="h6" gutterBottom>
                  {section.title}
                </Typography>
                {section.lessons &&
                  section.lessons.map((lesson) => (
                    <div key={lesson.id}>
                      <Typography variant="body1">
                        {lesson.title}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {lesson.description}
                      </Typography>
                    </div>
                  ))}
              </Box>
            ))}
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PreviewCourse;
