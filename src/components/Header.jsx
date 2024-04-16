import { useState } from "react"
import React from "react";


const Header = () => {

  const [brandName, setbrandName] = useState("PRINCE DAHALIYA");
   const [menuLinks, setmenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id:1
    },
    {
      title: "About",
      link: "/about",
      id:2
    },
    {
      title: "My Projects",
      link: "/myprojects",
      id:1
    },
    {
      title: "My Expertise",
      link: "/myexpertise",
      id:1
    },
    {
      title: "Contact",
      link: "/contact",
      id:1
    },
   ])

  const [button, setbutton] = useState({
    title: 'Hire Me',
    link: '/hire-me'
  })

  return (
    <>
     <div className=" h-24 border main flex justify-between items-center px-16 bg-gray-100">
       
        <div> {/*logo*/}
        <h1 className='text-2xl font-bold'>{brandName}</h1>
        </div>

        <div className="space-x-6"> {/*menu links*/}
         
           { menuLinks.map(link=>(
            <a key={link.id} href={link.link} className="hover:text-orange-500">{link.title}</a>
           )) }
            
            {/* <a href="/about" className="hover:text-orange-500">About</a>
            <a href="/skills" className="hover:text-orange-500">Skills</a>
            <a href="/porrtfolio" className="hover:text-orange-500">Portfolio</a>
            <a href="/contact" className="hover:text-orange-500">Contact</a> */}
        </div>

        <div> {/*buttons*/}
            <a href={button.link} className='px-3 py-2 text-white bg-orange-600 rounded-3xl'>{button.title}</a>
        </div>

     </div>
    </>
  )
}

export default Header
