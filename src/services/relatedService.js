import axios from 'axios';
import apiConfig from '../config/apiConfig';

const axiosInstance = axios.create(apiConfig);

export async function getRelaties(idPost) {
  try {
    const response = await axiosInstance.get(`/posts/?related=${idPost}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving posts:', error);
    throw error;
  }
}
export default {
    getRelaties,
};
