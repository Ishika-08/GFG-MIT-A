import React from "react";
import EventCard from "./EventCard";

const EventsArr = [
  {
    id: 1,
    name: "React JS Events",
    date: "10-02-2024",
    tag: "React",
    mode: "Online",
    eventType: "Webinar",
  },

  {
    id: 1,
    name: "HTML CSS JAVASCRIPT",
    date: "12-02-2024",
    tag: "Web",
    mode: "Online",
    eventType: "Webinar",
  },
  {
    id: 1,
    name: "Linux + Github",
    date: "15-02-2024",
    tag: "linux",
    mode: "Offline",
    eventType: "Webinar",
  },
  {
    id: 1,
    name: "Docker and Deveops",
    date: "20-02-2024",
    tag: "Deveops",
    mode: "Online",
    eventType: "Webinar",
  },
];

const EventsPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between">
      <h1 className="text-gray-900 mt-8 py-3 text-6xl font-bold gradient-to-text">
        Upcoming Events
      </h1>
      <div className="p-12 flex flex-wrap items-center justify-center">
        {EventsArr.map((event) => {
          return <EventCard event={event} />;
        })}
      </div>
    </div>
  );
};

export default EventsPage;
