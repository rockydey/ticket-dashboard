import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className='grid grid-cols-12 p-3 gap-3'>
      <Sidebar />
      <div className='col-span-10 w-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
