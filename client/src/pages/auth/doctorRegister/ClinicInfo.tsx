import React, { FC } from "react";
import { TDoctorTabs } from "../types";
import { CountryInput, Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GrLinkNext } from "react-icons/gr";
import { Button } from "@/components/ui/button";

interface clinicInfoProps {
  setActiveTab: React.Dispatch<React.SetStateAction<TDoctorTabs>>;
}

const ClinicInfo: FC<clinicInfoProps> = ({ setActiveTab }) => {
  return (
    <div className="grid gap-5 md:px-12 lg:px-16">
      <p className="text-white opacity-70 text-center 2xl:text-lg">
        Lorem ipsum dolor sit amet consectetur. Nam dictum mattis amet.
      </p>

      <Input placeholder="Clinic Name" />
      <Textarea placeholder="Address" rows={3} className="p-3" />
      <CountryInput placeholder="Phone Number" />

      <div className="flex justify-center">
        <Button
          className="flex gap-3 px-16 py-8 text-[16px] rounded-[20px] font-bold items-center text-black"
          onClick={() => setActiveTab("license")}
        >
          Next <GrLinkNext />
        </Button>
      </div>
    </div>
  );
};

export default ClinicInfo;
