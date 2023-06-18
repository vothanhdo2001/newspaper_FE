import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import Breadcrumb from "../components/common/Breadcrumb";
import { formattedDate, slugifyConvert } from "../utils";
import HeadMeta from "../components/elements/HeadMeta";
import AdBanner from "../components/common/AdBanner";
import WidgetAd from "../components/widget/WidgetAd";
import WidgetSocialShare from "../components/widget/WidgetSocialShare";
import WidgetPost from "../components/widget/WidgetPost";
import PostLayoutTwo from "../components/post/layout/PostLayoutTwo";
import WidgetCategory from "../components/widget/WidgetCategory";
import homeService from "../services/homeService";
import { defaultCategory } from "../constant";
import categoryService from "../services/categoryService";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import searchService from "../services/searchService";
import ErrorPage from "./404";

const PostSearch = () => {
    const [postData, setPostData] = useState([])
    const router = useRouter();
    const searchQuery = router.query.query;
    useEffect(() => {
        const searchHandle = async () => {
            try {
                const response = await searchService.getSearchParams(searchQuery)
                if (!response) return;
                const result = response.results
                const allPosts = result.map((result => {
                    return {
                        id: result.id,
                        title: result.title,
                        excerpt: result.excerpt,
                        author_social: [],
                        date: formattedDate(result.dateCreate),
                        featureImg: '/images/posts/post_1.jpg',
                        cate: result.category,
                        post_views: result.views,
                        author_name: result.author,
                        slug: slugifyConvert(result.title)
                    }
                }))
                setPostData(allPosts)
                return result
            } catch (error) {
                console.error(error);
            }
        }
        searchHandle()
    }, [searchQuery])
    if (!postData) return
    const cateContent = postData[0];
    console.log(cateContent)
    return (
        <>
            {postData && cateContent ? (<>
                <HeadMeta metaTitle={cateContent.cate} />
                <HeaderOne />
                {/* <Breadcrumb aPage={cateContent.cate} /> */}
                {/* Banner Start here  */}
                <div className="banner banner__default bg-grey-light-three">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="post-title-wrapper">
                                    <h2 className="m-b-xs-0 axil-post-title hover-line">Tìm kiếm gần đây</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner End here  */}
                <div className="random-posts section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                {/* <AdBanner /> */}
                                <div className="axil-content">
                                    {postData.map((data) => (
                                        <PostLayoutTwo data={data} postSizeMd={true} key={data.slug} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterOne />
            </>) : <ErrorPage></ErrorPage>}
        </>
    );
}

export default PostSearch;




