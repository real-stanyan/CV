import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Projects() {
  useGSAP(() => {
    gsap.to("#projects", { paddingTop: 0, duration: 2, delay: 3 });
  }, []);

  return (
    <div id="projects" className="font-reem text-[#f5f5f5] p-8 z-50 pt-[100vh]">
      <h1 className="text-center font-[600] text-[3vw]">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[80%] mx-auto mt-[70px] gap-3">
        {/* sda */}
        <div
          className="bg-[black] rounded-lg overflow-hidden flex flex-col"
          onClick={() =>
            (window.location.href = "https://homeharbor-pwa9.onrender.com")
          }
        >
          <img src={"/projects_cover/home_harbor.png"} alt="home_harbor" />
          <h1 className="self-center text-[1.5vw] font-[300]">Home Harbor</h1>
          {/* stacks */}
          <div className="p-2 gap-2">
            {/* stack */}
            <div className="flex justify-between px-4">
              <span className="text-[1.2vw]">Frontend</span>
              <div className="flex items-center gap-1">
                <img
                  src={"/stack_icons/react.png"}
                  alt="react"
                  className="w-[2vw]"
                />
                <img
                  src={"/stack_icons/tailwindcss.png"}
                  alt="react"
                  className="w-[2vw]"
                />
                <img
                  src={"/stack_icons/three.js.png"}
                  alt="react"
                  className="w-[2vw]"
                />
                <img
                  src={"/stack_icons/redux.png"}
                  alt="react"
                  className="w-[2vw]"
                />
              </div>
            </div>
            {/* stack */}
            <div className="flex justify-between px-4">
              <span className="text-[1.2vw]">Backend</span>
              <div>
                <img
                  src={"/stack_icons/express.js.png"}
                  alt="react"
                  className="w-[2vw]"
                />
              </div>
            </div>
            {/* stack */}
            <div className="flex justify-between px-4">
              <span className="text-[1.2vw]">Database</span>
              <div>
                <img
                  src={"/stack_icons/MongoDB.png"}
                  alt="react"
                  className="w-[2vw]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* sda */}
        <div className="bg-[black] rounded-lg overflow-hidden flex flex-col">
          <img src={"/projects_cover/home_harbor.png"} alt="home_harbor" />
          <h1 className="self-center text-[1.5vw] font-[300]">Home Harbor</h1>
          {/* stacks */}
          <div className="p-2 gap-2">
            {/* stack */}
            <div className="flex justify-between px-4">
              <span className="text-[1.2vw]">Frontend</span>
              <div className="flex items-center gap-1">
                <img
                  src={"/stack_icons/react.png"}
                  alt="react"
                  className="w-[2vw]"
                />
                <img
                  src={"/stack_icons/tailwindcss.png"}
                  alt="react"
                  className="w-[2vw]"
                />
                <img
                  src={"/stack_icons/three.js.png"}
                  alt="react"
                  className="w-[2vw]"
                />
                <img
                  src={"/stack_icons/redux.png"}
                  alt="react"
                  className="w-[2vw]"
                />
              </div>
            </div>
            {/* stack */}
            <div className="flex justify-between px-4">
              <span className="text-[1.2vw]">Backend</span>
              <div>
                <img
                  src={"/stack_icons/express.js.png"}
                  alt="react"
                  className="w-[2vw]"
                />
              </div>
            </div>
            {/* stack */}
            <div className="flex justify-between px-4">
              <span className="text-[1.2vw]">Database</span>
              <div>
                <img
                  src={"/stack_icons/MongoDB.png"}
                  alt="react"
                  className="w-[2vw]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* sda */}
        <div className="bg-[black] rounded-lg overflow-hidden flex flex-col">
          <img src={"/projects_cover/home_harbor.png"} alt="home_harbor" />
          <h1 className="self-center text-[1.5vw] font-[300]">Home Harbor</h1>
          {/* stacks */}
          <div className="p-2 gap-2">
            {/* stack */}
            <div className="flex justify-between px-4">
              <span className="text-[1.2vw]">Frontend</span>
              <div className="flex items-center gap-1">
                <img
                  src={"/stack_icons/react.png"}
                  alt="react"
                  className="w-[2vw]"
                />
                <img
                  src={"/stack_icons/tailwindcss.png"}
                  alt="react"
                  className="w-[2vw]"
                />
                <img
                  src={"/stack_icons/three.js.png"}
                  alt="react"
                  className="w-[2vw]"
                />
                <img
                  src={"/stack_icons/redux.png"}
                  alt="react"
                  className="w-[2vw]"
                />
              </div>
            </div>
            {/* stack */}
            <div className="flex justify-between px-4">
              <span className="text-[1.2vw]">Backend</span>
              <div>
                <img
                  src={"/stack_icons/express.js.png"}
                  alt="react"
                  className="w-[2vw]"
                />
              </div>
            </div>
            {/* stack */}
            <div className="flex justify-between px-4">
              <span className="text-[1.2vw]">Database</span>
              <div>
                <img
                  src={"/stack_icons/MongoDB.png"}
                  alt="react"
                  className="w-[2vw]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* sda */}
        <div className="bg-[black] rounded-lg overflow-hidden flex flex-col">
          <img src={"/projects_cover/home_harbor.png"} alt="home_harbor" />
          <h1 className="self-center text-[1.5vw] font-[300]">Home Harbor</h1>
          {/* stacks */}
          <div className="p-2 gap-2">
            {/* stack */}
            <div className="flex justify-between px-4">
              <span className="text-[1.2vw]">Frontend</span>
              <div className="flex items-center gap-1">
                <img
                  src={"/stack_icons/react.png"}
                  alt="react"
                  className="w-[2vw]"
                />
                <img
                  src={"/stack_icons/tailwindcss.png"}
                  alt="react"
                  className="w-[2vw]"
                />
                <img
                  src={"/stack_icons/three.js.png"}
                  alt="react"
                  className="w-[2vw]"
                />
                <img
                  src={"/stack_icons/redux.png"}
                  alt="react"
                  className="w-[2vw]"
                />
              </div>
            </div>
            {/* stack */}
            <div className="flex justify-between px-4">
              <span className="text-[1.2vw]">Backend</span>
              <div>
                <img
                  src={"/stack_icons/express.js.png"}
                  alt="react"
                  className="w-[2vw]"
                />
              </div>
            </div>
            {/* stack */}
            <div className="flex justify-between px-4">
              <span className="text-[1.2vw]">Database</span>
              <div>
                <img
                  src={"/stack_icons/MongoDB.png"}
                  alt="react"
                  className="w-[2vw]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
