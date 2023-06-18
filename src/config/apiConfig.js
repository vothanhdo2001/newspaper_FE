const API_BASE_URL = "http://127.0.0.1:8000/api/"; // Replace with your API base URL

export default {
  baseURL: API_BASE_URL,
  headers: {
    'Accept-Language': 'en-US',
    'Content-Type': 'application/json',
  },
};
export const axiosComment = {
  baseURL: API_BASE_URL,
  headers: {
    'Accept-Language': 'en-US',
    'Content-Type': 'application/json',
    "Allow": "POST, GET, OPTIONS, HEAD",
    "Content-Length": "110",
  },
};