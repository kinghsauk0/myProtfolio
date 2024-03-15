import React from "react";
import backgroundImage from "../assets/bg.jpg";
//import Lottie from 'lottie-react';
import Lottie from "lottie-react";
import ani from "../assets/ani.json";
import profile from "../assets/profile.jpeg"
import git from "../assets/github.png"
import lin from "../assets/linkedin.png"


function Home() {
  return (
    <main
      className="w-scrren h-screen flex justify-center items-center flex-wrap"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set background image using inline style
        backgroundSize: "cover",
        // Add any other background properties as needed
      }}
    >
      <div className="grid grid-cols-2 h-[550px] w-[550px] m-[20px]">
        <div className="w-full h-full grid grid-cols-1 grid-rows-3">
          <div className="flex flex-wrap justify-center items-center">
            <h1 className=" text-wrap text-[#FFD700] text-[50px]">
              Hi There,<br/>
              <h1 className=" text-wrap text-[#FFD700] text-[40px]">
              I'm Kingshuk
            </h1>
            </h1>
          </div>
          <div className="flex flex-wrap justify-center items-center">
          <h1 className=" text-wrap text-green-700 text-[30px]">
              I'm Web Developer!
            </h1>
          </div>
          <div className="w-full h-full grid grid-cols-1 grid-rows-3 gap-[10px]">
            <div className="bg-white border border-black border-10 flex flex-wrap justify-around items-center">
              <a
              href="https://github.com/kinghsauk0"
              target="_blank"
              rel="noreferrer"
              >
              <img src={git}className="w-[50px] h-[50px] " alt="logo"/>
              </a>
            
            </div>

            <div className="bg-white border border-black border-10 flex flex-wrap justify-around items-center">
            <a
              href="https://linkedin.com/in/kingshuk-mondal-965184285/"
              target="_blank"
              rel="noreferrer"
              >
                <img src={lin}className="w-[50px] h-[50px] " alt="logo"/>
              </a>
            
            </div>

          </div>
        </div>
        <div className="w-full h-full grid grid-cols-1 grid-rows-2 ">
        <div className="flex flex-wrap justify-center items-center">
        <img src={profile}className="w-[160px] h-[160px] rounded-[80px]  border border-[#FFD700] border-[5px]" alt="logo"/>
        </div>
        <div className="flex flex-wrap justify-center items-center">
        <Lottie animationData={ani} loop={true}/>
        </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
