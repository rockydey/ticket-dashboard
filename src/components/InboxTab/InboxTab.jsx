import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdForwardToInbox } from "react-icons/md";
import styles from "./InboxTab.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const InboxTab = ({ chats }) => {
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Message</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {chats.map((chat) => (
              <tr key={chat.id}>
                <td>{chat.receiver_name}</td>
                <td>{chat.message[chat.message.length - 1].receiver}</td>
                <td>{chat.message[chat.message.length - 1].receiver_time}</td>
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
