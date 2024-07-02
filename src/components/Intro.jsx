import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import React, { Suspense, useEffect, useState, useRef } from "react";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// import React icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";

import "../index.css";

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);

    // 组件卸载时移除事件监听
    return () => window.removeEventListener("resize", handleResize);
  }, []); // 空依赖数组确保事件监听只被添加一次

  return size;
}

function Intro() {
  const [width, height] = useWindowSize();
  useGSAP(() => {
    gsap.to("#intro_slide", { top: "0", opacity: 1, duration: 2, delay: 1 });
    gsap.to("#say_hi", { top: "-100vh", duration: 2, delay: 1 });
  }, []);

  useEffect(() => {
    let loadedModel = null;
    const canvas = document.getElementById("model");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true, // 添加这个属性
    });
    renderer.setClearColor(0x000000, 0); // 设置透明背景
    // 然后设置大小
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 更柔和的阴影

    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      10000
    );

    const scene = new THREE.Scene();
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // 启用阻尼（惯性）
    controls.dampingFactor = 0.05; // 阻尼系数
    controls.enableZoom = false; // 禁用缩放
    const axesHelper = new THREE.AxesHelper(1);
    scene.add(axesHelper);
    camera.position.z = 70;
    camera.position.y = 60;
    camera.position.x = 0;

    const loader = new GLTFLoader();
    loader.load("/models/mac/scene.gltf", (model) => {
      model.scene.scale.set(1.2, 1, 1);
      model.scene.position.set(20, 0, 45);
      model.scene.rotateX(0.8);
      scene.add(model.scene);
      loadedModel = model.scene;
    });

    const light = new THREE.AmbientLight(0xf5f5f5); // soft white light
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xf5f5f5, 1);
    directionalLight.position.set(0, 500, 0);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 512;
    directionalLight.shadow.mapSize.height = 512;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 5000;
    scene.add(directionalLight);

    const animate = function () {
      requestAnimationFrame(animate);
      if (loadedModel) {
        // loadedModel.rotation.x += 0.01; // 每帧旋转一小部分
        gsap.to(loadedModel.rotation, { x: 0, duration: 5, delay: 1 });
      }
      controls.update(); // 只有在使用阻尼时才需要这样做
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function downloadFile() {
    const url = "/Wenyao_Yan_-_ .pdf"; // 假设这是文件的可访问URL

    // 创建一个a标签，设置href为文件的URL，设置下载文件名
    const link = document.createElement("a");
    link.href = url;
    link.download = "WenyaoYan_CV.pdf"; // 指定下载后的文件名

    // 触发a标签的点击事件，开始下载
    link.click();

    // 这里不需要创建Blob也不需要清理URL
  }

  return (
    <div id="intro" className="relative max-w-[100vw] min-h-[100vh]">
      {/* say hi */}
      <div
        id="say_hi"
        className="absolute w-full h-[100vh] flex justify-center items-center top-0 left-0"
      >
        <div className="text-[7vw] md:text-[5vw] lg:text-[3vw] text-[#f5f5f5] font-reem text-center">
          <h1>Nice to meet you~</h1>
          <h1>Let me introduce my self</h1>
        </div>
      </div>
      {/* slide */}
      <div
        id="intro_slide"
        className="w-full h-full flex flex-col items-center lg:flex-row absolute top-[100vh] left-0 pb-12 lg:p-8 z-10 opacity-0"
      >
        <div className="w-full lg:w-[20%] h-[20vh] lg:h-[30vh] flex flex-col justify-center items-center lg:items-start text-[6vw] lg:text-[2vw] text-[#f5f5f5] whitespace-nowrap font-IBM font-black">
          <h1>I'm Stan Yan.</h1>
          <h1>
            I'm a Full Stack Developer <span className="animate-wiggle">|</span>
          </h1>
        </div>
        <canvas
          id="model"
          className="w-[100vw] min-h-[60vh] lg:w-[60%] lg:min-h-[100vh]"
        />
        <div className="w-full flex-1 lg:w-[20%] grid grid-cols-2 gap-2 lg:gap-4 lg:flex lg:flex-col font-IBM p-4 pb-14">
          {/* My Github */}
          <div
            onClick={() =>
              window.open("https://github.com/real-stanyan", "_blank")
            }
            className="flex  lg:w-[90%] h-[15vw] lg:h-[4vw]  items-center justify-between px-4 bg-[black] rounded-lg text-[#f5f5f5] text-[5vw] lg:text-[1.5vw] hover:opacity-70 cursor-pointer"
          >
            <FaGithub className="text-[6vw] lg:text-[2vw]" />
            <h1>My Github</h1>
          </div>
          {/* My Linkedin */}
          <div
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/stan-yan-940075239/",
                "_blank"
              )
            }
            className="flex  lg:w-[90%] h-[15vw] lg:h-[4vw]  items-center justify-between px-4 bg-[#0a65c2] rounded-lg text-[#f5f5f5] text-[5vw] lg:text-[1.5vw] hover:opacity-70 cursor-pointer"
          >
            <FaLinkedin className="text-[6vw] lg:text-[2vw]" />
            <h1>My Linkedin</h1>
          </div>
          {/* My CV */}
          <div
            onClick={downloadFile}
            className="flex lg:w-[90%] h-[15vw] lg:h-[4vw]  items-center justify-between px-4 bg-[#003366] rounded-lg text-[#f5f5f5] text-[5vw] lg:text-[1.5vw] hover:opacity-70 cursor-pointer"
          >
            <FaRegAddressCard className="text-[6vw] lg:text-[2vw]" />
            <h1>My CV</h1>
          </div>
          {/* My Projects*/}
          <div
            onClick={() => {
              window.location.hash = "projects";
            }}
            className="flex lg:w-[90%] h-[15vw] lg:h-[4vw]  items-center justify-between px-4 bg-[#004d00] rounded-lg text-[#f5f5f5] text-[5vw] lg:text-[1.5vw] hover:opacity-70 cursor-pointer"
          >
            <GrProjects className="text-[6vw] lg:text-[2vw]" />
            <h1>My Projects</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
