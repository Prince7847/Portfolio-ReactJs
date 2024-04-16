import React from "react";
import BannerImage from "../assets/sunder.jpeg";
import { useState } from "react";

const About = () => {

    const [data, setdata] = useState({
        image: BannerImage,
        title: "ReactJs Developer",
        desc1: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
        reiciendis ea ut autem doloremque totam omnis ex non vel ipsam!`,
        desc2: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
        quis recusandae ducimus vel, quidem voluptate non eligendi
        reprehenderit odit cupiditate maxime nihil et corporis laborum dolor
        libero magnam, mollitia quia.`,
        actionButton:{
            title:"Read More ..",
            link: "/readmore" ,
        }
    })
  return (
    <div className="main-container border bg-gray-100 py-14 ">
      <h1 className="text-center text-3xl underline font-semibold ">
        About Me
      </h1>

      <div className="flex items-center ">
        {/* image box */}
        <div className=" w-full py-10 justify-center">
          <img
            className="rounded-full w-fit shadow-lg"
            src={BannerImage}
            alt="prince dahaliya"
          />
        </div>

        {/* text about box */}
        <div className=" w-full py-16 flex justify-center">
         <div className=" space-y-5 w-2/3">
         <h1 className="text-5xl font-semibold">{data.title}</h1>
          <p>
           {data.desc1}
          </p>
          <p>
           {data.desc2}
          </p>
          <button className="bg-orange-400 px-3 py-2 rounded-full text-2xl shadow-lg">{data.actionButton.title}</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default About;
