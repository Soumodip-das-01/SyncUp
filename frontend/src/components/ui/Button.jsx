import React from 'react'

export default function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  className = "",
}) {
  const styles = {
    primary: "bg-sky-500 hover:bg-sky-600 text-white",
    secondary: "bg-violet-500 hover:bg-violet-600 text-white",
    ghost: "border border-gray-600 hover:bg-gray-800 text-white",
  };

  return (
    <button type={type} disabled={disabled} className={`px-5 py-2 rounded-xl font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${styles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

