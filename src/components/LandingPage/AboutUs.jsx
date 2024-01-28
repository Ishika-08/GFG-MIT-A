import React from "react";
import { TbBulbFilled } from "react-icons/tb";
import { PiRocketLaunchFill } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";

const AboutUs = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h1 className="text-gray-900 text-6xl font-bold mb-8 gradient-to-text">
          About Us
        </h1>
        <p className="text-base md:text-lg">
          Welcome to Geeks for Geeks Student Chapter at MITA - a vibrant
          community dedicated to fueling the passion for technology and coding
          among MITA students. As tech enthusiasts, we come together to explore,
          learn, and innovate.
        </p>
      </div>

      <div className="transparent-bg-about-section px-4 py-12 grid gap-8 row-gap-10 lg:grid-cols-2">
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <TbBulbFilled className="text-black text-5xl" />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Innovation</h6>
          <p className="mb-3 text-sm">
            Creative disruption, pushing boundaries, sparking progress,
            transforming ideas into reality.
          </p>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <PiRocketLaunchFill className="text-black text-5xl" />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            Continous Learning
          </h6>
          <p className="mb-3 text-sm">
            Adaptability, growth, curiosity, skill refinement, resilience,
            evolution, knowledge enrichment, improvement, exploration, lifelong.
          </p>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FaPeopleGroup className="text-black text-5xl" />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Community</h6>
          <p className="mb-3 text-sm">
            Connection, support, diversity, shared goals, belonging,
            collaboration, relationships, unity, understanding, strength.
          </p>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <GrTechnology className="text-black text-5xl" />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Technology</h6>
          <p className="mb-3 text-sm">
            Advancement, connectivity, efficiency, transformation, automation,
            progress, innovation, integration, impact, empowerment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
