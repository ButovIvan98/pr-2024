import { useLocation } from "react-router";
import { HeaderComponent } from "../components/Header";

export const RenderError = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <HeaderComponent />
      <h1>Error</h1>
      <h2>{pathname}</h2>
      <h3>Такой страницы не существует</h3>
    </div>
  );
};
