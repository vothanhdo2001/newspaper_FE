import { slugifyConvert, formattedDate } from "../utils";
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import PostSectionOne from "../components/post/PostSectionOne";
import homeService from "../services/homeService";

import { getAllPosts } from "../../lib/api";



const HomeOne = ({ allPosts }) => {
  return (
    <>
      <HeadMeta metaTitle="Home One" />
      <HeaderOne />
      {allPosts &&
        <PostSectionOne postData={allPosts} />}
      <FooterOne />
    </>
  );
}

export default HomeOne;

export async function getStaticProps() {
  try {
    const response = await homeService.getPosts();
    if (!response) return
    const result = response.results
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
      props: { allPosts },
    };
  } catch (error) {
    console.error('Error getting posts:', error);
    return {
      props: { allPosts: [] }
    };
  }
}

