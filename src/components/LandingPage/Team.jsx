import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const TeamMembersArray = [
  {
    id: 1,
    name: "Rohit Bansode",
    designation: "Head at GFG-MITA",
    photourl:
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80",
  },
  {
    id: 2,
    name: "Yash Bansode",
    designation: "Vice-Head at GFG-MITA",
    photourl:
      "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80",
  },
  {
    id: 3,
    name: "Nilesh Mankape",
    designation: "Designer at GFG-MITA",
    photourl:
      "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80",
  },
  {
    id: 4,
    name: "Ishika Ranajan",
    designation: "Developer at GFG-MITA",
    photourl:
      "https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80",
  },
];

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
                  With over 100 years of combined experience, we've got a
                  well-seasoned team at the helm.
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
        </div>
      </div>
    </div>
  );
}
