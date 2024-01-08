import React from "react";
import Logo from "../images/logo-bookmark.svg"
import{    
    FaFacebookSquare,    
    FaTwitterSquare,
}from "react-icons/fa"


const Foter = ()=>{
    return(
        <div className=" bg-[#242A45] h-24 w-full max-sm:h-[334px]">  
            <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 max-sm:flex-col">
                <div className="flex items-center justify-center  pt-5 max-sm:flex-col">
                    <img src={Logo} alt="/" />    
                    <ul className="md:flex items-center">
                        <li className="p-4 text-13 leading-17 font-normal text-[#FFF] hover:text-[#FA5959] cursor-pointer">FEATURES</li>
                        <li className="p-4 text-13 leading-17 font-normal text-[#FFF] hover:text-[#FA5959] cursor-pointer">PRICING</li>
                        <li className="p-4 text-13 leading-17 font-normal text-[#FFF] hover:text-[#FA5959] cursor-pointer">CONTACT</li>                                   
                    </ul>
                </div>        
                <div className="flex justify-center items-center gap-4">
                        <FaFacebookSquare size={30} className="text-white"/>
                        <FaTwitterSquare size={30}  className="text-white" />
                </div>
            </div>         
                                   
        </div>
    );
}

export default Foter;