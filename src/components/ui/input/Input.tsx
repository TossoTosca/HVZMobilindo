import * as React from "react";
import { cn } from "@/lib/utils";

type InputVariant = "default" | "glass" | "gold";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  variant?: InputVariant;
}

const inputVariants: Record<InputVariant, string> = {
  default:
    "bg-zinc-900/80 border-white/10 text-white placeholder:text-zinc-500 focus:border-white/20",
  glass:
    "bg-white/[0.04] border-white/10 text-white placeholder:text-zinc-500 backdrop-blur-md focus:border-white/20",
  gold:
    "bg-white/[0.04] border-yellow-500/30 text-white placeholder:text-zinc-500 focus:border-yellow-500/60",
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      helperText,
      error,
      variant = "default",
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    return (
      <div className="w-full space-y-2">
        {label ? (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-zinc-200"
          >
            {label}
          </label>
        ) : null}

        <input
          id={inputId}
          type={type}
          ref={ref}
          className={cn(
            "flex h-11 w-full rounded-xl border px-4 py-2 text-sm shadow-sm transition outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "focus:ring-2 focus:ring-yellow-500/20",
            error && "border-red-500/60 focus:border-red-500/80 focus:ring-red-500/20",
            inputVariants[variant],
            className
          )}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error
              ? `${inputId}-error`
              : helperText
                ? `${inputId}-helper`
                : undefined
          }
          {...props}
        />

        {error ? (
          <p id={`${inputId}-error`} className="text-sm text-red-400">
            {error}
          </p>
        ) : helperText ? (
          <p id={`${inputId}-helper`} className="text-sm text-zinc-500">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
