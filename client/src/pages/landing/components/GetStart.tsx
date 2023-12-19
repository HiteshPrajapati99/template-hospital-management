import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import styled from "styled-components";
import tw from "twin.macro";

const GetStart = () => {
  const navigate = useNavigate();

  return (
    <Wrapper
      className="relative h-screen"
      style={{
        background: "url(./images/home-bg.svg)",
        backgroundSize: "cover",
      }}
    >
      {/* header */}
      <div className="header">
        <div className="flexDiv">
          <div className="flex items-center">
            <img
              src="./logo.png"
              alt="logo"
              style={{
                fill: "drop-shadow(0px 2.4185869693756104px 0px #0AEFFF)",
              }}
              className="h-[70px] 2xl:h-[100px]"
            />
            <p className="logo-text 2xl:text-[34px]">Petdx.ai</p>
          </div>

          <>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="lg:hidden hover:rounded-full rounded-2xl"
                  size="icon"
                >
                  <HiMenu />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                align="end"
                className="rounded-xl py-8 border-teal-500 block lg:hidden transition-transform transform duration-500 origin-top-right  "
                style={{
                  background:
                    "linear-gradient(135deg, #03335B 0%, #032F53 100%)",
                }}
              >
                <div className="grid gap-8 items-center justify-center">
                  <div className="grid gap-8 text-center">
                    <Link to="/" className="text-white font-bold">
                      Home
                    </Link>
                    <Link to="/" className="text-white font-bold">
                      About
                    </Link>
                    <Link to="/" className="text-white font-bold">
                      Contact
                    </Link>
                  </div>

                  <Button
                    variant="secondary"
                    size="lg"
                    className="border-2 bg-transparent text-white border-teal-500 login-btn"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button
                    size="lg"
                    className="rounded-full"
                    onClick={() => navigate("/register_type")}
                  >
                    Register
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </>

          <div className="hidden lg:flex gap-6 items-center ">
            <Link to="/" className="links">
              Home
            </Link>
            <Link to="/" className="links">
              About
            </Link>
            <Link to="/" className="links">
              Contact
            </Link>

            <Button
              variant="secondary"
              size="lg"
              className="login_btn"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              className="shadow-button registre_btn"
              style={{ borderRadius: "2rem" }}
              size="lg"
              onClick={() => navigate("/register_type")}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
      {/* details */}
      <div className="block lg:flex absolute w-full px-10 top-[20%] lg:top-[40%]">
        <div className="w-full lg:px-20">
          <p className="shadow-text 2xl:text-4xl">
            Everything You Need for Your Pet's Healthy and Happy Life.
          </p>

          <p className="my-4 text-[rgba(255,255,255,0.6)] text-[16px] 2xl:text-[22px]">
            Find the information you need to make informed <br /> decisions
            about your pet's health care.
          </p>

          <Button
            className="flex items-center gap-2 py-8 font-bold text-black hover:shadow-amber-50 rounded-full 2xl:text-[18px] 2xl:p-8"
            size="lg"
          >
            Get Started
            <AiOutlineArrowRight />
          </Button>
        </div>

        <div className="relative w-full h-full mt-36 lg:mt-0 ">
          <video
            src="./videos/dog-bg.mp4"
            className="absolute  mix-blend-lighten rounded-full"
            autoPlay
            loop
            muted
          ></video>

          <video
            src="./videos/dog.mov"
            autoPlay
            loop
            muted
            className="absolute top-[-100px] right-12 mix-blend-screen"
          ></video>
          <video
            src="./videos/cat.mov"
            autoPlay
            loop
            muted
            className="absolute -top-6 left-32 mix-blend-screen w-[70%]"
          ></video>
        </div>
      </div>
    </Wrapper>
  );
};

export default GetStart;

const Wrapper = styled.div`
  .header {
    ${tw`absolute w-full mt-1`}

    .flexDiv {
      ${tw`flex justify-between  items-center px-10 lg:px-20 py-3 z-10`}

      .links {
        ${tw`text-white hover:underline text-[16px] 2xl:text-2xl`}
      }
    }

    /*  buttons */
    .login_btn {
      ${tw`border-2 bg-transparent text-teal-500 border-teal-500  rounded-[2rem] 2xl:(text-lg py-6 px-8)`}

      &:hover {
        transition: all 0.5s ease;
        color: #fff;
        box-shadow: -16.36045265197754px 3.180150032043457px 33.33333206176758px
            0px rgba(0, 40, 48, 0.8),
          -10.90696907043457px 2.1201000213623047px 11.11111068725586px 0px #17e3ff
            inset,
          10.90696907043457px -2.1201000213623047px 11.11111068725586px 0px #005160
            inset;
      }
    }

    .registre_btn {
      ${tw` flex  items-center gap-2 py-6 font-bold  text-black  hover:(shadow-amber-50) 2xl:(text-lg py-7 px-8) `}
    }
  }
`;
