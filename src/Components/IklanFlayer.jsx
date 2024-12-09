const IklanFlayer = () => {
  return (
    <>
      <div className="mb-3">
        <div className="d-none d-md-block">
          <div className="section-title mb-0">
            <h4 className="m-0 text-uppercase font-weight-bold">
              Advertisement
            </h4>
          </div>
          <div className="bg-white text-center border border-top-0 p-3">
            <img
              src="assets/img/advertisement/flayer-1-1.png"
              className="w-100"
              alt="Iklan Banner"
            />
          </div>
        </div>
        <div className="d-block d-md-none">
          <img
            src="assets/img/advertisement/banner-1-2.png"
            className="w-100"
            alt="Iklan Banner"
          />
        </div>
      </div>
    </>
  );
};

export default IklanFlayer;
