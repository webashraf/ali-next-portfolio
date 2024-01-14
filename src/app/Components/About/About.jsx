"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import ali from "../../../../public/Assets/HeroPhoto.jpeg";



const About = () => {


  return (
    <div className="flex justify-between items-center h-[800px] ">
      <div className="w-[60%]">
        <h2 className="text-2xl text-white font-serif">
          I'm Ali Ashraf, a frontend developer with expertise in React, Next.js,
          WordPress, and Webflow. Passionate about creating seamless user
          experiences and turning ideas into reality.
        </h2>
      </div>
      <div>
        <Image src={ali} className="w-[300px]" alt="Ali-Ashraf"></Image>
      </div>
    </div>
  );
};

export default About;
