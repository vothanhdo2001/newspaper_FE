import { slugifyConvert } from "../../utils";
import SectionTitle from "../elements/SectionTitle";
import PostLayoutFour from "./layout/PostLayoutFour";

const PostSectionSix = ({postData}) => {

    const foodPost = postData.filter(post => slugifyConvert(post.cate) === 'food' || slugifyConvert(post.cate) === 'drink');

    return ( 
        <div className="related-post p-b-xs-30">
            <div className="container">
                <SectionTitle title="Food &amp; Drink" btnText="All FOOD &amp; DRINK"/>
                <div className="grid-wrapper">
                    <div className="row">
                        {foodPost.slice(0, 4).map((data) => (
                            <div className="col-lg-3 col-md-4" key={data.slug}>
                                <PostLayoutFour data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default PostSectionSix;