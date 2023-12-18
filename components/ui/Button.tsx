"use Client";
import clsx from "clsx";
import { ReactNode } from "react";
import { FiMenu, fimenu } from "react-icons/fi";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}

const Button = ({ type, text, onClick, actionButton }: buttonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton && "bg-orange-700 rounded-full p-2 text-white  hover:bg-orange-500",
          "bg-orange-700 px-2 text-white hover:bg-orange-500"
        )}
      >
        {text}
      </button>
    </>
  );
  <FiMenu />;
};

export default Button;
