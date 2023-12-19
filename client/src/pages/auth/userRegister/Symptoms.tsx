import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

type Tprops = {
  // seTUserTabs: React.Dispatch<React.SetStateAction<TUserTabs>>;
};

const Symptoms: FC<Tprops> = () => {
  const navigate = useNavigate();

  return (
    <div className="grid gap-5 md:px-12 lg:px-16">
      <p className="text-white opacity-70 text-center 2xl:text-lg">
        Please provide the current symptoms of your pet
      </p>

      <Textarea className="p-3" rows={4} placeholder="Current Symptoms" />

      <div className="flex justify-center mt-3">
        <Button
          className="flex gap-3 px-16 py-8 text-[16px] rounded-[20px] font-bold items-center text-black"
          onClick={() => navigate("/register_report")}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Symptoms;
