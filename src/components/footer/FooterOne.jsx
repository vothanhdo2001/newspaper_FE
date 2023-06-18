import Image from "next/image";
import Link from "next/link";
import SocialLink from "../../data/social/SocialLink.json";

const FooterOne = () => {
  return (
    <footer className="page-footer bg-grey-dark-key">
      <div className="container">
        <div className="footer-bottom">
          <ul className="footer-bottom-links">
            <li>
              <Link href="/">
                <a>Terms of Use</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Accessibility &amp; CC</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>AdChoices</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Modern Slavery Act Statement</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Advertise with us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Papr Store</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Newsletters</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Transcripts</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>License Footage</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Sitemap</a>
              </Link>
            </li>
          </ul>
          {/* End of .footer-bottom-links */}
          <p className="axil-copyright-txt">
            © {new Date().getFullYear()}. All rights reserved by Your Company.
          </p>
        </div>
        {/* End of .footer-bottom */}
      </div>
      {/* End of .container */}
    </footer>
  );
};

export default FooterOne;
