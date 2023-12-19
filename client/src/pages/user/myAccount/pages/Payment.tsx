import { DataGrid, ColumnDef } from "@/components/common/DataGrid";
import { Button } from "@/components/ui/button";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type T_Payment = {
  id: string;
  billing_to: string;
  clinic_name: string;
  payment_date: Date;
  amount: number;
  status: "Done" | "Pending";
};

const data: T_Payment[] = [
  {
    id: "1",
    clinic_name: "House of Health",
    billing_to: "Ibrahim Ali",
    payment_date: new Date(),
    amount: 12,
    status: "Done",
  },
  {
    id: "2",
    clinic_name: "Sanjay Singh",
    billing_to: "Be Healthy",
    payment_date: new Date(),
    amount: 10,
    status: "Done",
  },
  {
    id: "3",
    clinic_name: "Tomás Sánchez",
    billing_to: "Healing Clinic",
    payment_date: new Date(),
    amount: 152,
    status: "Pending",
  },
];

const col: ColumnDef<T_Payment>[] = [
  {
    accessorKey: "id",
    cell: ({ row }) => row.index + 1,
    size: 30,
    enableSorting: false,
  },

  {
    accessorKey: "billing_to",
    header: "Billing To",
  },
  {
    accessorKey: "clinic_name",
    header: "Clinic Name",
  },
  {
    accessorKey: "payment_date",
    header: "Payment Date",
    size: 300,
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
    size: 100,
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
            <p className="text-2xl font-bold"> Payment History </p>
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
