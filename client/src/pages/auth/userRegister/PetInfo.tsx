import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { FC } from "react";
import { GrLinkNext } from "react-icons/gr";
import { TUserTabs } from "../types";
import SelectView from "@/components/ui/SelectView";

type Tprops = {
  seTUserTabs: React.Dispatch<React.SetStateAction<TUserTabs>>;
};
const PetInfo: FC<Tprops> = ({ seTUserTabs }) => {
  return (
    <div className="grid gap-5 md:px-12">
      <p className="text-center text-white opacity-70 2xl:text-lg">
        Please enter your pet's information these will help us create your pet's
        profile
      </p>

      <div className="grid grid-cols-2 gap-3">
        <Input placeholder="Pet Name" />
        <SelectView
          placeholder="Species"
          options={[
            {
              key: "dog",
              value: "Dog",
            },
            {
              key: "cat",
              value: "Cat",
            },
            {
              key: "rabbit",
              value: "Rabbit",
            },
            {
              key: "monkey",
              value: "Monkey",
            },
            {
              key: "cockatiel",
              value: "Cockatiel",
            },
          ]}
        />
      </div>

      <div className="grid grid-cols-2 gap-3 ">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Breed" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Golden">Golden Retriever </SelectItem>
            <SelectItem value="Beagle">Beagle </SelectItem>
            <SelectItem value="Bull">Bull Terrier </SelectItem>
            <SelectItem value="Affenpinscher">Affenpinscher </SelectItem>
            <SelectItem value="Chow">Chow Chow </SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="Age" />
      </div>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="male">Male </SelectItem>
          <SelectItem value="female">Female </SelectItem>
        </SelectContent>
      </Select>

      <div className="grid grid-cols-2 gap-3">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Pet sterilized ?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Yes </SelectItem>
            <SelectItem value="female">No </SelectItem>
            <SelectItem value="unknown"> Unknown </SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Color" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Black">Black </SelectItem>
            <SelectItem value="Brown">Brown </SelectItem>
            <SelectItem value="Cream">Cream </SelectItem>
            <SelectItem value="Grey">Grey </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Input placeholder="Weight" type="number" />

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Animal Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Owned">Owned </SelectItem>
            <SelectItem value="Shelter">Shelter </SelectItem>
            <SelectItem value="Foster">Foster </SelectItem>
            <SelectItem value="Misc">Misc </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Textarea placeholder="Type your message here." />

      <div className="ml-3 flex items-center gap-3">
        <Checkbox id="term" />
        <label
          htmlFor="term"
          className="text-lg font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Your pet has the potential to bite ?
        </label>
      </div>

      <div className="ml-3 flex items-center gap-3">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-lg font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Are you Agree with group appointment?
        </label>
      </div>

      <div className="mt-3 flex justify-center">
        <Button
          className="flex items-center gap-3 rounded-[20px] px-16 py-8 text-[16px] font-bold text-black"
          onClick={() => seTUserTabs("medical")}
        >
          Next <GrLinkNext />
        </Button>
      </div>
    </div>
  );
};

export default PetInfo;
