import { Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";

const appRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default appRoutes;
