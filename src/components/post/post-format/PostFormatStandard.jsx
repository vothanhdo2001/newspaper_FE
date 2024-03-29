import WidgetPost from "../../widget/WidgetPost";
import MetaDataOne from "./elements/meta/MetaDataOne";
import PostComment from "./elements/PostComment";


const PostFormatStandard = ({ postData, allData }) => {
  const basePathLink = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? "" : "";

  const postContent = postData.content.replaceAll('/images/', basePathLink + '/images/');
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:8000/api/post/" + postData.id, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  return (
    <>
      <MetaDataOne metaData={postData} />
      <div className="post-single-wrapper p-t-xs-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <main className="site-main">
                <article className="post-details">
                  <div className="single-blog-wrapper">
                    {/* <SocialShareSide /> */}
                    <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
                  </div>
                </article>
                {/* <SocialShareBottom /> */}
                <hr className="m-t-xs-50 m-b-xs-60" />
                {/* <PostAuthor authorData={postData} /> */}
                <PostComment idPost={postData && postData.id} />
              </main>
            </div>
            <div className="col-lg-4">
              <div className="post-sidebar">
                {/* <WidgetNewsletter /> */}
                {/* <WidgetSocialShare /> */}
                <WidgetPost dataPost={allData} postData={postData} />
                {/* <WidgetInstagram /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostFormatStandard;