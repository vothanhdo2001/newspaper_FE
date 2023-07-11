import { slugifyConvert, formattedDate } from "../utils";
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import PostSectionOne from "../components/post/PostSectionOne";
import homeService from "../services/homeService";
import Pagination from '../components/Pagination/Pagination';



const HomeOne = ({ allPosts, currentPage, totalPages }) => {
  return (
    <>
      <HeadMeta metaTitle="Home One" />
      <HeaderOne />
      {allPosts &&
        <PostSectionOne postData={allPosts} />}
      <Pagination currentPage={currentPage} totalPages={totalPages} url={""} />
      <FooterOne />
    </>
  );
}

export default HomeOne;


export async function getServerSideProps({ query }) {
  const currentPage = query.page || 1;
  try {
    const response = await homeService.getPostPaginations({ page: currentPage });
    if (!response) return
    const result = response.results
    const totalPages = Math.floor(response.count / 30) + 1;

    const allPosts = result.map((result => {
      return {
        id: result.id,
        title: result.title,
        excerpt: result.excerpt,
        date: formattedDate(result.dateCreate),
        cate: result.category,
        cate_img: '/images/post.png',
        featureImg: '/images/post.png',
        post_views: result.views,
        author_name: result.author,
        slug: slugifyConvert(result.title)
      }
    }))
    return {
      props: { allPosts, currentPage, totalPages }
    };
  } catch (error) {
    console.error('Error getting posts:', error);
    return {
      props: { allPosts: [] }
    };
  }
}