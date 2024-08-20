import React from "react";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { FcAcceptDatabase } from "react-icons/fc";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const InboxCard = ({
  handleOpenChats,
  handleClosedChats,
  handleAcceptedChats,
}) => {
  return (
    <div className='bg-slate-200 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 rounded-lg'>
      <div
        onClick={handleOpenChats}
        className='bg-white px-3 py-3 rounded-lg cursor-pointer'>
        <div className='flex flex-col items-center'>
          <p className='text-5xl text-green-500'>
            <FaRegEnvelopeOpen />
          </p>
          <h3 className='text-4xl font-bold '>25</h3>
          <p className='text-slate-400 text-sm font-medium'>Open Chats</p>
        </div>
      </div>
      <div
        onClick={handleAcceptedChats}
        className='bg-white px-3 py-3 rounded-lg cursor-pointer'>
        <div className='flex flex-col items-center'>
          <p className='text-5xl text-yellow-500'>
            <FcAcceptDatabase />
          </p>
          <h3 className='text-4xl font-bold '>10</h3>
          <p className='text-slate-400 text-sm font-medium'>Accepted Chats</p>
        </div>
      </div>
      <div
        onClick={handleClosedChats}
        className='bg-white px-3 py-3 rounded-lg cursor-pointer'>
        <div className='flex flex-col items-center'>
          <p className='text-5xl text-orange-500'>
            <MdOutlineMarkEmailRead />
          </p>
          <h3 className='text-4xl font-bold '>10</h3>
          <p className='text-slate-400 text-sm font-medium'>Closed Chats</p>
        </div>
      </div>
    </div>
  );
};

export default InboxCard;
