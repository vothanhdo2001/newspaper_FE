import axios from 'axios';
import { axiosComment } from '../config/apiConfig';

const axiosInstanceCmt = axios.create(axiosComment);


export async function postComment(bodyRequest) {
  if (!bodyRequest) return
  var formdataCurrent = new FormData();
  formdataCurrent.append("username", bodyRequest.username);
  formdataCurrent.append("email", bodyRequest.email);
  formdataCurrent.append("content", bodyRequest.content);
  formdataCurrent.append("idPost", bodyRequest.idPost);
  var requestOptions = {
    method: 'POST',
    body: formdataCurrent,
    redirect: 'follow'
  };
  try {
    if (!requestOptions) return
    const response = await fetch("http://127.0.0.1:8000/api/comments/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    // await axiosInstanceCmt.post(`/posts/comments/`, requestOptions);
    return response
  } catch (error) {
    console.error('Error retrieving posts:', error);
    throw error;
  }
}
export default {
  postComment,
};
