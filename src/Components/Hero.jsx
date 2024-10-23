import doctor from "../assets/doc2.png";
import { FaStar } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="bg-slate-100">
      <div className="w-[80%] mx-auto flex gap-10 flex-col lg:flex-row">
        <div className="w-full pt-20">
          <p className="uppercase font-medium">
            MedTek – Elevating Medical Billing for U.S. Healthcare Providers
          </p>
          <div className=" py-6 space-y-2">
            {" "}
            <p className="text-primary text-4xl font-semibold">
              All-in-One Medical Billing
            </p>
            <p className="text-4xl font-semibold">
              Solutions for U.S. Providers
            </p>
          </div>
          <div className="">
            <p>
              At <span className="font-semibold"> MedTek</span>, we provide
              seamless end-to-end billing and coding services to help healthcare
              providers focus on what matters most—patient care. Our advanced
              technology and expert team optimize the entire billing process,
              ensuring maximum reimbursement and fewer denials. Whether you’re a
              solo practitioner or a multi-specialty practice,{" "}
              <span className="font-semibold"> MedTek</span> takes care of the
              details, so you don’t have to.
            </p>
            <br />
          </div>
          <div className=" py-4 space-y-5">
            <div className="flex flex-col lg:flex-row  gap-2">
              <input
                type="text"
                placeholder="Name"
                className="rounded-md p-2 border border-primary"
              />
              <input
                type="text"
                placeholder="Email"
                className="rounded-md border p-2 border-primary"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="rounded-md border p-2 border-primary"
              />
            </div>
            <div className="">
              <button className="px-4 py-2  text-white bg-primary rounded-md font-medium">
                Book a free Consultation
              </button>
            </div>
          </div>
        </div>
        <div className="w-full  flex justify-end     ">
          <div className="hidden lg:block">
            <img src={doctor} alt="" className="   w-96    object-contain" />
          </div>
        </div>
      </div>
      {/* botom  */}
      <div className="bg-primary text-white font-medium   p-4">
        <div className="lg:w-[66%] w-[90%]  gap-2  mx-auto flex justify-between items-center   flex-col   md:flex-row">
          <div className="flex gap-2 items-center ">
            <span>
              <FaStar />
            </span>
            1500+ Satisfied Providers
          </div>
          <div className="flex gap-2 items-center ">
            <span>
              <FaAward />
            </span>{" "}
            Serving More Than 75 Specialties
          </div>
          <div className="flex gap-2">
            <span className="text-xl">
              <FaUserDoctor />
            </span>
            200+ Billing and Coding Experts
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
