import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RxDragHandleDots2 } from "react-icons/rx";
import ChatInterface from "../../components/ChatInterface/ChatInterface";

const chats = [
  {
    id: 1,
    receiver_name: "Emma Watson",
    receiver_img: "https://shadcn-chat.vercel.app/User1.png",
    sender_img: "https://shadcn-chat.vercel.app/LoggedInUser.jpg",
    status: "open",
    message: [
      {
        mgId: 1,
        sender: "Hey, do you have any plans for the weekend?",
        receiver: "Not yet. I was thinking of going hiking. Want to join?",
        sender_time: "11.00 AM",
        receiver_time: "11.02 AM",
      },
      {
        mgId: 2,
        sender: "That sounds fun! Where are you planning to go?",
        receiver:
          "I was thinking about the trails at Green Mountain. The view is amazing there.",
        sender_time: "11.04 AM",
        receiver_time: "11.06 AM",
      },
      {
        mgId: 3,
        sender: "Have you tried that new cafe downtown?",
        receiver: "Not yet. Is it good?",
        sender_time: "11.08 AM",
        receiver_time: "11.10 AM",
      },
      {
        mgId: 4,
        sender:
          "Yeah, their coffee is excellent, and the pastries are to die for.",
        receiver: "Great! Let's go there for brunch tomorrow.",
        sender_time: "11.12 AM",
        receiver_time: "11.14 AM",
      },
      {
        mgId: 5,
        sender: "Did you finish the book I lent you?",
        receiver: "Yes, I loved it! The plot twist at the end was incredible.",
        sender_time: "11.16 AM",
        receiver_time: "11.18 AM",
      },
      {
        mgId: 6,
        sender: "What did you think of the movie last night?",
        receiver: "It was okay, but I felt like the ending was a bit rushed.",
        sender_time: "11.20 AM",
        receiver_time: "11.22 AM",
      },
      {
        mgId: 7,
        sender: "Are you coming to the party on Friday?",
        receiver: "I wouldn't miss it! What time does it start?",
        sender_time: "11.24 AM",
        receiver_time: "11.26 AM",
      },
      {
        mgId: 8,
        receiver: "Not yet. No spoilers, please!",
        receiver_time: "11.28 AM",
      },
    ],
  },
  {
    id: 2,
    receiver_name: "Pretilata Sen",
    receiver_img: "https://shadcn-chat.vercel.app/User1.png",
    sender_img: "https://shadcn-chat.vercel.app/LoggedInUser.jpg",
    status: "accepted",
    message: [
      {
        mgId: 1,
        sender: "Hey, do you have any plans for the weekend?",
        receiver: "Not yet. I was thinking of going hiking. Want to join?",
        sender_time: "11.00 AM",
        receiver_time: "11.02 AM",
      },
      {
        mgId: 2,
        sender: "That sounds fun! Where are you planning to go?",
        receiver:
          "I was thinking about the trails at Green Mountain. The view is amazing there.",
        sender_time: "11.04 AM",
        receiver_time: "11.06 AM",
      },
      {
        mgId: 3,
        sender: "Have you tried that new cafe downtown?",
        receiver: "Not yet. Is it good?",
        sender_time: "11.08 AM",
        receiver_time: "11.10 AM",
      },
      {
        mgId: 4,
        sender:
          "Yeah, their coffee is excellent, and the pastries are to die for.",
        receiver: "Great! Let's go there for brunch tomorrow.",
        sender_time: "11.12 AM",
        receiver_time: "11.14 AM",
      },
      {
        mgId: 5,
        sender: "Did you finish the book I lent you?",
        receiver: "Yes, I loved it! The plot twist at the end was incredible.",
        sender_time: "11.16 AM",
        receiver_time: "11.18 AM",
      },
      {
        mgId: 6,
        sender: "What did you think of the movie last night?",
        receiver: "It was okay, but I felt like the ending was a bit rushed.",
        sender_time: "11.20 AM",
        receiver_time: "11.22 AM",
      },
      {
        mgId: 7,
        sender: "Are you coming to the party on Friday?",
        receiver: "I wouldn't miss it! What time does it start?",
        sender_time: "11.24 AM",
        receiver_time: "11.26 AM",
      },
      {
        mgId: 8,
        receiver: "Not yet. No spoilers, please!",
        receiver_time: "11.28 AM",
      },
    ],
  },
  {
    id: 3,
    receiver_name: "John Doe",
    receiver_img: "https://shadcn-chat.vercel.app/User4.png",
    sender_img: "https://shadcn-chat.vercel.app/LoggedInUser.jpg",
    status: "closed",
    message: [
      {
        mgId: 1,
        sender: "How was your trip to Japan?",
        receiver:
          "It was amazing! The food, the culture, everything was wonderful.",
        sender_time: "12.00 PM",
        receiver_time: "12.02 PM",
      },
      {
        mgId: 2,
        sender: "I have always wanted to visit. Did you take lots of pictures?",
        receiver: "Yes, I took hundreds! I'll show you some later.",
        sender_time: "12.04 PM",
        receiver_time: "12.06 PM",
      },
      {
        mgId: 3,
        sender: "Are you free to catch up this week?",
        receiver: "Yes, I am. How about Thursday evening?",
        sender_time: "12.08 PM",
        receiver_time: "12.10 PM",
      },
      {
        mgId: 4,
        sender: "Thursday works for me. Let us meet at the usual spot.",
        receiver: "Sounds good. Looking forward to it!",
        sender_time: "12.12 PM",
        receiver_time: "12.14 PM",
      },
      {
        mgId: 5,
        sender: "What did you think of the game last night?",
        receiver: "It was intense! The final score was so close.",
        sender_time: "12.16 PM",
        receiver_time: "12.18 PM",
      },
      {
        mgId: 6,
        receiver: "Same here. Can't wait for the next match.",
        receiver_time: "12.20 PM",
      },
    ],
  },
  {
    id: 4,
    receiver_name: "Rocky Dey",
    receiver_img: "https://shadcn-chat.vercel.app/User4.png",
    sender_img: "https://shadcn-chat.vercel.app/LoggedInUser.jpg",
    status: "open",
    message: [
      {
        mgId: 1,
        sender: "How was your trip to Japan?",
        receiver:
          "It was amazing! The food, the culture, everything was wonderful.",
        sender_time: "12.00 PM",
        receiver_time: "12.02 PM",
      },
      {
        mgId: 2,
        sender: "I have always wanted to visit. Did you take lots of pictures?",
        receiver: "Yes, I took hundreds! I'll show you some later.",
        sender_time: "12.04 PM",
        receiver_time: "12.06 PM",
      },
      {
        mgId: 3,
        sender: "Are you free to catch up this week?",
        receiver: "Yes, I am. How about Thursday evening?",
        sender_time: "12.08 PM",
        receiver_time: "12.10 PM",
      },
      {
        mgId: 4,
        sender: "Thursday works for me. Let us meet at the usual spot.",
        receiver: "Sounds good. Looking forward to it!",
        sender_time: "12.12 PM",
        receiver_time: "12.14 PM",
      },
      {
        mgId: 5,
        sender: "What did you think of the game last night?",
        receiver: "It was intense! The final score was so close.",
        sender_time: "12.16 PM",
        receiver_time: "12.18 PM",
      },
      {
        mgId: 6,
        receiver: "Same here. Can't wait for the next match.",
        receiver_time: "12.20 PM",
      },
    ],
  },
  {
    id: 5,
    receiver_name: "Lily Evans",
    receiver_img: "https://shadcn-chat.vercel.app/User3.png",
    sender_img: "https://shadcn-chat.vercel.app/LoggedInUser.jpg",
    status: "accepted",
    message: [
      {
        mgId: 1,
        sender: "Have you decided on the theme for the party?",
        receiver: "Yes, we're going with a tropical theme this year.",
        sender_time: "10.00 PM",
        receiver_time: "10.02 PM",
      },
      {
        mgId: 2,
        sender:
          "That sounds exciting! Do you need any help with the decorations?",
        receiver: "Actually, yes. Could you help me with the centerpieces?",
        sender_time: "10.04 PM",
        receiver_time: "10.06 PM",
      },
      {
        mgId: 3,
        sender: "Of course! Just let me know what you need.",
        receiver: "Thanks! I'll send you a list later.",
        sender_time: "10.08 PM",
        receiver_time: "10.10 PM",
      },
      {
        mgId: 4,
        sender: "Have you seen the latest art exhibit at the gallery?",
        receiver: "Not yet. Is it worth checking out?",
        sender_time: "10.12 PM",
        receiver_time: "10.14 PM",
      },
      {
        mgId: 5,
        receiver: "I will make sure to visit this weekend.",
        receiver_time: "10.16 PM",
      },
    ],
  },
  {
    id: 6,
    receiver_name: "Farzana Yesmin",
    receiver_img: "https://shadcn-chat.vercel.app/User3.png",
    sender_img: "https://shadcn-chat.vercel.app/LoggedInUser.jpg",
    status: "closed",
    message: [
      {
        mgId: 1,
        sender: "Have you decided on the theme for the party?",
        receiver: "Yes, we're going with a tropical theme this year.",
        sender_time: "10.00 PM",
        receiver_time: "10.02 PM",
      },
      {
        mgId: 2,
        sender:
          "That sounds exciting! Do you need any help with the decorations?",
        receiver: "Actually, yes. Could you help me with the centerpieces?",
        sender_time: "10.04 PM",
        receiver_time: "10.06 PM",
      },
      {
        mgId: 3,
        sender: "Of course! Just let me know what you need.",
        receiver: "Thanks! I'll send you a list later.",
        sender_time: "10.08 PM",
        receiver_time: "10.10 PM",
      },
      {
        mgId: 4,
        sender: "Have you seen the latest art exhibit at the gallery?",
        receiver: "Not yet. Is it worth checking out?",
        sender_time: "10.12 PM",
        receiver_time: "10.14 PM",
      },
      {
        mgId: 5,
        receiver: "I will make sure to visit this weekend.",
        receiver_time: "10.16 PM",
      },
    ],
  },
  {
    id: 7,
    receiver_name: "James Smith",
    receiver_img: "https://shadcn-chat.vercel.app/User2.png",
    sender_img: "https://shadcn-chat.vercel.app/LoggedInUser.jpg",
    status: "open",
    message: [
      {
        mgId: 1,
        sender: "Did you hear about the new restaurant opening?",
        receiver: "Yes! I've heard their menu is really unique.",
        sender_time: "10.00 AM",
        receiver_time: "10.02 AM",
      },
      {
        mgId: 2,
        sender: "I think we should try it out this weekend.",
        receiver: "I'm in! Let's make a reservation.",
        sender_time: "10.04 AM",
        receiver_time: "10.06 AM",
      },
      {
        mgId: 3,
        sender: "How is your project at work going?",
        receiver: "It's going well, but there is still a lot to do.",
        sender_time: "10.08 AM",
        receiver_time: "10.10 AM",
      },
      {
        mgId: 4,
        sender: "Let me know if you need any help. I am always here to assist.",
        receiver: "Thanks, I appreciate it! I might take you up on that.",
        sender_time: "10.12 AM",
        receiver_time: "10.14 AM",
      },
      {
        mgId: 5,
        receiver: "Yes, I'm really looking forward to it. Can't wait!",
        receiver_time: "10.16 AM",
      },
    ],
  },
  {
    id: 8,
    receiver_name: "Arif Hossain",
    receiver_img: "https://shadcn-chat.vercel.app/User2.png",
    sender_img: "https://shadcn-chat.vercel.app/LoggedInUser.jpg",
    status: "accepted",
    message: [
      {
        mgId: 1,
        sender: "Did you hear about the new restaurant opening?",
        receiver: "Yes! I've heard their menu is really unique.",
        sender_time: "10.00 AM",
        receiver_time: "10.02 AM",
      },
      {
        mgId: 2,
        sender: "I think we should try it out this weekend.",
        receiver: "I'm in! Let's make a reservation.",
        sender_time: "10.04 AM",
        receiver_time: "10.06 AM",
      },
      {
        mgId: 3,
        sender: "How is your project at work going?",
        receiver: "It's going well, but there is still a lot to do.",
        sender_time: "10.08 AM",
        receiver_time: "10.10 AM",
      },
      {
        mgId: 4,
        sender: "Let me know if you need any help. I am always here to assist.",
        receiver: "Thanks, I appreciate it! I might take you up on that.",
        sender_time: "10.12 AM",
        receiver_time: "10.14 AM",
      },
      {
        mgId: 5,
        receiver: "Yes, I'm really looking forward to it. Can't wait!",
        receiver_time: "10.16 AM",
      },
    ],
  },
];

