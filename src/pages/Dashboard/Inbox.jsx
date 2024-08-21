import React, { useEffect, useState } from "react";
import InboxCard from "../../components/InboxCard/InboxCard";
import InboxTab from "../../components/InboxTab/InboxTab";
import { GoTriangleDown } from "react-icons/go";
import { RiListView } from "react-icons/ri";

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

const Inbox = () => {
  const [chatsFilter, setChatsFilter] = useState([]);
  const [activeChats, setActiveChats] = useState("open");

  useEffect(() => {
    setChatsFilter(chats.filter((chat) => chat.status === "open"));
  }, []);

  const handleOpenChats = () => {
    setActiveChats("open");
    setChatsFilter(chats.filter((chat) => chat.status === "open"));
  };

  const handleClosedChats = () => {
    setActiveChats("closed");
    setChatsFilter(chats.filter((chat) => chat.status === "closed"));
  };

  const handleChangeInbox = (id, value) => {
    const filterItem = chatsFilter.find((item) => item.id === id);
    const updateFilter = { ...filterItem, status: value };
    const restItem = chatsFilter.filter((item) => item.id !== id);
    setChatsFilter([...restItem, updateFilter].sort((a, b) => a.id - b.id));
  };

  const handleAcceptedChats = () => {
    setActiveChats("accepted");
    setChatsFilter(chats.filter((chat) => chat.status === "accepted"));
  };

  return (
    <div className='relative'>
      <div>
        <InboxCard
          setActiveChats={setActiveChats}
          handleOpenChats={handleOpenChats}
          handleClosedChats={handleClosedChats}
          handleAcceptedChats={handleAcceptedChats}
        />
      </div>
      <div
        className={`hidden lg:inline-block absolute text-2xl text-slate-400 ${
          activeChats === "open"
            ? "left-[16%]"
            : activeChats === "accepted"
            ? "left-[49%]"
            : "right-[16%]"
        }`}>
        <GoTriangleDown />
      </div>
      <div>
        <div className='flex mt-5 px-4 flex-col lg:flex-row lg:items-center lg:justify-end gap-3'>
          <div>
            <input
              className='pl-5 outline-none py-[6px] rounded-lg border-2'
              type='text'
              name=''
              placeholder='Search by name'
              id=''
            />
          </div>
          <div className=''>
            <button className='flex items-center gap-2 lg:px-4 lg:py-2 px-2 py-1 text-base font-medium w-fit bg-orange-500 rounded-lg text-white'>
              <RiListView /> All Chats
            </button>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <InboxTab chats={chatsFilter} handleChangeInbox={handleChangeInbox} />
      </div>
    </div>
  );
};

export default Inbox;
