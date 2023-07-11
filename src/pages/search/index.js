import FooterOne from "../../components/footer/FooterOne";
import HeaderOne from "../../components/header/HeaderOne";
import { formattedDate, slugifyConvert } from "../../utils";
import HeadMeta from "../../components/elements/HeadMeta";
import PostLayoutTwo from "../../components/post/layout/PostLayoutTwo";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import searchService from "../../services/searchService";
import Image from "next/image";
import Pagination from '../../components/Pagination/Pagination';
const PostSearch = ({ allPosts, searchQuery, currentPage, totalPages }) => {
    return (
        <>
            <HeadMeta />
            <HeaderOne />
            {/* <Breadcrumb aPage={cateContent.cate} /> */}
            {/* Banner Start here  */}
            <>
                <div className="random-posts section-gap" >
                    <div className="container">
                        <div className="row">
                            <h2>Kết quả cho: {searchQuery}</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="axil-content">
                                    {allPosts.slice(0, 29).map((data) => (
                                        <PostLayoutTwo data={data} key={data.slug} />
                                    ))}
                                </div>
                            </div>


                        </div>
                        <Pagination currentPage={currentPage} totalPages={totalPages} url={`/search?query=${searchQuery}`} IsSearch={true} />
                    </div>
                </div>

            </>
            {!allPosts[0] && <div style={{ width: "100%", display: "grid", placeItems: "center" }}>
                <h2 className="text-center">Chưa tìm thấy</h2>
                <Image
                    className=""
                    src="/images/load.png!bw700"
                    alt="loadConfig..."
                    width={500}
                    height={500}
                    placeholder="blur"
                    blurDataURL="/images/placeholder.png"
                />
            </div>}
            <FooterOne />
        </>
    );
}
export async function getServerSideProps({ query }) {
    const currentPage = query.page || 1;
    const searchQuery = query.query;
    try {
        const response = await searchService.getSearchParamsPagination(searchQuery, currentPage)
        if (!response) return;
        const result = response.results
        const allPosts = result.map((result => {
            return {
                id: result.id,
                title: result.title,
                excerpt: result.excerpt,
                author_social: [],
                date: formattedDate(result.dateCreate),
                featureImg: '/images/post.png',
                cate: result.category,
                post_views: result.views,
                author_name: result.author,
                slug: slugifyConvert(result.title)
            }
        }))
        const totalPages = Math.floor(response.count / 30) + 1;

        return {
            props: { allPosts, currentPage, totalPages, searchQuery }
        };
    } catch (error) {
        console.error('Error getting posts:', error);
        return {
            props: { allPosts: [] }
        };
    }
}


export default PostSearch;




