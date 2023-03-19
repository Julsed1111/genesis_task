import React from "react";
import { Pagination } from '@mui/material';

const CustomPagination = ({ coursesPerPage, totalCourses, paginate }) => {

  const handleChange = (event, value) => {
    paginate(value);
  };

  return (
    <div style={{margin: "16px 0px",
      display: "flex",
      justifyContent: "center"}} >
      <Pagination
        count={Math.ceil(totalCourses / coursesPerPage)}
        shape="rounded"
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomPagination;
