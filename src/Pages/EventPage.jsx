import React, { useEffect, useState } from "react";
import img from "../assets/c-1.jpg";
import { events } from "../Data/data";
import { useParams } from "react-router-dom";

import ClipLoader from "react-spinners/ClipLoader";

const EventPage = () => {
  const [data, setdata] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const getIdandSetData = () => {
    const event = events.filter((ele) => {
      return ele.id == params.id;
    });
    // console.log(event);
    setdata(event[0]);
    setLoading(false);
  };

  useEffect(() => {
    getIdandSetData();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto text-white  mt-[100px]">
      {loading == false ? (
        <main className="mt-10">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl font-semibold text-slate-50 leading-tight">
                {data?.name}
              </h2>
              <a
                href="#"
                className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
              >
                {data?.tag2}
              </a>
            </div>
            <img
              src={`../${data?.imgUrl}`}
              className="w-full object-cover lg:rounded"
              style={{ height: "28em" }}
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4 lg:px-0 mt-12 text-slate-200 text-lg leading-relaxed w-full lg:w-2/3">
              <h2 className="text-4xl mb-4 font-semibold text-slate-50 leading-tight">
                {data?.name}
              </h2>

              {data.description.map((ele) => {
                return <p className="pb-6">{ele}</p>;
              })}

              <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                <h2 className="text-2xl mb-4 font-semibold text-slate-50 leading-tight">
                  Topics to be covered
                </h2>

                {data.lessons.map((ele) => {
                  return <p className="pb-6">{ele}</p>;
                })}
              </div>
            </div>
            <div className="w-full lg:w-1/3 m-auto mt-12 max-w-screen-sm light-background-for-event-cards">
              <div className="p-4 ">
                <div className="flex py-2">
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">
                      {
                        data.active ? "Runs From" : "End at"
                      }
                    </p>
                    <p className="font-semibold text-slate-200 text-base">
                      {data.date}
                    </p>
                  </div>
                </div>
                <div className="flex py-2">
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">Mode</p>
                    <p className="font-semibold text-slate-200 text-base">
                      {data.mode}
                    </p>
                  </div>
                </div>
                <button className={`px-2 py-1 mt-8 text-zinc-800 ${data.active ? "bg-[#4eff3f]" : "bg-red-600"} flex w-full items-center justify-center rounded`}>
                  {
                     data.active ? "Apply Now" : "Closed"
                  }
                </button>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <ClipLoader color="#fff" />
        </div>
      )}
    </div>
  );
};

export default EventPage;
