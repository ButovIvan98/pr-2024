import { createBrowserRouter } from "react-router-dom";
import { AboutPage } from "../screens/About/About";
import { HomePage } from "../screens/HomePage";
import { RenderError } from "./renderErrors";
import { Layout } from "./renderLayout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <RenderError />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
