import Image from "next/image";
import Link from "next/link";
import { slugifyConvert } from "../../../utils";

const PostVideoTwo = ({ data, pClass, videoIcon }) => {
  return (
    <div className={`media post-block post-block__small ${pClass ?? "post-block__on-dark-bg m-b-xs-30"}`}>
      <Link href={{ pathname: `/post/${data.slug}`, query: { postId: data.id } }}>
        <a className="align-self-center">
          <Image
            src={data.featureImg}
            alt={data.title}
            width={100}
            height={100}
          />
          {videoIcon === true ? <span className="video-play-btn video-play-btn__small" /> : ""}
        </a>
      </Link>

      <div className="media-body">
        <div className="post-cat-group">
          <Link href={`/category/${slugifyConvert(data.cate)}`}>
            <a className={`post-cat ${data.cate_bg ?? "bg-color-blue-one"}`}>{data.cate}</a>
          </Link>
        </div>
        <h3 className="axil-post-title hover-line hover-line">
          <Link href={{ pathname: `/post/${data.slug}`, query: { postId: data.id } }}>
            <a>{data.title}</a>
          </Link>
        </h3>
        <div className="post-metas">
          <ul className="list-inline">
            <li>
              <span>By</span>
              <Link href={`/author/${slugifyConvert(data.author_name)}`}>
                <a className="post-author">{data.author_name}</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostVideoTwo;
