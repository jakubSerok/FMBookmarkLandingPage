import React from "react";
import questions from "./FaqQuestions";
import Faq from "./Faq";

const Questions = ()=>{
    return(
        <div className="gap-6 flex flex-col max-w-[1400px] mt-[96px] w-full text-center items-center mx-auto max-sm:max-w-[300px]">
            <h1 className="text-[32px] text-[#242A45] font-medium tracking-[-0.1px] max-sm:text-[24px]">Frequently Asked Questions</h1>
            <p className="max-w-[700px] text-[18px] text-[#242A45] font-normal opacity-50 max-sm:text-[15px]">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
            <div className="flex flex-col gap-0">
                {questions.map((question)=>
                    <Faq
                        title ={question.title}
                        text  ={question.text}
                    />)}
            </div>
            
            <button className="w-[166px] h-[48px] shadow-md bg-[#5267DF] rounded-md text-14 text-white font-medium tracking-[0.25px] duration-300 ease-in-out hover:bg-white hover:text-[#5267DF] hover:border hover:border-[#5267DF]">More info</button>
        </div>
    );
}

export default Questions;