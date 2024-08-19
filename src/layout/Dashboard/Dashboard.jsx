import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [hideSidebar, setHideSidebar] = useState(false);

  return (
    <div className='grid grid-cols-12 lg:p-3 gap-3'>
      <Sidebar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
      <div
        className={`${
          hideSidebar ? "col-span-12" : "col-span-10"
        } w-full bg-gray-100 rounded-lg h-[calc(100vh-24px)] overflow-y-auto px-5 py-3 lg:px-0 lg:py-0`}>
        <Outlet hideSidebar={hideSidebar} />
      </div>
    </div>
  );
};

export default Dashboard;
