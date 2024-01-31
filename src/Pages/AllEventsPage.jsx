import React from "react";
import { events } from "../Data/data";
import EventCard from "../components/EventPage/EventCard";
const AllEventsPage = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-between  mt-[80px]">
        <h1 className="text-gray-900 mt-8 py-3 text-4xl md:text-6xl font-bold gradient-to-text">
          Upcoming Events
        </h1>
        <div className="grid max-w-screen-xl  gap-8 p-4 mx-auto text-gray-900  grid-cols-1 lg:grid-cols-2 sm:p-8">
          {events.map((event) => {
            return event.active ? <EventCard event={event} /> : "";
          })}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-between">
        <h1 className="text-gray-900 mt-8 py-3 text-4xl md:text-6xl font-bold gradient-to-text">
          Past Events
        </h1>
        <div className="grid max-w-screen-xl  gap-8 p-4 mx-auto text-gray-900  grid-cols-1 lg:grid-cols-2 sm:p-8">
          {events.map((event) => {
            return event.active == false ? <EventCard event={event} /> : "";
          })}
        </div>
      </div>
    </div>
  );
};

export default AllEventsPage;
