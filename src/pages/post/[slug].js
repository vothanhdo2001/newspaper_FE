import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import Breadcrumb from "../../components/common/Breadcrumb";
import HeadMeta from "../../components/elements/HeadMeta";
import FooterOne from "../../components/footer/FooterOne";
import HeaderOne from "../../components/header/HeaderOne";
import PostFormatAudio from "../../components/post/post-format/PostFormatAudio";
import PostFormatGallery from "../../components/post/post-format/PostFormatGallery";
import PostFormatQuote from "../../components/post/post-format/PostFormatQuote";
import PostFormatStandard from "../../components/post/post-format/PostFormatStandard";
import PostFormatText from "../../components/post/post-format/PostFormatText";
import PostFormatVideo from "../../components/post/post-format/PostFormatVideo";
import PostSectionSix from "../../components/post/PostSectionSix";
import homeService from "../../services/homeService";
import relatedService from "../../services/relatedService";
import { formattedDate, slugifyConvert } from "../../utils";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import postService from "../../services/postService";
import Image from "next/image";

const PostDetails = () => {
    const [postContent, setPostData] = useState()
    const [allPosts, setAllPosts] = useState()
	const router = useRouter();
	const { postId } = router.query;
    useEffect(() => {
	if(!postId) return
    const postHandler = async() => {
    try {
      const response = await postService.getPostById(postId)
      if (!response) return;
	  const result = response.results[0]
	  const getPostBySlug = {
		id: result.id,
		title: result.title,
		excerpt: result.excerpt,
		postFormat: 'standard',
		gallery: '/images/post.png',
		featureImg: '/images/post.png',
		author_social: [],
		date: formattedDate(result.dateCreate),
		cate: result.category,
		cate_bg: 'bg-color-blue-one',
		cate_img: '/images/post.png',
		post_views: result.views,
		author_name: result.author,
		author_img: '/images/author.png',
		slug: slugifyConvert(result.title),
		content: result.content,
		related_1: 4,
		related_2: 2,
		related_3: 3,
		related_4: 6,
		related_5: 7,
		related_6: 8,
		related_7: 9,
		related_8: 10,
		related_9: 11,
	  }
		const content = await markdownToHtml(getPostBySlug.content || '');
		const currentPostData = {
			content: content,
			...getPostBySlug
		}
		setPostData(currentPostData)
      return result
    } catch (error) {
      console.error(error);
    }}
	const allPostsHandler = async() => {
		try {
			const response = await homeService.getPosts();
			if (!response) return;

			const result = response.results
			const allPosts = result.map((result => {
	  		return {
		id: result.id,
		title: result.title,
		excerpt: result.excerpt,
		postFormat: 'standard',
		gallery: '/images/post.png',
		featureImg: '/images/post.png',
		date: formattedDate(result.dateCreate),
		cate: result.category,
		cate_bg: 'bg-color-blue-one',
		cate_img: '/images/post.png',
		post_views: result.views,
		author_name: result.author,
		author_img: '/images/author.png',
		slug: slugifyConvert(result.title),
	  	}
		}))
		setAllPosts(allPosts)
		} catch (error) {
			console.error(error)
		}
	}
	allPostsHandler()
    postHandler()
	}, [postId])
	const PostFormatHandler = () => {
		if (postContent.postFormat === 'video') {
			return <PostFormatVideo postData={postContent} allData={allPosts} />
		} else if (postContent.postFormat === 'gallery') {
			return <PostFormatGallery postData={postContent} allData={allPosts} />
		} else if (postContent.postFormat === 'audio') {
			return <PostFormatAudio postData={postContent} allData={allPosts} />
		} else if (postContent.postFormat === 'quote') {
			return <PostFormatQuote postData={postContent} allData={allPosts} />
		} else if (postContent.postFormat === 'text') {
			return <PostFormatText postData={postContent} allData={allPosts} />
		} else {
			return <PostFormatStandard postData={postContent && postContent} allData={allPosts && allPosts} />
		}
	}
	return (
		<>
			<HeadMeta metaTitle="Post Details" />
			<HeaderOne />
			{
				postContent && allPosts && allPosts.length > 0 && postId ?
			(
				<>
					<Breadcrumb bCat={postContent.cate} aPage={postContent.title} />
					<PostFormatHandler />
				</>
					) :
					<>
						<div style={{width: "100%", display: "grid", placeItems: "center"}}>
					<Image
						className=""
						src="/images/load.png!bw700"
						alt="loadConfig..."
						width={500}
						height={500}
						placeholder="blur"
						blurDataURL="/images/placeholder.png"
					/>
						</div>
					</>
			}
			<FooterOne />
		</>
	);
}

