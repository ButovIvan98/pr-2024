import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Navigation/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
