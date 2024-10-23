import React from "react";
import nicole from "../assets/images/nicole.webp";
const PricingQuote = () => {
  const e = ''
  return (
    <div id="quote">
      <div className=" w-[95%] lg:w-[70%] mx-auto  py-10 flex h-[500px]">
        <div className=" lg:w-[70%] flex flex-col justify-evenly   p-8 ">
          <p className="text-lg lg:text-2xl font-semibold ">
            Get Started with <span className="text-[#00B5E8]">MedTek </span>
            Today!
          </p>
          <p className="text-xs">
          Let MedTek handle the complexities of billing, coding, and claims, so you can focus on
          providing exceptional care to your patients
          </p> 
          
          <form className=" ">
            <div className="lg:grid  lg:grid-cols-2 gap-3 2xl:gap-10 pt-4">
              <input
                type="text"
                placeholder="Collection"
                className=" border-b border-black  w-full focus:border-[#067ac5] focus:border focus:outline-none  px-2  col-span-2  lg:w-[47%] h-10"
              />
              <input
                type="text"
                placeholder="Name"
                className=" border-b border-black   w-full  focus:border-[#067ac5] focus:border focus:outline-none  px-2 h-10"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className=" border-b border-black  w-full  focus:border-[#067ac5] focus:border focus:outline-none  px-2 h-10"
              />

              <input
                type="text"
                placeholder="Email"
                className=" border-b border-black  w-full  focus:border-[#067ac5] focus:border focus:outline-none  px-2 h-10"
              />
              <input
                type="text"
                placeholder="Practice Name"
                className=" border-b border-black  w-full  focus:border-[#067ac5] focus:border focus:outline-none  px-2 h-10"
              />
            </div>

            <button className="bg-[#00B5E8] text-white  focus:bg-[#067ac5] font-semibold text-sm lg:text-lg h-10 mt-24 w-full rounded-sm ">
              Unlock Pricing Quote
            </button>
          </form>
        </div>
        <div className=" hidden sm:block  w-[30%]   bg-[#00B5E8] px-4 py-4 text-white  space-y-4 rounded-xl">
          <img
            src={nicole}
            alt="pic"
            className="w-28 h-28 rounded-full mx-auto"
          />
          <p></p>
          <p className="text-md lg:text-md font-medium text-center">
            Dr. Nicole, Family Medicine Practitioner
          </p>
          <p className="  text-center text-base">
            "Some billing companies charge right after submitting claims, but
            MedTek only charges for paid claims. That transparency has made a
            huge difference for us—we couldn’t be more satisfied!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingQuote;
