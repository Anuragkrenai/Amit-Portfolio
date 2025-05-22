import "./Projects.css";
import { NavLink } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { TiArrowRight } from "react-icons/ti";
import { TiArrowLeft } from "react-icons/ti";
import { useState } from "react";

import {Project_card, Vlog_card} from "../../components/project-card/Project-card";

const Projects = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [vlogs_projects, setVlogs_Projects] = useState([
    {
      id : 1,
      type : 'vlog',
      page : 1,
      title : "Server Improvement"
    },
    {
      id : 2,
      type : 'vlog',
      page : 1,
      title : "Server Improvement"
    },
    {
      id : 3,
      type : 'project',
      page : 1,
      title : "Server Improvement"
    },
    {
      id : 4,
      type : 'vlog',
      page : 1,
      title : "Server Improvement"
    },
    {
      id : 5,
      type : 'project',
      page : 1,
      title : "Server Improvement"
    },
    {
      id : 6,
      type : 'project',
      page : 1,
      title : "Server Improvement"
    },
    {
      id : 7,
      type : 'vlog',
      page : 2,
      title : "Server Improvement"
    },
    {
      id : 8,
      type : 'project',
      page : 2,
      title : "Server Improvement"
    },
    {
      id : 9,
      type : 'vlog',
      page : 2,
      title : "Server Improvement"
    },
    {
      id : 10,
      type : 'vlog',
      page : 2,
      title : "Server Improvement"
    },
    {
      id : 11,
      type : 'vlog',
      page : 2,
      title : "Server Improvement"
    },
    {
      id : 12,
      type : 'project',
      page : 2,
      title : "Server Improvement"
    },
  ])
  const pageLength = vlogs_projects.length / 6;

  const increasePage =()=>{
     pageNumber < pageLength ? setPageNumber(pageNumber + 1) : null
  }
  const decreasePage =()=>{
     pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
  }

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

      <div className="main bg-[#111111] h-[86%] flex flex-col justify-between  gap-5 px-7 py-5">
        <div className="h-max max-h-full w-full flex flex-wrap justify-between gap-8">
          {
            vlogs_projects.map((elem) =>{
             if (elem.page === pageNumber){
               if(elem.type === 'vlog'){
                 return <Vlog_card key={elem.id}/>
               }
               else if(elem.type === 'project'){
                 return <Project_card key={elem.id}/>
               }
             }
            })
          }

        </div>

        <div className=" w-full flex items-center justify-center select-none">
            <div className="flex gap-[1vw] items-center  text-[#bbbbbb] text-[2vw]">
            <TiArrowLeft className={`${pageNumber <= 1 ? 'disabled' :''} cursor-pointer active:scale-[0.9] hover:text-[#64f196] transition-all duration-300`} onClick={decreasePage}/>
            <span className="font-[500] text-[1.4vw] mt-[0.4vw] flex items-center justify-center">{pageNumber} / {pageLength}</span>
            <TiArrowRight className={`${pageNumber >= pageLength ? 'disabled' :''} cursor-pointer active:scale-[0.9] hover:text-[#64f196] transition-all duration-300`} onClick={increasePage} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
