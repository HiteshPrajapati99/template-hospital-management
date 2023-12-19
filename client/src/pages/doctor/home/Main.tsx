import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Calendar, Clock4 } from "lucide-react";
import { DataGrid, ColumnDef } from "@/components/common/DataGrid";
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface dataProps {
  id: string;
  patient_name: string;
  species: string;
  payment_date: string;
  amount: string;
  status: string;
}

const Rows: dataProps[] = [
  {
    id: "1",
    patient_name: "Ibrahim ali",
    payment_date: "24 sep 2023",
    species: "Dog",
    amount: "$230",
    status: "Done",
  },
  {
    id: "2",
    patient_name: "Ibrahim ali",
    payment_date: "24 sep 2023",
    amount: "$230",
    status: "Pending",
    species: "Cat",
  },

  {
    id: "3",
    patient_name: "Ibrahim ali",
    payment_date: "24 sep 2023",
    amount: "$230",
    species: "Cat",
    status: "Done",
  },
];

const col: ColumnDef<dataProps>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: "Id",
    sortingFn: "text",
    sortDescFirst: true,
    maxSize: 10,
    enableSorting: false,
  },
  {
    accessorKey: "patient_name",
    header: "Patient Name",
    enableSorting: false,
    size: 130,
  },
  {
    accessorKey: "species",
    header: "Species",
    size: 100,
  },

  {
    accessorKey: "payment_date",
    header: "Payment Date",
    size: 130,
    enableSorting: false,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    maxSize: 30,
  },
  {
    accessorKey: "status",
    header: "Status",
    maxSize: 80,
    enableSorting: false,
    cell: ({ row }) => {
      const a = row.getValue("status");

      return (
        <Button
          variant={a === "Done" ? "success" : "warning"}
          className="w-full rounded-xl text-base font-bold"
        >
          {String(a)}
        </Button>
      );
    },
  },
];

