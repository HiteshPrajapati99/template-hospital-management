import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { ColumnDef, DataGrid } from "@/components/common/DataGrid";

type T_Doctor = {
  id: string;
  date: string;
  profile: string;
  petient_name: string;
  species: string;
  pet_name: string;
  next_appointment_date: string;
  report: string;
};

const data: T_Doctor[] = [
  {
    id: "1",
    date: "24 Sep 2023",
    profile: "/avatar.png",
    petient_name: "Ibrahim Ali",
    species: "Dog",
    pet_name: "Bob",
    next_appointment_date: "24 Sep 2023",
    report: "View",
  },
  {
    id: "2",
    date: "24 Sep 2023",
    profile: "/avatar.png",
    petient_name: "Ibrahim Ali",
    species: "Rabbit",
    pet_name: "Bob",
    next_appointment_date: "24 Sep 2023",
    report: "View",
  },
  {
    id: "3",
    date: "5 Jun 2023",
    profile: "/avatar.png",
    petient_name: "Ibrahim Ali",
    species: "Dermatology",
    pet_name: "Bob",
    next_appointment_date: "24 Sep 2023",
    report: "View",
  },
  {
    id: "4",
    date: "5 Jun 2023",
    profile: "/avatar.png",
    petient_name: "Ibrahim Ali",
    species: "Dermatology",
    pet_name: "Bob",
    next_appointment_date: "24 Sep 2023",
    report: "View",
  },
  {
    id: "5",
    date: "5 Jun 2023",
    profile: "/avatar.png",
    petient_name: "Ibrahim Ali",
    species: "Dermatology",
    pet_name: "Bob",
    next_appointment_date: "24 Sep 2023",
    report: "View",
  },
  {
    id: "6",
    date: "5 Jun 2023",
    profile: "/avatar.png",
    petient_name: "Ibrahim Ali",
    species: "Dermatology",
    pet_name: "Bob",
    next_appointment_date: "24 Sep 2023",
    report: "View",
  },
  {
    id: "7",
    date: "5 Jun 2023",
    profile: "/avatar.png",
    petient_name: "Ibrahim Ali",
    species: "Dermatology",
    pet_name: "Bob",
    next_appointment_date: "24 Sep 2023",
    report: "View",
  },
  {
    id: "8",
    date: "5 Jun 2023",
    profile: "/avatar.png",
    petient_name: "Ibrahim Ali",
    species: "Dermatology",
    pet_name: "Bob",
    next_appointment_date: "24 Sep 2023",
    report: "View",
  },
];

const col: ColumnDef<T_Doctor>[] = [
  {
    accessorKey: "id",
    cell: ({ row }) => row.index + 1,
    size: 50,
    enableSorting: false,
  },
  {
    accessorKey: "date",
    header: "Date",
    size: 200,
  },
  {
    accessorKey: "profile",
    header: "Profile",
    cell: ({ row }) => (
      <img
        src={row.getValue("profile") || ""}
        alt="profile-image"
        className="h-10 w-10"
      />
    ),
  },
  {
    accessorKey: "petient_name",
    header: "Patient Name",
  },
  {
    accessorKey: "pet_name",
    header: "Pet Name",
  },
  {
    accessorKey: "species",
    header: "Species",
  },
  {
    accessorKey: "next_appointment_date",
    header: "Next Appointment Date",
    size: 200,
  },

  {
    accessorKey: "report",
    header: "Report",
    cell: ({ row }) => (
      <Button
        variant="ghost"
        className="font-bold capitalize tracking-widest"
        // onClick={() => setViewModal(true)}
      >
        {row.getValue("report")}
      </Button>
    ),
  },
];

const MedicalReport = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* title */}
      <div className="title text-white">
        <div className="flex items-center">
          <Button
            variant="outline"
            className="border-none text-3xl text-white active:scale-75"
            onClick={() => navigate(-1)}
          >
            <BsArrowLeft />
          </Button>
          <div className="flex-1">
            <p className="text-2xl font-bold"> Medical Records</p>
            <p className="opacity-80">
              Lorem ipsum dolor sit amet consectetur. Amet ultricies a integer
              lectus sit.
            </p>
          </div>
        </div>
      </div>
      <div className="px-10 py-8 lg:px-16">
        <Input
          PaperClass="!bg-[#94cced80] border-none lg:w-1/3"
          placeholder="Search for..."
          className="text-white placeholder:text-white"
          RightIcon={
            <Button variant="outline" className="border-none px-1 text-lg">
              <BiSearchAlt2 />
            </Button>
          }
        />

        <div className="pt-5">
          {/* <DataTable
              data={data}
              columns={col}
              headerStyle={{ background: "rgba(132, 217, 255, 0.50)" }}
              headerClass="text-white"
            /> */}

          <DataGrid rows={data} columns={col} height="calc(100dvh - 40dvh)" />
        </div>
      </div>
    </div>
  );
};

export default MedicalReport;
