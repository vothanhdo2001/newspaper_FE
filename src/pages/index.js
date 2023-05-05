import { getAllPosts } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import PostSectionFive from "../components/post/PostSectionFive";
import PostSectionFour from "../components/post/PostSectionFour";
import PostSectionOne from "../components/post/PostSectionOne";
import PostSectionSix from "../components/post/PostSectionSix";
import PostSectionThree from "../components/post/PostSectionThree";
import PostSectionTwo from "../components/post/PostSectionTwo";

const HomeOne = ({ allPosts }) => {

  return (
    <>
      <HeadMeta metaTitle="Home One" />
      <HeaderOne />
      <PostSectionOne postData={allPosts} />
      {/* <PostSectionTwo postData={allPosts} /> */}
      {/* <PostSectionThree postData={allPosts} /> */}
      {/* <PostSectionFour postData={allPosts} /> */}
      {/* <PostSectionFive postData={allPosts} adBanner={false} /> */}
      {/* <PostSectionSix postData={allPosts} /> */}
      <FooterOne />
    </>
  );
}

export default HomeOne;


export async function getStaticProps() {
  const allPosts = getAllPosts([
    'postFormat',
    'trending',
    'story',
    'slug',
    'title',
    'excerpt',
    'featureImg',
    'cate',
    'cate_bg',
    'cate_img',
    'author_name',
    'date',
    'post_views',
    'post_share',
  ])

  return {
    props: { allPosts }
  }
}

