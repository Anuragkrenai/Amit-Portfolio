import React from 'react'
import './Marquee.css'

import { useState} from 'react'

const Marquee = () => {

    const [items, setItems] = useState([
        "React Js",
        "Node Js",
        "Mongo Db",
        "Express Js",
        "Next Js",
        "Tailwind Css",
        "Html",
        "Css",
        "Javascript",
        "Typescript",
        "Python",
        "Java",
        "C++",
        "C#",
      ]);
    


  return (
    <div className="firstMarquee  flex items-center shrink-0 gap-[1.5vw] ">
        {items.map((item, index) => (
            <div key={index} className="flex items-center gap-[1.5vw] shrink-0 ">
                <div className="h-[1.5vw] w-[1.5vw] mb-[0.3vw] flex  items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="#a3a3a3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hexagon w-5 h-5 rotate-[30deg]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                </div>
                <span className="text-[1.4vw] text-[#a3a3a3] font-[600]">{item}</span>
            </div>
        ))}
        {items.map((item, index) => (
            <div key={index} className="flex items-center gap-[1.5vw] shrink-0 ">
                <div className="h-[1.5vw] w-[1.5vw] mb-[0.3vw] flex  items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="#a3a3a3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hexagon w-5 h-5 rotate-[30deg]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                </div>
                <span className="text-[1.4vw] text-[#a3a3a3] font-[600]">{item}</span>
            </div>
        ))}


  </div>
  )
}

export default Marquee