import React,{useState} from "react";
import open from "../images/icon-arrow.svg"



const Faq = (props)=>{
    const [accordionOpen, setAccordionOpen] = useState(false);


    return(
        <div className="flex flex-col w-[540px] min-h-[60px] justify-between items-center border-y border-dotted py-2 gap-6 max-sm:w-[311px]">
            <button className="flex justify-between w-full" onClick={() => setAccordionOpen(!accordionOpen)}>
                <h1 className="hover:text-[#FA5959]">{props.title}</h1>
                <img className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"}`} src={open} alt="" />
            </button>
            <div  className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}>
                <div className="overflow-hidden">{props.text}</div>
            </div>
        </div>

    );

}

export default Faq;