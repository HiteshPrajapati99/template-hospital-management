import ImageUploader from "@/components/ui/ImageUploader";
import { Button } from "@/components/ui/button";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProfilePhoto = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Title */}
      <div className="title text-white">
        <div className="flex items-center">
          <Button
            variant="outline"
            className="text-white border-none text-3xl  active:scale-75"
            onClick={() => navigate(-1)}
          >
            <BsArrowLeft />
          </Button>
          <div className="flex-1">
            <p className="text-2xl font-bold"> Photo </p>
            <p className="opacity-80">
              Upload a photo of pet so the veterinary can know who they are
              interacting with
            </p>
          </div>
        </div>
      </div>

      <div className="pt-8 flex justify-center items-center">
        <div className="px-6 w-full lg:w-1/2 text-center">
          <ImageUploader />
          <Button className="mt-6 text-lg px-16 py-7 rounded-2xl text-black">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
