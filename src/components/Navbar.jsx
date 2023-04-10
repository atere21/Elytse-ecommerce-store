import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiFillTag,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1064px] mx-auto flex justify-between items-center p-4">
      {/* left-side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold px-2 text-black">
          Elytse
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-[#141414] text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* search input */}
      <div
        className="bg-gray-200 rounded-full flex items-center px-3
   w-[200px] sm:w-[300px] lg:w-[400px]"
      >
        <AiOutlineSearch size={25} />
        <input className="bg-transparent p-2 w-full focus:outline-none type='text' placeholder='search food' " />
      </div>

      {/* cart button */}
      <button
        className="bg-black text-white hidden md:flex
   items-center py-2 rounded-full"
      >
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>
      {/* mobile-menu */}
      {/* overlay */}
      {nav ? (
        <div
          className="bg-black/70 fixed w-full h-screen z-10 top-0
   left-0"
        >
          {" "}
        </div>
      ) : (
        ""
      )}

      {/* side drawer*/}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 w-[300px] h-screen bg-white z-10 duration-300 left-[-100%]"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 text-black font-bold">
         Elytse
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-[#c9A800] font-bold">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" />
              Promotion
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
