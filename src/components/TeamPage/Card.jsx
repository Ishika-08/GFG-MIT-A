import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


export default function Card({ele}) {
  return (
    <div className="flex flex-col items-center justify-between border-with-shadow p-4">
    {/* Avatar */}
    <a href="#" className="mx-auto">
      <img
        className="w-52 h-[210px] rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
        src={ele.photourl}
      />
    </a>
    {/* Details */}
    <div className="text-center mt-6">
      {/* Name */}
      <h1 className="text-slate-200 text-lg font-bold mb-1">
        {ele.name}
      </h1>
      {/* Title */}
      <div className="text-slate-400  text-basefont-light mb-2">
        {ele.designation}
      </div>
      {/* Social Icons */}
      <div
        className="flex items-center justify-center opacity-50 hover:opacity-100
              transition-opacity duration-300"
      >
        {/* Linkedin */}
        <a
          href={ele.linkedin}
          className="flex rounded-full h-10 w-10"
        >
          <FaLinkedinIn className="text-indigo-700 mx-auto mt-2" />
        </a>
        {/* Twitter */}
        <a
          href={ele.twitter}
          className="flex rounded-full h-10 w-10"
        >
          <FaTwitter className="text-blue-400 mx-auto mt-2" />
        </a>
        {/* Instagram */}
        <a
          href={ele.instagram}
          className="flex rounded-full h-10 w-10"
        >
          <FaInstagram className="text-orange-400 mx-auto mt-2" />
        </a>
      </div>
    </div>
  </div>
  )
}
