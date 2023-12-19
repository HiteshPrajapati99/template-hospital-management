import * as React from "react";
// import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// country inputs
import CountryCodeInput, { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  LeftIcon?: React.JSX.Element;
  RightIcon?: React.JSX.Element;
  helperText?: string;
  helperTextClass?: string;
  error?: boolean;
  PaperClass?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      RightIcon,
      LeftIcon,
      helperText,
      error,
      label,
      ...props
    },
    ref,
  ) => {
    return (
      <div>
        <label className="mb-1 ml-2 flex justify-start text-sm font-semibold text-white">
          {label}
        </label>
        <div
          className={cn(
            `flex w-full items-center rounded-[15px] border border-[#2dcbd7] px-2 ${
              error && "border-red-500 "
            }`,
            props.PaperClass,
          )}
          style={{
            background:
              " radial-gradient(231.00% 135.80% at 0.90% 2.98%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        >
          <span className="text-white">{LeftIcon}</span>

          <input
            type={type}
            className={cn(
              "flex h-12 w-full bg-transparent  px-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  2xl:text-[18px]",
              className,
            )}
            ref={ref}
            {...props}
          />

          <span className="text-white">{RightIcon}</span>
        </div>
        {helperText && (
          <span
            className={cn(
              `ml-2 mt-2 text-[14px] text-gray-500 ${error && "text-red-600"}`,
              props.helperTextClass,
            )}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

interface TcountryCodeProsp extends PhoneInputProps {}

const CountryInput = (props: TcountryCodeProsp) => {
  return (
    <CountryCodeInput
      country="in"
      containerClass={cn(
        "flex items-center w-full rounded-[15px] border text-white !h-12 !border-[#2dcbd7]",
      )}
      containerStyle={{
        background:
          "radial-gradient(231.00% 135.80% at 0.90% 2.98%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
      }}
      inputClass={cn(
        "!w-full !border-none !bg-transparent !px-[55px] 2xl:!text-[18px]",
      )}
      buttonStyle={{
        border: "none",
        borderRight: "1px solid #2dcbd7",
        borderRadius: "15px",
        height: "2rem",
        marginTop: "7px",
        marginLeft: "7px",
      }}
      dropdownClass="text-black"
      {...props}
    />
  );
};

export { Input, CountryInput };
