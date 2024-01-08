import React, { useState } from "react";

const Sign = ()=>{
    const [formData, setFormData] = useState(false);
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleButtonClick = () => {
        const emailValue = document.getElementById('emailInput').value;
        if (!validateEmail(emailValue)) {
            setFormData(true);
        } else {
            setFormData(false);
        }
    };
    return(
        <div className="flex flex-col w-full h-[360px] bg-[#5267DF] mt-[10rem] justify-between items-center py-16 px-4">
            <p className="text-[13px] text-[#FFF] font-medium tracking-[5px] max-sm:text-[12px]">35,000+ ALREADY JOINED</p>
            <h1 className="text-[32px] text-[#FFF] font-medium tracking-[-0.1px] max-sm:text-[24px]">Stay up-to-date with what we’re doing</h1>
            <div className="flex gap-4 max-sm:flex-col">
                <input id="emailInput" className={`w-[300px] h-[48px] rounded-md placeholder:pl-[14px] ${
                        formData? 'border border-red-500' : ''}`} type="text" placeholder="Enter your email address" />
                <button onClick={handleButtonClick} className="w-[126px] h-[48px] shadow-md bg-[#FA5959] rounded-md text-14 text-[#FFF] font-medium tracking-[0.25px] duration-300 ease-in-out hover:bg-[#FFF] hover:text-[#FA5959] hover:border hover:border-[#FA5959] max-sm:w-full">Contact Us</button>
            </div>
        </div>
    );
}

export default Sign;