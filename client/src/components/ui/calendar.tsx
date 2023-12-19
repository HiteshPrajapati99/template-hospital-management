import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { DayPicker } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, ...props }: CalendarProps) {
  return (
    <DayPicker
      className={cn("text-white text-lg", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-left pl-3 pt-1 relative items-center",
        caption_label: "text-sm font-medium 2xl:text-lg",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute right-16",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] text-white 2xl:text-[15px]",
        row: "flex gap-1  w-full mt-2",
        cell: "text-center text-sm 2xl:text-2xl p-0 relative [&:has([aria-selected])]:bg-transparent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative  focus-within:z-20 focus:bg-red-500",
        day: cn(
          buttonVariants({ variant: "icon" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-[#84d9ff99]"
        ),
        day_selected: cn(
          "!text-black rounded-[100%] !bg-primary-foreground hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
        ),
        day_today: "text-gray-900  bg-blue-500",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      captionLayout="dropdown-buttons"
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      showOutsideDays
      {...props}
      // fromYear={1999}
      // toYear={2023}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
