import { DataGrid, ColumnDef } from "@/components/common/DataGrid";
import { Button } from "@/components/ui/button";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type T_Payment = {
  id: string;
  patient_name: string;
  pet_name: string;
  species: string;
  payment_date: string;
  amount: number;
  status: "Done" | "Pending";
};

const data: T_Payment[] = [
  {
    id: "1",
    patient_name: "Ibrahim Ali",
    pet_name: "Tommy",
    species: "Dog",
    payment_date: "24 Sep 2023",
    amount: 330,
    status: "Done",
  },
  {
    id: "2",
    patient_name: "Sanjay Singh",
    pet_name: "Bob",
    species: "Cat",
    payment_date: "3 Jan 2023",
    amount: 100,
    status: "Pending",
  },
  {
    id: "3",
    patient_name: "Tomás Sánchez",
    pet_name: "Swiety",
    species: "Mokey",
    payment_date: "5 Jun 2023",
    amount: 170,
    status: "Done",
  },
  {
    id: "4",
    patient_name: "Jelani Badu",
    pet_name: "Cherry",
    species: "Cat",
    payment_date: "2 Feb 2023",
    amount: 170,
    status: "Done",
  },
];

const col: ColumnDef<T_Payment>[] = [
  {
    accessorKey: "id",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "patient_name",
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
    accessorKey: "payment_date",
    header: "Payment Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const s = row.getValue("status");

      return s == "Done" ? (
        <Button variant="success" className="w-full" size="sm">
          {String(s).toUpperCase()}
        </Button>
      ) : (
        <Button variant="warning" className="w-full" size="sm">
          {String(s).toUpperCase()}
        </Button>
      );
    },
  },
];

const Payment = () => {
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
            <p className="text-2xl font-bold"> Payment History</p>
            <p className="opacity-80">
              Lorem ipsum dolor sit amet consectetur. Amet ultricies a integer
              lectus sit.
            </p>
          </div>
        </div>
      </div>

      <div className=" px-10 py-8 lg:px-20">
        <DataGrid rows={data} columns={col} />
      </div>
    </div>
  );
};

export default Payment;
