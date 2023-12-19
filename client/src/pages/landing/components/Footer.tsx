import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#004A81]">
      <div className="py-10 px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="col-span-1">
          <div className="flex items-center gap-0 lg:pl-10">
            <img
              src="./logo.png"
              alt="logo"
              style={{
                fill: "drop-shadow(0px 2.4185869693756104px 0px #0AEFFF)",
              }}
            />
            <p className="logo-text">Petdx.ai</p>
          </div>

          <div className="mt-3">
            <p className="text-muted 2xl:text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              tempore.
            </p>

            <div className="mt-3">
              <input
                placeholder="Enter Your Email"
                type="text"
                className="bg-[rgba(255,255,255,.3)] rounded-[20px] py-4 px-4 w-full text-white focus:outline-none placeholder:text-white"
              />
            </div>

            <Button className="rounded-2xl mt-5 py-8 px-12 text-black 2xl:text-lg">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="col-span-1  mt-10 md:mt-0">
          <div className="flex gap-20 justify-center">
            <div>
              <p className="text-white font-bold 2xl:text-[19px] tracking-wide">
                Menu
              </p>

              <div className="mt-3 grid 2xl:text-lg">
                <Link className="text-[#DDD]" to="/">
                  Home
                </Link>
                <Link className="text-[#DDD]" to="/">
                  Features
                </Link>
              </div>
            </div>

            <div>
              <p className="text-white font-bold 2xl:text-[19px] tracking-wide">
                Company{" "}
              </p>

              <div className="mt-3 grid 2xl:text-lg">
                <Link className="text-[#DDD]" to="/">
                  About
                </Link>
                <Link className="text-[#DDD]" to="/">
                  Contact Us
                </Link>
                <Link className="text-[#DDD]" to="/">
                  Help Center
                </Link>
                <Link className="text-[#DDD]" to="/">
                  Support
                </Link>
                <Link className="text-[#DDD]" to="/">
                  Legal
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 text-center mt-10 md:mt-0">
          <p className="text-white font-bold 2xl:text-[19px]">Follow on </p>

          <div className="flex gap-3 justify-center mt-3">
            <img src="./images/facebook.svg" alt="icon" />
            <img src="./images/twitter.svg" alt="icon" />
            <img src="./images/insta.svg" alt="icon" />
            <img src="./images/linkdin.svg" alt="icon" />
            <img src="./images/youtube.svg" alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
