import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <>
      <div
        className="text-center"
        style={{
          background:
            "linear-gradient(213deg, #03152D 0%, #032C50 36.25%, #004A81 63.14%, #04629D 80.54%, #008CE1 100%), #FFF",
        }}
      >
        <div className=" grid lg:flex justify-center py-8 backdrop-blur-md">
          <div className="lg:rounded-l-[30px] mix-blend-soft-light grid place-items-center  py-44  lg:px-32 lg:bg-blue-500 bg-opacity-40">
            <div>
              <div>
                <p className="text-white text-2xl font-bold">
                  Visit Petdx.ai today!
                </p>
                <p className="text-white text-lg">
                  Start taking better care of your pet <br /> today by visiting
                  Petdx.ai.
                </p>
              </div>

              <Button
                className="mt-3 rounded-3xl text-black bg-white hover:no-underline 2xl:text-lg"
                variant="link"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="rounded-lg  lg:rounded-r-[30px] place-items-center  lg:grid bg-blue-600 bg-opacity-30 p-5">
            <img src="./images/banner.png" alt="banner" className="w-[80%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
