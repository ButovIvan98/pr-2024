import classNames from "classnames";
import { useCallback } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const HeaderComponent = () => {
  const baseClassesNavLink = useCallback(({ isActive }) => {
    return classNames("base-navigation__link", {
      "base-navigation__link__active": isActive,
    });
  }, []);

  return (
    <header className={"base-navigation"}>
      <NavLink className={baseClassesNavLink} to={"/"}>
        Главная
      </NavLink>
      <NavLink className={baseClassesNavLink} to={"/about"}>
        О компании
      </NavLink>
      <NavLink className={baseClassesNavLink} to={"/posts"}>
        Что-то
      </NavLink>
    </header>
  );
};
