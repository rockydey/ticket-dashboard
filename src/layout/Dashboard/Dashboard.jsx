import { useEffect, useState } from "react";
import CardView from "../../components/CardView/CardView";
import TabView from "../../components/TabView/TabView";
import Sidebar from "./Sidebar";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const tickets = [
  {
    id: 1,
    ticketId: "TCKT-001",
    customer: {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Unable to login",
    status: "open",
    priority: "high",
    agent: [
      "https://i.ibb.co/tb6jXRb/teacher1.png",
      "https://i.ibb.co/hCsWc0x/teacher2.jpg",
      "https://i.ibb.co/tb6jXRb/teacher1.png",
    ],
    date: "Jun 17, 2024 03.47 PM",
  },
  {
    id: 2,
    ticketId: "TCKT-002",
    customer: {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Error on checkout page",
    status: "in progress",
    priority: "medium",
    agent: [],
    date: "Jun 18, 2024 10.15 AM",
  },
  {
    id: 3,
    ticketId: "TCKT-003",
    customer: {
      name: "Carol Williams",
      email: "carol.williams@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Feature request: Dark mode",
    status: "closed",
    priority: "low",
    agent: [
      "https://i.ibb.co/hCsWc0x/teacher2.jpg",
      "https://i.ibb.co/tb6jXRb/teacher1.png",
    ],
    date: "Jun 19, 2024 04.30 PM",
  },
  {
    id: 4,
    ticketId: "TCKT-004",
    customer: {
      name: "David Brown",
      email: "david.brown@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Payment not processed",
    status: "open",
    priority: "high",
    agent: ["https://i.ibb.co/hCsWc0x/teacher2.jpg"],
    date: "Jun 20, 2024 11.05 AM",
  },
  {
    id: 5,
    ticketId: "TCKT-005",
    customer: {
      name: "Eva Green",
      email: "eva.green@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "How to reset password?",
    status: "closed",
    priority: "medium",
    agent: [
      "https://i.ibb.co/tb6jXRb/teacher1.png",
      "https://i.ibb.co/hCsWc0x/teacher2.jpg",
      "https://i.ibb.co/tb6jXRb/teacher1.png",
    ],
    date: "Jun 21, 2024 09.15 AM",
  },
  {
    id: 6,
    ticketId: "TCKT-006",
    customer: {
      name: "Frank Lee",
      email: "frank.lee@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Bug in mobile app",
    status: "in progress",
    priority: "high",
    agent: [],
    date: "Jun 22, 2024 02.30 PM",
  },
  {
    id: 7,
    ticketId: "TCKT-007",
    customer: {
      name: "Grace Lee",
      email: "grace.lee@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Website not loading",
    status: "open",
    priority: "high",
    agent: ["https://i.ibb.co/tb6jXRb/teacher1.png"],
    date: "Jun 23, 2024 04.00 PM",
  },
  {
    id: 8,
    ticketId: "TCKT-008",
    customer: {
      name: "Henry Adams",
      email: "henry.adams@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Need help with installation",
    status: "closed",
    priority: "low",
    agent: [
      "https://i.ibb.co/tb6jXRb/teacher1.png",
      "https://i.ibb.co/hCsWc0x/teacher2.jpg",
      "https://i.ibb.co/tb6jXRb/teacher1.png",
    ],
    date: "Jun 24, 2024 01.00 PM",
  },
  {
    id: 9,
    ticketId: "TCKT-009",
    customer: {
      name: "Ivy White",
      email: "ivy.white@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Slow website performance",
    status: "in progress",
    priority: "medium",
    agent: [],
    date: "Jun 25, 2024 08.30 AM",
  },
  {
    id: 10,
    ticketId: "TCKT-010",
    customer: {
      name: "Jack Turner",
      email: "jack.turner@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Request for invoice",
    status: "closed",
    priority: "low",
    agent: [
      "https://i.ibb.co/tb6jXRb/teacher1.png",
      "https://i.ibb.co/hCsWc0x/teacher2.jpg",
    ],
    date: "Jun 26, 2024 10.20 AM",
  },
  {
    id: 11,
    ticketId: "TCKT-011",
    customer: {
      name: "Karen Hill",
      email: "karen.hill@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Unable to update profile",
    status: "open",
    priority: "medium",
    agent: [
      "https://i.ibb.co/tb6jXRb/teacher1.png",
      "https://i.ibb.co/hCsWc0x/teacher2.jpg",
    ],
    date: "Jun 27, 2024 03.50 PM",
  },
  {
    id: 12,
    ticketId: "TCKT-012",
    customer: {
      name: "Leo Martin",
      email: "leo.martin@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Feature request: Export data",
    status: "closed",
    priority: "low",
    agent: [],
    date: "Jun 28, 2024 11.45 AM",
  },
  {
    id: 13,
    ticketId: "TCKT-013",
    customer: {
      name: "Mia Brown",
      email: "mia.brown@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Security issue reported",
    status: "in progress",
    priority: "high",
    agent: [
      "https://i.ibb.co/tb6jXRb/teacher1.png",
      "https://i.ibb.co/hCsWc0x/teacher2.jpg",
      "https://i.ibb.co/tb6jXRb/teacher1.png",
    ],
    date: "Jun 29, 2024 02.10 PM",
  },
  {
    id: 14,
    ticketId: "TCKT-014",
    customer: {
      name: "Nina Lopez",
      email: "nina.lopez@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Refund request",
    status: "closed",
    priority: "medium",
    agent: ["https://i.ibb.co/tb6jXRb/teacher1.png"],
    date: "Jun 30, 2024 09.25 AM",
  },
  {
    id: 15,
    ticketId: "TCKT-015",
    customer: {
      name: "Oscar Green",
      email: "oscar.green@example.com",
      image: "https://i.ibb.co/tb6jXRb/teacher1.png",
    },
    subject: "Account locked",
    status: "open",
    priority: "high",
    agent: ["https://i.ibb.co/hCsWc0x/teacher2.jpg"],
    date: "Jul 01, 2024 11.00 AM",
  },
];

const Dashboard = () => {
  const [allTickets, setAllTickets] = useState(tickets);
  const [currentTickets, setCurrentTickets] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 5;

  // Calculate the indices for slicing the data
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;

  useEffect(() => {
    setCurrentTickets(allTickets.slice(indexOfFirstTicket, indexOfLastTicket));
  }, [indexOfFirstTicket, indexOfLastTicket]);

  // Calculate total pages
  const totalPages = Math.ceil(tickets.length / ticketsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='grid grid-cols-12 p-3 gap-3'>
      <Sidebar />
      <div className='col-span-10 w-full'>
        <div>
          <CardView />
        </div>
        <div className=''>
          {currentTickets.length && <TabView filterTickets={currentTickets} />}
        </div>
        <div className='flex justify-center items-center mt-5 gap-3 '>
          <div
            onClick={() => {
              currentPage !== 1
                ? setCurrentPage(currentPage - 1)
                : setCurrentPage(1);
            }}
            className='p-2 cursor-pointer text-slate-700 border-2 rounded-full'>
            <IoIosArrowBack />
          </div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-1 border-2 rounded-full ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}>
              {index + 1}
            </button>
          ))}
          <div
            onClick={() => {
              currentPage !== 3
                ? setCurrentPage(currentPage + 1)
                : setCurrentPage(3);
            }}
            className='p-2 cursor-pointer border-2 rounded-full'>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
