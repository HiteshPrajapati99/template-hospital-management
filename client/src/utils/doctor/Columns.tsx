import { ColumnDef } from "@/components/common/DataGrid";
import { Button } from "@/components/ui/button";
// appointment table

export type T_Appointment = {
  id: string;
  profile: string;
  patient_name: string;
  pet_name: string;
  nots: string;
  date: string;
  time: string;
  report: string;
};

export const appointmentColunbs: ColumnDef<T_Appointment>[] = [
  {
    accessorKey: "#sr",
    cell: ({ row }) => row.index + 1,
    maxSize: 20,
    enableSorting: false,
  },
  {
    accessorKey: "profile",
    header: "Profile",
    maxSize: 60,
    enableSorting: false,
    cell: ({ row }) => (
      <img src={row.getValue("profile")} alt="profile-image" />
    ),
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
    accessorKey: "nots",
    header: "Nots",
    size: 240,
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "report",
    header: "Report",
    cell: () => <Button variant="ghost"> View </Button>,
  },
];
