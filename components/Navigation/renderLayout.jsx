import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../Header/HeaderComponent.jsx";

export const Layout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <footer>footer</footer>
    </>
  );
};
