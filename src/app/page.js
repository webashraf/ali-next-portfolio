import React from "react";
import TrippyScroll from "./Components/TrippyScroll";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import GSAPAnimationTest from "./Components/GSAPAnimationTest/GSAPAnimationTest";

const Page = () => {
  
  return (
    <div className="">
      <div className="h-[100vh">
        <Hero></Hero >
      </div>
      <About></About>
    {/* <GSAPAnimationTest></GSAPAnimationTest> */}
    </div>
  );
};

export default Page;
