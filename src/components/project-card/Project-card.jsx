import './Project-card.css'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";


const Project_card = () => {


    return (
        <div className={` h-[30vh] w-[31%] border border-[#27272a] flex flex-col shadow-white-light rounded-lg bg-[#18181b] scaleup-animation overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[101%] hover:border-[#64f196] group`}>
            <div className="header w-full h-[17%]  bg-[#27272a] px-[3%] py-[1%] flex items-center justify-between text-[#d4d4d8] text-[1.25vw]">
                <div className='flex items-center gap-[0.6vw] w-[70%] group-hover:text-[#64f196]'><FaGithub className=' mb-[0.2vw]' /><p className='line-clamp-1'>E-Commerce Website</p>  <FaExternalLinkAlt className=' mb-[0.2vw] text-[1vw]' /></div>
                <div className=' text-[#7c7c7c] text-[1vw] flex items-center justify-center'>12-04-2025</div>
            </div>
            <main className='grow-1 px-[1vw] py-[0.8vw] flex justify-between flex-col gap-[1vw]'>
              <p className='text-[1.2vw] font-[300] leading-[1.35vw] overflow-hidden grow-1  line-clamp-7 text-[#cecece]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui fugit, omnis impedit dolore alias, optio magnam, repellat voluptas excepturi saepe voluptates suscipit ratione eos eaque mollitia. Minus, quidem exercitationem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui fugit, omnis impedit dolore alias, optio magnam, repellat voluptas excepturi saepe voluptates suscipit ratione eos eaque mollitia. Minus, quidem exercitationem.
              </p>
              <div className='flex w-full items-center justify-end'>
                <button className='text-[0.9vw] border-[#cecece] text-[#cecece] border rounded-xl group-hover:text-[#64f196] group-hover:border-[#64f196]  cursor-pointer px-[0.7vw] py-[0.2vw] flex gap-[0.2vw] items-center'>Read more <TiArrowRight className='text-[1.2vw]'/></button>
              </div>
            </main>

        </div>

    )
}

export default Project_card