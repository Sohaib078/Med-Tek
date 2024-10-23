import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { SlRocket } from "react-icons/sl";
const GetStarted = () => {
  return (
    <div className="bg-gray-100 mt-5 flex flex-col lg:flex-row gap-4  justify-center py-5 lg:gap-10">
      <div className="px-4 py-8    border-r flex gap-3">
        <div className="text-[#00B5E8] text-[40px] py-1">
          <TbCalendarTime />
        </div>
        <div>
          <p className="text-xl font-semibold">Schedule a FREE Demo</p>
          <p>Sign up and book a free service demo</p>
          <a href="#quote" className="flex gap-2 text-[#00B5E8] items-center">
            FREE Demo <BsArrowRight />
          </a>
        </div>
      </div>
      <div className="px-4 py-8     flex gap-3">
        <div className="text-[#00B5E8] text-[40px] py-1">
          <SlRocket />
        </div>
        <div>
          <p className="text-xl font-semibold">Get Started Today</p>
          <p>Choose the best package for your practice</p>
          <a href="#quote" className="flex gap-2 text-[#00B5E8] items-center">
            See Pricing Packages <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
