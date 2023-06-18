import { useEffect, useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import relatedService from "../../services/relatedService";
import PostVideoTwo from "../post/layout/PostVideoTwo";
import { formattedDate, slugifyConvert } from "../../utils";


const WidgetPost = ({ dataPost, postData }) => {
    const [relatedData, setRelatedData] = useState([])
    useEffect(() => {
        const fetchRelated = async () => {
            if (!dataPost && !postData) return
            const responseRelated = await relatedService.getRelaties(postData.id)
            const relaties = responseRelated.results
            const allPosts = relaties.map(related => {
                return {
                    id: related.id,
                    title: related.title,
                    excerpt: related.excerpt,
                    postFormat: 'standard',
                    gallery: '/images/Logo.png',
                    featureImg: '/images/Logo.png',
                    author_social: [],
                    date: formattedDate(related.dateCreate),
                    cate: related.category,
                    cate_bg: 'bg-color-blue-one',
                    cate_img: '/images/Logo.png',
                    post_views: related.views,
                    author_name: related.author,
                    author_img: '/images/Logo.png',
                    slug: slugifyConvert(related.title),
                    content: related.content,
                }
            })
            setRelatedData(allPosts)
        }
        fetchRelated()
    }, [])
    return (
        <div className="post-widget sidebar-post-widget m-b-xs-40">
            <Tab.Container id="widget-post" defaultActiveKey="recent">
                <Nav variant="pills" className="row no-gutters">
                    <Nav.Item className="col">
                        <Nav.Link eventKey="recent">Related Posts</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item className="col">
                <Nav.Link eventKey="popular">POPULAR</Nav.Link>
                </Nav.Item>
                <Nav.Item className="col">
                <Nav.Link eventKey="comments">COMMENTS</Nav.Link>
                </Nav.Item> */}
                </Nav>
                {/* {console.log(dataPost)} */}
                <Tab.Content>
                    <Tab.Pane eventKey="recent">
                        {relatedData && relatedData
                            .map(data => {
                                return (
                                    <PostVideoTwo data={data} pClass="" key={data.slug} />
                                )
                            }
                            )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="popular">
                        {dataPost.slice(0, 4).map((data) => (
                            <PostVideoTwo data={data} pClass="" key={data.slug} />
                        ))}
                    </Tab.Pane>
                    <Tab.Pane eventKey="comments">
                        {dataPost.slice(0, 4).map((data) => (
                            <PostVideoTwo data={data} pClass="" key={data.slug} />
                        ))}
                    </Tab.Pane>
                </Tab.Content>

            </Tab.Container>
        </div>
    );
};

export default WidgetPost;
