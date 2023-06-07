import React from "react";

const Hero = ({dark}) => {
  return (
    <div>
      <div className="my-11 mx-8 px-8">
        <div className="text-[#4fa6a4] flex flex-row  justify-around items-center sm:gap-2 gap-4">
          <div className="flex flex-col">
            <span className=" lg:text-[40px] sm:text-[14] whitespace-nowrap">0.6 %</span>
            <span className="text-[#63666e] lg:text-[20px] sm:text-[8px] xl:[20px] md:text-[10px] text-[7px] whitespace-nowrap">5 Mins</span>
          </div>
          <div className="flex flex-col">
            <span className="lg:text-[40px] sm:text-[14] whitespace-nowrap">1.5 %</span>
            <span className="text-[#63666e] lg:text-[20px] sm:text-[8px] xl:[20px] md:text-[10px] text-[7px] whitespace-nowrap" >1 Hour</span>
          </div>
          <div className="flex flex-col text-center  ">
            <span className="text-[#63666e] text-[7px]  sm:text-[10px] md:text-[20px] lg:text-[40px] whitespace-nowrap">Best Price to Trade</span>
             <span className={`${dark?'text-[#e4e5e6]':'text-[#0c0f48]'} text-[20px] md:text-[60px] lg:text-[80px] sm:text-[22px] font-[400] whitespace-nowrap`}>₹ 24,14,385</span>
            <span className="text-[#63666e] lg:text-[20px] sm:text-[8px] xl:[20px] md:text-[10px] text-[7px]">Average BTC/INR net price including commission</span>
          </div>
          <div className="flex flex-col">
            <span className="lg:text-[40px] sm:text-[14] text-[14px] whitespace-nowrap">7.21 %</span>
            <span className="text-[#63666e] lg:text-[20px] sm:text-[8px] xl:[20px] md:text-[10px] text-[7px]">1 Day</span>
          </div>
          <div className="flex flex-col">
            <span className="lg:text-[40px] sm:text-[14] whitespace-nowrap">15.26 %</span>
            <span className="text-[#63666e] lg:text-[20px] sm:text-[8px] xl:[20px] md:text-[10px] text-[7px] whitespace-nowrap">7 Days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
