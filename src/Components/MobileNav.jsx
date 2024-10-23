import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";

import { ImCross } from "react-icons/im";
const MobileNav = () => {
  const [shownav, setnav] = useState(false);
  return (
    <div className="">
      <div className="bg-primary text-white  p-3 relative">
        <div className="w-[80%] mx-auto flex justify-between items-center">
          <div className=" bg-white p-1 px-2 rounded-2xl">
            <img src={logo} width={100} height={50} />
          </div>
          <div className=" ">
            {shownav ? (
              <ImCross className="text-xl" onClick={() => setnav(!shownav)} />
            ) : (
              <FaBars className="text-xl" onClick={() => setnav(!shownav)} />
            )}
          </div>
        </div>
        {shownav && (
          <div className="absolute w-full bg-white z-50 shadow-md py-8 right-0 mt-3 flex text-center flex-col gap-2 text-black">
            <p>
              <a href="#hero">Services</a>
            </p>
            <p>
              <a href="#appfeature">Specialities</a>
            </p>
            <p>
              <a href="#cost">Solutions</a>
            </p>
            <p>
              <a href="#Contact">Near Me</a>
            </p>
            <p>
              <a href="#Contact">For You</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
