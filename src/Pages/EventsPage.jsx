import React from "react";
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
    name: "Docker and Deveops ",
    date: "20-02-2024",
    tag: "Deveops",
    mode: "Online",
    eventType: "Webinar",
  },
];

const EventsPage = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-between  mt-[80px]">
        <h1 className="text-gray-900 mt-8 py-3 text-6xl font-bold gradient-to-text">
          Upcoming Events
        </h1>
        <div className="grid max-w-screen-xl  gap-8 p-4 mx-auto text-gray-900  grid-cols-1 lg:grid-cols-2 sm:p-8">
          {EventsArr.map((event) => {
            return (
              <div className="relative flex flex-col items-center light-background-for-event-cards rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-700 p-5 hover:cursor-pointer">
                <span className="absolute top-2 right-2 bg-white text-zinc-800 p-2 rounded-sm ">
                  {event.tag}
                </span>

                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="assets/heroImg.svg"
                  alt
                />
                <div className=" flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-100 ">
                    {event.name}
                  </h5>
                  <div className="my-4">
                    <a
                      href="#"
                      className="p-2 rounded-md text-zinc-900 bg-slate-50"
                    >
                      {event.mode}
                    </a>
                    <a
                      href="#"
                      className="ml-4 p-2 rounded-md text-zinc-900 bg-slate-50"
                    >
                      {event.date}
                    </a>
                  </div>
                  <div className="mt-3">
                    <a
                      href="#"
                      className="p-2 rounded-md text-slate-50 bg-[#4fff3f90]"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-between">
        <h1 className="text-gray-900 mt-8 py-3 text-6xl font-bold gradient-to-text">
          Past Events
        </h1>
        <div className="grid max-w-screen-xl  gap-8 p-4 mx-auto text-gray-900  grid-cols-1 lg:grid-cols-2 sm:p-8">
          {EventsArr.map((event) => {
            return (
              <div className="relative flex flex-col items-center light-background-for-event-cards rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-700 p-5 hover:cursor-pointer">
                <span className="absolute top-2 right-2 bg-white text-zinc-800 p-2 rounded-sm ">
                  {event.tag}
                </span>

                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="assets/heroImg.svg"
                  alt
                />
                <div className=" flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-100 ">
                    {event.name}
                  </h5>
                  <div className="my-4">
                    <a
                      href="#"
                      className="p-2 rounded-md text-zinc-900 bg-slate-50"
                    >
                      {event.mode}
                    </a>
                    <a
                      href="#"
                      className="ml-4 p-2 rounded-md text-zinc-900 bg-slate-50"
                    >
                      {event.date}
                    </a>
                  </div>
                  <div className="mt-3">
                    <a
                      href="#"
                      className="p-2 rounded-md text-slate-50 bg-[#4fff3f90]"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
