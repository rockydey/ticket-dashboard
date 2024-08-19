import { IoPersonAddSharp } from "react-icons/io5";

const TabView = ({
  filterTickets,
  handleChangeStatus,
  handleChangePriority,
  listView,
  allTickets,
}) => {
  return (
    <div className='mt-5 lg:h-[50vh]'>
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
            {!listView
              ? filterTickets.map(
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
                      <td className='flex flex-col lg:flex-row lg:items-center gap-2'>
                        <div>
                          <img
                            src={customer?.image}
                            alt={customer?.name}
                            className='w-10 h-10 rounded-full'
                          />
                        </div>
                        <div>
                          <p className='text-sm font-semibold text-slate-800'>
                            {customer?.name}
                          </p>
                          <p className='text-xs font-medium text-slate-400'>
                            {customer?.email}
                          </p>
                        </div>
                      </td>
                      <td className='text-sm font-semibold text-slate-800'>
                        {subject}
                      </td>
                      <td>
                        <select
                          onChange={(e) => {
                            handleChangeStatus(id, e.target.value);
                          }}
                          className={`${
                            status === "open"
                              ? "text-green-500 border-green-500 bg-green-200"
                              : status === "closed"
                              ? "text-red-500 bg-red-200 border-red-500"
                              : status === "in progress" &&
                                "text-orange-500 border-orange-500 bg-orange-200"
                          } text-xs font-medium w-fit border  px-2 py-[1px] outline-none rounded`}
                          defaultValue={status}
                          name='status'
                          id='status'>
                          <option
                            className='bg-white text-slate-800'
                            value='open'>
                            Open
                          </option>
                          <option
                            className='bg-white text-slate-800'
                            value='closed'>
                            Closed
                          </option>
                          <option
                            className='bg-white text-slate-800'
                            value='in progress'>
                            In Progress
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          onClick={(e) => {
                            handleChangePriority(id, e.target.value);
                          }}
                          className={`${
                            priority === "low"
                              ? "text-rose-500 border-rose-500 bg-rose-200"
                              : priority === "medium"
                              ? "text-yellow-500 bg-yellow-200 border-yellow-500"
                              : priority === "high" &&
                                "text-purple-500 border-purple-500 bg-purple-200"
                          } text-xs font-medium w-fit border  px-2 py-[1px] outline-none rounded`}
                          defaultValue={priority}
                          name='status'
                          id='status'>
                          <option
                            className='bg-white text-slate-800'
                            value='low'>
                            Low
                          </option>
                          <option
                            className='bg-white text-slate-800'
                            value='medium'>
                            Medium
                          </option>
                          <option
                            className='bg-white text-slate-800'
                            value='high'>
                            High
                          </option>
                        </select>
                      </td>
                      <td>
                        {agent?.length === 3 ? (
                          <div className='avatar-group -space-x-6 rtl:space-x-reverse'>
                            {agent.map((img, index) => (
                              <div key={index} className='avatar'>
                                <div className='w-10'>
                                  <img src={img} />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : agent?.length === 2 ? (
                          <div className='avatar-group -space-x-6 rtl:space-x-reverse'>
                            {agent.map((img, index) => (
                              <div key={index} className='avatar'>
                                <div className='w-10'>
                                  <img src={img} />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : agent?.length === 1 ? (
                          <div className='avatar'>
                            <div className='w-10 rounded-full'>
                              <img src={agent[0]} />
                            </div>
                          </div>
                        ) : (
                          <div className='avatar placeholder'>
                            <div className='bg-neutral text-neutral-content w-10 rounded-full'>
                              <span>
                                <IoPersonAddSharp />
                              </span>
                            </div>
                          </div>
                        )}
                      </td>
                      <td className='text-sm font-medium text-slate-600'>
                        <p>{date}</p>
                      </td>
                    </tr>
                  )
                )
              : allTickets.map(
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
                      <td className='flex flex-col lg:flex-row lg:items-center gap-2'>
                        <div>
                          <img
                            src={customer?.image}
                            alt={customer?.name}
                            className='w-10 h-10 rounded-full'
                          />
                        </div>
                        <div>
                          <p className='text-sm font-semibold text-slate-800'>
                            {customer?.name}
                          </p>
                          <p className='text-xs font-medium text-slate-400'>
                            {customer?.email}
                          </p>
                        </div>
                      </td>
                      <td className='text-sm font-semibold text-slate-800'>
                        {subject}
                      </td>
                      <td>
                        <select
                          onChange={(e) => {
                            handleChangeStatus(id, e.target.value);
                          }}
                          className={`${
                            status === "open"
                              ? "text-green-500 border-green-500 bg-green-200"
                              : status === "closed"
                              ? "text-red-500 bg-red-200 border-red-500"
                              : status === "in progress" &&
                                "text-orange-500 border-orange-500 bg-orange-200"
                          } text-xs font-medium w-fit border  px-2 py-[1px] outline-none rounded`}
                          defaultValue={status}
                          name='status'
                          id='status'>
                          <option
                            className='bg-white text-slate-800'
                            value='open'>
                            Open
                          </option>
                          <option
                            className='bg-white text-slate-800'
                            value='closed'>
                            Closed
                          </option>
                          <option
                            className='bg-white text-slate-800'
                            value='in progress'>
                            In Progress
                          </option>
                        </select>
                      </td>
                      <td>
                        <select
                          onClick={(e) => {
                            handleChangePriority(id, e.target.value);
                          }}
                          className={`${
                            priority === "low"
                              ? "text-rose-500 border-rose-500 bg-rose-200"
                              : priority === "medium"
                              ? "text-yellow-500 bg-yellow-200 border-yellow-500"
                              : priority === "high" &&
                                "text-purple-500 border-purple-500 bg-purple-200"
                          } text-xs font-medium w-fit border  px-2 py-[1px] outline-none rounded`}
                          defaultValue={priority}
                          name='status'
                          id='status'>
                          <option
                            className='bg-white text-slate-800'
                            value='low'>
                            Low
                          </option>
                          <option
                            className='bg-white text-slate-800'
                            value='medium'>
                            Medium
                          </option>
                          <option
                            className='bg-white text-slate-800'
                            value='high'>
                            High
                          </option>
                        </select>
                      </td>
                      <td>
                        {agent?.length === 3 ? (
                          <div className='avatar-group -space-x-6 rtl:space-x-reverse'>
                            {agent.map((img, index) => (
                              <div key={index} className='avatar'>
                                <div className='w-10'>
                                  <img src={img} />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : agent?.length === 2 ? (
                          <div className='avatar-group -space-x-6 rtl:space-x-reverse'>
                            {agent.map((img, index) => (
                              <div key={index} className='avatar'>
                                <div className='w-10'>
                                  <img src={img} />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : agent?.length === 1 ? (
                          <div className='avatar'>
                            <div className='w-10 rounded-full'>
                              <img src={agent[0]} />
                            </div>
                          </div>
                        ) : (
                          <div className='avatar placeholder'>
                            <div className='bg-neutral text-neutral-content w-10 rounded-full'>
                              <span>
                                <IoPersonAddSharp />
                              </span>
                            </div>
                          </div>
                        )}
                      </td>
                      <td className='text-sm font-medium text-slate-600'>
                        <p>{date}</p>
                      </td>
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
