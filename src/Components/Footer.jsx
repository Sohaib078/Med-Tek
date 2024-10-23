import logo from "../assets/images/med_tek_logo2.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="w-full bg-[#00B5E8]  py-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white w-full lg:w-3/4 mx-auto  ">
          <div className="">
          <img src={logo} alt="logo" className="h-14" />

            <p className="text-md lg:text-lg font-[500]  ">
              Subscribe to Our Newsletter
            </p>
            <p className="text-xs">
              Stay updated with the latest trends in medical billing and RCM
              services.
            </p>
            <input
              type="text"
              className="p-3 w-full rounded-md mt-1 outline-none text-black "
              placeholder="Your email address"
            />
            <div className="flex items-center gap-3 mt-2">
              <input type="checkbox" className="w-4 h-4 r" />
              <label className="text-xs ">(Accept GDPR Terms)</label>
            </div>
            <button className="px-3 py-2 mt-2 bg-[#067AC5] rounded-md ">
              SUBMIT
            </button>
          </div>
          <div>
            <p className="text-xl   flex justify-center">Services</p>
            <div className="flex justify-center w-full mt-4 text-md  ">
              <ul className="list-disc ">
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    Medical Billing
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    Medical Coding
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    RCM
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    Medical Billing Audit
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    Clearinghouse
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    Credentialing
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    Healthcare SEO
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-xl  flex justify-center">Software</p>
            <div className="flex justify-center w-full mt-4 text-md ">
              <ul className="list-disc ">
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    Medical Billing Software
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    FusionEDI
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    Free EHR
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    Free PMS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-xl   flex justify-center">Quick Links</p>
            <div className="flex justify-center w-full mt-4 text-md  ">
              <ul className="list-disc ">
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    Schedule a Demo
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    Contact US
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#067AC5] cursor-pointer" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-4 flex flex-col mx-auto">
              <p>MedTek</p>
              <div className="flex gap-4 mt-3">
                <div className="">
                  <a href="#">
                    <FaFacebook
                      style={{ color: "#4267B2", fontSize: "1.5rem" }}
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <FaXTwitter
                      style={{ backgroundColor: "black", fontSize: "1.5rem" }}
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <GrInstagram
                      style={{ color: "#E1306C", fontSize: "1.5rem" }}
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <FaLinkedin
                      style={{ color: "#067AC5", fontSize: "1.5rem" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-3 text-white text-xs md:text-base">
        <div className=" justify-center flex   p-2   ">
          <p>© MedTek 2024 All Rights Reserved | </p>
          <p> &nbsp; Privacy Policy</p>
        </div>
      </div>
      {/* <div className="py-3 flex justify-center items-center text-gray-400 gap-5 px-4 text-xs md:text-base">
        <p>
          By continuing to use this website, you consent to the use of cookies
          in accordance with our Cookie Policy.
        </p>
        <button className="bg-[#067AC5] text-white px-3 py-2">ACCEPT</button>
      </div> */}
    </div>
  );
};

export default Footer;
