import React from "react";

// import GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import experiences from "../libs/experience_data.json";

export default function Experience() {
  useGSAP(() => {
    gsap.to("#experience", { paddingTop: 0, duration: 2, delay: 3 });
  }, []);

  return (
    <div
      id="experience"
      className="font-reem text-[#f5f5f7] p-2 lg:p-8 z-50 pt-[100vh] mt-[30px] lg:mt-[70px]"
    >
      <h1 className="text-center font-[600] text-[6vw] md:text-[4vw] lg:text-[3vw]">
        My Experience
      </h1>
      <div className="mt-[30px] lg:mt-[70px]">
        <div className="w-[20vw] flex flex-col border-r-4 gap-4">
          {experiences.map((item) => (
            <div key={item.id} className="flex flex-col w-[100vw] lg:w-[90vw]">
              <div className="flex justify-between items-center pl-0 lg:pl-[1vw] pr-[3vw] lg:pr-[10vw] whitespace-nowrap text-[#1d1d1f] font-extrabold ">
                <h1 className="text-[2vw] lg:text-[2vw]">{item.period}</h1>
                <h1 className="text-[2.5vw] lg:text-[2vw]">{item.position}</h1>
              </div>
              <hr className="w-full mb-[3vw]" />
              <ul className="text-[3vw] lg:text-[2vw] pl-[25vw] pr-[5vw]">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
