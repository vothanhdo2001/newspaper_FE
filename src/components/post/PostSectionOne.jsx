import { SortingByDate } from "../../utils";
import SectionTitle from "../elements/SectionTitle";
import PostLayoutTwo from "./layout/PostLayoutTwo";

const PostSectionOne = ({ postData }) => {
  SortingByDate(postData);
  return (
    <>
      {postData && (<>
        <div className="recent-news-wrapper section-gap p-t-xs-15 p-t-sm-60">
          <div className="container">

            <div className="row">
              <div className="col-lg-6">
                <div className="axil-recent-news">
                  <SectionTitle
                    title="Recent News"
                    pClass="m-b-xs-30"
                  />
                  <div className="axil-content">
                    {postData.slice(0, 14).map((data) => (
                      <PostLayoutTwo data={data} key={data.slug} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="axil-recent-news">
                  <SectionTitle
                    pClass="m-b-xs-30"
                  />
                  <div className="axil-content">
                    {postData.slice(15, 29).map((data) => (
                      <PostLayoutTwo data={data} key={data.slug} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </>)}
    </>
  );
}

export default PostSectionOne;