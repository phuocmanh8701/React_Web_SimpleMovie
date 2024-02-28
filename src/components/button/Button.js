import React from "react";

const Button = ({
  onClick,
  className,
  type = "button",
  bgColor = "bg-primary",
  children,
  full = false
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg ${bgClassName} text-white font-medium ${full} mt-auto ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
