import React from "react";

const Footer = () => {
  return (
    <div className="py-5 flex justify-between px-72 ">
      <div>
        <p>
          @2024 Prince Dahaliya <span>All Rights Reserved</span>
        </p>
      </div>
      <div className=" space-x-5">
        <a href="/about" className=" hover:bg-orange-500"> About</a>
        <a href="/privacy" className=" hover:bg-orange-500"> Privacy Policy </a>
        <a href="/licensing" className=" hover:bg-orange-500"> Licensing</a>
        <a href="/contact" className=" hover:bg-orange-500"> Contact</a>
      </div>
    </div>
  );
};

export default Footer;
