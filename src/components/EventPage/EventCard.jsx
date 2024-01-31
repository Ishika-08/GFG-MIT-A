import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="relative flex flex-col items-center light-background-for-event-cards rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-700 p-5 hover:cursor-pointer">
      <span className="absolute text-xs top-2 right-2 bg-white text-zinc-800 p-1 rounded-sm ">
        {event.tag1}
      </span>

      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={event.imgUrl}
        alt
      />
      <div className=" flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-100 ">
          {event.name}
        </h5>
        <div className="my-4">
          <span className="p-2 rounded-md text-zinc-900 bg-slate-50">
            {event.mode}
          </span>
          <span className="ml-4 p-2 rounded-md text-zinc-900 bg-slate-50">
            {event.date}
          </span>
        </div>
        <div className="mt-3">
          <Link
            to={`${event.id}`}
            className={`p-2 rounded-md text-zinc-800  ${
              event.active ? "bg-[#4eff3f]" : "bg-red-600"
            } `}
          >
            {event.active ? "Apply Now" : "Closed"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
