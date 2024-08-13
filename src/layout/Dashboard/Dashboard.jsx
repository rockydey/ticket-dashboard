import { useEffect, useState } from "react";
import CardView from "../../components/CardView/CardView";
import TabView from "../../components/TabView/TabView";
import Sidebar from "./Sidebar";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { RxCrossCircled } from "react-icons/rx";

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

const customStyles = {
  overlay: {
    backgroundColor: "#000000cc",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FBFBFC",
  },
};

const Dashboard = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [currentTickets, setCurrentTickets] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [hideSidebar, setHideSidebar] = useState(false);

  const ticketsPerPage = 5;

  useEffect(() => {
    // Check if tickets are already in localStorage
    const storedTickets = localStorage.getItem("tickets");

    if (storedTickets) {
      setAllTickets(JSON.parse(storedTickets));
    } else {
      // Save initial tickets to localStorage
      localStorage.setItem("tickets", JSON.stringify(tickets));
      setAllTickets(tickets);
    }
  }, []);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  // Calculate the indices for slicing the data
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;

  useEffect(() => {
    setCurrentTickets(allTickets.slice(indexOfFirstTicket, indexOfLastTicket));
  }, [indexOfFirstTicket, indexOfLastTicket, allTickets]);

  const handleChangeStatus = (id, value) => {
    console.log(value);
    const filterItem = currentTickets.find((item) => item.id === id);
    const updateFilter = { ...filterItem, status: value };
    const restItem = currentTickets.filter((item) => item.id !== id);
    setCurrentTickets([...restItem, updateFilter].sort((a, b) => a.id - b.id));

    const storedTickets = JSON.parse(localStorage.getItem("tickets"));
    const restStored = storedTickets.filter((item) => item.id !== id);
    const uploadTickets = [...restStored, updateFilter].sort(
      (a, b) => a.id - b.id
    );
    localStorage.setItem("tickets", JSON.stringify(uploadTickets));
  };

  const handleChangePriority = (id, value) => {
    console.log(value);
    const filterItem = currentTickets.find((item) => item.id === id);
    const updateFilter = { ...filterItem, priority: value };
    const restItem = currentTickets.filter((item) => item.id !== id);
    setCurrentTickets([...restItem, updateFilter].sort((a, b) => a.id - b.id));

    const storedTickets = JSON.parse(localStorage.getItem("tickets"));
    const restStored = storedTickets.filter((item) => item.id !== id);
    const uploadTickets = [...restStored, updateFilter].sort(
      (a, b) => a.id - b.id
    );
    localStorage.setItem("tickets", JSON.stringify(uploadTickets));
  };

  // Calculate total pages
  const totalPages = Math.ceil(allTickets.length / ticketsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleTotalTicket = () => {
    const storedTickets = localStorage.getItem("tickets");
    setAllTickets(JSON.parse(storedTickets));
  };

  const handleOpenTicket = () => {
    const sorted = [...allTickets].sort((a, b) =>
      a.status === "open" ? -1 : 1
    );
    setAllTickets(sorted);
    setCurrentPage(1);
  };

  const handleCloserTicket = () => {
    const sorted = [...allTickets].sort((a, b) =>
      a.status === "closed" ? -1 : 1
    );
    setAllTickets(sorted);
    setCurrentPage(1);
  };

  const handleProgressTicket = () => {
    const sorted = [...allTickets].sort((a, b) =>
      a.status === "in progress" ? -1 : 1
    );
    setAllTickets(sorted);
    setCurrentPage(1);
  };

  const handleTicketSubmit = (data) => {
    const newTicket = {
      id: allTickets.length + 1,
      ticketId: data.ticketId,
      customer: {
        name: data.cName,
        email: data.cEmail,
        image: data.cImage,
      },
      subject: data.subject,
      status: data.status,
      priority: data.priority,
      agent: [],
      date: data.date,
    };

    const totalTickets = [...allTickets, newTicket];

    localStorage.setItem("tickets", JSON.stringify(totalTickets));
    setAllTickets(totalTickets);

    setModalIsOpen(false);
    reset();
  };

  return (
    <div className='grid grid-cols-12 p-3 gap-3'>
      <Sidebar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
      <div
        className={`${
          hideSidebar ? "col-span-12" : "col-span-10"
        } lg:col-span-10 w-full`}>
        <div>
          <CardView
            handleTotalTicket={handleTotalTicket}
            handleOpenTicket={handleOpenTicket}
            handleCloserTicket={handleCloserTicket}
            handleProgressTicket={handleProgressTicket}
          />
        </div>
        <div className='mt-5 flex justify-between items-center'>
          <div>
            <h3 className=' text-xl lg:text-2xl font-bold text-slate-700'>
              All Tickets ({allTickets.length})
            </h3>
          </div>
          <div>
            <button
              onClick={() => openModal()}
              className='flex items-center gap-2 lg:px-4 lg:py-2 px-2 py-1 text-base font-medium bg-green-500 rounded-lg text-white'>
              <FaPlus /> New Ticket
            </button>
          </div>
        </div>
        <div className=''>
          {currentTickets.length && (
            <TabView
              filterTickets={currentTickets}
              handleChangeStatus={handleChangeStatus}
              handleChangePriority={handleChangePriority}
            />
          )}
        </div>
        <div className='flex justify-center items-center flex-wrap lg:flex-nowrap mt-10 gap-3 '>
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
            <div key={index + 1}>
              <button
                onClick={() => {
                  paginate(index + 1);
                }}
                className={`px-3 py-1 border-2 rounded-full ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500"
                }`}>
                {index + 1}
              </button>
            </div>
          ))}
          <div
            onClick={() => {
              currentPage !== totalPages
                ? setCurrentPage(currentPage + 1)
                : setCurrentPage(totalPages);
            }}
            className='p-2 cursor-pointer border-2 rounded-full'>
            <IoIosArrowForward />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'>
        <button onClick={closeModal} className='block ml-auto text-2xl'>
          <RxCrossCircled />
        </button>

        <div className='flex justify-center items-center h-full '>
          <form
            className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
            onSubmit={handleSubmit(handleTicketSubmit)}>
            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-2' htmlFor='ticketId'>
                Ticket Id
              </label>
              <input
                type='text'
                id='ticketId'
                name='ticketId'
                placeholder='TCKT-001'
                className='border px-5 py-2 rounded outline-none'
                {...register("ticketId")}
              />
            </div>
            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-2' htmlFor='subject'>
                Subject
              </label>
              <input
                type='text'
                placeholder='Enter subject'
                name='subject'
                className='border px-5 py-2 rounded outline-none'
                id='subject'
                {...register("subject")}
              />
            </div>

            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-3' htmlFor='cName'>
                Customer Name
              </label>
              <input
                type='text'
                placeholder='Enter name'
                name='cName'
                className='border px-5 py-2 rounded outline-none'
                id='cName'
                {...register("cName")}
              />
              {/* <select
                className='border px-5 py-2 rounded outline-none'
                name='brand'
                id='brand'
                {...register("brand")}>
                <option value='amd'>AMD</option>
                <option value='intel'>Intel</option>
              </select> */}
            </div>
            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-2' htmlFor='cEmail'>
                Customer Email
              </label>
              <input
                type='email'
                name='cEmail'
                placeholder='Enter Email'
                className='border px-5 py-2 rounded outline-none'
                id='cEmail'
                {...register("cEmail")}
              />
            </div>

            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-2' htmlFor='cImage'>
                Customer Image
              </label>
              <input
                type='text'
                name='cImage'
                placeholder='Enter image url'
                className='border px-5 py-2 rounded outline-none'
                id='cImage'
                {...register("cImage")}
              />
            </div>
            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-2' htmlFor='date'>
                Date
              </label>
              <input
                type='text'
                name='date'
                placeholder='Aug 13, 2024 12.12 PM'
                className='border px-5 py-2 rounded outline-none'
                id='date'
                {...register("date")}
              />
            </div>

            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-3' htmlFor='status'>
                Status
              </label>
              <select
                className='border px-5 py-2 rounded outline-none'
                name='status'
                id='status'
                {...register("status")}>
                <option value='open'>Open</option>
                <option value='closed'>Closed</option>
                <option value='in progress'>In Progress</option>
              </select>
            </div>
            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-3' htmlFor='priority'>
                Priority
              </label>
              <select
                className='border px-5 py-2 rounded outline-none'
                name='priority'
                id='priority'
                {...register("priority")}>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
              </select>
            </div>

            <div className='flex justify-end items-center w-full'>
              <button
                className=' px-4 py-3 bg-green-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
