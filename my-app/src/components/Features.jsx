import React from "react";

const Features = () =>{
    return(
        <div className=" gap-6 flex flex-col max-w-[800px] mt-[96px] w-full text-center items-center mx-auto max-sm:max-w-[300px]">
            <h1 className="text-[32px] text-[#242A45] font-medium tracking-[-0.1px] max-sm:text-[24px]">Features</h1>
            <p className="text-[18px] text-[#242A45] font-normal opacity-50 max-sm:text-[15px]">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            <div className="flex justify-between mt-[50px] max-sm:flex-col">
                <button className="w-[240px] h-[49px] border-b text-[18px] text-[#242A45] font-normal opacity-75">Simple Bookmarking</button>
                <button className="w-[240px] h-[49px] border-b text-[18px] text-[#242A45] font-normal opacity-75">Speedy Searching</button>
                <button className="w-[240px] h-[49px] border-b text-[18px] text-[#242A45] font-normal opacity-75">Easy Sharing</button>
            </div>
        </div>
    );
}

export default Features;