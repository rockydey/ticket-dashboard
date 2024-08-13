import CardView from "../../components/CardView/CardView";
import TabView from "../../components/TabView/TabView";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className='grid grid-cols-12 p-3 gap-3'>
      <Sidebar />
      <div className='col-span-10 w-full'>
        <div>
          <CardView />
        </div>
        <div>
          <TabView />
        </div>
        <div>{/* Pagination */}</div>
      </div>
    </div>
  );
};

export default Dashboard;
