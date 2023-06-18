import axios from 'axios';
import apiConfig from '../config/apiConfig';

const axiosInstance = axios.create(apiConfig);

export async function getPostById(id) {
    try {
        const response = await axiosInstance.get(`/posts/?idPost=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error retrieving posts:', error);
        throw error;
    }
}

export default {
    getPostById,
};
