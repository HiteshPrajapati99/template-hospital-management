import React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[];
//   data: TData[];
//   noDataMessage?: string;
//   headerClass?: React.HtmlHTMLAttributes<string>["className"];
//   headerStyle?: React.CSSProperties;
//   rowClass?: React.HTMLProps<HTMLElement>["className"];
//   rowSize?: "sm" | "lg";
//   containerHeight?: string;
// }

// export function DataTable<TData, TValue>({
//   columns,
//   data = [],
//   noDataMessage,
//   headerClass,
//   headerStyle,
//   rowClass,
//   rowSize = "lg",
//   containerHeight = "100%",
// }: DataTableProps<TData, TValue>) {
//   const [sorting, setSorting] = React.useState<SortingState>([]);
//   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
//     [],
//   );
//   const [columnVisibility, setColumnVisibility] =
//     React.useState<VisibilityState>({});
//   const [rowSelection, setRowSelection] = React.useState({});

//   const table = useReactTable({
//     data,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   });

//   return (
//     <Wrapper
//       className="scrollbar-hide w-full overflow-y-scroll"
//       style={{ height: containerHeight }}
//     >
//       <div>
//         <Table>
//           <TableHeader style={headerStyle}>
//             {table?.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <TableHead
//                       key={header.id}
//                       className={cn("font-bold text-[#84D9FF]", headerClass)}
//                     >
//                       {header.isPlaceholder
//                         ? null
//                         : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext(),
//                           )}
//                     </TableHead>
//                   );
//                 })}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                   className={cn(
//                     `text-white ${rowSize === "lg" && "h-14"}`,
//                     rowClass,
//                   )}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext(),
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   {noDataMessage || "No results."}
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       {/* <div className="flex items-center justify-end space-x-2 py-4">
//         <div className="flex-1 text-sm text-muted-foreground">
//           {table.getFilteredSelectedRowModel().rows.length} of{" "}
//           {table.getFilteredRowModel().rows.length} row(s) selected.
//         </div>
//         <div className="space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </div> */}
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   /* table header border redius */
//   table th:first-child {
//     border-radius: 10px 0 0 10px;
//   }

//   table th:last-child {
//     border-radius: 0 10px 10px 0;
//   }

//   th {
//     position: sticky;
//     top: 0px; /* 0px if you don't have a navbar, but something is required */
//   }
//   .sticky-header th {
//     position: sticky;
//     top: 0;
//     background-color: white; /* Adjust background color as needed */
//     z-index: 1;
//   }
// `;

interface DataGridProps<TData, TValue> {
  rows: TData[];
  columns: ColumnDef<TData, TValue>[];
  noDataMessage?: string;
  rowSize?: "sm" | "md" | "lg";
  height?: string | number;
  props?: {
    headerClass?: string;
    headerStyle?: React.CSSProperties;
    rowsClass?: string;
    rowsStyle?: React.CSSProperties;
    footerClass?: string;
    footerStyle?: React.CSSProperties;
    containerClass?: string;
    headerTextClass?: string;
  };
  footer?: boolean;
}

