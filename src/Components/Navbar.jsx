const Navbar = () => {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center bg-dark px-lg-5">
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-sm bg-dark p-0">
              <ul className="navbar-nav ml-n2">
                <li className="nav-item border-right border-secondary">
                  <a className="nav-link text-body small" href="/">
                    Kamis, 05 Desember 2024
                  </a>
                </li>
                <li className="nav-item border-right border-secondary">
                  <a className="nav-link text-body small" href="/kontak">
                    Advertise
                  </a>
                </li>
                <li className="nav-item border-right border-secondary">
                  <a className="nav-link text-body small" href="/kontak">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body small" href="/adminppc">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 text-right d-none d-md-block">
            <nav className="navbar navbar-expand-sm bg-dark p-0">
              <ul className="navbar-nav ml-auto mr-n2">
                <li className="nav-item">
                  <a className="nav-link text-body" href="/">
                    Pintu Peradaban Site
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row align-items-center bg-white py-3 px-lg-5">
          <div className="col-lg-4">
            <a href="/" className="navbar-brand p-0 d-none d-lg-block">
              {/* <h1 class="m-0 display-4 text-uppercase text-primary">Biz<span class="text-secondary font-weight-normal">News</span></h1> */}
              <img
                src="/assets/img/web/brand.png"
                alt="Pintu Perdaban"
                className="py-1"
                width="100%"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
          <a
            href="/"
            className=" navbar-brand d-block d-lg-none"
            style={{ maxWidth: "65%" }}
          >
            {/* <h1 class="m-0 display-4 text-uppercase text-primary">Biz<span class="text-white font-weight-normal">News</span></h1> */}
            <h1>
              <img
                src="/assets/img/web/brand.png"
                alt="Pintu Perdaban"
                className="py-1"
                width="100%"
              />
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto py-0">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="/category/news" className="nav-item nav-link ">
                Latest News
              </a>
              <a href="/category/opini" className="nav-item nav-link ">
                Opini
              </a>
              <a href="/category/the-story" className="nav-item nav-link ">
                The Story
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle "
                  data-toggle="dropdown"
                >
                  More Posts
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="/category/teologi" className="dropdown-item">
                    Teologi
                  </a>
                  <a href="/category/filsafat" className="dropdown-item">
                    Filsafat
                  </a>
                  <a href="/category/sosial" className="dropdown-item">
                    Sosial
                  </a>
                  <a href="/category/ekonomi" className="dropdown-item">
                    Ekonomi
                  </a>
                  <a href="/category/politik" className="dropdown-item">
                    Politik
                  </a>
                  <a href="/category/bisnis" className="dropdown-item">
                    Bisnis
                  </a>
                </div>
              </div>
              <a href="/kontak" className="nav-item nav-link ">
                Kontak
              </a>
            </div>
            <div
              className="input-group ml-auto d-none d-lg-flex"
              style={{ width: "100%", maxWidth: 300 }}
            >
              <input
                type="text"
                className="form-control border-0"
                placeholder="Keyword"
              />
              <div className="input-group-append">
                <button className="input-group-text bg-primary text-dark border-0 px-3">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </>
  );
};

export default Navbar;
