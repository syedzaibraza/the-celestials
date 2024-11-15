import { Link, useLocation } from "react-router-dom";
import navbarList from "../data";
import Button from "../Button";
import Dropdown from "../Dropdown";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiOpensea } from "react-icons/si";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <header className="dark:bg-black dark:text-white bg-transparent w-full p-5 md:p-11 flex justify-between">
      <Link to="/">
        <img src="/icons/CC.svg" alt="CC" className="dark:hidden" />
        <img src="/icons/CC-white.svg" alt="CC" className="dark:block hidden" />
      </Link>
      <div className="hidden  md:flex items-center gap-2.5">
        {navbarList.map((item) => (
          <div key={item.label}>
            {item.submenu ? (
              <Dropdown label={item.label} items={item.submenu} />
            ) : (
              <Link
                to={item.path}
                className={`${
                  pathname === item.path
                    ? "outline outline-black dark:outline-white"
                    : ""
                } hover:bg-black/10 dark:hover:bg-[#262626] px-[25px] py-[5px] rounded-[10px]`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-7">
        <div className="flex items-center gap-4">
          <Link to="#" className="p-2 cursor-pointer bg-black/20 rounded-md">
            <FaTwitter />
          </Link>
          <Link to="#" className="p-2 cursor-pointer bg-black/20 rounded-md">
            <FaDiscord />
          </Link>
          <Link to="#" className="p-2 cursor-pointer bg-black/20 rounded-md">
            <RiInstagramFill />
          </Link>
          <Link to="#" className="p-2 cursor-pointer bg-black/20 rounded-md">
            <SiOpensea />
          </Link>
        </div>
        <Button>Connect</Button>
      </div>
    </header>
  );
};

export default Navbar;
