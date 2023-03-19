import axios from 'axios';

const API_URL = 'https://api.wisey.app/api/v1';
const TOKEN_PATH = '/auth/anonymous?platform=subscriptions';
const ALL_COURSES_PATH = '/core/preview-courses';
const COURSE_PATH = '/core/preview-courses/'; //must be used with /:courseID !

export function getPreparedHeaders(token) {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  };
}

export async function getToken() {
  const response = await axios.get(API_URL + TOKEN_PATH);
  return response.data.token;
}

export async function getAllCourses() {
  const token = await getToken();
  const headers = getPreparedHeaders(token);
  const response = await axios.get(API_URL + ALL_COURSES_PATH, headers);
  return response.data.courses;
}

export async function getCourse(id) {
  const token = await getToken();
  const headers = getPreparedHeaders(token);
  const response = await axios.get(API_URL + COURSE_PATH + id, headers);
  console.log(response.data)
  return response.data;
}
