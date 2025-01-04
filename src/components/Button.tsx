import React, { ReactNode } from "react";
import Alert from "./Alert";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger" | "succes";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
