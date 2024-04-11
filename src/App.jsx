// export default App;
import { useEffect } from "react";

// import Components
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  useEffect(() => {
    // 页面加载时滚动到顶部
    window.scrollTo(0, 0);
  }, []); // 依赖数组为空，意味着此副作用仅在组件挂载时运行

  return (
    <div className="max-w-[100vw] bg-[#696762] innerShadow">
      <Intro />
      <Projects />
      <Experience />
      <Education />
      <SpeedInsights />
    </div>
  );
}
