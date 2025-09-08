import React, { useState } from "react";
import { Button } from ".././ui/button";
import { FaClock, FaRotate } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = ({ open, setOpen }) => {
  return (
    <header className="flex flex-col md:flex-row p-6 items-center justify-between border-none w-full">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-0">
        {" "}
        CNAPP Dashboard
      </h1>
      <div className="flex">
        <div className="flex flex-row flex-wrap justify-end w-full md:w-auto gap-4">
          <div>
            <Button variant={"secondary"} onClick={() => setOpen(true)}>
              + Add widget
            </Button>
          </div>
          <Button variant="secondary">
            <FaRotate />
          </Button>
          <Button variant="secondary">
            <BsThreeDotsVertical />
          </Button>
          <Button variant="secondary" className="flex items-center">
            <FaClock />
            <span>Last 2 days</span>
            <MdKeyboardArrowDown />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
