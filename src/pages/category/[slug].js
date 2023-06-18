import { getAllPosts } from "../../../lib/api";
import FooterOne from "../../components/footer/FooterOne";
import HeaderOne from "../../components/header/HeaderOne";
import Breadcrumb from "../../components/common/Breadcrumb";
import { formattedDate, slugifyConvert } from "../../utils";
import HeadMeta from "../../components/elements/HeadMeta";
import AdBanner from "../../components/common/AdBanner";
import WidgetAd from "../../components/widget/WidgetAd";
import WidgetSocialShare from "../../components/widget/WidgetSocialShare";
import WidgetPost from "../../components/widget/WidgetPost";
import PostLayoutTwo from "../../components/post/layout/PostLayoutTwo";
import WidgetCategory from "../../components/widget/WidgetCategory";
import homeService from "../../services/homeService";
import { defaultCategory } from "../../constant";
import categoryService from "../../services/categoryService";


const PostCategory = ({ postData, allPosts }) => {
  if (!postData) return
  const cateContent = postData[0];
  return (
    <>
      {postData && cateContent && (<>
        <HeadMeta metaTitle={cateContent.cate} />
        <HeaderOne />
        <Breadcrumb aPage={cateContent.cate} />
        {/* Banner Start here  */}
        <div className="banner banner__default bg-grey-light-three">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="post-title-wrapper">
                  <h2 className="m-b-xs-0 axil-post-title hover-line">{cateContent.cate}</h2>
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
              {/* <div className="col-lg-4">
                            <div className="post-sidebar">
                                <WidgetAd />
                                <WidgetSocialShare />
                                <WidgetCategory cateData={allPosts} />
                                <WidgetPost dataPost={allPosts} />
                                <WidgetAd img="/images/clientbanner/clientbanner3.jpg" height={492} width={320} />
                            </div>
                        </div> */}
            </div>
          </div>
        </div>
        <FooterOne />
      </>)}
    </>
  );
}

export default PostCategory;



async function fetchPostByCategoryId(slug) {
  if (!slug) return
  try {
    const resultCat = defaultCategory.find(item => {
      const currentSlug = slugifyConvert(item.category)
      if (!currentSlug) return
      return currentSlug === slug
    })
    const response = await categoryService.getPostCategories(resultCat.id)
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
    if (!allPosts) return
    return allPosts
  } catch (error) {
    console.error('Error getting posts:', error);
    return []
  }
}
export async function getStaticProps({ params }) {
  const slug = params.slug;
  if (!slug) return
  const post = await fetchPostByCategoryId(slug);
  const postData = post
  const response = await homeService.getPosts();
  if (!response) return;

  const result = response.results
  const allPosts = result.map((result => {
    return {
      id: result.id,
      title: result.title,
      excerpt: result.excerpt,
      date: formattedDate(result.dateCreate),
      featureImg: '/images/posts/post_1.jpg',
      cate: result.category,
      post_views: result.views,
      author_name: result.author,
      slug: slugifyConvert(result.title)
    }
  }))
  return {
    props: {
      postData,
      allPosts
    }
  };
}

export async function getStaticPaths() {
  try {
    const response = await homeService.getPosts();
    if (!response) return;

    const result = response.results
    const allPosts = result.map((result => {
      return {
        id: result.id,
        title: result.title,
        excerpt: result.excerpt,
        date: formattedDate(result.dateCreate),
        featureImg: '/images/posts/post_1.jpg',
        cate: result.category,
        post_views: result.views,
        author_name: result.author,
        slug: slugifyConvert(result.title)
      }
    }))
    const paths = allPosts.map((post) => ({
      params: {
        slug: slugifyConvert(post.cate)
      }
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error getting posts:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
}
