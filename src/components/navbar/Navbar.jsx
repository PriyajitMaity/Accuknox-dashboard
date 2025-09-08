import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { PiBellSimpleRingingBold } from "react-icons/pi";

const Navbar = ({ searchText, setSearchText }) => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex flex-col md:flex-row justify-between items-center">
      <div className="space-x-4 mb-2 md:flex items-center justify-between w-full md:mb-0 sm:flex-wrap">
        <div className="text-gray-500 flex gap-2 items-center font-semibold">
          Home
          <MdArrowForwardIos />
          <span className="text-indigo-700 font-bold">Dashboard</span>
        </div>
        <div className="flex items-center space-x-8 w-full md:w-auto mb-2 md:mb-0">
          <div className="flex items-start relative w-full">
            <div className="absolute inset-y-0 left-2 flex items-center pr-2">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-gray-100 pl-8 p-2 border rounded w-[280px] md:w-auto"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-6 justify-end md:w-auto">
          <div className="flex w-full items-center gap-6">
            <span className="text-xl">
              <PiBellSimpleRingingBold />
            </span>
            <div className="flex items-center gap-4 mr-2">
              <span className="text-2xl text-indigo-700">
                {" "}
                <FaCircleUser />
              </span>
              <span className="text-xl">Priyojeet</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
