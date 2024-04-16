import React from "react";
import { useState } from "react";

const Project = () => {
  const [data, setdata] = useState({
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        sapiente modi, cumque dignissimos ex maiores debitis obcaecati error
        quam similique.`,
  });
  return (
    <div className="main-container py-14">
      <h1 className=" text-center text-3xl font-semibold underline mb-12">
        My Projects
      </h1>

      <div className="main-box flex  space-x-5 px-10">
        <div className="border  cursor-pointer bg-slate-200 p-5 text-center  space-y-4">
          <i class="text-5xl fa-solid fa-store"></i>
          <h1 className=" text-2xl">E-commerce</h1>
          <p>{data.desc}</p>
          <button className="px-3 py-2 bg-orange-400 rounded-full text-2xl semi-bold">
            Check
          </button>
        </div>

        <div className="border  cursor-pointer bg-slate-200 p-5 text-center  space-y-4">
          <i class="text-5xl fa-solid fa-blog"></i>
          <h1 className=" text-2xl">Blog App</h1>
          <p>{data.desc}</p>
          <button className="px-3 py-2 bg-orange-400 rounded-full text-2xl semi-bold">
            Check
          </button>
        </div>

        <div className="border  cursor-pointer bg-slate-200 p-5 text-center  space-y-4">
          <i class=" text-5xl fa-solid fa-photo-film"></i>
          <h1 className=" text-2xl">Social Media App</h1>
          <p>{data.desc}</p>
          <button className="px-3 py-2 bg-orange-400 rounded-full text-2xl semi-bold">
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
