import { Button } from "@/components/ui/button";
import React from "react";
import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";

const petInfo = [
  {
    key: "Pet Name",
    value: "Tommy",
  },
  {
    key: "Species",
    value: "Dog",
  },
  {
    key: "Breed",
    value: "Greyhund",
  },
  {
    key: "Pet Age",
    value: "5 year",
  },
  {
    key: "Gender",
    value: "Male",
  },
  {
    key: "Pet has been sterilized?",
    value: "Yes",
  },
  {
    key: "Color",
    value: "Black",
  },
  {
    key: "Weight",
    value: "20",
  },
  {
    key: "Animal Type",
    value: "Owned",
  },
  {
    key: "Potential to bite?",
    value: "No",
  },
];

const Main = () => {
  return (
    <Wrapper>
      <div className="title">
        <p className="text-xl font-semibold text-white">My Pet</p>
        <p className="text-white opacity-70">
          Lorem ipsum dolor sit amet consectetur. Amet ultricies a integer
          lectus sit.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10 p-12">
        <div className="relative">
          <div className="flex justify-center">
            <img
              src="/images/dog.png"
              alt="pet-profile"
              className="absolute -top-8 h-20 w-20"
            />
          </div>

          <div className="pet_box pb-6 pl-16 pt-12">
            {petInfo.map((i, idx) => (
              <div key={idx} className="flex items-center gap-8 text-lg">
                <p className="flex-1 p-1 font-bold text-white">{i.key} </p>
                <p className="flex-1 text-white">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-center">
            <img
              src="/images/dog.png"
              alt="pet-profile"
              className="absolute -top-8 h-20 w-20"
            />
          </div>

          <div className="pet_box pb-6 pl-16 pt-12">
            {petInfo.map((i, idx) => (
              <div key={idx} className="flex items-center gap-8 text-lg">
                <p className="flex-1 p-1 font-bold text-white">{i.key} </p>
                <p className="flex-1 text-white">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pet_box flex items-center justify-center">
          <Button variant="outline" className="border-none text-6xl text-white">
            <AiFillPlusCircle />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  .pet_box {
    border-radius: 20px;
    background: rgba(148, 204, 237, 0.25);
  }
`;
