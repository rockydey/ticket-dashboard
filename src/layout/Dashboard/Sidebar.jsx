import { useEffect, useState } from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward, IoMdLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuTicket } from "react-icons/lu";
import {
  MdOutlineAllInbox,
  MdOutlineDashboard,
  MdOutlineHelpOutline,
} from "react-icons/md";
import { TbAnalyze } from "react-icons/tb";

const Sidebar = ({ hideSidebar, setHideSidebar }) => {
  const [forMobile, setForMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setForMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${
        !hideSidebar && "col-span-2 bg-slate-900"
      } lg:col-span-2 lg:bg-slate-900 lg:h-[calc(100vh-24px)] py-5 lg:p-5 rounded-lg duration-500`}>
      {!forMobile ? (
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
      ) : (
        <>
          <ul
            className={`${
              hideSidebar
                ? "hidden"
                : "flex gap-5 flex-col h-full items-center lg:items-start"
            } duration-500`}>
            <li className='cursor-pointer lg:px-5'>
              <p className='flex gap-3 items-center text-lg font-medium text-slate-500'>
                <MdOutlineDashboard />
              </p>
            </li>
            <li className='cursor-pointer lg:px-5'>
              <p className='flex gap-3 items-center text-lg font-medium text-slate-500'>
                <TbAnalyze />
              </p>
            </li>
            <li className='cursor-pointer lg:px-5'>
              <p className='flex gap-3 items-center text-lg font-medium text-slate-500'>
                <MdOutlineAllInbox />
              </p>
            </li>
            <li className='cursor-pointer'>
              <p className='flex gap-3 bg-slate-700 lg:px-5 px-2 py-2 rounded-lg items-center text-lg font-medium text-slate-300'>
                <LuTicket />
              </p>
            </li>
            <li className='cursor-pointer lg:px-5'>
              <p className='flex gap-3 items-center text-lg font-medium text-slate-500'>
                <HiOutlineUserGroup />
              </p>
            </li>
            <li className='cursor-pointer lg:px-5'>
              <p className='flex gap-3 items-center text-lg font-medium text-slate-500'>
                <IoSettingsOutline />
              </p>
            </li>
            <ul className='mt-auto space-y-5'>
              <li className='cursor-pointer lg:px-5'>
                <p className='flex gap-3 items-center text-lg font-medium text-slate-500'>
                  <MdOutlineHelpOutline />
                </p>
              </li>
              <li className='cursor-pointer lg:px-5'>
                <p className='flex gap-3 items-center text-lg font-medium text-slate-500'>
                  <IoMdLogOut />
                </p>
              </li>
            </ul>
          </ul>
          <button
            onClick={() => setHideSidebar(!hideSidebar)}
            className={`p-2 bg-slate-500 rounded-full text-xl shadow-inner fixed top-1/2 ${
              hideSidebar ? "left-1" : "left-12"
            } cursor-pointer z-50 duration-500`}>
            {hideSidebar ? <IoIosArrowForward /> : <IoIosArrowBack />}
          </button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
