import { FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaLongArrowAltRight } from "react-icons/fa";
const MainNav = () => {
  return (
    <div className="">
      <div className="bg-primary text-white font-sm p-4 ">
        <div className="flex justify-between w-[80%] mx-auto ">
          <div className="flex gap-4">
            <div className="flex items-center   font-semibold">
              <FaPhoneAlt />
            </div>
            <div className=""> 888-987-6250</div>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 ">
              <p className="border-r px-3">
                <a href="#quote">Contact Us </a></p>
              <p>
                
               <a href="#quote"> Pricing</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-lg\">
        <div className="flex justify-between w-[80%] mx-auto items-center p-5">
          <div className="">
            <img src={logo} width={100} height={50} />
          </div>
          <div className="flex gap-4 ">
            <div className="">Services</div>
            <div className="">Specialties </div>
            <div className="">Solutions </div>
            <div className="">Near Me </div>
            <div className="">For You</div>
          </div>
          <div className=" " >
            <button className="text-white bg-primary flex gap-2 items-center capitalize py-2 px-3 rounded-lg">
             <a href="#quote" className="flex items-center gap-2"> Talk to an expert <FaLongArrowAltRight /></a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
