import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* title */}
      <div className="title text-white">
        <div className="flex items-center">
          <Button
            variant="outline"
            className="text-white border-none text-3xl active:scale-75"
            onClick={() => navigate(-1)}
          >
            <BsArrowLeft />
          </Button>
          <div className="flex-1">
            <p className="text-2xl font-bold"> Feedback to Admin </p>
            <p className="opacity-80">
              Lorem ipsum dolor sit amet consectetur. Amet ultricies a integer
              lectus sit.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-8 flex justify-center items-center">
        <div className="px-6 w-full lg:w-1/2 text-center">
          <Textarea rows={6} placeholder="Feedback" />
          <Button className="mt-6 text-lg px-16 py-7 rounded-2xl text-black">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
