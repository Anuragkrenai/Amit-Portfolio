import "./Home.css";
const Home = () => {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center  ">
      <div className="mainContainer h-[90%] w-[85%]  rounded-2xl overflow-hidden">
        <div className="header bg-[#111a16] h-[14%] flex items-center justify-between px-10 ">
          <div>
            <p className="flex items-end gap-3 text-[14px] text-[#9f9fa8]">
              Hi, I am
              <h3 className="text-[28px] text-[#fff] font-[600] leading-none">
                Amit Yadav
              </h3>{" "}
              <span className="text-[18px] transition-all duration-300 ">
                👋
              </span>
            </p>
            <p className="text-[14px] mt-2 text-[#9f9fa8]">
              Full Stack Developer crafting exceptional digital experiences{" "}
              <span className="text-[#64f196]">Krenai Private Limited</span>
            </p>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#9f9fa8] bg-[#1c2121] border-1 border-[#2e3033] rounded-3xl px-4 py-1">
            <div className="flex items-center gap-2 relative border">
              <div className="w-1.5 h-1.5 bg-[#88db9b] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] smallDot"></div>
              <div className="w-1.5 h-1.5 bg-[#2bb84d] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "></div>
            </div>
            Open for collaborations
          </div>
        </div>

        <div className="main bg-[#111111] h-[86%]"></div>
      </div>
    </div>
  );
};

export default Home;
