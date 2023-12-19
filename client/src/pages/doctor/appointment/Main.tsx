import { DataGrid } from "@/components/common/DataGrid";
import React, { useState } from "react";
import { appointmentColunbs, T_Appointment } from "@/utils/doctor/Columns";

const rows: T_Appointment[] = [
  {
    id: "1",
    profile: "/avatar.png",
    date: "24 Sep 2023",
    time: "6:29 PM",
    nots: "Lorem ipsum dolor sit amet consectetur. Faucibus.",
    patient_name: "Ibrahim Ali",
    pet_name: "Bob",
    report: "1",
  },
  {
    id: "2",
    profile: "/avatar.png",
    date: "24 Sep 2023",
    time: "6:29 PM",
    nots: "Lorem ipsum dolor sit amet consectetur. Faucibus.",
    patient_name: "Sanjay Singh",
    pet_name: "Tommy",
    report: "1",
  },
];

type T_Active_Status = "Requested" | "Upcoming" | "Completed";

const Main = () => {
  const [activeStatus, setActiveStatus] =
    useState<T_Active_Status>("Requested");

  return (
    <div>
      <div className="title text-white">
        <p className="text-2xl font-bold">Appointment</p>
        <p className="opacity-70">
          Lorem ipsum dolor sit amet consectetur. Amet ultricies a integer
          lectus sit.
        </p>
      </div>

      <div className="px-8 py-6  lg:px-20">
        <div className="flex gap-6 text-xl font-semibold text-white">
          <div>
            <p
              className={`cursor-pointer active:scale-95 ${
                activeStatus === "Requested" && "text-[#45FFFF]"
              }`}
              onClick={() => setActiveStatus("Requested")}
            >
              Requested
            </p>
            {activeStatus === "Requested" && (
              <div className="h-[1px] w-3/5 bg-[#45FFFF]" />
            )}
          </div>

          <div>
            <p
              className={`cursor-pointer active:scale-95 ${
                activeStatus === "Upcoming" && "text-[#45FFFF]"
              }`}
              onClick={() => setActiveStatus("Upcoming")}
            >
              Upcoming
            </p>
            {activeStatus === "Upcoming" && (
              <div className="h-[1px] w-3/5 bg-[#45FFFF]" />
            )}
          </div>
          <div>
            <p
              className={`cursor-pointer active:scale-95 ${
                activeStatus === "Completed" && "text-[#45FFFF]"
              }`}
              onClick={() => setActiveStatus("Completed")}
            >
              Completed
            </p>
            {activeStatus === "Completed" && (
              <div className="h-[1px] w-3/5 bg-[#45FFFF]" />
            )}
          </div>
        </div>
      </div>

      <div className="px-8 py-4 lg:px-20">
        <DataGrid
          rows={rows}
          columns={appointmentColunbs}
          height="calc(100vh - 35vh)"
        />
      </div>
    </div>
  );
};

export default Main;
