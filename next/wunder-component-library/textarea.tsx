import React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn([
          "flex w-full items-center rounded-[3px] border-2 border-stone bg-white px-2 py-1.5 text-md text-steelgray",
          "placeholder:text-stone",
          "hover:enabled:border-steelgray",
          "focus:border-primary-600 active:enabled:border-primary-600",
          "disabled:cursor-not-allowed",
          className,
        ])}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
