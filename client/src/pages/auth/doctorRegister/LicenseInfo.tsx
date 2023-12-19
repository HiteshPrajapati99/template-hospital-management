import React, { FC } from "react";
import { TDoctorTabs } from "../types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GrLinkNext } from "react-icons/gr";
import ImageUploader from "@/components/ui/ImageUploader";

interface licenseProps {
  setActiveTab: React.Dispatch<React.SetStateAction<TDoctorTabs>>;
}

const LicenseInfo: FC<licenseProps> = ({ setActiveTab }) => {
  return (
    <div className="grid gap-5 md:px-12 lg:px-16">
      <p className="text-white opacity-70 text-center 2xl:text-lg">
        Lorem ipsum dolor sit amet consectetur. Nam dictum mattis amet.
      </p>

      <Input placeholder="License Number" type="number" />

      <div>
        <p className="text-white opacity-70 text-[16px] ml-2 mb-2 2xl:text-lg">
          Upload License Image
        </p>
        <ImageUploader />
      </div>

      <div className="flex justify-center">
        <Button
          className="flex gap-3 px-16 py-8 text-[16px] rounded-[20px] font-bold items-center text-black"
          onClick={() => setActiveTab("digital")}
        >
          Next <GrLinkNext />
        </Button>
      </div>
    </div>
  );
};

export default LicenseInfo;
