import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import "twin.macro";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();

  const userData = [
    {
      name: "Thomas Kim",
      cate: "Dentistry",
      rate: "4.7",
    },
    {
      name: "Abhinav Yadav",
      cate: "Dermatology",
      rate: "4.7",
    },
    {
      name: "Olivia Nowak",
      cate: "Nutrition",
      rate: "4.7",
    },
    {
      name: "Nikol Murphy",
      cate: "Pathology",
      rate: "4.7",
    },
    {
      name: "Tawanna Keita",
      cate: "Internal Medicine",
      rate: "4.7",
    },
    {
      name: "John Carter",
      cate: "Dentistry",
      rate: "4.7",
    },
  ];

  const [Slecteditem, setSlecteditem] = useState(false);

  const [appointment_Type, setAppointment_Type] = useState(false);

  return (
    <Wrapper>
      {Slecteditem && (
        <div
          className="mb-6 h-full w-full rounded-2xl border border-[##ffffff5e] bg-[#005D69] px-8 py-6 md:px-16"
          data-aos="zoom-in"
        >
          <div className="flex items-center justify-between">
            <div className="grid place-items-center gap-3">
              <img src="/avatar.png" alt="user-image" className="h-20 w-20" />
              <p className="text-lg font-bold text-white"> Matt Cannon </p>
              <p className="rounded-lg bg-white px-3 py-1 text-center text-sm text-black">
                ⭐ 4.7
              </p>
            </div>
            <hr className="w-24 rotate-90 text-white" />

            <div className="grid gap-3">
              <div>
                <p className="text-muted">Specialization</p>
                <p className="font-semibold text-white">Internal Medicine</p>
              </div>

              <div>
                <p className="text-muted">Name</p>
                <p className="font-semibold text-white">Abrazo West Campus</p>
              </div>

              <div>
                <p className="text-muted">Address</p>
                <p className="font-semibold text-white">
                  13677 West McDowell RoadGoodyear, AZ 85395
                </p>
              </div>
            </div>

            <hr className="w-20 rotate-90 text-white" />

            <div className="grid gap-3">
              <div>
                <p className="text-muted">Appointment Fees</p>
                <p className="font-semibold text-white">$ 20</p>
              </div>

              <div>
                <p className="text-muted">consultation fee</p>
                <p className="font-semibold text-white">$50</p>
              </div>

              <Button
                className="text-md flex items-center justify-center gap-2 rounded-2xl px-12 py-7 font-bold text-black"
                onClick={() => setAppointment_Type(true)}
              >
                Booking <AiOutlineArrowRight />
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 place-items-center gap-6 lg:grid-cols-3">
        {userData.map((i, idx) => (
          <div
            key={idx}
            className="box active:scale-95"
            onClick={() => setSlecteditem(!Slecteditem)}
          >
            <div className="grid place-items-center gap-1 px-12 py-2 text-white">
              <img src="/avatar.png" alt="user-image" className="h-16 w-16" />
              <p className="text-lg font-bold"> {i.name} </p>
              <p className="opacity-80"> {i.cate} </p>
              <p className="rounded-lg bg-white px-3 py-1 text-sm text-black">
                ⭐ {i.rate}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={appointment_Type}
        onOpenChange={() => setAppointment_Type(false)}
        modal
      >
        <DialogContent className="px-8 py-8 text-white">
          <DialogTitle className="text-center text-3xl">
            Select Appointment Type
          </DialogTitle>

          <Button
            variant="ghost"
            className="rounded-xl py-10 text-xl"
            onClick={() => navigate("/user/chat")}
          >
            Direct Chat with Doctor
          </Button>
          <Button
            variant="ghost"
            className="rounded-xl py-10 text-xl"
            onClick={() => navigate("pet_info")}
          >
            Visit Clinic
          </Button>
        </DialogContent>
      </Dialog>
    </Wrapper>
  );
};

export default UserList;

const Wrapper = styled.div`
  .box {
    border-radius: 20px;
    background: rgba(148, 204, 237, 0.25);
    padding: 20px 10px;
    width: 100%;
    height: 100%;
  }
`;
