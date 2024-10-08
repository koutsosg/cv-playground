import React from "react";
import { SpinnerProps } from "@/app/components/Spinner//Spinner.types";
import { sizeStyles } from "@/app/components/Spinner//Spinner.styles";
import classNames from "classnames";

const Spinner: React.FC<SpinnerProps> = ({
  size = "medium",
  color = "white", // Default color
  extraClasses,
  ...props
}) => {
  const sizeClass = sizeStyles[size];

  const spinnerClasses = classNames(
    "border-black/20 border-spinner rounded-full animate-spin",
    sizeClass,
    extraClasses,
  );

  return (
    <div
      style={{ borderTopColor: color }}
      className={spinnerClasses}
      {...props}
    ></div>
  );
};

export default Spinner;
