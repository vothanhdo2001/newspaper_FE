import { useState } from "react";
import commentService from "../../../../services/commentService";
import FormGroup from "../../../contact/FormGroup";

const PostComment = (id) => {
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: ''
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bodyRequest = {
        username: formData.name,
        email: formData.email,
        content: formData.comment,
        idPost: id.idPost
      }
      const response = commentService.postComment(bodyRequest)
      if (!response) return
      setFormData({
        comment: '',
        name: '',
        email: ''
      });
      return response
    } catch (error) {
      console.error(error)
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="post-comment-area">
      <div className="comment-box">
        <h2>Leave A Reply</h2>
        <p>
          Your email address will not be published.
          <span className="primary-color">*</span>
        </p>
      </div>
      {/* End of .comment-box */}
      <form action="#" className="comment-form row m-b-xs-60" onSubmit={handleSubmit}>
        <div className="col-12">
          <FormGroup pClass="comment-message-field" label="Comment" type="textarea" name="comment" rows={6} value={formData.comment}
            onChange={handleChange}>
          </FormGroup>
        </div>
        <div className="col-md-4">
          <FormGroup type="text" name="name" label="Name" value={formData.name}
            onChange={handleChange} />
        </div>
        <div className="col-md-4">
          <FormGroup type="text" name="email" label="Email" value={formData.email}
            onChange={handleChange} />
        </div>
        <div className="col-12">
          <button className="btn btn-primary">POST COMMENT</button>
        </div>
      </form>
    </div>
  );
};

export default PostComment;
