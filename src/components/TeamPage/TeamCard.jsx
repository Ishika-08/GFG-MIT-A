import Card from "./Card";

import React from "react";

export default function TeamCard({ Array, Team }) {
  return (
    <>
      <div className="m-10  border-with-shadow-2 py-8" >
        <h1 className="w-full uppercase text-center text-4xl font-bold gradient-to-text-with-greenAndWhite">
          {Team}
        </h1>
        <div className="relative flex flex-wrap justify-center p-1 lg:p-8 max-w-6xl">
          {Array.map((ele) => {
            return (
              <div
                className=" w-full md:w-6/12 lg:w-1/3 my-8 px-6 sm:px-6 lg:px-4e"
                key={ele.id}
              >
                <Card ele={ele} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
