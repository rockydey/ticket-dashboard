import { HiOutlineUserGroup } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuTicket } from "react-icons/lu";
import {
  MdOutlineAllInbox,
  MdOutlineDashboard,
  MdOutlineHelpOutline,
} from "react-icons/md";
import { TbAnalyze } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className='col-span-2 bg-slate-900 h-[calc(100vh-24px)] p-5 rounded-lg'>
      <ul className='flex gap-5 flex-col h-full'>
        <li className='cursor-pointer px-5'>
          <p className='flex gap-3 items-center text-lg font-medium text-slate-500'>
            <MdOutlineDashboard /> Dashboard
          </p>
        </li>
        <li className='cursor-pointer px-5'>
          <p className='flex gap-3 items-center text-lg font-medium text-slate-500'>
            <TbAnalyze /> Analysis
          </p>
        </li>
        <li className='cursor-pointer px-5'>
          <p className='flex gap-3 items-center text-lg font-medium text-slate-500'>
            <MdOutlineAllInbox /> Inbox
          </p>
        </li>
        <li className='cursor-pointer'>
          <p className='flex gap-3 bg-slate-700 px-5 py-2 rounded-lg items-center text-lg font-medium text-slate-300'>
            <LuTicket /> Tickets
          </p>
        </li>
        <li className='cursor-pointer px-5'>
          <p className='flex gap-3 items-center text-lg font-medium text-slate-500'>
            <HiOutlineUserGroup /> Team
          </p>
        </li>
        <li className='cursor-pointer px-5'>
          <p className='flex gap-3 items-center text-lg font-medium text-slate-500'>
            <IoSettingsOutline /> Settings
          </p>
        </li>
        <ul className='mt-auto space-y-5'>
          <li className='cursor-pointer px-5'>
            <p className='flex gap-3 items-center text-lg font-medium text-slate-500'>
              <MdOutlineHelpOutline /> Help Center
            </p>
          </li>
          <li className='cursor-pointer px-5'>
            <p className='flex gap-3 items-center text-lg font-medium text-slate-500'>
              <IoMdLogOut /> Log Out
            </p>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
