import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdForwardToInbox } from "react-icons/md";
import styles from "./InboxTab.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const InboxTab = ({ chats, handleChangeInbox }) => {
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table border'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Message</th>
              <th>Time</th>
              <th>Status</th>
              <th>Sender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {chats.map((chat) => (
              <tr key={chat.id} className=''>
                <td>{chat.receiver_name}</td>
                <td>{chat.message[chat.message.length - 1].receiver}</td>
                <td>{chat.message[chat.message.length - 1].receiver_time}</td>
                <td>
                  <select
                    onChange={(e) => {
                      handleChangeInbox(chat.id, e.target.value);
                    }}
                    className={`${
                      chat.status === "open"
                        ? "text-green-500 border-green-500 bg-green-200"
                        : chat.status === "closed"
                        ? "text-red-500 bg-red-200 border-red-500"
                        : chat.status === "accepted" &&
                          "text-orange-500 border-orange-500 bg-orange-200"
                    } text-xs font-medium w-fit border  px-2 py-[1px] outline-none rounded`}
                    defaultValue={chat.status}
                    name='status'
                    id='status'>
                    <option className='bg-white text-slate-800' value='open'>
                      Open
                    </option>
                    <option className='bg-white text-slate-800' value='closed'>
                      Closed
                    </option>
                    <option
                      className='bg-white text-slate-800'
                      value='accepted'>
                      Accepted
                    </option>
                  </select>
                </td>
                <td>
                  <img
                    src={chat.receiver_img}
                    className='w-10 rounded-full'
                    alt=''
                  />
                </td>
                {chat.status === "open" && (
                  <td className='flex gap-5 items-center text-xl'>
                    <Link
                      to={`/inbox/${chat.id}`}
                      className={`relative ${styles.shadow}`}>
                      <span className='absolute -right-1 -top-1 w-2 h-2 bg-green-500 rounded-full'></span>
                      <p>
                        <MdForwardToInbox className={`cursor-pointer`} />
                      </p>
                    </Link>
                    <p>
                      <IoMdCloseCircleOutline
                        className={`${styles.shadow} cursor-pointer rounded-full`}
                      />
                    </p>
                  </td>
                )}
                {(chat.status === "accepted" || chat.status === "closed") && (
                  <td className='flex gap-5 items-center text-xl'>
                    <p className=''>
                      <FaRegTrashAlt
                        className={`${styles.shadow} cursor-pointer`}
                      />
                    </p>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InboxTab;
