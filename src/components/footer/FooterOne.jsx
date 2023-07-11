const FooterOne = () => {
  return (
    <footer className="page-footer bg-grey-dark-key">
      <div className="container">
        <div className="footer-bottom">
          <p className="axil-copyright-txt">
            © {new Date().getFullYear()}. By Võ Thành Đô.
          </p>
        </div>
        {/* End of .footer-bottom */}
      </div>
      {/* End of .container */}
    </footer>
  );
};

export default FooterOne;
