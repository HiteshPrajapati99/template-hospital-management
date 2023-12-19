import { ColumnDef, DataGrid } from "@/components/common/DataGrid";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type T_Doctor = {
  id: string;
  date: string;
  profile: string;
  name: string;
  pet_name: string;
  review: string;
  rate: string;
  status: string;
};

const data: T_Doctor[] = [
  {
    id: "1",
    date: "24 Sep 2023",
    profile: "/avatar.png",
    name: "Ibrahim Ali",
    pet_name: "Bob",
    review:
      "Lorem ipsum dolor sit amet consectetur. Nisl non vitae. Lorem ipsum dolor sit amet consectetur. Nisl non vitae.Lorem ipsum dolor sit amet consectetur. Nisl non vitae.",
    rate: "⭐⭐⭐⭐⭐",

    status: "view",
  },
  {
    id: "2",
    date: "24 Sep 2023",
    profile: "/avatar.png",
    name: "Ibrahim Ali",
    pet_name: "Bob",
    review: "Lorem ipsum dolor sit amet consectetur. Nisl non vitae.",
    rate: "⭐⭐⭐⭐⭐",

    status: "view",
  },
  {
    id: "3",
    date: "5 Jun 2023",
    profile: "/avatar.png",
    name: "Ibrahim Ali",
    pet_name: "Bob",
    review: "Lorem ipsum dolor sit amet consectetur. Nisl non vitae.",
    rate: "⭐⭐⭐⭐⭐",
    status: "view",
  },
  {
    id: "4",
    date: "5 Jun 2023",
    profile: "/avatar.png",
    name: "Ibrahim Ali",
    pet_name: "Bob",
    review: "Lorem ipsum dolor sit amet consectetur. Nisl non vitae.",
    rate: "⭐⭐⭐⭐⭐",
    status: "view",
  },
  {
    id: "5",
    date: "5 Jun 2023",
    profile: "/avatar.png",
    name: "Ibrahim Ali",
    pet_name: "Bob",
    review: "Lorem ipsum dolor sit amet consectetur. Nisl non vitae.",
    rate: "⭐⭐⭐⭐⭐",
    status: "view",
  },
  {
    id: "6",
    date: "5 Jun 2023",
    profile: "/avatar.png",
    name: "Ibrahim Ali",
    pet_name: "Bob",
    review: "Lorem ipsum dolor sit amet consectetur. Nisl non vitae.",
    rate: "⭐⭐⭐⭐⭐",
    status: "view",
  },
  {
    id: "7",
    date: "5 Jun 2023",
    profile: "/avatar.png",
    name: "Ibrahim Ali",
    pet_name: "Bob",
    review: "Lorem ipsum dolor sit amet consectetur. Nisl non vitae.",
    rate: "⭐⭐⭐⭐⭐",
    status: "view",
  },
  {
    id: "8",
    date: "5 Jun 2023",
    profile: "/avatar.png",
    name: "Ibrahim Ali",
    pet_name: "Bob",
    review: "Lorem ipsum dolor sit amet consectetur. Nisl non vitae.",
    rate: "⭐⭐⭐⭐⭐",
    status: "view",
  },
];

const FeedbackPatient = () => {
  const navigate = useNavigate();

  const [ViewModal, setViewModal] = useState(false);

  const col: ColumnDef<T_Doctor>[] = [
    {
      accessorKey: "id",
      cell: ({ row }) => row.index + 1,
      header: "#Sr",
      size: 30,
    },
    {
      accessorKey: "date",
      header: "Date",
      size: 100,
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
      size: 50,
    },
    {
      accessorKey: "name",
      header: "Name",
      size: 100,
    },
    {
      accessorKey: "pet_name",
      header: "Pet Name",
      size: 100,
    },
    {
      accessorKey: "review",
      header: "Review",
      size: 280,
      cell: ({ row }) => (
        <p className="max-h-12 overflow-auto whitespace-pre-wrap">
          {row.getValue("review")}
        </p>
      ),
    },
    {
      accessorKey: "rate",
      header: "Rate",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Button
          variant="ghost"
          className="font-bold capitalize tracking-widest"
          onClick={() => setViewModal(true)}
        >
          {row.getValue("status")}
        </Button>
      ),
    },
  ];

  return (
    <div>
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
            <p className="text-2xl font-bold"> Patient Feedback </p>
            <p className="opacity-80">
              Lorem ipsum dolor sit amet consectetur. Amet ultricies a integer
              lectus sit.
            </p>
          </div>
        </div>
      </div>

      <div className="px-10 py-6 lg:px-16">
        <DataGrid rows={data} columns={col} height="calc(100dvh - 28dvh)" />
      </div>

      <DetailsModal open={ViewModal} setOpen={setViewModal} />
    </div>
  );
};

export default FeedbackPatient;

type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DetailsModal = ({ open, setOpen }: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)} modal>
      <DialogContent className="px-8 py-8 text-white">
        <DialogTitle className="text-lg tracking-wider">Feedback</DialogTitle>
        <div className="grid place-items-center">
          <img src="/avatar.png" alt="image" className="h-16 w-16" />
          <p className="opacity-80"> 24 Sep 2023</p>
        </div>

        <div className="grid gap-3 text-lg text-white">
          <p className="font-bold">
            Doctor Name :
            <span className="font-light opacity-80"> Ibrahim Ali </span>
          </p>

          <p className="font-bold">
            Pet Name :<span className="font-light opacity-80"> Tommy</span>
          </p>

          <p className="font-bold">
            Rate :
            <span className="font-light opacity-80">
              {" "}
              &#10031; &#10031; &#10031;
            </span>
          </p>

          <p className="opacity-80">
            Lorem ipsum dolor sit amet consectetur. Magna volutpat quis quis
            pharetra. Id sit non augue elementum.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
