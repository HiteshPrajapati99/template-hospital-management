import React, { FC } from "react";
import { TDoctorTabs } from "../types";
import { CountryInput, Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GrLinkNext } from "react-icons/gr";

interface userInfoProps {
  setActiveTab: React.Dispatch<React.SetStateAction<TDoctorTabs>>;
}

const UserInfo: FC<userInfoProps> = ({ setActiveTab }) => {
  return (
    <div className="grid gap-5 md:px-12 lg:px-16">
      <p className="text-white opacity-70 text-center 2xl:text-lg">
        First, enter your personal details, and then proceed to the next step
      </p>

      <Input placeholder="Full Name" />
      <Input placeholder="Specialization" />
      <CountryInput placeholder="Phone Number" />

      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Confirm Password" type="password" />
      <div className="flex justify-center">
        <Button
          className="flex gap-3 px-16 py-8 text-[16px] rounded-[20px] font-bold items-center text-black"
          onClick={() => setActiveTab("clinic_info")}
        >
          Next <GrLinkNext />
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
