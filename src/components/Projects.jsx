import React, { useState, useEffect } from "react";

// import GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import projects from "../libs/projects_data.json";
console.log("🚀 ~ projects:", projects);

export default function Projects() {
  useGSAP(() => {
    gsap.to("#projects", { paddingTop: 0, duration: 2, delay: 3 });
  }, []);

  return (
    <div id="projects" className="font-reem text-[#f5f5f7] p-8 z-50 pt-[100vh]">
      <h1 className="text-center font-[600] text-[6vw] md:text-[4vw] lg:text-[3vw]">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[80%] mx-auto mt-[30px] lg:mt-[70px] gap-3">
        {/* Projects */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1d1d1f] rounded-lg overflow-hidden flex flex-col h-[60vw] lg:h-[20vw] md:hover:-translate-y-2 md:hover:shadow-xl duration-100"
            onClick={() => window.open(project.url, "_blank")}
          >
            <img src={project.image} alt={project.name} />
            <h1 className="self-center text-[4vw] md:text-[3vw] lg:text-[1.5vw] font-[600]">
              {project.name}
            </h1>
            <div className="p-2 gap-2">
              {project.stacks.map((stack) => (
                <div
                  key={stack.category}
                  className="flex justify-between font-[200] px-4"
                >
                  <span className="text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw]">
                    {stack.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {stack.technologies.map((tech) => (
                      <img
                        key={tech.name}
                        src={tech.icon}
                        alt={tech.name}
                        className="w-[4vw] md:w-[3vw] lg:w-[2vw]"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* in_Progress */}
        <div className="bg-[#1d1d1f] rounded-lg overflow-hidden flex justify-center items-center h-[60vw] lg:h-[20vw]">
          <img
            src={"/images/in_progress.png"}
            alt="home_harbor"
            className="w-[50%]"
          />
        </div>
      </div>
    </div>
  );
}
