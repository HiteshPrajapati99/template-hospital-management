const Steps = () => {
  return (
    <>
      <div
        className="relative text-center"
        style={{
          background: "url(./images/home-bg.svg)",
          backgroundSize: "cover",
        }}
      >
        <img
          src="./images/image 3.png"
          alt="img"
          className="absolute mix-blend-screen object-cover rotate-180 h-full"
        />

        <div className="py-20 relative">
          <div className="flex gap-2 px-20 items-center justify-center">
            <p className="shadow-text">
              <span className="shadow-text text-[#03f4f4]">4 easy steps</span>
              &nbsp; to get your solution
            </p>
          </div>

          <p className="text-white mt-2 px-24 2xl:text-[22px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus
          </p>

          <div className="grid mt-10 grid-cols-2 lg:grid-cols-4 gap-10 justify-center px-20">
            <div
              className="col-span-1"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <div className="flex flex-col items-center">
                <div className="p-6 shadow-button rounded-2xl grid place-items-center">
                  <img
                    src="./images/pet.png"
                    alt="logo"
                    className="w-20 2xl:w-24"
                  />
                </div>

                <p className="text-white text-[22px] font-thin mt-1 2xl:text-[26px]">
                  {" "}
                  Pet Profiles
                </p>

                <p className="text-muted mt-1 text-[16px] 2xl:text-[20px]">
                  Access comprehensive pet profiles.
                </p>
              </div>
            </div>

            <div
              className="col-span-1"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <div className="flex flex-col items-center">
                <div className="p-6 shadow-button rounded-2xl grid place-items-center">
                  <img
                    src="./images/apintment.png"
                    alt="profile"
                    className="w-20 2xl:w-24"
                  />
                </div>

                <p className="text-white text-[20px] font-bold mt-1 2xl:text-[26px]">
                  Appointments
                </p>

                <p className="text-muted mt-1 text-[16px] 2xl:text-[20px]">
                  Manage appointments efficiently.
                </p>
              </div>
            </div>

            <div
              className="col-span-1"
              data-aos="zoom-out"
              data-aos-duration="600"
            >
              <div className="flex flex-col items-center">
                <div className="p-6 shadow-button rounded-2xl grid place-items-center">
                  <img
                    src="./images/profile.png"
                    alt="logo"
                    className="w-20 2xl:w-24"
                  />
                </div>

                <p className="text-white text-[20px] font-bold mt-1 2xl:text-[26px]">
                  Register & Profile
                </p>

                <p className="text-[rgba(255,255,255,0.8)] mt-1 text-[16px] 2xl:text-[20px]">
                  sign up and create your profile.
                </p>
              </div>
            </div>

            <div
              className="col-span-1"
              data-aos="zoom-out"
              data-aos-duration="600"
            >
              <div className="flex  flex-col items-center">
                <div className="p-6 shadow-button rounded-2xl grid place-items-center">
                  <img
                    src="./images/ai.png"
                    alt="logo"
                    className="w-20 2xl:w-24"
                  />
                </div>

                <p className="text-white text-[22px] font-thin mt-1 2xl:text-[26px]">
                  {" "}
                  AI Support
                </p>

                <p className="text-muted mt-1 text-[16px] 2xl:text-[20px]">
                  Get AI-Powered diagnostic support for treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
