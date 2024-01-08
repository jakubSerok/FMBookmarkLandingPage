import React from "react";
import Img1 from "../images/logo-chrome.svg";
import Img2 from "../images/logo-firefox.svg";
import Img3 from "../images/logo-opera.svg";
import Dotte from "../images/bg-dots.svg";


const Extension = ()=>{
    return(        
            <div className=" gap-6 flex flex-col max-w-[1400px] mt-[96px] w-full text-center items-center mx-auto max-sm:max-w-[300px]">
                <h1 className="text-[32px] text-[#242A45] font-medium tracking-[-0.1px] max-sm:text-[24px]">Download the extension</h1>
                <p className="max-w-[700px] text-[18px] text-[#242A45] font-normal opacity-50 max-sm:text-[15px]">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>                       
            
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="h-[371px] w-[280px] shadow-xl flex flex-col p-4 pt-8 items-center justify-between rounded-md">
                    <img className="w-20" src={Img1} alt="" />
                    <h1 className="text-[20px] text-[#242A45] font-medium tracking-[0.25px] ">Add to Chrome</h1>
                    <p className="text-[15px] text-[#242A45] font-normal opacity-50">Minimum version 62</p>
                    <img src={Dotte} alt="" />
                    <button className="w-[80%] h-[48px] shadow-md bg-[#5267DF] rounded-md text-14 text-white font-medium tracking-[0.25px] duration-300 ease-in-out hover:bg-white hover:text-[#5267DF] hover:border hover:border-[#5267DF]">Add & Install Extension</button>
                </div>
                <div className="h-[371px] w-[280px] my-10 shadow-xl flex flex-col p-4 pt-8 items-center justify-between rounded-md">
                    <img className="w-20" src={Img2} alt="" />
                    <h1 className="text-[20px] text-[#242A45] font-medium tracking-[0.25px] ">Add to Chrome</h1>
                    <p className="text-[15px] text-[#242A45] font-normal opacity-50">Minimum version 56</p>
                    <img src={Dotte} alt="" />
                    <button className="w-[80%] h-[48px] shadow-md bg-[#5267DF] rounded-md text-14 text-white font-medium tracking-[0.25px] duration-300 ease-in-out hover:bg-white hover:text-[#5267DF] hover:border hover:border-[#5267DF]">Add & Install Extension</button>
                </div>
                <div className="h-[371px] w-[280px] my-20 shadow-xl flex flex-col p-4 pt-8 items-center justify-between rounded-md">
                    <img className="w-20" src={Img3} alt="" />
                    <h1 className="text-[20px] text-[#242A45] font-medium tracking-[0.25px] ">Add to Chrome</h1>
                    <p className="text-[15px] text-[#242A45] font-normal opacity-50">Minimum version 46</p>
                    <img src={Dotte} alt="" />
                    <button className="w-[80%] h-[48px] shadow-md bg-[#5267DF] rounded-md text-14 text-white font-medium tracking-[0.25px] duration-300 ease-in-out hover:bg-white hover:text-[#5267DF] hover:border hover:border-[#5267DF]">Add & Install Extension</button>
                </div>
            </div>
       </div>
    );
}

export default Extension;