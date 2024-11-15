import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  color?: "primary" | "secondary" | "tertiary" | "quaternary";
  id?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  color = "primary",
  id = "",
  className = "",
}) => {
  return (
    <button
      id={id}
      className={`${className} 
        ${
          color === "primary"
            ? "bg-black text-white shadow-md hover:!bg-black dark:bg-white dark:text-black dark:hover:!bg-white"
            : ""
        }
        ${
          color === "secondary"
            ? "bg-transparent border border-black text-black dark:border-white dark:text-white"
            : ""
        }
        ${color === "tertiary" ? "bg-none text-black dark:text-white" : ""}
        ${
          color === "quaternary"
            ? "bg-neutral-200 text-black border border-black dark:bg-neutral-800 dark:border-white dark:text-white"
            : ""
        }
        rounded-[10px] px-[25px] py-[7px] font-medium transition ease-in-out duration-200
        flex justify-center items-center hover:bg-neutral-200 dark:hover:bg-white/20 gap-2.5 relative`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
