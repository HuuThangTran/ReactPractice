import React, { ReactNode } from "react";
import style from "./Button.module.css";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger" | "succes";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button
      className={[style.btn, style["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
