import React,{useState} from "react";
import FeaBox from "./FeaBox";
import contacts from "./contacts";



const Features = () =>{
    const [selectedFeature, setSelectedFeature] = useState(0);

    const handleButtonClick = (feature) => {
        setSelectedFeature(feature);
    };
    return(
        <div className=" gap-6 flex flex-col max-w-[1400px] mt-[96px] w-full text-center items-center mx-auto max-sm:max-w-[300px]">
            <h1 className="text-[32px] text-[#242A45] font-medium tracking-[-0.1px] max-sm:text-[24px]">Features</h1>
            <p className="max-w-[700px] text-[18px] text-[#242A45] font-normal opacity-50 max-sm:text-[15px]">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            <div className="flex justify-between mt-[50px] max-sm:flex-col">
                <button onClick={() => handleButtonClick(0)} className={`w-[240px] h-[49px] border-b text-[18px] text-[#242A45] font-normal ${selectedFeature === 0 ? 'border-[#FA5959]' : 'opacity-75'}`}>Simple Bookmarking</button>
                <button onClick={() => handleButtonClick(1)} className={`w-[240px] h-[49px] border-b text-[18px] text-[#242A45] font-normal ${selectedFeature === 1 ? 'border-[#FA5959]' : 'opacity-75'}`}>Speedy Searching</button>
                <button onClick={() => handleButtonClick(2)} className={`w-[240px] h-[49px] border-b text-[18px] text-[#242A45] font-normal ${selectedFeature === 2 ? 'border-[#FA5959]' : 'opacity-75'}`}>Easy Sharing</button>
            </div>         
            <FeaBox
                img={contacts[selectedFeature].imgURL}
                text1={contacts[selectedFeature].text1}
                text2={contacts[selectedFeature].text2}
            />          
        </div>
    );
}

export default Features;