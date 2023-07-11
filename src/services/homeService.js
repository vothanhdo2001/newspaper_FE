import axios from 'axios';
import apiConfig from '../config/apiConfig';

const axiosInstance = axios.create(apiConfig);

export async function getPosts() {
  try {
    const response = await axiosInstance.get('/posts/');

    return response.data;
  } catch (error) {
    console.error('Error retrieving posts:', error);
    throw error;
  }
}
export async function getPostPaginations({ page }) {
  try {
    const response = await axiosInstance.get(`/posts/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving posts:', error);
    throw error;
  }
}

export default {
  getPosts,
  getPostPaginations
};
