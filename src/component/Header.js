import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import logo from './react-logo.png';
import CoursesForm from './ListCourses';
import CourseDetails from './CoursesDetail';

const Header = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<CoursesForm />} />
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
      </Container>
    </>
  );
};

export default Header;
