import Link from "next/link";
import { slugifyConvert } from "../../utils";

const Breadcrumb = ({bCat, aPage}) => {
  return (
    <div className="breadcrumb-wrapper">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            {bCat ? 
            <li className="breadcrumb-item">
                <Link href={`/category/${slugifyConvert(bCat)}`} >
                    <a>{bCat}</a>
                </Link>
            </li>: ""
            }
            <li className="breadcrumb-item active" aria-current="page">{aPage}</li>
          </ol>
          {/* End of .breadcrumb */}
        </nav>
      </div>
      {/* End of .container */}
    </div>
  );
};

export default Breadcrumb;
