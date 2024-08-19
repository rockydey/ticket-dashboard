import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import HomeDash from "../pages/Dashboard/HomeDash";
import Tickets from "../pages/Dashboard/Tickets";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <HomeDash />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
    ],
  },
]);
