import React from "react";

// import GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import education from "../libs/education_data.json";

export default function Education() {
  useGSAP(() => {
    gsap.to("#education", { paddingTop: 0, duration: 2, delay: 1 });
  }, []);
  return (
    <div
      id="education"
      className="font-reem text-[#f5f5f7] p-2 lg:p-8 z-50 pt-[100vh] mt-[30px] lg:mt-[70px] pb-14"
    >
      <h1 className="text-center font-[600] text-[6vw] md:text-[4vw] lg:text-[3vw]">
        Education
      </h1>
      <div className="max-w-[90vw] mx-auto flex flex-col items-center gap-4 mt-[30px] lg:mt-[70px]">
        {education.map((item) => (
          <div key={item.id} className="flex items-center gap-8">
            <h1 className="text-[2vw] w-[30%] whitespace-nowrap">
              {item.period}
            </h1>
            <img
              src={item.image}
              alt="uts"
              className="w-[12vw] h-[12vw] lg:w-[8vw] lg:h-[8vw] rounded-full object-cover"
            />
            <h1 className="text-[2vw] flex-1 whitespace-nowrap">
              {item.degree}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
