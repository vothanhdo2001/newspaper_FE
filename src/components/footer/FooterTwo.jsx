import Image from "next/image";
import Link from "next/link";
import SocialLink from "../../data/social/SocialLink.json";

const FooterTwo = () => {
  return (
    <footer className="page-footer bg-grey-dark-key">
      <div className="custom-fluid-container">
        <div className="footer-mid pt-0">
          <div className="row align-items-center">
            <div className="col-md">
              <div className="footer-logo-container">
			  	<Link href="/">
                    <a> 
                        <Image 
                         src="/images/logo-symbol.svg"
                         alt="footer logo"
                         className="footer-logo"
                         width={86}
                         height={28}
                        />
                    </a>
                </Link>
              </div>
              {/* End of .brand-logo-container */}
            </div>
            {/* End of .col-md-6 */}
			<div className="col-md-auto">
              <div className="footer-social-share-wrapper">
                <div className="footer-social-share">
                  <div className="axil-social-title">Find us here</div>
                  <ul className="social-share social-share__with-bg">
                  <li>
                    <a href={SocialLink.fb.url}>
                      <i className={SocialLink.fb.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialLink.twitter.url}>
                      <i className={SocialLink.twitter.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialLink.yt.url}>
                      <i className={SocialLink.yt.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialLink.linked.url}>
                      <i className={SocialLink.linked.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialLink.pinterest.url}>
                      <i className={SocialLink.pinterest.icon} />
                    </a>
                  </li>
                  </ul>
                </div>
              </div>
              {/* End of .footer-social-share-wrapper */}
            </div>
            {/* End of .col-md-6 */}
          </div>
          {/* End of .row */}
        </div>

        {/* End of .footer-mid */}
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

export default FooterTwo;
