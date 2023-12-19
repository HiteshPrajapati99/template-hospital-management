import { Button } from "@/components/ui/button";
import styled from "styled-components";

const RegisterReport = () => {
  const petInfo = [
    {
      "Pet Name": "Tommy",
    },
    {
      Species: "Dog",
    },
    {
      Breed: "Greyhund",
    },
    {
      "Pet Age": "5 year",
    },
    {
      Gender: "Male",
    },
    {
      "Pet has been sterilized?": "Yes",
    },
    {
      Color: "Black",
    },
    {
      Weight: 20,
    },
    {
      "Animal Type": "Owned",
    },
    {
      "Potential to bite?": "No",
    },
  ];

  const helthInfo = [
    {
      Vaccinees: "Yes (23-sep-2022)",
    },
    {
      Allergies: "None",
    },
    {
      "Previous Treatment": "Yes (25-sep-2022)",
    },
    {
      "Current Symptoms":
        "Lorem ipsum dolor sit amet consectetur. Tellus urna nibh natoque id facilisis turpis tristique. Faucibus id.",
    },
  ];

  const ownerInfo = [
    {
      Name: "John Carter",
    },
    {
      "Phone no.": "(123) 456 - 789",
    },
    {
      Email: "johncarer@email.com",
    },
  ];

  return (
    <Wrapper>
      <div className="w-full md:w-[80%]">
        <div className="flex w-full justify-between py-5">
          <p className="text-2xl font-bold  text-white"> Pet Health Report </p>
          <Button className="rounded-lg py-6">
            <img src="./images/download.svg" alt="icon" />
          </Button>
        </div>

        {/* Form Details */}

        <div className="border-2 border-[#009ED0]">
          {/* Logo And Date */}
          <div className="block items-center justify-between bg-[#D4F2FF] p-4 text-center md:flex">
            <div className="flex items-center justify-center gap-0">
              <img
                src="./logo.png"
                alt="logo"
                style={{
                  fill: "drop-shadow(0px 2.4185869693756104px 0px #0AEFFF)",
                }}
                className="h-[70px]"
              />
              <p className="logo-text">Petdx.ai</p>
            </div>
            <p className="mt-3 font-bold md:mt-0">
              Date : <span className="font-thin"> 04-July-2023</span>
            </p>
          </div>

          {/*  pet Info content */}
          <div
            style={{
              borderBottom: "6px solid #84D9FF",
            }}
          >
            <p className="px-5 py-6 text-[26px] font-bold text-white md:px-12">
              Pet Information
            </p>
          </div>

          <div className="bg-[#D4F2FF] px-3 py-6 md:px-12">
            {petInfo.map((i, idx) => (
              <div className="p-2" key={idx}>
                {Object.entries(i).map(([key, value]) => (
                  <div className="flex gap-2" key={value}>
                    <p className="flex-1 text-[20px] font-bold">{key}</p>
                    <p className=" flex-1 text-[20px]">{value}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* helth info */}
          <div
            style={{
              borderBottom: "6px solid #84D9FF",
            }}
          >
            <p className="px-5 py-6 text-[26px] font-bold text-white md:px-12">
              Health Concerns
            </p>
          </div>

          <div className="bg-[#D4F2FF] px-3 md:px-12">
            {helthInfo.map((i, idx) => (
              <div className="p-2" key={idx}>
                {Object.entries(i).map(([key, value]) => (
                  <div className="flex gap-2" key={value}>
                    <p className="flex-1 text-[20px] font-bold">{key}</p>
                    <p className=" flex-1 text-[20px]">{value}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Owner info */}
          <div
            style={{
              borderBottom: "6px solid #84D9FF",
            }}
          >
            <p className="px-5 py-6 text-[26px] font-bold text-white md:px-12">
              Owner Information
            </p>
          </div>

          <div className="bg-[#D4F2FF] px-3 md:px-12">
            {ownerInfo.map((i, idx) => (
              <div className="p-2" key={idx}>
                {Object.entries(i).map(([key, value]) => (
                  <div className="flex gap-2" key={value}>
                    <p className="flex-1 text-[20px] font-bold">{key}</p>
                    <p className="flex-1 text-[20px]">{value}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button
            className="flex items-center gap-2 rounded-2xl px-16 py-7 text-lg font-bold text-black"
            size="lg"
          >
            Done
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default RegisterReport;

const Wrapper = styled.div`
  background: linear-gradient(
    254deg,
    #03152d 34.49%,
    #032c50 58.23%,
    #004a81 75.85%,
    #04629d 87.25%,
    #008ce1 100%
  );
  padding: 1.5rem;
  display: flex;
  justify-content: center;
`;
