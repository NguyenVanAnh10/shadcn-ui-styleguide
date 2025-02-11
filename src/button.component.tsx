import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  [key: string]: any; // This allows for additional props
}

export default function Button(props: ButtonProps) {
  const {
    children,
    disabled = false,
    loading = false,
    className = "",
    ...remainingProps
  } = props;
  const background =
    disabled || loading ? "opacity-50 bg-secondary" : "bg-warning";

  return (
    <button
      className={`mb-8 font-bold py-2 px-4 rounded ${background} ${className}`}
      disabled={disabled || loading}
      {...remainingProps}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
