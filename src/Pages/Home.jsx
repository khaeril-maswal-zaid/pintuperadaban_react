import Footer from "../Components/Footer";
import IklanBannerButtom from "../Components/IklanBannerButtom";
import IklanBannerTop from "../Components/IklanBannerTop";
import Navbar from "../Components/Navbar";
import RightPage from "../Components/RightPage";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Main News Slider Start */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 px-0">
            <div className="owl-carousel main-carousel position-relative">
              <div
                className="position-relative overflow-hidden"
                style={{ height: 500 }}
              >
                <img
                  className="img-fluid h-100"
                  src="/assets/img/artikel/news/gelar-kajian-kepemimpinan-pikom-imm-ilmu-aktuaria-umb-hadirkan-ketum-pc-imm-bulukumba.jpeg"
                  alt="gelar-kajian-kepemimpinan-pikom-imm-ilmu-aktuaria-umb-hadirkan-ketum-pc-imm-bulukumba.jpeg"
                  style={{ objectFit: "cover" }}
                />
                <div className="overlay">
                  <div className="mb-2">
                    <a
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href="/category/news"
                    >
                      News
                    </a>
                    <span className="text-white">2024 Maret 07</span>
                  </div>
                  <a
                    className="h2 m-0 text-white text-uppercase font-weight-bold"
                    href="/gelar-kajian-kepemimpinan-pikom-imm-ilmu-aktuaria-umb-hadirkan-ketum-pc-imm-bulukumba/1234567895"
                  >
                    Gelar Kajian Kepemimpinan Pikom IMM Ilmu Aktuaria UMB
                    Hadirkan Ketum PC IMM Bulukumba
                  </a>
                </div>
              </div>
              <div
                className="position-relative overflow-hidden"
                style={{ height: 500 }}
              >
                <img
                  className="img-fluid h-100"
                  src="/assets/img/artikel/news/fakultas-kip-umb-lepas-172-mahasiswa-peserta-kkn-tematik.jpg"
                  alt="fakultas-kip-umb-lepas-172-mahasiswa-peserta-kkn-tematik.jpg"
                  style={{ objectFit: "cover" }}
                />
                <div className="overlay">
                  <div className="mb-2">
                    <a
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href="/category/news"
                    >
                      News
                    </a>
                    <span className="text-white">2024 Maret 07</span>
                  </div>
                  <a
                    className="h2 m-0 text-white text-uppercase font-weight-bold"
                    href="/fakultas-kip-umb-lepas-172-mahasiswa-peserta-kkn-tematik/1234567894"
                  >
                    Fakultas KIP UMB Lepas 172 Mahasiswa Peserta KKN Tematik
                  </a>
                </div>
              </div>
              <div
                className="position-relative overflow-hidden"
                style={{ height: 500 }}
              >
                <img
                  className="img-fluid h-100"
                  src="/assets/img/artikel/news/um-bulukumba-gelar-penyambutan-mahasiswa-baru-melalui-masa-taaruf-dan-keakraban-mahasiswa.jpeg"
                  alt="/assets/img/artikel/news/um-bulukumba-gelar-penyambutan-mahasiswa-baru-melalui-masa-taaruf-dan-keakraban-mahasiswa.jpeg"
                  style={{ objectFit: "cover" }}
                />
                <div className="overlay">
                  <div className="mb-2">
                    <a
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href="/category/politik"
                    >
                      News
                    </a>
                    <span className="text-white">2024 Maret 07</span>
                  </div>
                  <a
                    className="h2 m-0 text-white text-uppercase font-weight-bold"
                    href="/assets/img/artikel/news/um-bulukumba-gelar-penyambutan-mahasiswa-baru-melalui-masa-taaruf-dan-keakraban-mahasiswa/1234567893"
                  >
                    UM Bulukumba Gelar Penyambutan Mahasiswa Baru melalui Masa
                    Tarauf sebagai Ajang Keakraban Mahasiswa
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 px-0">
            <div className="row mx-0">
              <div className="col-md-6 px-0">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: 250 }}
                >
                  <img
                    className="img-fluid w-100 h-100"
                    src="/assets/img/artikel/sosial/pengaruh-pengelolaan-sumber-daya-alam-yang-membabi-buta.jpg"
                    alt="pengaruh-pengelolaan-sumber-daya-alam-yang-membabi-buta.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-2">
                      <a
                        className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="/category/sosial"
                      >
                        Sosial
                      </a>
                      <small className="text-white">2024 Maret 07</small>
                    </div>
                    <a
                      className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                      href="/pengaruh-pengelolaan-sumber-daya-alam-yang-membabi-buta/2147483647"
                    >
                      Pengaruh Pengelolaan Sumber Daya Alam yang Membabi Buta
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: 250 }}
                >
                  <img
                    className="img-fluid w-100 h-100"
                    src="/assets/img/artikel/teologi/memaknai-humanisme-dalam-konteks-kemuhammadiyahan.jpeg"
                    alt="memaknai-humanisme-dalam-konteks-kemuhammadiyahan.jpeg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-2">
                      <a
                        className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="/category/teologi"
                      >
                        Teologi
                      </a>
                      <small className="text-white">2024 Maret 07</small>
                    </div>
                    <a
                      className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                      href="/memaknai-humanisme-dalam-konteks-kemuhammadiyahan/1134567890"
                    >
                      Memaknai Humanisme dalam Konteks Kemuhammadiyahan
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: 250 }}
                >
                  <img
                    className="img-fluid w-100 h-100"
                    src="/assets/img/artikel/opini/media-sosial-bagi-pelajar-zaman-sekarang.jpg"
                    alt="media-sosial-bagi-pelajar-zaman-sekarang.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-2">
                      <a
                        className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="/category/opini"
                      >
                        Opini
                      </a>
                      <small className="text-white">2024 Maret 07</small>
                    </div>
                    <a
                      className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                      href="/media-sosial-bagi-pelajar-zaman-sekarang/1234567899"
                    >
                      Media Sosial bagi Pelajar Zaman Sekarang
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: 250 }}
                >
                  <img
                    className="img-fluid w-100 h-100"
                    src="/assets/img/artikel/filsafat/logika-dan-pentingnya-rasionalitas-argumentasi.jpeg"
                    alt="logika-dan-pentingnya-rasionalitas-argumentasi.jpeg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-2">
                      <a
                        className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="/category/filsafat"
                      >
                        Filsafat
                      </a>
                      <small className="text-white">2024 Maret 07</small>
                    </div>
                    <a
                      className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                      href="/logika-dan-pentingnya-rasionalitas-argumentasi/1234567888"
                    >
                      Logika dan Pentingnya Rasionalitas Argumentasi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breaking News End */}

      {/* Populer Slider Start */}
      <div className="container-fluid pt-4 mb-3">
        <div className="container">
          <div className="section-title">
            <h4 className="m-0 text-uppercase font-weight-bold">
              Popular Posts
            </h4>
          </div>
          <div className="owl-carousel news-carousel carousel-item-4 position-relative">
            <div
              className="position-relative overflow-hidden"
              style={{ height: 300 }}
            >
              <img
                className="img-fluid h-100"
                src="/assets/img/artikel/ekonomi/wujudkan-visi-sebagai-kampus-entrepreneur-mahasiswa-umb-inisiasi-mini-bazar-di-kampus.jpeg"
                alt="wujudkan-visi-sebagai-kampus-entrepreneur-mahasiswa-umb-inisiasi-mini-bazar-di-kampus.jpeg"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-2">
                  <a
                    className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="/category/ekonomi"
                  >
                    Ekonomi
                  </a>
                  <small className="text-white">2024 Maret 07</small>
                </div>
                <a
                  className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                  href="/wujudkan-visi-sebagai-kampus-entrepreneur-mahasiswa-umb-inisiasi-mini-bazar-di-kampus/2147483647"
                >
                  Wujudkan Visi sebagai Kampus Entrepreneur Mahasiswa UMB
                  Inisiasi Mini Bazaar di Kampus
                </a>
              </div>
            </div>
            <div
              className="position-relative overflow-hidden"
              style={{ height: 300 }}
            >
              <img
                className="img-fluid h-100"
                src="/assets/img/artikel/teologi/memaknai-humanisme-dalam-konteks-kemuhammadiyahan.jpeg"
                alt="memaknai-humanisme-dalam-konteks-kemuhammadiyahan.jpeg"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-2">
                  <a
                    className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="/category/teologi"
                  >
                    Teologi
                  </a>
                  <small className="text-white">2024 Maret 07</small>
                </div>
                <a
                  className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                  href="/memaknai-humanisme-dalam-konteks-kemuhammadiyahan/1134567890"
                >
                  Memaknai Humanisme dalam Konteks Kemuhammadiyahan
                </a>
              </div>
            </div>
            <div
              className="position-relative overflow-hidden"
              style={{ height: 300 }}
            >
              <img
                className="img-fluid h-100"
                src="/assets/img/artikel/opini/catatan-menjemput-musyda-dpd-imm-sulawesi-selatan.jpeg"
                alt="catatan-menjemput-musyda-dpd-imm-sulawesi-selatan.jpeg"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-2">
                  <a
                    className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="/category/opini"
                  >
                    Opini
                  </a>
                  <small className="text-white">2024 Maret 07</small>
                </div>
                <a
                  className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                  href="/catatan-menjemput-musyda-dpd-imm-sulawesi-selatan/1234567892"
                >
                  Catatan Menjemput Musyda DPD IMM Sulawesi Selatan
                </a>
              </div>
            </div>
            <div
              className="position-relative overflow-hidden"
              style={{ height: 300 }}
            >
              <img
                className="img-fluid h-100"
                src="/assets/img/artikel/sosial/ibu-kota-negara-baru-untuk-keberlanjutan-nasional.jpeg"
                alt="ibu-kota-negara-baru-untuk-keberlanjutan-nasional.jpeg"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-2">
                  <a
                    className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="/category/sosial"
                  >
                    Sosial
                  </a>
                  <small className="text-white">2024 Maret 07</small>
                </div>
                <a
                  className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                  href="/ibu-kota-negara-baru-untuk-keberlanjutan-nasional/1234567877"
                >
                  Ibu Kota Negara Baru untuk Keberlanjutan Nasional
                </a>
              </div>
            </div>
            <div
              className="position-relative overflow-hidden"
              style={{ height: 300 }}
            >
              <img
                className="img-fluid h-100"
                src="/assets/img/artikel/politik/enviromental-etik-dalam-pusaran-pesta-demokrasi.jpg"
                alt="/assets/img/artikel/politik/enviromental-etik-dalam-pusaran-pesta-demokrasi.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-2">
                  <a
                    className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="/category/news"
                  >
                    News
                  </a>
                  <small className="text-white">2024 Maret 07</small>
                </div>
                <a
                  className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                  href="/assets/img/artikel/politik/enviromental-etik-dalam-pusaran-pesta-demokrasi"
                >
                  Enviromental Etik dalam Pusaran Pesta Demokrasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Populer Slider End */}

      {/* News With Sidebar Start */}
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {/* Iklan Area Start */}
                <div className="col-12">
                  <IklanBannerTop />
                </div>
                {/* Iklan Area End */}

                {/* Latest News Area Start */}
                <div className="col-12">
                  <div className="section-title">
                    <h4 className="m-0 text-uppercase font-weight-bold">
                      Latest News
                    </h4>
                    <a
                      className="text-secondary font-weight-medium text-decoration-none"
                      href="category/news"
                    >
                      View All
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative mb-3">
                    <div style={{ height: 360 }}>
                      <img
                        className="img-fluid h-100 w-100"
                        src="/assets/img/artikel/news/um-bulukumba-gelar-penyambutan-mahasiswa-baru-melalui-masa-taaruf-dan-keakraban-mahasiswa.jpeg"
                        alt="um-bulukumba-gelar-penyambutan-mahasiswa-baru-melalui-masa-taaruf-dan-keakraban-mahasiswa.jpeg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div
                      className="bg-white border border-top-0 p-4 position-relative overflow-hidden"
                      style={{ height: 377 }}
                    >
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                          href="/category/news"
                        >
                          News
                        </a>
                        <small>2024 Maret 07</small>
                      </div>
                      <a
                        className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                        href="um-bulukumba-gelar-penyambutan-mahasiswa-baru-melalui-masa-taaruf-dan-keakraban-mahasiswa/2147483647"
                      >
                        UM Bulukumba Gelar Penyambutan Mahasiswa Baru melalui
                        Masa Tarauf sebagai Ajang Keakraban Mahasiswa
                      </a>
                      <p className="m-0">
                        Ini adalah deskripsi singkat untuk artikel ini.
                      </p>
                    </div>
                    <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle mr-2"
                          src="/assets/img/admin/alzaid.png"
                          width={31}
                          height={31}
                          alt="alzaid.png"
                        />
                        <small>Khaeril Maswal Zaid</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <small className="ml-3">
                          <i className="far fa-eye mr-2" />
                          51
                        </small>
                        {/*<small class="ml-3"><i class="far fa-comment mr-2"></i>123</small>*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative mb-3">
                    <div style={{ height: 360 }}>
                      <img
                        className="img-fluid h-100 w-100"
                        src="/assets/img/artikel/news/ratusan-warga-muhammadiyah-bulukumba-padati-pengajian-semarak-muktamar-muhammadiyah-dan-aisyiyah-ke-48.jpg"
                        alt="ratusan-warga-muhammadiyah-bulukumba-padati-pengajian-semarak-muktamar-muhammadiyah-dan-aisyiyah-ke-48.jpg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div
                      className="bg-white border border-top-0 p-4 position-relative overflow-hidden"
                      style={{ height: 377 }}
                    >
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                          href="/category/news"
                        >
                          News
                        </a>
                        2024 Maret 07
                      </div>
                      <a
                        className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                        href="ratusan-warga-muhammadiyah-bulukumba-padati-pengajian-semarak-muktamar-muhammadiyah-dan-aisyiyah-ke-48/2147483647"
                      >
                        Ratusan Warga Muhammadiyah Bulukumba Padati Pengajian
                        Semarak Muktamar Muhammadiyah dan Aisyiyah ke-48
                      </a>
                      <p className="m-0">
                        Ini adalah deskripsi singkat untuk artikel ini.
                      </p>
                    </div>
                    <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle mr-2"
                          src="/assets/img/admin/alzaid.png"
                          width={31}
                          height={31}
                          alt="alzaid.png"
                        />
                        <small>Winda Yuliana</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <small className="ml-3">
                          <i className="far fa-eye mr-2" />
                          50
                        </small>
                        {/*<small class="ml-3"><i class="far fa-comment mr-2"></i>123</small>*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: 130 }}
                  >
                    <div
                      className="position-relative overflow-hidden"
                      style={{ width: 150, height: "100%" }}
                    >
                      <img
                        className="img-fluid w-100 h-100"
                        src="/assets/img/artikel/news/gelar-kajian-kepemimpinan-pikom-imm-ilmu-aktuaria-umb-hadirkan-ketum-pc-imm-bulukumba.jpeg"
                        alt="gelar-kajian-kepemimpinan-pikom-imm-ilmu-aktuaria-umb-hadirkan-ketum-pc-imm-bulukumba.jpeg"
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
                        href="/gelar-kajian-kepemimpinan-pikom-imm-ilmu-aktuaria-umb-hadirkan-ketum-pc-imm-bulukumba/1234567895"
                      >
                        Gelar Kajian Kepemimpinan Pikom IMM Ilmu Aktuaria ...
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: 130 }}
                  >
                    <div
                      className="position-relative overflow-hidden"
                      style={{ width: 150, height: "100%" }}
                    >
                      <img
                        className="img-fluid w-100 h-100"
                        src="/assets/img/artikel/news/fakultas-kip-umb-lepas-172-mahasiswa-peserta-kkn-tematik.jpg"
                        alt="fakultas-kip-umb-lepas-172-mahasiswa-peserta-kkn-tematik.jpg"
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
                        href="/fakultas-kip-umb-lepas-172-mahasiswa-peserta-kkn-tematik/1234567894"
                      >
                        Fakultas KIP UMB Lepas 172 Mahasiswa Peserta KKN T...
                      </a>
                    </div>
                  </div>
                </div>
                {/*Latest News Area End */}

                <hr />

                {/* Iklan Area Start */}
                <IklanBannerButtom />
                {/* Iklan Area End */}

                {/* Kategori Area Start */}
                <div className="col-12">
                  <div className="section-title">
                    <h4 className="m-0 text-uppercase font-weight-bold">
                      category
                    </h4>
                    <a
                      className="text-secondary font-weight-medium text-decoration-none"
                      href="/category/opini"
                    >
                      View All
                    </a>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row news-lg mx-0 mb-3">
                    <div className="col-md-6 h-100 px-0 ">
                      <img
                        className="img-fluid h-100 w-100"
                        src="/assets/img/artikel/opini/media-sosial-bagi-pelajar-zaman-sekarang.jpg"
                        alt="media-sosial-bagi-pelajar-zaman-sekarang.jpg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                      <div className="mt-auto p-4 position-relative overflow-hidden">
                        <div className="mb-2">
                          <a
                            className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                            href="/category/opini"
                          >
                            Opini
                          </a>
                          <small>2024 Maret 07</small>
                        </div>
                        <a
                          className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                          href="/media-sosial-bagi-pelajar-zaman-sekarang/1234567899"
                        >
                          Media Sosial bagi Pelajar Zaman Sekarang
                        </a>
                        <p className="m-0">
                          Ini adalah deskripsi singkat untuk artikel ini.
                        </p>
                      </div>
                      <div className="d-flex justify-content-between bg-white border-top mt-auto p-4">
                        <div className="d-flex align-items-center">
                          <img
                            className="rounded-circle mr-2"
                            src="/assets/img/admin/kmz.png"
                            width={31}
                            height={31}
                            alt="kmz.png"
                          />
                          <small>Winda Yuliana</small>
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
                <div className="col-lg-6">
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: 150 }}
                  >
                    <div
                      className="position-relative overflow-hidden"
                      style={{ width: 150, height: "100%" }}
                    >
                      <img
                        className="img-fluid w-100 h-100"
                        src="/assets/img/artikel/teologi/memaknai-humanisme-dalam-konteks-kemuhammadiyahan.jpeg"
                        alt="memaknai-humanisme-dalam-konteks-kemuhammadiyahan.jpeg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
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
                        className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                        href="/memaknai-humanisme-dalam-konteks-kemuhammadiyahan/1134567890"
                      >
                        Memaknai Humanisme dalam Konteks Kemuhammadiyahan
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: 150 }}
                  >
                    <div
                      className="position-relative overflow-hidden"
                      style={{ width: 150, height: "100%" }}
                    >
                      <img
                        className="img-fluid w-100 h-100"
                        src="/assets/img/artikel/filsafat/pikiran-dan-pengetahuan-yang-benar.jpg"
                        alt="pikiran-dan-pengetahuan-yang-benar.jpg"
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
                        href="pikiran-dan-pengetahuan-yang-benar/2147483647"
                      >
                        Pikiran dan Pengetahuan yang Benar
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: 150 }}
                  >
                    <div
                      className="position-relative overflow-hidden"
                      style={{ width: 150, height: "100%" }}
                    >
                      <img
                        className="img-fluid w-100 h-100"
                        src="/assets/img/artikel/the-story/sejauh-mana-bisaku-bertahan.jpg"
                        alt="sejauh-mana-bisaku-bertahan.jpg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="/category/the-story"
                        >
                          The Story
                        </a>
                        <small>2024 Maret 07</small> f
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                        href="/sejauh-mana-bisaku-bertahan/2147483647"
                      >
                        Sejauh Mana Bisaku Bertahan
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: 150 }}
                  >
                    <div
                      className="position-relative overflow-hidden"
                      style={{ width: 150, height: "100%" }}
                    >
                      <img
                        className="img-fluid w-100 h-100"
                        src="/assets/img/artikel/ekonomi/wujudkan-visi-sebagai-kampus-entrepreneur-mahasiswa-umb-inisiasi-mini-bazar-di-kampus.jpeg"
                        alt="wujudkan-visi-sebagai-kampus-entrepreneur-mahasiswa-umb-inisiasi-mini-bazar-di-kampus.jpeg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href="/category/ekonomi"
                        >
                          Ekonomi
                        </a>
                        2024 Maret 07
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                        href="wujudkan-visi-sebagai-kampus-entrepreneur-mahasiswa-umb-inisiasi-mini-bazar-di-kampus/2147483647"
                      >
                        Wujudkan Visi sebagai Kampus Entrepreneur Mahasiswa UMB
                        Inisiasi Mini Bazaar di Kampus
                      </a>
                    </div>
                  </div>
                </div>
                {/* Kategori Area End */}
              </div>
            </div>

            {/* Kolum bagian Kanan Halaman */}
            <RightPage />
          </div>
        </div>
        {/* News With Sidebar End */}

        <Footer />
      </div>
    </>
  );
};

export default Home;
