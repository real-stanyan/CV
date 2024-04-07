import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ComputersCanvas from "./libs/Computer";

// import React icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./index.css";

function App() {
  useGSAP(() => {
    gsap.to("#intro_slide", { top: "0", duration: 2, delay: 3 });
    gsap.to("#say_hi", { top: "-100vh", duration: 2, delay: 3 });
  }, []);

  useEffect(() => {
    window.onload = function () {
      document.body.classList.add("no-scroll");

      setTimeout(function () {
        document.body.classList.remove("no-scroll");
      }, 6000);
    };
  }, []);

  return (
    <div
      id="intro"
      className="relative w-[100vw] h-[100vh] bg-[#696762] innerShadow"
    >
      {/* say hi */}
      <div
        id="say_hi"
        className="absolute w-full h-full flex justify-center items-center top-0 left-0"
      >
        <div className="text-[7vw] md:text-[5vw] lg:text-[3vw] text-[#f5f5f5] font-reem text-center">
          <h1>Nice to meet you~</h1>
          <h1>Let me introduce my self</h1>
        </div>
      </div>
      {/* slide */}
      <div
        id="intro_slide"
        className="w-full h-full flex flex-col lg:flex-row absolute top-[100vh] left-0 p-4"
      >
        <div className="w-[90%] flex flex-col justify-center items-center text-[5vw] lg:text-[3vw] text-[#f5f5f5] whitespace-nowrap font-IBM font-[400]">
          <h1>I'm Stan Yan.</h1>
          <h1>I'm a Full Stack Developer.</h1>
        </div>
        <ComputersCanvas className="w-[50%] h-[50vh]" />
        <div className="w-[90%] flex flex-col justify-center items-center gap-3 font-IBM">
          <div
            onClick={() =>
              (window.location.href = "https://github.com/real-stanyan")
            }
            className="flex w-[60%] lg:w-[50%] h-[15vw] lg:h-[4vw]  items-center justify-between px-4 bg-[black] rounded-lg text-[#f5f5f5] text-[5vw] lg:text-[1.5vw] hover:opacity-70 cursor-pointer"
          >
            <FaGithub className="text-[6vw] lg:text-[2vw]" />
            <h1>My Github</h1>
          </div>
          <div
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/stan-yan-940075239/")
            }
            className="flex w-[60%] lg:w-[50%] h-[15vw] lg:h-[4vw]  items-center justify-between px-4 bg-[#0a65c2] rounded-lg text-[#f5f5f5] text-[5vw] lg:text-[1.5vw] hover:opacity-70 cursor-pointer"
          >
            <FaLinkedin className="text-[6vw] lg:text-[2vw]" />
            <h1>My Linkedin</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
