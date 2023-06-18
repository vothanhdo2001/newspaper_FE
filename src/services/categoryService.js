import axios from 'axios';
import apiConfig from '../config/apiConfig';

const axiosInstance = axios.create(apiConfig);

export async function getCategories() {
  try {
    const response = await axiosInstance.get('/categorys');
    return response.data;
  } catch (error) {
    console.error('Error retrieving posts:', error);
    throw error;
  }
}
export async function getPostCategories(idCategory) {
  try {
    const response = await axiosInstance.get(`posts/?category=${idCategory}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving posts:', error);
    throw error;
  }
}

export default {
    getCategories,
    getPostCategories
};
