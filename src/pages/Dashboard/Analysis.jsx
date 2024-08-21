import { FaPlus, FaRegTrashAlt, FaStar } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import styles from "./Analysis.module.css";

const redeems = [
  {
    id: 1,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "The welcome pack",
    redeemed: true,
    point: 500,
  },
  {
    id: 2,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "Amazon gift card",
    point: 600,
  },
  {
    id: 3,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "Swiggy food card",
    point: 1000,
  },
  {
    id: 4,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "Raymond shopping card",
    point: 700,
  },
  {
    id: 5,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "The welcome pack",
    point: 400,
  },
  {
    id: 6,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "Swiggy food card",
    point: 1200,
  },
  {
    id: 7,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "Amazon gift card",
    point: 900,
  },
  {
    id: 8,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "Raymond shopping card",
    point: 800,
  },
];

const Analysis = () => {
  return (
    <div>
      <div className='mt-5 px-4 flex flex-col lg:flex-row justify-between gap-2 lg:items-center'>
        <div className='text-2xl font-bold text-slate-700'>
          All Redeems ({redeems?.length})
        </div>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-end gap-3'>
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
              <FaPlus /> Add Redeem
            </button>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <div className='overflow-x-auto'>
          <table className='table border'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Points</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className=''>
              {redeems.map((redeem) => (
                <tr key={redeem.id}>
                  <td>
                    <img src={redeem.image} className='w-14 rounded' alt='' />
                  </td>
                  <td className='font-medium text-slate-600'>{redeem.title}</td>
                  <td className=''>
                    <div className='flex items-center gap-1 text-slate-600'>
                      <p>
                        <FaStar className='text-[#FFC102]' />
                      </p>
                      <p>{redeem.point}</p>
                    </div>
                  </td>
                  <td className='flex items-center gap-4 mt-2 text-lg'>
                    <p>
                      <FiEdit className={`${styles.shadow} cursor-pointer`} />
                    </p>
                    <p>
                      <FaRegTrashAlt
                        className={`${styles.shadow} cursor-pointer`}
                      />
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
