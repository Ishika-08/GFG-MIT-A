  import React, { useEffect, useState } from "react";
  import { events } from "../Data/data";
  import { useParams } from "react-router-dom";

  import ClipLoader from "react-spinners/ClipLoader";

  const EventPage = () => {
    const [data, setdata] = useState({});
    const [loading, setLoading] = useState(true);

    const params = useParams();

    const getIdandSetData = () => {
      const event = events.find((ele) => ele.id === params.id);
      setdata(event);
      setLoading(false);
    };

    useEffect(() => {
      getIdandSetData();
    }, []);

    // const handleApplyNowClick = () => {
    //   if (data.active) {
    //     const script = document.createElement('script');
    //     script.src = 'https://widget.konfhub.com/widget.js';
    //     script.setAttribute('button_id', "btn_12faef423ca8");
    //     const applyNowLink = document.getElementById('apply-now-link');
    //     applyNowLink.appendChild(script);
    //   }
    // };

    useEffect(() => {
      if (data.active) {
        const script = document.createElement('script');
        script.src = 'https://widget.konfhub.com/widget.js';
        script.setAttribute('button_id', "btn_5837499c4b32");
        const applyNowLink = document.getElementById('apply-now-link');
        applyNowLink.removeChild(applyNowLink.firstChild);
        applyNowLink.appendChild(script);
      }
    }, [data.active]);

    return (
      <div className="max-w-screen-lg mx-auto text-white mt-[100px]">
        {loading === false ? (
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
                src={`${data?.imgUrl}`}
                className="w-full object-contain lg:rounded"
                style={{ height: "28em" }}
                alt=""
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-12">
              <div className="px-4 lg:px-0 mt-12 text-slate-200 text-lg leading-relaxed w-full lg:w-2/3">
                <h2 className="text-4xl mb-4 font-semibold text-slate-50 leading-tight">
                  {data?.fullName}
                </h2>

                {data.description.map((ele, index) => (
                  <p key={index} className="pb-6">{ele}</p>
                ))}

                <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                  <h2 className="text-2xl mb-4 font-semibold text-slate-50 leading-tight">
                    Topics to be covered
                  </h2>

                  {data.lessons.map((ele, index) => (
                    <p key={index} className="pb-6">{ele}</p>
                  ))}
                </div>

                {data.prizes && (
                  <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                    <h2 className="text-2xl mb-4 font-semibold text-slate-50 leading-tight">
                      Prizes
                    </h2>

                    {data.prizes.map((ele, index) => (
                      <p key={index} className="pb-6">{ele}</p>
                    ))}
                  </div>
                )}
              </div>
              <div className="w-full lg:w-1/3 m-auto mt-12 max-w-screen-sm light-background-for-event-cards">
                <div className="p-4 ">
                  <div className="flex py-2">
                    <div>
                      <p className="font-semibold text-gray-700 text-sm">
                        {data.active ? "Starts on" : "End at"}
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
                  <div id="apply-now-link">
                  <div
                    className={`px-2 py-1 mt-8 text-zinc-800 ${
                      data.active ? "bg-[#4eff3f]" : "bg-red-600"
                    } flex w-full items-center justify-center rounded`}
                  >
                    {data.active ? "Apply Now" : "Closed"}
                  </div>
                  </div>
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

