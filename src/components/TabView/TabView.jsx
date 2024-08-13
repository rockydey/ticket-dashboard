import { FaAngleDown } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";

const TabView = ({ filterTickets }) => {
  return (
    <div className='mt-5 h-[50vh]'>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type='checkbox' />
                </label>
              </th>
              <th>Ticket Id</th>
              <th>Customer</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Agent</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filterTickets.map(
              ({
                id,
                ticketId,
                customer,
                subject,
                status,
                priority,
                agent,
                date,
              }) => (
                <tr key={id}>
                  <th>
                    <label>
                      <input type='checkbox' />
                    </label>
                  </th>
                  <td className='text-sm font-medium text-slate-600'>
                    #{ticketId}
                  </td>
                  <td className='flex items-center gap-2'>
                    <div>
                      <img
                        src={customer.image}
                        alt={customer.name}
                        className='w-10 h-10 rounded-full'
                      />
                    </div>
                    <div>
                      <p className='text-sm font-semibold text-slate-800'>
                        {customer.name}
                      </p>
                      <p className='text-xs font-medium text-slate-400'>
                        {customer.email}
                      </p>
                    </div>
                  </td>
                  <td className='text-sm font-semibold text-slate-800'>
                    {subject}
                  </td>
                  <td>
                    {status === "open" ? (
                      <p className='text-green-500 text-xs cursor-pointer font-medium bg-green-200 w-fit border border-green-500 px-2 py-[1px] flex items-center gap-1 rounded'>
                        OPEN <FaAngleDown />
                      </p>
                    ) : status === "closed" ? (
                      <p className='text-red-500 text-xs cursor-pointer font-medium bg-red-200 w-fit border border-red-500 px-2 py-[1px] flex items-center gap-1 rounded'>
                        CLOSED <FaAngleDown />
                      </p>
                    ) : (
                      <p className='text-orange-500 text-xs cursor-pointer font-medium bg-orange-200 w-fit border border-orange-500 px-2 py-[1px] flex items-center gap-1 rounded'>
                        IN PROGRESS <FaAngleDown />
                      </p>
                    )}
                  </td>
                  <td>
                    {priority === "low" ? (
                      <p className='text-rose-500 text-xs cursor-pointer font-medium bg-rose-200 w-fit border border-rose-500 px-2 py-[1px] flex items-center gap-1 rounded'>
                        LOW <FaAngleDown />
                      </p>
                    ) : priority === "medium" ? (
                      <p className='text-yellow-500 text-xs cursor-pointer font-medium bg-yellow-200 w-fit border border-yellow-500 px-2 py-[1px] flex items-center gap-1 rounded'>
                        MEDIUM <FaAngleDown />
                      </p>
                    ) : (
                      <p className='text-purple-500 text-xs cursor-pointer font-medium bg-purple-200 w-fit border border-purple-500 px-2 py-[1px] flex items-center gap-1 rounded'>
                        HIGH <FaAngleDown />
                      </p>
                    )}
                  </td>
                  <td>
                    {agent.length === 3 ? (
                      <div className='avatar-group -space-x-6 rtl:space-x-reverse'>
                        {agent.map((img, index) => (
                          <div className='avatar'>
                            <div key={index} className='w-10'>
                              <img src={img} />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : agent.length === 2 ? (
                      <div className='avatar-group -space-x-6 rtl:space-x-reverse'>
                        {agent.map((img, index) => (
                          <div className='avatar'>
                            <div key={index} className='w-10'>
                              <img src={img} />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : agent.length === 1 ? (
                      <div className='avatar'>
                        <div className='w-10 rounded-full'>
                          <img src={agent[0]} />
                        </div>
                      </div>
                    ) : (
                      <div class='avatar placeholder'>
                        <div class='bg-neutral text-neutral-content w-10 rounded-full'>
                          <span>
                            <IoPersonAddSharp />
                          </span>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className='text-sm font-medium text-slate-600'>{date}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabView;
