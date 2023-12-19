import { Button } from "@/components/ui/button";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";

const Pets = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      {/* title  */}
      <div className="title">
        <div className="flex items-center">
          <Button
            variant="outline"
            className="text-white border-none text-3xl  active:scale-75"
            onClick={() => navigate(-1)}
          >
            <BsArrowLeft />
          </Button>
          <div className="flex-1">
            <p className="text-white font-bold text-3xl">Pets</p>
            <p className="text-white opacity-80">
              Manage your furry friends and their medical history
            </p>
          </div>
        </div>
      </div>

      <div className="py-8 px-16 flex gap-6 ">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="pet_box px-16 py-6 text-white text-center grid gap-3"
          >
            <img
              src="/images/dog.png"
              alt="dog-profile"
              className="w-28 h-28"
            />

            <p className="text-xl font-bold">Tommy</p>
            <p style={{ letterSpacing: "0.3rem" }}> DOG </p>
            <p className="opacity-80">5 Year Old</p>
          </div>
        ))}
        <div className="pet_box px-16 py-6 text-white  grid place-items-center gap-3">
          <Button variant="outline" className="text-6xl border-none text-white">
            <AiFillPlusCircle />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Pets;

const Wrapper = styled.div`
  .pet_box {
    border-radius: 20px;
    background: linear-gradient(135deg, #032c4e 0%, #033056 100%), #eaeaea;
    box-shadow: 7px 7px 18px 0px rgba(1, 18, 33, 0.9),
      -7px -7px 14px 0px rgba(5, 74, 131, 0.9),
      7px -7px 14px 0px rgba(1, 18, 33, 0.2),
      -7px 7px 14px 0px rgba(1, 18, 33, 0.2),
      -1px -1px 2px 0px rgba(1, 18, 33, 0.5) inset,
      1px 1px 2px 0px rgba(5, 74, 131, 0.3) inset;
    cursor: pointer;
  }
`;
