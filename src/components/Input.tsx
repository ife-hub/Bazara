import React from "react";
import './Input.css';

type Props = React.ComponentPropsWithoutRef<"input"> & {
  label?: string;
  error?: string | undefined;
};

export default function Input({ label, error, ...props }: Props) {
  return (
    <label className="block mb-3">
      {label && <span className="block text-sm font-medium mb-1 input-label">{label}</span>}
      <input
        {...props}
        className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
          error ? "border-red-500" : "border-gray-300 input-field"
        }`}
      />
      {error && <p className="text-red-600 text-sm mt-1 input-error">{error}</p>}
    </label>
  );
}