import "./Contact.css";
import { NavLink,Link,useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { TiMessages } from "react-icons/ti";
import { IoSend } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";


import { FaSkullCrossbones } from "react-icons/fa6";

import { TiTick } from "react-icons/ti";
import axios from 'axios'



const Contact = () => {
  const [message,setMessage] = useState({
    name:'',
    email:'',
    message:''
  })

  const navigate = useNavigate();
  const [nameErr, setNameErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [messageErr, setMessageErr] = useState(false)
  const [loading,setLoading] = useState(false)
  const [messageState, setMessageState] = useState('idle')
  const [buttonMgs, setButtonMsg] = useState(<span className="flex items-center gap-[0.5vw]">Send Message <IoSend  className="text-[1vw]"/></span>)


  const URL = 'https://dummyjson.com/c/a546-de89-4978-b768'
  // const URL = 'https://dummyjsoaasdfn.com/test'

  function handleError(){
    !message.name? setNameErr(true) : setNameErr(false)
    !message.email? setEmailErr(true) : setEmailErr(false)
    !message.message? setMessageErr(true) : setMessageErr(false)
  }


  async function postData (){
    try{
      const response = await axios.post(URL, message);
      console.log(response)
      if(response.status === 200){
        setLoading(false)
        setMessageState('success')  
        setButtonMsg(<span className="flex items-center gap-[0.5vw] ">Message Sent <TiTick  className="text-[1.6vw] mb-[0.3vw]"/></span>)
        setMessage({
          name:'',
          email:'',
          message:''
        })
        setTimeout(()=>{
          setButtonMsg(<span className="flex items-center gap-[0.5vw]">Redirecting...  <FaSpinner className="animate-spin text-[1.2vw]" /></span>)
          setTimeout(()=>{
             navigate('/')
          },1000)
        },2000)
      }
      else{
        setLoading(false)
        setMessageState('failed')
        setButtonMsg(<span className="flex items-center gap-[0.5vw] ">Message Falied <FaSkullCrossbones  className="text-[1.1vw] mb-[0.3vw]"/></span>)
        setTimeout(()=>{
          setButtonMsg(<span className="flex items-center gap-[0.5vw]">Resend Message  <VscDebugRestart  className="animate-spin text-[1.2vw]" /></span>)
        },2000)
      }
    }
    catch{
      setLoading(false)
      setMessageState('failed')
      setButtonMsg(<span className="flex items-center gap-[0.5vw] ">Resend Message <VscDebugRestart  className="text-[1.1vw] mb-[0.3vw]"/></span>)
    }
  }




  const handleSubmit =(e)=>{
    e.preventDefault();


    if(!message.name || !message.email || !message.message){
      handleError()
    }
    else{
      handleError()
      setMessageState('idle')
      setLoading(true)
      postData()
    }
  }

  return (
    <div className="h-[90%] w-[85%]  rounded-2xl overflow-hidden pageAnimation">
      <div className="header bg-[#111a16] h-[14%] flex items-center justify-between px-7 ">
        <div>
          <div className="flex items-center gap-3 text-[1.2vw] text-[#9f9fa8]">
            <h3 className="text-[2.4vw] text-[#fff] font-[600] leading-none text-shadow-2xl">
              Let's Connect 
            </h3>{" "}
            <span className="text-[1.8vw] w-[2.2vw] h-[2.2vw] transition-all duration-300 emailShake">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 128 128" viewBox="0 0 128 128"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="64" x2="64" y1="36.8329" y2="104.33"><stop offset="0" stopColor="#ffc107"/><stop offset="1" stopColor="#ffd54f"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="64" x2="64" y1="8.4562" y2="72.154"><stop offset="0" stopColor="#ffe082"/><stop offset=".9931" stopColor="#ffca28"/></linearGradient><path d="m120 104h-112c-2.2 0-4-1.8-4-4v-72c0-2.2 1.8-4 4-4h112c2.2 0 4 1.8 4 4v72c0 2.2-1.8 4-4 4z" fill="url(#a)"/><path d="m124 30.2v-2.2c0-2.2-1.8-4-4-4h-112c-2.2 0-4 1.8-4 4v2l59.9 46.1z" fill="url(#b)"/><g fill="#ffb300"><path d="m44.1 61.8-38.1 41.6c-.9-.5-1.6-1.4-1.8-2.5l37.8-41.2z"/><path d="m123.8 101.3c-.3 1-1 1.8-2 2.3l-38-41.9 2.2-2z"/><path d="m124 29v3.8l-60.1 45.2-59.9-45.4v-3.7l59.9 45.4z"/></g><path d="m120 27c.6 0 1 .5 1 1v72c0 .6-.4 1-1 1h-112c-.6 0-1-.4-1-1v-72c0-.5.4-1 1-1zm0-3h-112c-2.2 0-4 1.8-4 4v72c0 2.2 1.8 4 4 4h112c2.2 0 4-1.8 4-4v-72c0-2.2-1.8-4-4-4z" fill="#444" opacity=".2"/></svg>
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

      <div className="main bg-[#111111] h-[86%] flex  justify-between gap-7 px-7 py-5">
        <div className="w-[40%] h-full  flex flex-col gap-7 rounded-lg px-6 py-4">
           <p className="text-[1.6vw] text-[#d4d4d8] flex items-center gap-1.5">Social Links <IoShareSocial className="mb-[0.4vw]"/></p>

           <div className="flex flex-col gap-4">
              <Link to='https://wa.me/+923096236310' target="_blank" className="w-full border border-[#272928] rounded-lg hover:border-[#10b98140] focus:border-[#10b98140] px-[1vw] py-[0.7vw] text-[1.2vw] bg-[#1e2020] text-[#9e9e9e] flex items-center justify-between transition-all duration-300 hover:text-[#10b74d] cursor-pointer line-clamp-1"> <span className="flex items-center gap-[0.7vw]"><IoCall  className="mb-[0.3vw]"/> +91 9054834923</span>  <FaExternalLinkAlt className="mb-[0.3vw]"/></Link>
              <Link to='email@example.com' target="_blank" className="w-full border border-[#272928] rounded-lg hover:border-[#10b98140] focus:border-[#10b98140] px-[1vw] py-[0.7vw] text-[1.2vw] bg-[#1e2020] text-[#9e9e9e] flex items-center justify-between transition-all duration-300 hover:text-[#10b74d] cursor-pointer line-clamp-1"> <span className="flex items-center gap-[0.7vw]"><MdEmail  className="mb-[0.3vw]"/> admin@test.com</span>  <FaExternalLinkAlt className="mb-[0.3vw]"/></Link>
              <Link to='https://in.linkedin.com/in/harisiitkgp' target="_blank" className="w-full border border-[#272928] rounded-lg hover:border-[#10b98140] focus:border-[#10b98140] px-[1vw] py-[0.7vw] text-[1.2vw] bg-[#1e2020] text-[#9e9e9e] flex items-center justify-between transition-all duration-300 hover:text-[#10b74d] cursor-pointer line-clamp-1"> <span className="flex items-center gap-[0.7vw]"><FaLinkedin   className="mb-[0.3vw]"/> in/ami-yadav</span>  <FaExternalLinkAlt className="mb-[0.3vw]" /></Link>
              <Link to='https://github.com/Anuragkrenai' target="_blank" className="w-full border border-[#272928] rounded-lg hover:border-[#10b98140] focus:border-[#10b98140] px-[1vw] py-[0.7vw] text-[1.2vw] bg-[#1e2020] text-[#9e9e9e] flex items-center justify-between transition-all duration-300 hover:text-[#10b74d] cursor-pointer line-clamp-1"> <span className="flex items-center gap-[0.7vw]"><FaGithub  className="mb-[0.3vw]"/> github.com/Anuragkrenai</span>  <FaExternalLinkAlt className="mb-[0.3vw]"/></Link>
              <Link to='https://x.com/narendramodi' target="_blank" className="w-full border border-[#272928] rounded-lg hover:border-[#10b98140] focus:border-[#10b98140] px-[1vw] py-[0.7vw] text-[1.2vw] bg-[#1e2020] text-[#9e9e9e] flex items-center justify-between transition-all duration-300 hover:text-[#10b74d] cursor-pointer line-clamp-1"> <span className="flex items-center gap-[0.7vw]"><BsTwitterX  className="mb-[0.3vw]"/> x.com/narendramodi</span>  <FaExternalLinkAlt className="mb-[0.3vw]"/></Link>
              <Link to='https://www.instagram.com/ashishchanchlani/?hl=en' target="_blank" className="w-full border border-[#272928] rounded-lg hover:border-[#10b98140] focus:border-[#10b98140] px-[1vw] py-[0.7vw] text-[1.2vw] bg-[#1e2020] text-[#9e9e9e] flex items-center justify-between transition-all duration-300 hover:text-[#10b74d] cursor-pointer line-clamp-1"> <span className="flex items-center gap-[0.7vw]"><GrInstagram className="mb-[0.3vw]"/> instagram.com/ashishchanchlani</span>  <FaExternalLinkAlt className="mb-[0.3vw]"/></Link>
              <Link to='https://discord.com/invite/programming' target="_blank" className="w-full border border-[#272928] rounded-lg hover:border-[#10b98140] focus:border-[#10b98140] px-[1vw] py-[0.7vw] text-[1.2vw] bg-[#1e2020] text-[#9e9e9e] flex items-center justify-between transition-all duration-300 hover:text-[#10b74d] cursor-pointer line-clamp-1"> <span className="flex items-center gap-[0.7vw]"><FaDiscord  className="mb-[0.3vw]"/> discord.com/programming</span>  <FaExternalLinkAlt className="mb-[0.3vw]"/></Link>
           </div>

        </div>

        <div className="w-[60%] h-full border-[1px] border-[#1d2221] px-6 py-4 gap-6 flex flex-col rounded-lg bg-[#111716]">
           <p className="text-[1.6vw] text-[#d4d4d8] flex items-center gap-3">Let's Discuss Your Project <TiMessages className="mb-[0.4vw]"/></p>
           <form action="" className="flex flex-col gap-8 justify-between h-full " onSubmit={handleSubmit}>
              <div className="w-full shrink-0 relative ">
                <input type="text" placeholder="Your Name *" onChange={(elem)=>{ setMessage({...message, name : elem.target.value}); elem.target.value ? setNameErr(false) : setNameErr(true)}} value={message.name} className={`w-full  border  rounded-lg  ${nameErr? ' border-[#c33434] focus:border-[#c33434] hover:border-[#c33434]' : ' border-[#272928] hover:border-[#10b98140] focus:border-[#10b98140]'} transition-all duration-300 outline-none px-[1vw] py-[0.7vw] text-[1.2vw] bg-[#1e2020] text-[#d4d4d8] placeholder:text-[#9e9e9e]`}/>
                {nameErr?(<p className="text-[#c33434] text-[1.1vw] absolute bottom-[-22px] left-[0.3vw]">Name is required</p>) :''}  
              </div>
              
              <div className="w-full shrink-0 relative ">
                <input type="email" placeholder="Your Email *" onChange={(elem)=>{ setMessage({...message, email : elem.target.value}); elem.target.value ? setEmailErr(false) : setEmailErr(true)}} value={message.email}  className={`w-full  border  rounded-lg  ${emailErr? ' border-[#c33434] focus:border-[#c33434] hover:border-[#c33434]' : ' border-[#272928] hover:border-[#10b98140] focus:border-[#10b98140]'} transition-all duration-300 outline-none px-[1vw] py-[0.7vw] text-[1.2vw] bg-[#1e2020] text-[#d4d4d8] placeholder:text-[#9e9e9e]`} />
                {emailErr?(<p className="text-[#c33434] text-[1.1vw] absolute bottom-[-22px] left-[0.3vw]">Email is required</p>) :''}
              </div>

              <div className="w-full h-full relative">
                <textarea name="your-message" placeholder="Your Message *" onChange={(elem)=>{setMessage({...message, message : elem.target.value}); elem.target.value ? setMessageErr(false) : setMessageErr(true)}} value={message.message}  className={`w-full h-full resize-none  border  rounded-lg  ${messageErr? ' border-[#c33434] focus:border-[#c33434] hover:border-[#c33434]' : ' border-[#272928] hover:border-[#10b98140] focus:border-[#10b98140]'} transition-all duration-300 outline-none px-[1vw] py-[0.7vw] text-[1.2vw] bg-[#1e2020] text-[#d4d4d8] placeholder:text-[#9e9e9e]`}></textarea>
                {messageErr?(<p className="text-[#c33434] text-[1.1vw] absolute bottom-[-22px] left-[0.3vw]">Message is required</p>) :''}
              </div>

              <button  className={`${loading ? 'pointer-events-none cursor-default' : 'pointer-events-auto' } ${messageState === 'failed' ? 'border-[#c33434] text-[#c33434] hover:border-[#c33434] focus:border-[#c33434] hover:text-[#c33434]' : ''} ${messageState === 'success' ? 'pointer-events-none cursor-default border-[#272928] hover:border-[#10b74d] focus:border-[#10b74d] hover:text-[#10b74d] text-[#10b74d]' : ''} ${messageState === 'idle' ? 'border-[#272928] hover:border-[#10b74d] focus:border-[#10b74d] hover:text-[#10b74d] text-[#d4d4d8]' : ''}   select-none relative w-max px-[1vw] py-[1vw] overflow-hidden border rounded-lg    outline-none  transition-all duration-300 bg-[#1e2020] cursor-pointer`}>
                 <div className="p-0 h-full min-w-[10vw] text-[1.2vw] z-[3]  flex items-center justify-center gap-[0.5vw] cursor-pointer">
                  {
                   !loading ? buttonMgs : <span className="flex items-center gap-[0.5vw]">Sending  <FaSpinner className="animate-spin text-[1.2vw]" /> </span>   
                  }
                 
                 </div>
                 <div className={`absolute h-full  top-0 left-[-45%] shadowAnimation  ${messageState === 'failed' ? 'shadow-[0px_0px_20px_30px_rgba(195,52,52,0.42)]' : 'shadow-[0px_0px_20px_30px_rgba(16,183,77,0.42)]'}`}></div>
              </button>
           </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;


