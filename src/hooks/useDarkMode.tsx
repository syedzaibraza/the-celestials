import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useDarkMode(pagesWithDarkMode: string[]) {
  const location = useLocation();

  useEffect(() => {
    if (pagesWithDarkMode.includes(location.pathname)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [location, pagesWithDarkMode]);
}
