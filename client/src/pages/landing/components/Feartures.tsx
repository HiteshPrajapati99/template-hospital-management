const Feartures = () => {
  return (
    <>
      <div
        className="relative"
        style={{
          background: "url(./images/home-bg.svg)",
          backgroundSize: "cover",
        }}
      >
        <img
          src="./images/image 3.png"
          alt="img"
          className="absolute w-full h-full mix-blend-screen object-cover"
        />
        <div className="py-20 text-center relative">
          {/* title */}
          <div className="flex gap-2 px-20 items-center justify-center">
            <p className="shadow-text">
              <span className="shadow-text text-[#03f4f4] mr-3">
                Browse our
              </span>
              set of features
            </p>
          </div>
          <p className="text-white mt-2 px-24 2xl:text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus
          </p>

          <div className="grid mt-10 grid-cols-1 lg:grid-cols-3 gap-10 justify-center px-20 place-items-center">
            <div
              className="col-span-1"
              data-aos="zoom-out-down"
              data-aos-duration="1000"
            >
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(148, 204, 237, 0.00) 0%, rgba(148, 204, 237, 0.23) 100%)",
                  borderRadius: "22px",
                  padding: "30px",
                }}
              >
                <div className="flex  flex-col items-center">
                  <div className="p-7 shadow-button rounded-full grid place-items-center">
                    <img src="./images/biling.svg" alt="icon" width="90%" />
                  </div>

                  <p className="text-white text-[20px]  font-bold mt-3">
                    Billing & Invoicing
                  </p>

                  <p className="text-[rgba(255,255,255,0.8)] mt-1 text-[16px] 2xl:text-[20px]">
                    Lorem ipsum dolor sit amet consectetur. Sed felis
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-span-1"
              data-aos="zoom-out-down"
              data-aos-duration="1000"
            >
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(148, 204, 237, 0.00) 0%, rgba(148, 204, 237, 0.23) 100%)",
                  borderRadius: "22px",
                  padding: "30px",
                }}
              >
                <div className="flex  flex-col items-center">
                  <div className="p-6 shadow-button rounded-full grid place-items-center">
                    <img src="./images/medicin.svg" alt="icon" width="90%" />
                  </div>

                  <p className="text-white text-[20px] font-bold mt-3">
                    Prescriptions
                  </p>

                  <p className="text-muted mt-1 text-[16px] 2xl:text-[20px]">
                    Lorem ipsum dolor sit amet consectetur. Sed felis
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-span-1"
              data-aos="zoom-out-down"
              data-aos-duration="1000"
            >
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(148, 204, 237, 0.00) 0%, rgba(148, 204, 237, 0.23) 100%)",
                  borderRadius: "22px",
                  padding: "30px",
                }}
              >
                <div className="flex  flex-col items-center">
                  <div className="p-6 shadow-button rounded-full grid place-items-center">
                    <img src="./images/resource.svg" alt="icon" width="90%" />
                  </div>

                  <p className="text-white text-[22px] font-bold mt-3">
                    Resources
                  </p>

                  <p className="text-muted mt-1 text-[16px] 2xl:text-[20px]">
                    Lorem ipsum dolor sit amet consectetur. Sed felis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feartures;
