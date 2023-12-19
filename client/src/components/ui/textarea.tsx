import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div>
        <label className="flex justify-start text-white font-semibold text-sm ml-2 mb-1">
          {label}
        </label>
        <textarea
          className={cn(
            "flex min-h-[80px] w-full border border-input bg-background p-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white border-[#2dcbd7] rounded-[15px] placeholder:text-white placeholder:opacity-80 2xl:text-[18px]",
            className
          )}
          ref={ref}
          {...props}
          style={{
            background:
              " radial-gradient(231.00% 135.80% at 0.90% 2.98%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        />
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
