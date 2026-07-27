import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`
        w-full p-2 rounded-xl border border-fuchsia-300
        placeholder:text-gray-400
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500
        hover:border-fuchsia-400
        disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed mt-3
        ${className ?? ""}
      `}
      {...props}
    />
  );
}
