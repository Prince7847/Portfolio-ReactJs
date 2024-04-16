import React from "react";
import BannerWallpaper from "../assets/banner_wallpaper.svg"

const Expertise = () => {
  return (
    <div className="my-10">
      <h1 className=" mb-14 text-3xl underline font-semibold text-center">
        My Expertise
      </h1>

      {/* box section start */}
      <div 
      style = { {
        backgroundImage: `url(${BannerWallpaper})` 
        }} 
      
      className="box container items-center flex py-10">
        <div className="flex justify-center">
          {/* text container */}
          <div className="w-2/3 text-center ">
          <h1 className="text-4xl font-semibold">I Love these technologies</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            accusamus reprehenderit dignissimos voluptatum sed, dolor earum.
            Pariatur blanditiis optio quisquam?
          </p>
          <button className="px-3 py-2 mt-4 mb-4 bg-orange-400 rounded-full text-2xl semi-bold">Hire Me</button>
          </div>
        </div>

        <div className="  justify-center">
        {/* skill  container */}
        <div className="flex space-x-3  space-y-3 flex-wrap">

        <p className=" bg-gray-300 px-3 py-2 w-fit mt-1 h-fit  rounded-full hover:bg-orange-500 cursor-pointer">Core Java</p>
        <p className=" bg-gray-300 px-3 py-2 w-fit  rounded-full hover:bg-orange-500 cursor-pointer">DSA</p>
        <p className=" bg-gray-300 px-3 py-2 w-fit  rounded-full hover:bg-orange-500 cursor-pointer">HTML5</p>
        <p className=" bg-gray-300 px-3 py-2 w-fit  rounded-full hover:bg-orange-500 cursor-pointer">CSS3</p>
        <p className=" bg-gray-300 px-3 py-2 w-fit  rounded-full hover:bg-orange-500 cursor-pointer">JavaScript</p>
        <p className=" bg-gray-300 px-3 py-2 w-fit  rounded-full hover:bg-orange-500 cursor-pointer">Tailwind CSS</p>
        <p className=" bg-gray-300 px-3 py-2 w-fit  rounded-full hover:bg-orange-500 cursor-pointer">Bootstrap</p>
        <p className=" bg-gray-300 px-3 py-2 w-fit  rounded-full hover:bg-orange-500 cursor-pointer">React Js</p>
        <p className=" bg-gray-300 px-3 py-2 w-fit  rounded-full hover:bg-orange-500 cursor-pointer">Next Js</p>
        <p className=" bg-gray-300 px-3 py-2 w-fit  rounded-full hover:bg-orange-500 cursor-pointer">Git & GitHub</p>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