export default PostDetails;

// async function fetchPostBySlug(slug) {
// 	try {
// 		const response = await homeService.getPosts();
// 		if (!response) return;
// 		const result = response.results
// 		const allPosts = result.find((result => slugifyConvert(result.title) === slug))
// 		if(!allPosts) return
// 		const getPostBySlug = {
// 			id: allPosts.id,
// 			title: allPosts.title,
// 			excerpt: allPosts.excerpt,
// 			postFormat: 'standard',
// 			gallery: '/images/posts/post_1.jpg',
// 			featureImg: '/images/posts/post_1.jpg',
// 			author_social: [],
// 			date: formattedDate(allPosts.dateCreate),
// 			cate: allPosts.category,
// 			cate_bg: 'bg-color-blue-one',
// 			cate_img: '/images/category/technology.png',
// 			post_views: allPosts.views,
// 			author_name: allPosts.author,
// 			author_img: '/images/author/ashley_graham.png',
// 			slug: slugifyConvert(allPosts.title),
// 			content: allPosts.content,
// 			related_1: 4,
// 			related_2: 2,
// 			related_3: 3,
// 			related_4: 6,
// 			related_5: 7,
// 			related_6: 8,
// 			related_7: 9,
// 			related_8: 10,
// 			related_9: 11,
// 		}
// 		return getPostBySlug
// 	  } catch (error) {
// 		console.error('Error getting posts:', error);
// 		return []
// 	  }
// }

// export async function getStaticProps({ params }) {
// 	const slug = params.slug;
//     if(!slug) return
// 	const post = await fetchPostBySlug(slug);
// 	const content = await markdownToHtml(post.content || '');
// 	const response = await homeService.getPosts();
// 	if (!response) return;

// 	const result = response.results
// 	const allPosts = result.map((result => {
// 	  return {
// 		id: result.id,
// 		title: result.title,
// 		excerpt: result.excerpt,
// 		postFormat: 'standard',
// 		gallery: '/images/posts/post_1.jpg',
// 		featureImg: '/images/posts/post_1.jpg',
// 		date: formattedDate(result.dateCreate),
// 		cate: result.category,
// 		cate_bg: 'bg-color-blue-one',
// 		cate_img: '/images/category/technology.png',
// 		post_views: result.views,
// 		author_name: result.author,
// 		author_img: '/images/author/ashley_graham.png',
// 		slug: slugifyConvert(result.title),
// 	  }
// 	}))
// 	return {
// 	  props: {
// 		postContent: {
// 		  ...post,
// 		  content
// 		},
// 		allPosts
// 	  }
// 	};
// }
  
// export async function getStaticPaths() {
// 	try {
// 	  const response = await homeService.getPosts();
// 	  if (!response) return;
  
//       const result = response.results
// 	  const allPosts = result.map((result => {
//         return {
//           id: result.id,
//           title: result.title,
//           excerpt: result.excerpt,
//           date: formattedDate(result.dateCreate),
//           cate: result.category,
//           post_views: result.views,
//           author_name: result.author,
//           slug: slugifyConvert(result.title)
//         }
//       }))
// 	  const paths = allPosts.map((post) => ({
// 		params: {
// 		  slug: slugifyConvert(post.slug)
// 		}
// 	  }));
// 	  return {
// 		paths,
// 		fallback: false,
// 	  };
// 	} catch (error) {
// 	  console.error('Error getting posts:', error);
// 	  return {
// 		paths: [],
// 		fallback: false,
// 	  };
// 	}
// }