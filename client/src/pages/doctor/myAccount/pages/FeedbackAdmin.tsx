import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const FeedbackAdmin = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* title */}
      <div className="title text-white">
        <div className="flex items-center">
          <Button
            variant="outline"
            className="border-none text-3xl text-white active:scale-75"
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

      <div className="flex items-center justify-center pt-8">
        <div className="w-full px-6 text-center lg:w-1/2">
          <Textarea rows={6} placeholder="Feedback" />
          <Button className="mt-6 rounded-2xl px-16 py-7 text-lg text-black">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackAdmin;