const Chat = () => {
  const { id } = useParams();
  const [chat, setChat] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [forMobile, setForMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setForMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setChat(chats.find((c) => c.id === parseInt(id)));
  }, []);

  return (
    <div>
      {chat !== null && (
        <div>
          <div className='flex border border-[#c7c7cea5] rounded-lg h-[calc(100vh-25px)]'>
            {/* chat body */}
            <div
              className={`${showChat ? "hidden" : "block"}  ${
                !isOpen ? "lg:min-w-80" : ""
              } w-full flex-1 lg:max-w-20 lg:border-r lg:border-[#c7c7cea5] flex`}>
              <div
                className={`w-full pt-4 px-4 lg:px-0 h-full flex flex-col justify-between`}>
                <div>
                  <div
                    className={`${
                      isOpen ? "hidden" : ""
                    } flex justify-between items-center mb-3 px-4`}>
                    <div>
                      <h4 className='text-2xl text-blue-500 font-medium'>
                        Messages
                      </h4>
                    </div>
                    <div className='flex items-center gap-4'>
                      <Link href='#'>
                        <HiOutlineDotsHorizontal className='text-xl' />
                      </Link>
                      <Link href='#'>
                        <FaRegEdit className='text-xl' />
                      </Link>
                    </div>
                  </div>
                  <div className=''>
                    <div
                      onClick={() => {
                        forMobile && setShowChat(true);
                      }}
                      className={` ${
                        isOpen
                          ? "lg:bg-[#fff] lg:hover:bg-[#fff] duration-500"
                          : "flex items-center gap-4 lg:px-5 rounded-md duration-500"
                      }  py-4 cursor-pointer border-b border-[#c7c7ce] lg:border-none`}>
                      <div className='text-center'>
                        <img
                          src={chat.receiver_img}
                          alt={chat.receiver_name}
                          width={100}
                          height={100}
                          className='w-10 h-10 inline-block'
                        />
                      </div>
                      <div className={`${isOpen && "hidden"} flex-1`}>
                        <h4 className='text-sm font-medium'>
                          {chat.receiver_name}
                        </h4>
                        <div className='flex justify-between items-center'>
                          <p className='text-xs text-[#c7c7ceb7]'>
                            {chat.message[
                              chat.message.length - 1
                            ].receiver.slice(0, 17)}
                            ...
                          </p>
                          <p className='text-xs text-[#c7c7ceb7]'>
                            {
                              chat.message[chat.message.length - 1]
                                .receiver_time
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pb-4'>
                  <Link
                    to={`/inbox`}
                    className='flex items-center gap-2 px-5 text-base text-slate-700 '>
                    <p>
                      <FaArrowLeft />
                    </p>
                    <p>Return</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className='w-[1px] hidden lg:block border-r border-[#c7c7cea5] relative'>
              <div
                onClick={toggleDrawer}
                className='absolute cursor-not-allowed top-1/2 -left-2 bg-[#c7c7cea5] p-[1px] rounded-sm lg:cursor-pointer'>
                <RxDragHandleDots2 className='text-xs' />
              </div>
            </div>

            {/* chat interface */}
            <div
              className={`${
                showChat ? "inline-block w-full" : "hidden"
              } lg:inline-block ${
                isOpen ? "translate-x-0" : ""
              } flex-1 transform transition-transform duration-500 ease-in-out`}>
              <ChatInterface
                setShowChat={setShowChat}
                forMobile={forMobile}
                chat={chat}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
