import { DataGrid, ColumnDef } from "@/components/common/DataGrid";
import SelectView from "@/components/ui/SelectView";
import { Button } from "@/components/ui/button";
import React from "react";

type TTableData = {
  id: string;
  profile: string;
  doctor_name: string;
  specialty: "Dentistry" | "Dermatology" | "Nutrition" | "Pathology";
  pet_name: string;
  address: string;
  date: string;
  time: string;
  status: "Confirmed" | "Pending" | "Reject" | "Done";
};

const data: TTableData[] = [
  {
    id: "1",
    address: "13677 West McDowell RoadGoodyear, AZ 85395",
    date: "24 Sep 2023",
    time: "6:29 PM",
    doctor_name: "Ibrahim Ali",
    pet_name: "Bob",
    profile: "/avatar.png",
    specialty: "Dentistry",
    status: "Confirmed",
  },
  {
    id: "2",
    address: "13677 West McDowell RoadGoodyear, AZ 85395",
    date: "3 Jan 2023",
    time: "9:18 AM",
    doctor_name: "Sanjay Singh",
    pet_name: "Tommy",
    profile: "/avatar.png",
    specialty: "Dermatology",
    status: "Pending",
  },
  {
    id: "3",
    address: "13677 West McDowell RoadGoodyear, AZ 85395",
    date: "3 Jan 2023",
    time: "9:18 AM",
    doctor_name: "Tomás Sánchez",
    pet_name: "Swety",
    profile: "/avatar.png",
    specialty: "Nutrition",
    status: "Reject",
  },
  {
    id: "4",
    address: "13677 West McDowell RoadGoodyear, AZ 85395",
    date: "3 Jan 2023",
    time: "9:18 AM",
    doctor_name: "Tomás Sánchez",
    pet_name: "Swety",
    profile: "/avatar.png",
    specialty: "Nutrition",
    status: "Done",
  },
];

const col: ColumnDef<TTableData>[] = [
  {
    accessorKey: "#Sr",
    header: "#Sr",
    cell: ({ row }) => row.index + 1,
    size: 50,
  },
  {
    id: "profile",
    accessorKey: "profile",
    cell: ({ row }) => <img src={row.getValue("profile")} alt="" />,
    header: "Profile",
    size: 100,
  },
  {
    accessorKey: "doctor_name",
    header: "Doctor Name",
    size: 160,
  },
  {
    accessorKey: "specialty",
    header: "Specialty",
    size: 100,
  },
  {
    accessorKey: "pet_name",
    header: "Pet Name",
    size: 150,
  },
  {
    accessorKey: "address",
    header: "Address",
    size: 260,
  },
  {
    accessorKey: "date",
    header: "Date",
    size: 100,
  },
  {
    accessorKey: "time",
    header: "Time",
    size: 100,
  },
  {
    accessorKey: "status",
    header: "Status",
    size: 120,
    cell: ({ row }) => {
      const value: TTableData["status"] = row.getValue("status");

      return value === "Confirmed" ? (
        <Button variant="success" className="w-full font-bold">
          {row.getValue("status")}
        </Button>
      ) : value === "Reject" ? (
        <Button variant="destructive" className="w-full font-bold">
          {row.getValue("status")}
        </Button>
      ) : value === "Pending" ? (
        <Button variant="warning" className="w-full font-bold">
          {row.getValue("status")}
        </Button>
      ) : (
        <Button
          variant="outline"
          className="w-full border-none bg-[#00ADC4] font-bold hover:bg-[#00ADC4] hover:text-white"
        >
          {row.getValue("status")}
        </Button>
      );
    },
  },
];

const Main = () => {
  return (
    <>
      <div className="title flex items-center justify-center gap-7">
        <div className="flex-1">
          <p className="text-2xl font-bold text-white">Appointment</p>
          <p className="text-white opacity-70">
            Lorem ipsum dolor sit amet consectetur. Amet ultricies a integer
            lectus sit.
          </p>
        </div>

        <SelectView
          placeholder="All"
          className=" w-32 !bg-white text-black"
          iconClassName="text-black"
          defaultValue="all"
          options={[
            {
              key: "all",
              value: "All",
            },
            {
              key: "pending",
              value: "Pending",
            },
            {
              key: "confirmed",
              value: "Confirmed",
            },
            {
              key: "done",
              value: "Done",
            },
          ]}
        />
      </div>

      {/* Data Grid  */}
      <div className="px-16 py-8">
        <DataGrid rows={data} columns={col} />
      </div>
    </>
  );
};

export default Main;
