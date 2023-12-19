const ResultData = () => {
  return (
    <>
      <div
        className="text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(213deg, #03152D 0%, #032C50 36.25%, #004A81 63.14%, #04629D 80.54%, #008CE1 100%), #FFF",
        }}
      >
        <div className="py-20">
          <div className="lg:flex justify-between gap-10 items-center px-20">
            {/* text */}
            <div className="grid lg:place-items-start place-items-center">
              <img
                src="./images/result.svg"
                alt="logo"
                className="shadow-button p-6"
              />

              <div className="mt-3 lg:text-left">
                <p className="shadow-text 2xl:text-4xl">
                  <span className="shadow-text text-[#03f4f4]  2xl:text-4xl">
                    Our results &nbsp;
                  </span>
                  in numbers
                </p>
                <p className="text-[rgba(255,255,255,.8)] 2xl:text-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores cupiditate quia excepturi a, vitae animi voluptate
                  accusamus voluptatum ipsam iusto.
                </p>
              </div>
            </div>

            {/* data */}
            <div className="lg:flex items-center">
              <div className="lg:border-r">
                <div
                  className="p-8"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <p className="logo-text">99%</p>
                  <p className="text-[rgba(255,255,255,0.8)] text-[18px] whitespace-nowrap">
                    Customer satisfaction
                  </p>
                </div>
                <div className="p-8 border-t">
                  <p
                    className="logo-text"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    32M
                  </p>
                  <p
                    className="text-[rgba(255,255,255,0.8)] text-[18px] whitespace-nowrap"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    Online Patients{" "}
                  </p>
                </div>
              </div>

              <div>
                <div className="p-10 border-t lg:border-none">
                  <p
                    className="logo-text"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    125M
                  </p>
                  <p
                    className="text-[rgba(255,255,255,0.8)] text-[18px] whitespace-nowrap"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    Patients Recovered
                  </p>
                </div>
                <div className="p-10 border-t">
                  <p
                    className="logo-text"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    10M
                  </p>
                  <p
                    className="text-[rgba(255,255,255,0.8)] text-[18px] whitespace-nowrap"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    Total Doctors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="./images/result-bg.svg"
          alt="bg-image"
          className="absolute bottom-0 mix-blend-screen w-full"
        />
      </div>
    </>
  );
};

export default ResultData;
