import Image from "next/image";
import Link from "next/link";
import { slugifyConvert } from "../../../utils";

const PostLayoutTwo = ({ data, postSizeMd, postBgDark }) => {
  return (
    <div className={`media post-block m-b-xs-30 ${postSizeMd === true ? "post-block__mid" : ""} ${postBgDark === true ? "post-block__on-dark-bg" : ""}`}>
      <Link href={{ pathname: `/post/${data.slug}`, query: { postId: data.id } }}>
        <a className="align-self-center">
          <Image
            src={data.featureImg}
            alt={data.title}
            width={postSizeMd === true ? 285 : 150}
            height={postSizeMd === true ? 285 : 150}
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
          />
        </a>
      </Link>
      <div className="media-body">
        <div className="post-cat-group m-b-xs-10">
          <Link href={`/category/${slugifyConvert(data.cate)}`}>
            <a className={`post-cat cat-btn ${data.cate_bg ?? "bg-color-blue-one"}`}>{data.cate}</a>
          </Link>
        </div>
        <h3 className="axil-post-title hover-line hover-line">
          <Link href={{ pathname: `/post/${data.slug}`, query: { postId: data.id } }}>
            <a>{data.title}</a>
          </Link>
        </h3>
        {postSizeMd === true ?
          <p className="mid">{data.excerpt}</p>

          : ""
        }
        <div className="post-metas">
          <ul className="list-inline">
            <li>
              <span>By</span>

              <a className="post-author">{data.author_name}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostLayoutTwo;
