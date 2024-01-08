import React from "react";
import Img from "../images/illustration-hero.svg"


const Hero = () =>{
    return(
        <div className="w-full h-full py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid gap-4  md:grid-cols-2 ">
                <div className="flex flex-col justify-center gap-4 max-sm:text-center max-sm:items-center">
                    <h1 className="text-[48px] text-[#242A45] font-medium tracking-[-0.15px] max-sm:text-[30px]">A Simple Bookmark Manager</h1>
                    <p className="text-[18px] text-[#242A45] font-normal opacity-50 max-sm:text-[15px]">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="flex gap-4">
                        <button className="w-[166px] h-[48px] shadow-md bg-[#5267DF] rounded-md text-14 text-white font-medium tracking-[0.25px] duration-300 ease-in-out hover:bg-white hover:text-[#5267DF] hover:border hover:border-[#5267DF]">Get it on Chrome</button>
                        <button className="w-[166px] h-[48px] shadow-md bg-[#F7F7F7] rounded-md text-14 text-[#242A45] font-medium tracking-[0.25px] duration-300 ease-in-out hover:text-[#242A45] hover:border hover:border-[#242A45]">Get it on Firefox</button>
                    </div>
                </div>
                <div className="relative max-sm:order-first">
                    <img className="" src={Img} alt="" />
                    <div className="absolute bottom-0 right-[-30vw] z-[-1] h-[352px] w-[1000px] bg-[#5267DF] rounded-full max-sm:w-[577px] max-sm:h-[203px] max-sm:right-[-80vw]"></div>
                </div>                
            </div>
        </div>
    );
}

export default Hero;