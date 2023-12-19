import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

const RegisterSelect = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="bg-image">
        <div className="content-box">
          <p className="heading">Select Type</p>

          <div className="flex gap-6 mt-6">
            <div>
              <div
                className="select-image"
                onClick={() => navigate("/user/register")}
              >
                <img
                  src="./images/cat-hand.png"
                  alt="icons"
                  className="w-[6.2rem]"
                />
              </div>

              <p className="text-white text-center mt-2"> Patient</p>
            </div>
            <div>
              <div
                className="select-image"
                onClick={() => navigate("/doctor/register")}
              >
                <img
                  src="./images/user-icon.png"
                  alt="icons"
                  className="w-24"
                />
              </div>
              <p className="text-white text-center mt-2"> Veterinary</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RegisterSelect;

const Wrapper = styled.div`
  background: linear-gradient(
    225deg,
    #03152d 0%,
    #032c50 40.04%,
    #024576 67.18%,
    #006db2 87.91%,
    #008ee4 100%
  );
  width: 100%;
  height: 100dvh;

  .heading {
    ${tw`text-white text-center text-[24px] font-bold`}
  }

  .bg-image {
    background-image: url("/images/pattern.svg");
    height: 100%;
    width: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    display: grid;
    place-items: center;
  }

  .content-box {
    border-radius: 30px;
    background: linear-gradient(135deg, #03335b 0%, #032f53 100%);
    box-shadow: 35px 35px 88px 0px rgba(1, 23, 41, 0.9),
      -35px -35px 70px 0px rgba(5, 75, 133, 0.9),
      35px -35px 70px 0px rgba(1, 23, 41, 0.2),
      -35px 35px 70px 0px rgba(1, 23, 41, 0.2),
      -1px -1px 2px 0px rgba(1, 23, 41, 0.5) inset,
      1px 1px 2px 0px rgba(5, 75, 133, 0.3) inset;
    padding: 2rem 3rem;
    border: 1px solid #2dcbd7;
    z-index: 1;

    .select-image {
      ${tw`hover:(scale-95)`};
      background: rgba(17, 81, 134, 0.5);
      border-radius: 20px;
      padding: 1.6rem 1.5rem;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      width: 100%;

      &:hover {
        background: linear-gradient(259deg, #005d69 0%, #60f1fb 100%);
        border-radius: 20px;
        box-shadow: -16.36045265197754px 3.180150032043457px 33.33333206176758px
            0px rgba(0, 40, 48, 0.8),
          -10.90696907043457px 2.1201000213623047px 11.11111068725586px 0px #17e3ff
            inset,
          10.90696907043457px -2.1201000213623047px 11.11111068725586px 0px #005160
            inset;
      }
    }
  }
`;
