import { useParams } from "react-router-dom";

// Components
import Footer from "../Components/Footer";
import IklanBannerTop from "../Components/IklanBannerTop";
import Navbar from "../Components/Navbar";
import RightPage from "../Components/RightPage";

//Data
import { newsData } from "../data/NewsData";

const SinglePage = () => {
  const { slug } = useParams();
  const news = newsData.find((n) => n.slug === slug);
  console.log(news);

  if (!news) return <p>Berita tidak ditemukan.</p>;

  return (
    <>
      <Navbar />
      {/* News With Sidebar Start */}
      <div className="container-fluid pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* News Detail Start */}
              <div className="position-relative mb-3">
                <img
                  className="img-fluid w-100"
                  src="/assets/img/artikel/news/um-bulukumba-gelar-penyambutan-mahasiswa-baru-melalui-masa-taaruf-dan-keakraban-mahasiswa.jpeg"
                  style={{ objectFit: "cover" }}
                />
                <div className="bg-white border border-top-0 p-4">
                  <p
                    className="fw-lighter text-secondary"
                    style={{ fontSize: "75%" }}
                  >
                    Source Image :
                    <a
                      href="pintuperadaban"
                      target="_blank"
                      className="text-secondary"
                    >
                      pintuperadaban ...
                    </a>
                  </p>
                  <div className="mb-3">
                    <a
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href="/category/news"
                    >
                      News
                    </a>
                    <span className="text-body">2024 Maret 07</span>
                  </div>
                  <h1 className="mb-3 text-secondary text-uppercase font-weight-bold h2">
                    UM Bulukumba Gelar Penyambutan Mahasiswa Baru melalui Masa
                    Tarauf sebagai Ajang Keakraban Mahasiswa
                  </h1>
                  <div className="text-dark">{news.content}</div>
                </div>
                <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle mr-2"
                      src="/assets/img/admin/alzaid.png"
                      width={30}
                      height={30}
                    />
                    <span>Khaeril Maswal Zaid</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="ml-3">
                      <i className="far fa-eye mr-2" />
                      53
                    </span>
                    <span className="ml-3">
                      <i className="far fa-solid fa-user mr-2" />
                      51
                    </span>
                  </div>
                </div>
              </div>
              {/* News Detail End */}

              {/* Iklan Area Start */}
              <IklanBannerTop />
              {/* Iklan Area End */}

              {/* Comment Form Start */}
              <div className="mb-3">
                <div className="section-slug mb-0">
                  <h4 className="m-0 text-uppercase font-weight-bold">
                    Leave a comment
                  </h4>
                </div>
                <div className="bg-white border border-top-0 p-4">
                  <form action="/" method="post">
                    <div className="form-row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="name">Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="email">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        cols={30}
                        rows={5}
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group mb-0">
                      <input
                        type="submit"
                        defaultValue="Leave a comment"
                        className="btn btn-primary font-weight-semi-bold py-2 px-3"
                      />
                    </div>
                  </form>
                </div>
              </div>
              {/* Comment Form End */}

              <hr />

              {/* New Post Start */}
              <div className="col-12 px-0">
                <div className="section-slug">
                  <h4 className="m-0 text-uppercase font-weight-bold">
                    Latest News
                  </h4>
                </div>
              </div>
              <div className="col-lg-12 px-0">
                <div className="row news-lg mx-0 mb-3">
                  <div className="col-md-6 h-100 px-0 ">
                    <img
                      className="img-fluid h-100 w-100"
                      src="/assets/img/artikel/ekonomi/wujudkan-visi-sebagai-kampus-entrepreneur-mahasiswa-umb-inisiasi-mini-bazar-di-kampus.jpeg"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                    <div className="mt-auto p-4 position-relative overflow-hidden">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                          href="/category/ekonomi"
                        >
                          Ekonomi
                        </a>
                        2024 Maret 07
                      </div>
                      <a
                        className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                        href="/wujudkan-visi-sebagai-kampus-entrepreneur-mahasiswa-umb-inisiasi-mini-bazar-di-kampus/2147483647"
                      >
                        Wujudkan Visi sebagai Kampus Entrepreneur Mahasiswa UMB
                        Inisiasi Mini Bazaar di Kampus
                      </a>
                      <p className="m-0">
                        Ini adalah deskripsi singkat untuk artikel ini.
                      </p>
                    </div>
                    <div className="d-flex justify-content-between bg-white border-top mt-auto p-4">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle mr-2"
                          src="/assets/img/admin/alzaid.png"
                          width={31}
                          height={31}
                        />
                        <small>Khaeril Maswal Zaid</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <small className="ml-3">
                          <i className="far fa-eye mr-2" />
                          50
                        </small>
                        {/*<small class="ml-3"><i class="far fa-comment mr-2"></i>123</small> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: 110 }}
                  >
                    <div
                      className="position-relative overflow-hidden"
                      style={{ width: 150, height: "100%" }}
                    >
                      <img
                        className="img-fluid w-100 h-100"
                        src="/assets/img/artikel/news/ratusan-warga-muhammadiyah-bulukumba-padati-pengajian-semarak-muktamar-muhammadiyah-dan-aisyiyah-ke-48.jpg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
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
                        className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                        href="/ratusan-warga-muhammadiyah-bulukumba-padati-pengajian-semarak-muktamar-muhammadiyah-dan-aisyiyah-ke-48/2147483647"
                      >
                        Ratusan Warga Muhammadiyah Bul...
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: 110 }}
                  >
                    <div
                      className="position-relative overflow-hidden"
                      style={{ width: 150, height: "100%" }}
                    >
                      <img
                        className="img-fluid w-100 h-100"
                        src="/assets/img/artikel/filsafat/pikiran-dan-pengetahuan-yang-benar.jpg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="/category/filsafat"
                        >
                          Filsafat
                        </a>
                        <small>2024 Maret 07</small>
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                        href="/pikiran-dan-pengetahuan-yang-benar/2147483647"
                      >
                        Pikiran dan Pengetahuan yang B...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* New Post End */}
            </div>

            {/* Kolum bagian Kanan Halaman */}
            <RightPage />
          </div>
        </div>
        {/* News With Sidebar End */}
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
