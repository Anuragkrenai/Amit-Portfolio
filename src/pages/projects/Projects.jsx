import "./Projects.css";
import { NavLink } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { HiOutlineDocumentText } from "react-icons/hi2";
import {Project_card, Vlog_card} from "../../components/project-card/Project-card";

const Projects = () => {

  return (
    <div className="h-[90%] w-[85%]  rounded-2xl overflow-hidden pageAnimation">
      <div className="header bg-[#111a16] h-[14%] flex items-center justify-between px-7 ">
      <div>
          <div className="flex items-center gap-3 text-[1.2vw] text-[#9f9fa8]">
            <h3 className="text-[2.4vw] text-[#fff] font-[600] leading-none text-shadow-2xl">
              Vlogs / Projects
            </h3>{" "}
            <span className="text-[1.8vw] text-white transition-all duration-300 projectBounce">
              <HiOutlineDocumentText />
            </span>
          </div>
        </div>

        <div className="flex items-center gap-[3vw]">
          <dir className="flex items-center justify-end  gap-[1vw] navlinkContainer">
            <NavLink
              to="/"
              className="text-[1.2vw] text-[#9f9fa8] h-[2.5vw] w-[2.5vw] cursor-pointer bg-[#18181b] flex items-center justify-center  border-[1px] border-[#2e3033] hover:border-[#bebebe] transition-all duration-300   hover:text-white rounded-full "
            >
              <FaUserTie />
            </NavLink>

            <NavLink
              to="/projects"
              className="text-[1.3vw]  text-[#9f9fa8] h-[2.5vw] w-[2.5vw] cursor-pointer bg-[#18181b] flex items-center justify-center  border-[1px] border-[#2e3033] hover:border-[#bebebe] transition-all duration-300   hover:text-white rounded-full "
            >
              <IoDocumentTextOutline />
            </NavLink>

            <NavLink
              to="/contact"
              className="text-[1.3vw]  text-[#9f9fa8] h-[2.5vw] w-[2.5vw] cursor-pointer bg-[#18181b] flex items-center justify-center  border-[1px] border-[#2e3033] hover:border-[#bebebe] transition-all duration-300  hover:text-white rounded-full "
            >
              <TiContacts />
            </NavLink>
          </dir>
        </div>
      </div>

      <div className="main bg-[#111111] h-[86%] flex flex-col  gap-5 px-7 py-5">
        <div className="h-max max-h-full w-full flex flex-wrap justify-between gap-8">
            <Vlog_card/>
            <Vlog_card/>
            <Project_card/>
            <Vlog_card/>
            <Project_card/>
            <Vlog_card/>



        </div>

      </div>
    </div>
  );
};

export default Projects;
