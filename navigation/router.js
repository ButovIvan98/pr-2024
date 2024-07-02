import { createBrowserRouter } from "react-router-dom";
import { AboutPage } from "../screens/About/About.jsx";
import { HomePage } from "../screens/HomePage";
import { RenderError } from "./renderErrors.jsx";
import { Layout } from "./renderLayout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <RenderError />,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/posts",
        Component: AboutPage,
      },
    ],
  },
]);
