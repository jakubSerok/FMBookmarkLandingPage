import React,{useState} from "react";
import {AiOutlineClose,AiOutlineMenu}  from "react-icons/ai";
import Logo from "../images/logo-bookmark.svg"
import{    
    FaFacebookSquare,    
    FaTwitterSquare,
}from "react-icons/fa"

const NavBar =()=>{
    const [nav,setNav] =useState(true);

    const handleNav =()=>{
        setNav(!nav);
    }
    return(
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <img src={Logo} alt="/" />
            <ul className="hidden md:flex items-center">
                <li className="p-4 text-13 leading-17 font-normal text-[#242A45] hover:text-[#FA5959] cursor-pointer">FEATURES</li>
                <li className="p-4 text-13 leading-17 font-normal text-[#242A45] hover:text-[#FA5959] cursor-pointer">PRICING</li>
                <li className="p-4 text-13 leading-17 font-normal text-[#242A45] hover:text-[#FA5959] cursor-pointer">CONTACT</li>
                <li className="p-4"><button className="w-[111px] h-[40px] bg-[#FA5959] rounded-md text-white shadow-md duration-300 ease-in-out hover:bg-white hover:text-[#FA5959] hover:border hover:border-[#FA5959]">LOGIN</button></li>                
            </ul>
            <div onClick={handleNav} className="block cursor-pointer md:hidden">
                {!nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}                
            </div>
            <div className={!nav?'fixed left-0 top-0 w-full h-full z-10 bg-[#242A45] bg-opacity-95 text-center ease-in-out duration-500':'fixed left-[-100%] '}>
                
                    <div className="flex justify-between px-4 py-[36px] ">
                        <img src={Logo} alt="/" />
                        <AiOutlineClose  onClick={handleNav} className="cursor-pointer" size={20}/>
                    </div>            
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-white border-t  border-opacity-15 text-20 font-normal text-white tracking-[2.308px]  cursor-pointer">Home</li>
                        <li className="p-4 border-b border-white border-opacity-15 text-20 font-normal text-white tracking-[2.308px] cursor-pointer">Company</li>
                        <li className="p-4 border-b border-white border-opacity-15 text-20 font-normal text-white tracking-[2.308px] cursor-pointer">Resources</li>
                        <li><button className="w-[90%] h-[48px] border rounded-md border-white text-20 font-normal text-white tracking-[2.308px] m-4 duration-300 ease-in-out hover:bg-white hover:text-black">Login</button></li>                    
                    </ul>
             
                 <div className="flex  w-full justify-center items-center gap-4">
                    <FaFacebookSquare size={30} className="text-white"/>
                    <FaTwitterSquare size={30}  className="text-white" />
                </div>
            </div>
           
        </div>
    );
}

export default NavBar;