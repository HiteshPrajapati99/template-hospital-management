import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GrLinkNext } from "react-icons/gr";
import "react-datepicker/dist/react-datepicker.css";
import { FC, useState } from "react";
import DatePicker from "@/components/ui/datePicker";
import { Textarea } from "@/components/ui/textarea";
import { TUserTabs } from "../types";

type Tprops = {
  seTUserTabs: React.Dispatch<React.SetStateAction<TUserTabs>>;
};

const Medical: FC<Tprops> = ({ seTUserTabs }) => {
  const [Date, setDate] = useState<Date>();

  return (
    <div className="grid gap-5 md:px-12">
      <p className="text-center text-white opacity-70 2xl:text-lg">
        Please provide your pet's medical history so we can learn more about
        your pet
      </p>

      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-lg font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Have you given any vaccines to your pet?
        </label>
      </div>

      <DatePicker
        initialFocus
        mode="single"
        selected={Date}
        onSelect={setDate}
      />

      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-lg font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Are there any known allergies that your pet has?
        </label>
      </div>

      <Textarea className="p-4" rows={4} placeholder="Write" />

      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-lg font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Has your pet received any previous treatments?
        </label>
      </div>

      <DatePicker
        initialFocus
        mode="single"
        selected={Date}
        onSelect={setDate}
      />

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Service/Product request " />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="null">No Data </SelectItem>
        </SelectContent>
      </Select>

      <div className="mt-3 flex justify-center">
        <Button
          className="flex items-center gap-3 rounded-[20px] px-16 py-8 text-[16px] font-bold text-black"
          onClick={() => seTUserTabs("symptoms")}
        >
          Next <GrLinkNext />
        </Button>
      </div>
    </div>
  );
};

export default Medical;
