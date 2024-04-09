import React from "react";

import experiences from "../libs/experience_data.json";

export default function Experience() {
  const l = "{";
  const r = "}";

  return (
    <div
      id="experience"
      className="font-reem text-[#f5f5f7] text-[2vw] md:text-[1.5vw] lg:text-[1vw] p-2 lg:p-8 z-50 mt-[30px] lg:mt-[70px]"
    >
      <h1 className="text-center font-[600] text-[6vw] md:text-[4vw] lg:text-[3vw]">
        My Experience
      </h1>
      <div className="w-[90%] md:w-[80%] lg:w-[70%] flex flex-col bg-[#282c34] px-2 py-1 lg:px-8 lg:py-4 rounded-lg mx-auto">
        {/* 1 */}
        <code className="text-[#c678dd]">
          const <span className="text-[#61afef]">fetchExperienceData</span> =
          async () =&gt; {l}
        </code>
        {/* 2 */}
        <code className="text-[#c678dd] pl-[2vw]">
          const <span className="text-[#e5c07b]">res</span>
          <span className="text-[#56b6c2]"> =</span> await
          <span className="text-[#56b6c2]"> fetch (</span>
          <span className="text-[#98c379]">`/api/get-experience`</span>
          <span className="text-[#56b6c2]">)</span>
          <span className="text-[#abb2bf]">;</span>
        </code>
        {/* 3 */}
        <code className="text-[#c678dd] pl-[2vw]">
          const <span className="text-[#e5c07b]">data</span>
          <span className="text-[#56b6c2]"> =</span> await
          <span className="text-[#e5c07b]"> res</span>
          <span className="text-[#abb2bf]">.</span>
          <span className="text-[#61afef]">json</span>
          <span className="text-[#56b5c1]">()</span>
          <span className="text-[#abb2bf]">;</span>
        </code>
        {/* 4 */}
        <code className="text-[#c678dd] pl-[2vw]">
          <span className="text-[#e5c07b]">console</span>
          <span className="text-[#abb2bf]">.</span>
          <span className="text-[#61afef]">log</span>
          <span className="text-[#56b5c1]">
            (<span className="text-[#e5c07b]">data</span>)
          </span>
          <span className="text-[#abb2bf]">;</span>
        </code>
        {/* 5 */}
        <code className="text-[#e3e3e3] pl-[2vw] flex justify-between">
          <span>🚀 Array({experiences.length})</span>
          <span className="underline text-[#a8c7fa]">App.js:4</span>
        </code>
        {experiences.map((item) => (
          <div key={item.id} className="flex flex-col pl-[2vw] text-[#7cacf8]">
            <code>{item.id}:</code>
            <code className="pl-[4vw]">
              position<span className="text-[#e3e3e3]">:</span>
              <span className="text-[#5cd5fb]"> "{item.position}"</span>
            </code>
            <code className="pl-[4vw]">
              period<span className="text-[#e3e3e3]">:</span>
              <span className="text-[#5cd5fb]"> "{item.period}"</span>
            </code>
            <code className="pl-[4vw]">
              details<span className="text-[#e3e3e3]">: </span>
              <span className="text-[#e3e3e3]">
                Array({item.details.length})
              </span>
              {item.details.map((item, i) => (
                <div key={i}>
                  <code>
                    <span>{i}</span>
                    <span className="text-[#e3e3e3]">:</span>
                    <span className="text-[#5cd5fb]"> "{item}"</span>
                  </code>
                </div>
              ))}
            </code>
          </div>
        ))}
        {/* 5 */}
        <code className="text-[#c678dd]">
          {r}
          <span className="text-[#abb2bf]">;</span>
        </code>
      </div>
    </div>
  );
}
