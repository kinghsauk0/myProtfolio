import React from "react";
import frist from "../assets/photo-1.jpg";
import sec from "../assets/photo-2.jpg"
import thr from "../assets/photo-3.jpg"

function About() {
  return (
    <main className=" grid grid-cols-1 grid-rows-3 w-full h-full">
      <div className="bg-blue-500 grid grid-cols-2">
        <div className="bg-[#FFD700] flex justify-center items-center p-[20px]">
          <p className="text-20 text-black text-wrap">
            Hello, I'm Kingshk, a web developer passionate about creating
            innovative and user-friendly websites. Explore my portfolio and
            projects to see examples of my work. Feel free to contact me for
            collaborations or inquiries.
          </p>
        </div>

        <div className="bg-black flex justify-center items-center">
          <img
            src={frist}
            className="w-[160px] h-[160px] rounded-[80px]  border-[#FFD700] border-[5px]"
            alt="logo"
          />
        </div>
      </div>

      <div class="bg-green-500  grid grid-cols-3">
      <div className="bg-black flex justify-center items-center">
          <img
            src={sec}
            className="w-[160px] h-[160px] rounded-[80px]  border-[#FFD700] border-[5px]"
            alt="logo"
          />
        </div>

        <div className="bg-white"></div>

        <div className="bg-[#FFD700] flex justify-center items-center p-[20px]">
          <p className="text-20 text-black text-wrap">
            Web developers are professionals who specialize in the creation,
            maintenance, and optimization of websites and web applications. They
            possess a diverse skill set that includes proficiency in various
            programming languages, such as HTML, CSS, and JavaScript, as well as
            frameworks and libraries like React, Angular, and Vue.js.
          </p>
        </div>
      </div>

      <div className="bg-red-500 grid grid-cols-2">
        <div className="bg-[#FFD700] flex justify-center items-center p-[20px]">
          <p className="text-20 text-black text-wrap">
            Web developers often collaborate closely with designers, content
            creators, and other stakeholders to bring projects to life. They may
            work in various industries, including technology, e-commerce,
            finance, healthcare, and entertainment. Continuous learning and
            staying up-to-date with the latest trends and technologies are
            essential for web developers to remain competitive in the field.
          </p>
        </div>

        <div className="bg-black flex justify-center items-center">
          <img
            src={thr}
            className="w-[160px] h-[160px] rounded-[80px]  border-[#FFD700] border-[5px]"
            alt="logo"
          />
        </div>
      </div>
    </main>
  );
}

export default About;
