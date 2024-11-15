import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

interface DropdownItemProps {
  label: string;
  path: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItemProps[];
}

const useClickOutside = (handler: () => void) => {
  const domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
};

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });
  const { pathname } = useLocation();

  return (
    <div ref={domNode} className="relative inline-block text-left">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`${
          pathname.includes(`/${label.toLowerCase()}`) &&
          "outline outline-white"
        } flex items-center px-6 py-1.5 rounded-[10px] dark:text-white gap-2.5 dark:hover:bg-[#262626] hover:bg-black/10 text-black`}
      >
        {label}
        <IoIosArrowDown className="dark:text-white text-black" />
      </button>
      <div
        className={`shadow-1 flex flex-col gap-2.5 bg-neutral-200 dark:bg-[#262626] dark:shadow-box-dark absolute left-0 z-40 mt-2 w-max rounded-[10px] bg-dark dark:bg-dark-2 px-6 py-4 transition-all ${
          dropdownOpen
            ? "top-full opacity-100 visible"
            : "top-[110%] invisible opacity-0"
        }`}
      >
        {items.map((item, index) => (
          <DropdownItem key={index} label={item.label} path={item.path} />
        ))}
      </div>
    </div>
  );
};

const DropdownItem: React.FC<DropdownItemProps> = ({ label, path }) => (
  <Link to={path} className="block cursor-pointer px-0 py-0">
    {label}
  </Link>
);

export default Dropdown;
