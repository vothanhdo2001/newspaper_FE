import axios from 'axios';
import apiConfig from '../config/apiConfig';

const axiosInstance = axios.create(apiConfig);

export async function getSearchParams(keyword) {
  try {
    const response = await axiosInstance.get(`/posts/?search=${keyword}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving posts:', error);
    throw error;
  }
}
export async function getSearchParamsPagination(keyword, page) {
  try {
    const response = await axiosInstance.get(`posts/?search=${keyword}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving posts:', error);
    throw error;
  }
}

export default {
    getSearchParams,
    getSearchParamsPagination
};
