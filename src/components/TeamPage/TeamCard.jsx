import Card from "./Card";

import React from 'react'

export default function TeamCard({Array, Team}) {
  return (
    <div className="flex flex-wrap justify-center m-10 border-with-shadow p-4 max-w-6xl">
    <div className="flex flex-wrap justify-center items-center w-full md:w-6/12 lg:w-4/12 mb-6 px-6 sm:px-6 lg:px-4e">
    <h1 className="text-white text-6xl">
        {Team}
    </h1>
    </div>
    {Array.map((ele) => {
      return (
        <div
          className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4e"
          key={ele.id}
        >
         <Card ele={ele}/>
        </div>
      );
    })}
</div>
  )
}
