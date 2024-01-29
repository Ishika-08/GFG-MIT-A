import React from "react";
import { FaArrowRight, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TeamMembersArray } from "../../Data/TeamData";


export default function Team() {
  return (
    <div className="flex items-center justify-center min-h-screen my-10">
      <div className="flex flex-col">
        <div className="flex flex-col mt-8">
          {/* Meet the Team */}
          <div className="container max-w-7xl px-4">
            {/* Section Header */}
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                {/* Header */}
                <h1 className="text-gray-900 text-6xl font-bold mb-8 gradient-to-text">
                  Meet the Team
                </h1>
                {/* Description */}
                <p className="text-slate-100 text-lg font-light">
                "Coding Dreams, Building Futures: Unleashing Potential with GFG Student Chapter Team!"
                </p>
              </div>
            </div>
            {/* Team Members */}
            <div className="flex flex-wrap">
              {TeamMembersArray.map((ele) => {
                return (
                  <div
                    className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4e"
                    key={ele.id}
                  >
                    <div className="flex flex-col border-with-shadow p-4">
                      {/* Avatar */}
                      <a href="#" className="mx-auto">
                        <img
                          className="w-60 rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src={ele.photourl}
                        />
                      </a>
                      {/* Details */}
                      <div className="text-center mt-6">
                        {/* Name */}
                        <h1 className="text-slate-200 text-xl font-bold mb-1">
                          {ele.name}
                        </h1>
                        {/* Title */}
                        <div className="text-slate-400 font-light mb-2">
                          {ele.designation}
                        </div>
                        {/* Social Icons */}
                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                        >
                          {/* Linkedin */}
                          <a
                            href="#"
                            className="flex rounded-full h-10 w-10"
                          >
                            <FaLinkedinIn className="text-indigo-700 mx-auto mt-2" />
                          </a>
                          {/* Twitter */}
                          <a
                            href="#"
                            className="flex rounded-full h-10 w-10"
                          >
                            <FaTwitter className="text-blue-400 mx-auto mt-2" />
                          </a>
                          {/* Instagram */}
                          <a
                            href="#"
                            className="flex rounded-full h-10 w-10"
                          >
                            <FaInstagram className="text-orange-400 mx-auto mt-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>




          </div>

          <div className="w-full flex items-center justify-center mt-5" >
                <a href="/team" className="p-5 box-shadow-for-Arrow" >
                  <FaArrowRight className="text-[#4eff3f] text-2xl" />
                </a>
          </div>

        </div>
      </div>
    </div>
  );
}
