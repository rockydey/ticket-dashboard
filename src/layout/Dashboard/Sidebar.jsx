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
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ hideSidebar, setHideSidebar }) => {
  const [forMobile, setForMobile] = useState(false);
  const location = useLocation();

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
      } lg:col-span-2 lg:bg-slate-900 lg:h-[calc(100vh-24px)] py-5 lg:p-5 rounded-lg duration-500 overflow-y-hidden`}>
      {!forMobile ? (
        <ul className='flex gap-5 flex-col h-full'>
          <li
            className={`${
              location.pathname === "/" ? "" : "px-5"
            } cursor-pointer`}>
            <Link
              to='/'
              className={`${
                location.pathname === "/"
                  ? "flex gap-3 bg-slate-700 px-5 py-2 rounded-lg items-center text-lg font-medium text-slate-300"
                  : "flex gap-3 items-center text-lg font-medium text-slate-500"
              }`}>
              <MdOutlineDashboard /> Dashboard
            </Link>
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
          <li
            className={`${
              location.pathname === "/tickets" ? "" : "px-5"
            } cursor-pointer`}>
            <Link
              to='/tickets'
              className={`${
                location.pathname === "/tickets"
                  ? "flex gap-3 bg-slate-700 px-5 py-2 rounded-lg items-center text-lg font-medium text-slate-300"
                  : "flex gap-3 items-center text-lg font-medium text-slate-500"
              }`}>
              <LuTicket /> Tickets
            </Link>
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
              <Link
                to='/'
                className={`${
                  location.pathname === "/"
                    ? "flex gap-3 bg-slate-700 lg:px-5 px-2 py-2 rounded-lg items-center text-lg font-medium text-slate-300"
                    : "flex gap-3 items-center text-lg font-medium text-slate-500"
                }`}>
                <MdOutlineDashboard />
              </Link>
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
            <li className={`cursor-pointer`}>
              <Link
                to='/tickets'
                className={`${
                  location.pathname === "/tickets"
                    ? "flex gap-3 bg-slate-700 lg:px-5 px-2 py-2 rounded-lg items-center text-lg font-medium text-slate-300"
                    : "flex gap-3 items-center text-lg font-medium text-slate-500"
                }`}>
                <LuTicket />
              </Link>
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
