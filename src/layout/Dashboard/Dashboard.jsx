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
          hideSidebar
            ? "col-span-12 px-5 py-3 lg:px-0 lg:py-0"
            : "col-span-10 p-[6px] lg:p-0"
        } w-full rounded-lg h-[calc(100vh-24px)] overflow-y-auto `}>
        <Outlet hideSidebar={hideSidebar} />
      </div>
    </div>
  );
};

export default Dashboard;
