import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdWatchLater } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import "twin.macro";
import { Button } from "@/components/ui/button";
import { DataGrid, ColumnDef } from "@/components/common/DataGrid";

interface dataProps {
  id: string;
  billing_to: string;
  clinic_name: string;
  payment_date: string;
  amount: string;
  status: string;
}

const Rows: dataProps[] = [
  {
    id: "1",
    billing_to: "Ibrahim ali",
    clinic_name: "House Of helth",
    payment_date: "24 sep 2023",
    amount: "$230",
    status: "Done",
  },
  {
    id: "2",
    billing_to: "Ibrahim ali",
    clinic_name: "House Of helth",
    payment_date: "24 sep 2023",
    amount: "$230",
    status: "Pending",
  },

  {
    id: "3",
    billing_to: "Ibrahim ali",
    clinic_name: "House Of helth",
    payment_date: "24 sep 2023",
    amount: "$230",
    status: "Done",
  },
];

const col: ColumnDef<dataProps>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: "Id",
    sortingFn: "text",
    maxSize: 10,
    enableSorting: false,
  },
  {
    id: "billing",
    accessorKey: "billing_to",
    header: "Billing To",
    size: 100,
    enableSorting: false,
  },
  {
    id: "clinic",
    accessorKey: "clinic_name",
    header: "Clinic Name",
    cell: ({ row }) => <div> {row.getValue("clinic")} </div>,
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
    enableSorting: false,
    maxSize: 60,
  },
  {
    accessorKey: "status",
    header: "Status",
    maxSize: 100,
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

const HomePage = () => {
  return (
    <Wrapper>
      {/* title  */}
      <div className="title">
        <p className="text-start text-2xl font-bold text-white ">
          Welcome Back, Jhon
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-8 py-6 md:px-20 lg:flex-nowrap">
        {/* Apppintment */}
        <div className="w-full lg:w-[70%]">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-white">Upcoming Appointment</p>
            <Link to="" className="text-muted underline">
              View more
            </Link>
          </div>

          <div className="mt-3 flex flex-wrap gap-4 md:flex-nowrap">
            {[1, 2, 3].map((i, idx) => (
              <div className="box flex flex-col gap-3" key={i}>
                <div className="flex items-center gap-3">
                  <img src="/avatar.png" alt="image" />
                  <div>
                    <p className="text-lg font-bold text-white">John Cater</p>
                    <p className="text-sm text-white">Dentistry</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span>
                    <IoLocationSharp tw="text-lg text-[#60F1FB]" />
                  </span>
                  <p className="text-sm text-white">
                    13677 West McDowell RoadGoodyear, AZ 85395
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <SlCalender tw="text-[#60F1FB]" />{" "}
                    <p className="text-sm text-white">6 June 2023</p>
                  </div>
                  <div className="flex gap-2">
                    <MdWatchLater tw="text-[#60F1FB]" />{" "}
                    <p className="text-sm text-white">8:13 AM</p>
                  </div>
                </div>
                <Button
                  variant={
                    idx === 0 ? "success" : idx === 1 ? "warning" : "delete"
                  }
                  className="rounded-xl"
                >
                  {idx === 0 ? "Confirmed" : idx === 1 ? "Pending" : "Canceled"}
                </Button>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between py-3">
            <p className="text-xl font-bold text-white">Billing & Payment</p>
            <Link to="" className="text-muted underline">
              View more
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

        {/* Recent  messagees */}
        <div className="w-full lg:w-[30%]">
          <>
            <p className="text-xl font-bold text-white">Recent Message</p>
            <div className="box mt-3">
              {[1, 2, 3, 4].map((i, idx) => (
                <div
                  className={`flex  justify-between gap-2 ${
                    idx !== [1, 2, 3, 4].length - 1 &&
                    "border-b border-[rgba(255,255,255,0.2)]"
                  } px-1 py-2`}
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
          </>

          <>
            <div className="mb-2 mt-3 flex items-center justify-between">
              <p className="text-xl font-bold text-white">Pet Profile</p>
              <Link to="" className="text-muted underline">
                View more
              </Link>
            </div>

            <div className="box">
              <div className="flex justify-center">
                <img
                  src="/avatar.png"
                  alt="image"
                  className="h-16 w-16 rounded-full"
                />
              </div>

              <div className="flex items-center justify-between px-2 py-2">
                <p className="text-[17px] font-bold text-white">
                  Pet Name : <span className="font-thin opacity-95">Tommy</span>
                </p>
                <p className="text-[17px] font-bold text-white">
                  Species: <span className="font-thin  opacity-95">Dog</span>
                </p>
              </div>
              <div className="flex items-center justify-between px-2">
                <p className="text-lg font-bold text-white">
                  Breed : <span className="font-thin opacity-95">Greyhund</span>
                </p>
                <p className="text-[17px] font-bold text-white">
                  color: <span className="font-thin  opacity-95">Black</span>
                </p>
              </div>
            </div>
          </>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  .box {
    border-radius: 20px;
    background: rgba(148, 204, 237, 0.25);
    padding: 20px;
    width: 100%;
  }
`;
