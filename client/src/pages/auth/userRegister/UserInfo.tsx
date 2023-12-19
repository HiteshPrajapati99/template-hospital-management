import { Button } from "@/components/ui/button";
import { CountryInput, Input } from "@/components/ui/input";
import React, { ChangeEvent, FC } from "react";
import { GrLinkNext } from "react-icons/gr";
import { TUserTabs, T_USER_INPUTS } from "../types";

type Tprops = {
  seTUserTabs: React.Dispatch<React.SetStateAction<TUserTabs>>;
  formProps: {
    values: T_USER_INPUTS;
    handleChange: (e: ChangeEvent<unknown>) => void;
    error?: boolean;
    helperText?: string;
  };
};
const UserInfo: FC<Tprops> = ({ seTUserTabs, formProps }) => {
  const { values, handleChange } = formProps;

  return (
    <div className="grid gap-5 md:px-12 lg:px-16">
      <p className="text-center text-white opacity-70 2xl:text-lg">
        First, enter your personal details, and then proceed to the next step
      </p>

      <Input
        placeholder="Full Name"
        name="f_name"
        value={values.f_name}
        onChange={handleChange}
      />
      <Input
        placeholder="Phone Number"
        name="p_number"
        type="number"
        value={values.p_number}
        onChange={handleChange}
      />
      <CountryInput placeholder="Phone Number" />
      <Input
        placeholder="Email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <Input
        placeholder="Password"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <Input
        placeholder="Confirm Password"
        type="password"
        name="c_password"
        value={values.c_password}
        onChange={handleChange}
      />
      <div className="flex justify-center">
        <Button
          className="flex items-center gap-3 rounded-[20px] px-16 py-8 text-[16px] font-bold text-black"
          onClick={() => seTUserTabs("pet_info")}
        >
          Next <GrLinkNext />
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
