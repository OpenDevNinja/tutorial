import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const path = location.pathname.substring(1);
    setCurrentPage(path || "home");
  }, [location]);

  const navigateTo = (page) => {
    navigate(page === "home" ? "/" : `/${page}`);
    window.scrollTo(0, 0);
  };

  return { currentPage, navigateTo };
};
