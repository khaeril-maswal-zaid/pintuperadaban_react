const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-3">
        <div className="row py-4">
          <div className="col-lg-4 col-md-6 mb-5">
            <h5 className="mb-4 text-white text-uppercase font-weight-bold">
              Get In Touch
            </h5>
            <p className="font-weight-medium">
              <i className="fa fa-map-marker-alt mr-2" />
              Berdikari C, Jln. Ahmad Yani, Bulukumba
            </p>
            <p className="font-weight-medium">
              <i className="fa fa-phone-alt mr-2" />
              62 853-4365-2494 / 62 853-4043-4280
            </p>
            <p className="font-weight-medium">
              <i className="fa fa-envelope mr-2" />
              official@pintuperadaban.com
            </p>
            <h6 className="mt-4 mb-3 text-white text-uppercase font-weight-bold">
              Follow Us
            </h6>
            <div className="d-flex justify-content-start">
              <a
                className="btn btn-lg btn-secondary btn-lg-square mr-2"
                href="https://web.facebook.com/profile.php?id=100083999477470"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-lg btn-secondary btn-lg-square mr-2"
                href="https://web.facebook.com/profile.php?id=100083999477470"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-lg btn-secondary btn-lg-square mr-2"
                href="https://web.facebook.com/profile.php?id=100083999477470"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="btn btn-lg btn-secondary btn-lg-square"
                href="https://web.facebook.com/profile.php?id=100083999477470"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <h5 className="mb-4 text-white text-uppercase font-weight-bold">
              Popular Peradaban
            </h5>
            <div className="mb-3">
              <div className="mb-2">
                <a
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                  href="/category/ekonomi"
                >
                  Ekonomi
                </a>
                <small>2024 Maret 07</small>
              </div>
              <a
                className="small text-body text-uppercase font-weight-medium"
                href="/wujudkan-visi-sebagai-kampus-entrepreneur-mahasiswa-umb-inisiasi-mini-bazar-di-kampus/2147483647"
              >
                Wujudkan Visi sebagai Kampus E
              </a>
            </div>
            <div className="mb-3">
              <div className="mb-2">
                <a
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                  href="/category/teologi"
                >
                  Teologi
                </a>
                <small>2024 Maret 07</small>
              </div>
              <a
                className="small text-body text-uppercase font-weight-medium"
                href="/memaknai-humanisme-dalam-konteks-kemuhammadiyahan/1134567890"
              >
                Memaknai Humanisme dalam Konte
              </a>
            </div>
            <div className="mb-3">
              <div className="mb-2">
                <a
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                  href="/category/news"
                >
                  News
                </a>
                <small>2024 Maret 07</small>
              </div>
              <a
                className="small text-body text-uppercase font-weight-medium"
                href="/um-bulukumba-gelar-penyambutan-mahasiswa-baru-melalui-masa-taaruf-dan-keakraban-mahasiswa/2147483647"
              >
                UM Bulukumba Gelar Penyambutan
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <h5 className="mb-4 text-white text-uppercase font-weight-bold">
              Categories
            </h5>
            <div className="m-n1">
              <a
                href="/category/teologi"
                className="btn btn-sm btn-secondary m-1"
              >
                Teologi
              </a>
              <a
                href="/category/filsafat"
                className="btn btn-sm btn-secondary m-1"
              >
                Filsafat
              </a>
              <a
                href="/category/ekonomi"
                className="btn btn-sm btn-secondary m-1"
              >
                Ekonomi
              </a>
              <a
                href="/category/sosial"
                className="btn btn-sm btn-secondary m-1"
              >
                Sosial
              </a>
              <a
                href="/category/politik"
                className="btn btn-sm btn-secondary m-1"
              >
                Politik
              </a>
              <a href="/category/news" className="btn btn-sm btn-secondary m-1">
                News
              </a>
              <a
                href="/category/opini"
                className="btn btn-sm btn-secondary m-1"
              >
                Opini
              </a>
              <a
                href="/category/the story"
                className="btn btn-sm btn-secondary m-1"
              >
                The Story
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-4 px-sm-3 px-md-5"
        style={{ background: "#111111" }}
      >
        <p className="m-0 text-center">
          © <a href="/">Pintu Perdaban.Com</a>. All Rights Reserved.
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Design by <a href="https://htmlcodex.com">HTML Codex</a>
        </p>
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-primary btn-square back-to-top">
        <i className="fa fa-arrow-up" />
      </a>
    </>
  );
};

export default Footer;
