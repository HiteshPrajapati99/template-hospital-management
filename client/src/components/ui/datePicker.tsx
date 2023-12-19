import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { CalendarDays } from "lucide-react";
import { Calendar } from "./calendar";
import { cn } from "@/lib/utils";
import * as React from "react";
import { DayPicker } from "react-day-picker";
import moment from "moment";

type DayPickerProps = React.ComponentProps<typeof DayPicker> & {
  PaperClassName?: string;
};

const DatePicker: React.FC<DayPickerProps> = ({ PaperClassName, ...props }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            `flex items-center w-full rounded-[15px] border px-3 border-[#2dcbd7] text-sm text-muted py-3 2xl:text-[18px]`,
            PaperClassName
          )}
          style={{
            background:
              " radial-gradient(231.00% 135.80% at 0.90% 2.98%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        >
          {props.selected
            ? moment(props.selected as Date).format("DD-MM-YYYY")
            : "Pick The Date"}
          <CalendarDays className="ml-auto h-6 w-5 2xl:w-8  text-[#60F1FB]" />
        </div>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        style={{
          background: "#4581a3",
          borderRadius: "20px",
          border: 0,
          width: "auto",
        }}
      >
        <Calendar {...props} />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