export const DataGrid = <TData, TValue>({
  rows = [],
  columns,
  props,
  height = "100%",
  footer = false,
  noDataMessage,
  rowSize = "md",
}: DataGridProps<TData, TValue>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: rows,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div>
      <div className="grid overflow-x-scroll" style={{ height: height }}>
        <div>
          {/* header */}
          <div className="sticky top-0">
            {table.getHeaderGroups().map((a) => (
              <div
                key={a.id}
                className={cn(
                  "flex h-12 items-center justify-center gap-5 rounded-xl px-5  font-bold tracking-wider text-white ",
                  props?.headerClass,
                )}
                style={props?.headerStyle || { background: "rgb(67,137,178)" }}
              >
                {a.headers.map((h) => (
                  <div
                    key={h.index}
                    className="group flex flex-1 items-center gap-2"
                    style={{
                      minWidth: h.getSize(),
                      width: "100%",
                    }}
                  >
                    {h.isPlaceholder
                      ? null
                      : flexRender(h.column.columnDef.header, h.getContext())}

                    {h.column.getCanSort() && (
                      <div
                        className="rounded-full p-2 hover:bg-muted/30 active:scale-90"
                        onClick={() => {
                          h.column.toggleSorting(
                            h.column.getIsSorted() === "asc",
                          );
                        }}
                      >
                        <ArrowUpDown className="hidden h-3 w-3 group-hover:block" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* data */}
          <div className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <div key={row.id}>
                  <div
                    className={cn(
                      `flex w-full items-center gap-5 rounded-xl  px-5 py-1 text-white transition-colors hover:bg-muted/25
                    ${
                      rowSize === "sm"
                        ? "h-12"
                        : rowSize === "md"
                        ? "h-16"
                        : "h-24"
                    }`,
                      props?.rowsClass,
                    )}
                    style={props?.rowsStyle || {}}
                  >
                    {row.getVisibleCells().map((r) => (
                      <div
                        key={r.id}
                        className="flex-1"
                        style={{
                          minWidth: r.column.getSize(),
                          width: "100%",
                        }}
                      >
                        {flexRender(r.column.columnDef.cell, r.getContext())}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-white">
                {noDataMessage || "No Data Found"}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* footer */}
      {footer && (
        <div
          className={cn(
            "flex items-center justify-end space-x-2 py-2",
            props?.footerClass,
          )}
          style={props?.footerStyle || {}}
        >
          <div className="flex-1 text-muted">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="icon"
              size="sm"
              onClick={() => table.previousPage()}
              // disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="icon"
              size="sm"
              onClick={() => table.nextPage()}
              // disabled={!table.getCanNextPage()}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>

    // <div>
    //   <div
    //     className={cn(
    //       `vertualScroll_bar overflow-x-scroll`,
    //       props?.containerClass,
    //     )}
    //   >
    //     <div
    //       className="scrollbar-hide overflow-y-scroll"
    //       style={{
    //         width: "100%",
    //         minWidth: table.getTotalSize(),
    //         height: height,
    //       }}
    //     >
    //       {/* header */}
    //       <div
    //         className={cn(
    //           "sticky top-0  h-14  rounded-xl bg-sky-950 text-white shadow-xl",
    //           props?.headerClass,
    //         )}
    //         style={props?.headerStyle || { background: "rgb(67,137,178)" }}
    //       >
    //         {table.getHeaderGroups().map((h) => (
    //           <div
    //             key={h.id}
    //             className={cn(
    //               " flex h-full items-center justify-between gap-6 rounded-lg px-4 py-2 ",
    //             )}
    //           >
    //             {h.headers.map((header) => (
    //               <div
    //                 key={header.index}
    //                 style={{
    //                   width: "100%",
    //                   minWidth: header.getSize(),
    //                   textAlign: "start",
    //                 }}
    //               >
    //                 <div className="group flex items-center gap-1">
    //                   {header.isPlaceholder
    //                     ? null
    //                     : flexRender(
    //                         header.column.columnDef.header,
    //                         header.getContext(),
    //                       )}

    //                   {header.column.getCanSort() && (
    //                     <div
    //                       className="rounded-full p-2 hover:bg-muted/30 active:scale-90"
    //                       onClick={() => {
    //                         header.column.toggleSorting(
    //                           header.column.getIsSorted() === "asc",
    //                         );
    //                       }}
    //                     >
    //                       <ArrowUpDown className="hidden h-3 w-3 group-hover:block" />
    //                     </div>
    //                   )}
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         ))}
    //       </div>

    //       {/* body & data */}
    //       <div>
    //         {table.getRowModel().rows?.length ? (
    //           <div className="grid  gap-2">
    //             {table.getRowModel().rows.map((row) => (
    //               <div
    //                 key={row.id}
    //                 // data-state={row.getIsSelected() && "selected"}
    //                 className={cn(
    //                   `flex ${
    //                     rowSize === "sm"
    //                       ? "h-12"
    //                       : rowSize === "md"
    //                       ? "h-16"
    //                       : "h-24"
    //                   } items-center justify-between gap-6 overflow-hidden rounded-lg px-4 py-4 text-white transition-colors hover:bg-muted/25`,
    //                   props?.rowsClass,
    //                 )}
    //                 style={props?.rowsStyle || {}}
    //               >
    //                 {row.getVisibleCells().map((cell) => (
    //                   <div
    //                     key={cell.id}
    //                     style={{
    //                       minWidth: cell.column.getSize(),
    //                       textAlign: "start",
    //                       width: "100%",
    //                     }}
    //                   >
    //                     {flexRender(
    //                       cell.column.columnDef.cell,
    //                       cell.getContext(),
    //                     )}
    //                   </div>
    //                 ))}
    //               </div>
    //             ))}
    //           </div>
    //         ) : (
    //           <div
    //             className="flex items-center justify-center font-bold tracking-wider text-white"
    //             style={{
    //               height: "100%",
    //             }}
    //           >
    //             {noDataMessage || "No Results."}
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    //   {/* Footer  */}
    //   {footer && (
    //     <div
    //       className={cn(
    //         "flex items-center justify-end space-x-2 py-2",
    //         props?.footerClass,
    //       )}
    //       style={props?.footerStyle || {}}
    //     >
    //       <div className="flex-1 text-muted">
    //         {table.getFilteredSelectedRowModel().rows.length} of{" "}
    //         {table.getFilteredRowModel().rows.length} row(s) selected.
    //       </div>
    //       <div className="flex items-center space-x-2">
    //         <Button
    //           variant="icon"
    //           size="sm"
    //           onClick={() => table.previousPage()}
    //           // disabled={!table.getCanPreviousPage()}
    //         >
    //           <ChevronLeft className="h-6 w-6" />
    //         </Button>
    //         <Button
    //           variant="icon"
    //           size="sm"
    //           onClick={() => table.nextPage()}
    //           // disabled={!table.getCanNextPage()}
    //         >
    //           <ChevronRight className="h-6 w-6" />
    //         </Button>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export { type ColumnDef };
