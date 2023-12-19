import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Root } from "@radix-ui/react-select";
import React from "react";

type TProps = typeof Root.defaultProps & {
  options?: {
    key: string;
    value: any;
  }[];
  placeholder?: string;
  label?: string;
  className?: string;
  iconClassName?: string;
};

const SelectView: React.FC<TProps> = ({
  label,
  options,
  placeholder,
  className,
  iconClassName,
  ...rest
}) => {
  return (
    <div>
      {label && (
        <p className="text-white ml-1 mb-1 font-[600] tracking-wider text-sm">
          {label}
        </p>
      )}
      <Select {...rest}>
        <SelectTrigger className={className} iconClassName={iconClassName}>
          <SelectValue placeholder={placeholder} className="text-muted" />
        </SelectTrigger>
        <SelectContent>
          {options && options.length ? (
            options.map((i) => (
              <SelectItem key={i.key} value={i.key}>
                {i.value}
              </SelectItem>
            ))
          ) : (
            <SelectItem value="">No Data </SelectItem>
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectView;
