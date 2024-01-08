import React from "react";

const FeaBox = (props)=>{
    return(
        <div>
             <div className="w-full h-full py-16 px-4">
                <div className="mx-auto grid  md:grid-cols-2 gap-8">
                    <div className="relative">
                        <img className="" src={props.img} alt="qwe" />
                        <div className="absolute top-20 left-[-30vw] z-[-1] h-[352px] w-[1000px] bg-[#5267DF] rounded-full max-sm:w-[577px] max-sm:h-[203px] max-sm:left-[-90vw] max-sm:top-0"></div>
                    </div>   
                    <div className="flex flex-col justify-center gap-4 md:text-left max-sm:text-center max-sm:items-center">
                        <h1 className="text-[48px] text-[#242A45] font-medium tracking-[-0.15px] max-sm:text-[30px]">{props.text1}</h1>
                        <p className="text-[18px] text-[#242A45] font-normal opacity-50 max-sm:text-[15px]">{props.text2}</p>
                        <div className="flex gap-4">
                            <button className="w-[166px] h-[48px] shadow-md bg-[#5267DF] rounded-md text-14text-white font-medium tracking-[0.25px] duration-300 ease-in-out hover:bg-white hover:text-[#5267DF] hover:border hover:border-[#5267DF]">More info</button>                            
                        </div>
                    </div>                                 
                </div>
            </div>
        </div>
    );
}

export default FeaBox;