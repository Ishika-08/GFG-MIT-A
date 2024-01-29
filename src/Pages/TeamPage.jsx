import React from "react";
import {MainArray, TechArray, EventArray, SocialMediaArray, PRArray, MarketingArray, DesignArray } from "../Data/TeamData";
import TeamCard from "../components/TeamPage/TeamCard";



export default function Team() {
  return (
    <div className="flex items-center justify-center min-h-screen mt-[80px]">
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
          </div>
        </div>

        {/* Teams*/}
        <TeamCard Array={MainArray} Team={"Core Team"}/>
        <TeamCard Array={TechArray} Team={"Technical Team"}/>
        <TeamCard Array={EventArray} Team={"Event Team"}/>
        <TeamCard Array={PRArray} Team={"PR & Outreach Team"}/>
        <TeamCard Array={SocialMediaArray} Team={"Social Media Team"}/>
        <TeamCard Array={MarketingArray} Team={"Marketing Team"} />
        <TeamCard Array={DesignArray} Team={"Design and Content Team"}/>
       
      </div>
    </div>
  );
}
