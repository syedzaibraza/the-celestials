import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import useDarkMode from "../../hooks/useDarkMode";
import MiniPlayer from "../MiniPlayer";

const Layout = () => {
  const pagesWithDarkMode = ["/about/the-team", "/about/boredpuma-x-splash"];
  useDarkMode(pagesWithDarkMode);
  return (
    <div className="h-screen dark:bg-black dark:text-white flex flex-col relative">
      {/* <Navbar /> */}
      <Outlet />
      <div className="hidden md:block absolute left-0 bottom-0">
        <MiniPlayer />
      </div>
    </div>
  );
};

export default Layout;
