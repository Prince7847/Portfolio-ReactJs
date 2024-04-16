import React from "react";
import BannerImage from "../assets/sunder.jpeg";
import BannerWallpaper from "../assets/banner_wallpaper.svg"

const Banner = () => {
  return (
    <div style = { {
        backgroundImage: `url(${BannerWallpaper})` 
        }} 
      
       
    
    className="main container flex items-center ">
      <div  className="w-full flex justify-center text-white">
        {/* left side */}
        <div className="w-2/3">
        <h3 className=" text-3xl font-semibold">Hi, I am</h3>
        <h1 className="mt-3 text-5xl font-bold">PRINCE DAHALIYA</h1>
        <h2 className="mt-3 text-2xl ">And I'm a Frontend Developer</h2>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          beatae adipisci harum non voluptas inventore officia veritatis, dicta
          sequi quis?
        </p>
        <div className="icon-container  flex space-x-5"> {/* icons */}
       <a className="w-14 h-14  cursor-pointer  hover:bg-orange-400 bg-gray-700 flex rounded-full justify-center items-center" >
       <i class="fa-brands text-4xl fa-linkedin"></i>
       </a>
       <a className="w-14 h-14  cursor-pointer  hover:bg-orange-400 bg-gray-700 flex rounded-full justify-center items-center" >
        <i class="fa-brands text-4xl fa-instagram"></i>
        </a>
        <a className="w-14 h-14  cursor-pointer  hover:bg-orange-400 bg-gray-700 flex rounded-full justify-center items-center" >
        <i class="fa-solid text-4xl fa-envelope"></i>
        </a>
        </div>
        <br />
        <a className="text-2xl bg-orange-500 rounded-full px-3 py-2" href="/contact-me">Contact Me</a>
        </div>
      </div>

      <div className="   w-auto flex justify-center "> 
      {/* right side */}
      <img className="rounded-full shadow-lg w-fit" src={BannerImage} alt="banner-img" srcset="" />
      </div>

    </div>
  );
};

export default Banner;
