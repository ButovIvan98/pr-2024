import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/Header";

export const Layout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <footer>footer</footer>
    </>
  );
};
