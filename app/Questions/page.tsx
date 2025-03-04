"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const questions=[
  {
    question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },{
    question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  }
]

const page = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleInputChange = (index: number, value: string) => {
    const updatedAnswers = [...answers]; 
    updatedAnswers[index] = value; 
    setAnswers(updatedAnswers);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    console.log("Form submitted with:", answers);
  };
  return (
    <>
      <div className="w-full h-full flex flex-col items-center mt-1 md:mt-10 gap-5">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/Question.png" // Use an image from /public folder
            alt="treasureBox"
            width={40} // Set image width
            height={100} // Set image height
            className=""
          />
          <p className="font-[unlock] text-3xl drop-shadow-lg">Questions</p>
        </div>
        <div className="w-full lg:w-[65%] h-screen  bg-[url('/assets/map.svg')]  bg-cover md:bg-contain bg-top bg-no-repeat flex justify-center ">
          <img
            src="/assets/pana.png"
            alt="treasureBox"
            className="absolute md:w-[200px] lg:w-[250px] hidden md:bottom-[-60px] md:right-[0px]  md:block lg:block lg:bottom-[-120px] lg:right-[250px]  md:display"
          />
          <div className=" w-full  py-10 flex flex-col items-center p-4 md:pl-3 gap-9">
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-[85%] lg:w-[80%] flex flex-col items-start gap-7 md:gap-5"
            >
              {questions.map((question, idx) => {
                return (
                  <div key={idx}>
                    <label className="flex flex-col gap-6">
                      <p className="text-[16px] font-semibold md:text-[16px] lg:text-xl font-poppins drop-shadow-lg text-amber-950">
                        ⚔️{question.question}
                      </p>
                      <textarea
                        value={answers[idx]}
                        onChange={(e) => handleInputChange(idx, e.target.value)}
                        placeholder="Write an answer here.."
                        className="w-full md:max-h-[50px] md:text-sm lg:text-lg md:p-1 lg:min-h-[100px] resize-none border-2 border-[#A28F70]  outline-[#423a2eb6] rounded-lg p-3 lg:p-2"
                      ></textarea>
                    </label>
                  </div>
                );
              })}
              <button
                type="submit"
                className="p-3 px-10 text-xl font-[unlock] text-slate-100 rounded-full bg-[#43392c] hover:bg-[#332b22] m-auto mt-7 md:mt-10 cursor-pointer shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default page