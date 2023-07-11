import FooterOne from "../../components/footer/FooterOne";
import HeaderOne from "../../components/header/HeaderOne";
import Breadcrumb from "../../components/common/Breadcrumb";
import { formattedDate, slugifyConvert } from "../../utils";
import HeadMeta from "../../components/elements/HeadMeta";
import PostLayoutTwo from "../../components/post/layout/PostLayoutTwo";
import PostLayoutOne from "../../components/post/layout/PostLayoutOne";
import Pagination from '../../components/Pagination/Pagination';
import { defaultCategory } from "../../constant";
import categoryService from "../../services/categoryService";

const PostCategory = ({ postData, currentPage, totalPages, slug }) => {
  if (!postData) return null;
  const cateContent = postData[0];
  return (
    <>
      <HeadMeta metaTitle={cateContent.cate} />
      <HeaderOne />
      <Breadcrumb aPage={cateContent.cate} />
      {/* Banner Start here */}
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
      {/* Banner End here */}
      <div className="random-posts section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="axil-content">
                {postData.slice(0, 1).map((data) => (
                  <PostLayoutOne data={data} key={data.slug} />
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="axil-content">
                {postData.slice(2, 29).map((data) => (
                  <PostLayoutTwo data={data} key={data.slug} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} url={`/category/${slug}`} />
      <FooterOne />
    </>
  );
};

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  const page = context.query.page ? parseInt(context.query.page) : 1;
  if (!slug) return { props: {} };

  const category = await fetchPostByCategoryId(slug);
  const response = await categoryService.getPostCategories(category.id, page);
  if (!response) return null;

  const result = response.results;
  const allPosts = result.map((result) => ({
    id: result.id,
    title: result.title,
    excerpt: result.excerpt,
    author_social: [],
    date: formattedDate(result.dateCreate),
    featureImg: '/images/post.png',
    cate: result.category,
    post_views: result.views,
    author_name: result.author,
    slug: slugifyConvert(result.title),
  }));
  const postData = allPosts || [];
  const totalPages = Math.floor(response.count / 30) + 1;

  return {
    props: {
      postData,
      currentPage: page,
      totalPages,
      slug,
    },
  };
}

async function fetchPostByCategoryId(slug) {
  if (!slug) return null;
  try {
    const resultCat = defaultCategory.find((item) => {
      const currentSlug = slugifyConvert(item.category);
      return currentSlug === slug;
    });

    return resultCat;
  } catch (error) {
    console.error('Error getting posts:', error);
    return [];
  }
}

export default PostCategory;
