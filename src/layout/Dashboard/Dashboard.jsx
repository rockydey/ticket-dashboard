import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [hideSidebar, setHideSidebar] = useState(false);

  return (
    <div className='grid grid-cols-12 p-3 gap-3'>
      <Sidebar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
      <div className='col-span-10 w-full bg-gray-100 rounded-lg'>
        <Outlet hideSidebar={hideSidebar} />
      </div>
    </div>
  );
};

export default Dashboard;
