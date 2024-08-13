import { BsPrinter, BsTicketDetailed } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const CardView = ({
  handleTotalTicket,
  handleOpenTicket,
  handleCloserTicket,
  handleProgressTicket,
}) => {
  return (
    <div className='bg-slate-200 w-full grid grid-cols-4 gap-4 p-5 rounded-lg'>
      <div
        onClick={handleTotalTicket}
        className='bg-white px-3 pt-3 pb-5 rounded-lg cursor-pointer'>
        <p className='flex items-center text-green-500 font-semibold justify-end'>
          41% <IoMdArrowDropup />
        </p>
        <div className='flex flex-col items-center'>
          <p className='text-5xl text-green-500'>
            <BsTicketDetailed />
          </p>
          <h3 className='text-4xl font-bold '>25</h3>
          <p className='text-slate-400 text-sm font-medium'>
            Total No. of Tickets
          </p>
        </div>
      </div>
      <div
        onClick={handleOpenTicket}
        className='bg-white px-3 pt-3 pb-5 rounded-lg cursor-pointer'>
        <p className='flex items-center text-green-500 font-semibold justify-end'>
          14% <IoMdArrowDropup />
        </p>
        <div className='flex flex-col items-center'>
          <p className='text-5xl text-orange-500'>
            <BsTicketDetailed />
          </p>
          <h3 className='text-4xl font-bold '>10</h3>
          <p className='text-slate-400 text-sm font-medium'>New Tickets</p>
        </div>
      </div>
      <div
        onClick={handleProgressTicket}
        className='bg-white px-3 pt-3 pb-5 rounded-lg cursor-pointer'>
        <p className='flex items-center text-green-500 font-semibold justify-end'>
          15% <IoMdArrowDropup />
        </p>
        <div className='flex flex-col items-center'>
          <p className='text-5xl text-yellow-500'>
            <BsTicketDetailed />
          </p>
          <h3 className='text-4xl font-bold '>10</h3>
          <p className='text-slate-400 text-sm font-medium'>In Progress</p>
        </div>
      </div>
      <div
        onClick={handleCloserTicket}
        className='bg-white px-3 pt-3 pb-5 rounded-lg cursor-pointer'>
        <p className='flex items-center text-red-500 font-semibold justify-end'>
          5% <IoMdArrowDropdown />
        </p>
        <div className='flex flex-col items-center'>
          <p className='text-5xl text-yellow-500'>
            <BsPrinter />
          </p>
          <h3 className='text-4xl font-bold '>5</h3>
          <p className='text-slate-400 text-sm font-medium'>Closed Tickets</p>
        </div>
      </div>
    </div>
  );
};

export default CardView;