const Main = () => {
  const [reqModalStatus, setReqModalStatus] = useState(false);

  return (
    <Wrapper>
      <div className="title">
        <p className="text-start text-2xl font-bold text-white">
          Welcome Back, Cheris{" "}
        </p>
      </div>

      <div className="grid gap-4 px-8 py-6 md:px-20">
        {/* first Row */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="box text-white">
            <p>Total Patients</p>
            <p className="text-2xl font-bold">2000+</p>
          </div>

          <div className="box text-white">
            <p>Total Income</p>
            <p className="text-2xl font-bold">$1900</p>
          </div>

          <div className="box text-white">
            <p>Rating</p>
            <p className="text-2xl font-bold"> ⭐(4.3) </p>
          </div>
        </div>

        {/* second row */}

        <div className="block gap-6 lg:flex">
          <div className="lg:w-[70%]">
            <div className="mb-4 flex w-full items-center justify-between">
              <p className="text-lg font-bold text-white">
                Appointment Request
              </p>

              <Link to="" className="text-muted underline">
                View More
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3  md:grid-cols-3">
              <div className="box w-full text-white">
                <div className="flex gap-3">
                  <img src="/avatar.png" alt="image" />
                  <div>
                    <p className="font-bold">John Carter</p>
                    <p className="tracking-wider">Dog</p>
                  </div>
                </div>
                <div className="my-3 flex items-center justify-between">
                  <div className="flex gap-3">
                    <Calendar />
                    <p>6 June 2013</p>
                  </div>

                  <div className="flex gap-3">
                    <Clock4 />
                    <p>8:13 AM</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="delete"
                    className="w-full rounded-xl font-bold"
                    onClick={() => setReqModalStatus(true)}
                  >
                    Reject
                  </Button>

                  <Button
                    variant="success"
                    className="w-full rounded-xl font-bold"
                  >
                    Accept
                  </Button>
                </div>
              </div>

              <div className="box w-full text-white">
                <div className="flex gap-3">
                  <img src="/avatar.png" alt="image" />
                  <div>
                    <p className="font-bold">John Carter</p>
                    <p className="tracking-wider">Dog</p>
                  </div>
                </div>
                <div className="my-3 flex items-center justify-between">
                  <div className="flex gap-3">
                    <Calendar />
                    <p>6 June 2013</p>
                  </div>

                  <div className="flex gap-3">
                    <Clock4 />
                    <p>8:13 AM</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="delete"
                    className="w-full rounded-xl font-bold"
                    onClick={() => setReqModalStatus(true)}
                  >
                    Reject
                  </Button>

                  <Button
                    variant="success"
                    className="w-full rounded-xl font-bold"
                  >
                    Accept
                  </Button>
                </div>
              </div>

              <div className="box w-full text-white">
                <div className="flex gap-3">
                  <img src="/avatar.png" alt="image" />
                  <div>
                    <p className="font-bold">John Carter</p>
                    <p className="tracking-wider">Dog</p>
                  </div>
                </div>
                <div className="my-3 flex items-center justify-between">
                  <div className="flex gap-3">
                    <Calendar />
                    <p>6 June 2013</p>
                  </div>

                  <div className="flex gap-3">
                    <Clock4 />
                    <p>8:13 AM</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="delete"
                    className="w-full rounded-xl font-bold"
                    onClick={() => setReqModalStatus(true)}
                  >
                    Reject
                  </Button>

                  <Button
                    variant="success"
                    className="w-full rounded-xl font-bold"
                  >
                    Accept
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 pt-3 lg:pt-0">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-lg font-bold text-white">Recent Message</p>

              <Link to="" className="text-muted underline">
                View More
              </Link>
            </div>

            <div className="box">
              {[1, 2].map((i, idx) => (
                <div
                  className={`flex  justify-between gap-2  ${
                    idx !== [1, 2].length - 1 &&
                    "border-b border-[rgba(255,255,255,0.2)]"
                  }  py-2`}
                  key={i}
                >
                  <div className="flex items-center gap-3">
                    <img src="/avatar.png" alt="logo" />
                    <div>
                      <p className="text-lg text-white">Raymond Young</p>
                      <p className="pb-2 text-sm text-muted">
                        Lorem ipsum dolor sit amet....
                      </p>
                    </div>
                  </div>

                  <div className="text-center text-sm text-muted">
                    4 m
                    <div className="w-4.5 h-4.5 rounded-full bg-[#45FFFF] text-center text-black">
                      4
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* trid row */}

        <div className="grid-cols-12 gap-6 overflow-hidden lg:grid">
          <div className="lg:col-span-5">
            <div className="mb-4 flex w-full items-center justify-between">
              <p className="text-lg font-bold text-white">
                Upcoming Appointment
              </p>

              <Link to="" className="text-muted underline">
                View More
              </Link>
            </div>
            <div className="box grid gap-3">
              {[1, 2, 3].map((_, idx) => (
                <div className="flex justify-between gap-3" key={idx}>
                  <div className="flex items-center gap-3 text-white">
                    <img src="/avatar.png" alt="" />
                    <div>
                      <p className="font-bold"> John Carter</p>
                      <p className="text-sm lg:text-base  ">Dog</p>
                    </div>
                  </div>

                  <div className="text-white">
                    <p>6 June 2013</p>
                    <p>8:13 AM</p>
                  </div>

                  <Button variant="warning" className="rounded-xl">
                    {" "}
                    COMING{" "}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full pt-3 lg:col-span-7 lg:pt-0">
            <div className="mb-4 flex w-full items-center justify-between">
              <p className="text-lg font-bold text-white">Billing & Payment</p>

              <Link to="" className="text-muted underline">
                View More
              </Link>
            </div>

            <div className="box">
              <DataGrid
                rows={Rows}
                columns={col}
                props={{
                  headerStyle: {
                    background: "rgba(3, 46, 81, 0.50)",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <ReqModal open={reqModalStatus} setOpen={setReqModalStatus} />
    </Wrapper>
  );
};

export default Main;

type T_Modal_Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReqModal = ({ open, setOpen }: T_Modal_Props) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="border-[#C6C6C6] p-6">
        <p className="text-2xl font-bold text-white"> Cancel Request</p>

        <Textarea
          placeholder="Reason"
          rows={4}
          className="text-xl 2xl:text-2xl"
        />

        <div className="text-center">
          <Button className="rounded-2xl px-16 py-8 text-xl font-medium text-black 2xl:text-2xl">
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Wrapper = styled.section`
  .box {
    border-radius: 20px;
    background: rgba(148, 204, 237, 0.25);
    padding: 20px;
  }
`;
