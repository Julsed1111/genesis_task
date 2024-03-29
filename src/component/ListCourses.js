import React, { useState, useEffect } from 'react';
import { getAllCourses } from '../API/Api';
import Pagination from "./Pagination";
import Courses from "./Courses";

function CoursesForm() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const courses = await getAllCourses();
      setData(courses);
    }
    fetchData();
  }, []);

  const lastCoursesIndex = currentPage * coursesPerPage;
  const firstCoursesIndex = lastCoursesIndex - coursesPerPage;
  const currentCourses = data.slice(firstCoursesIndex, lastCoursesIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Courses data={currentCourses}/>
      <Pagination
        coursesPerPage={coursesPerPage}
        totalCourses={data.length}
        paginate={paginate}
      />
    </>
  );
}

export default CoursesForm;
