import React from "react";

const EventCard = ({event}) => {
  return (
    <div className="mx-8 px-10 my-10 py-6 light-background-for-event-cards rounded-lg ">
      <div className="flex justify-between items-center">
        <span className="font-light text-[#4eff3f]">{event.eventType}</span>
        <a
          className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
          href="#"
        >
          {event.tag}
        </a>
      </div>
      <div className="mt-2">
        <a
          className="text-4xl text-slate-200 font-bold hover:text-gray-600"
          href="#"
        >
          {event.name}
        </a>
      </div>
      <div className="flex justify-between items-center mt-4">
        <a
          className="bg-slate-200 py-2 px-4 rounded-lg text-gray-600 hover:underline"
          href="#"
        >
          {event.mode}
        </a>
        <a
          className="ml-4 mr-8 bg-slate-200 py-2 px-4 rounded-lg text-gray-600 hover:underline"
          href="#"
        >
          Starts at {event.date}
        </a>
        <div>
          <a
            className="flex items-center text-white font-semibold text-base bg-blue-600 p-3 rounded-lg "
            href="#"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
