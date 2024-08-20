import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import HomeDash from "../pages/Dashboard/HomeDash";
import Tickets from "../pages/Dashboard/Tickets";
import Inbox from "../pages/Dashboard/Inbox";
import Chat from "../pages/Dashboard/Chat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <HomeDash />,
      },
      {
        path: "/inbox",
        element: <Inbox />,
      },
      {
        path: "/inbox/:id",
        element: <Chat />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
    ],
  },
]);
