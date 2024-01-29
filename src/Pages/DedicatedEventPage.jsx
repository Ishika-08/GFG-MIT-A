import React from "react";

const DedicatedEventPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto text-white">
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-slate-50 leading-tight">
              React JS Webinar
            </h2>
            <a
              href="#"
              className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            >
              Web Development
            </a>
          </div>
          <img
            src="./c-1.jpg"
            className="w-full object-cover lg:rounded"
            style={{ height: "28em" }}
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-slate-200 text-lg leading-relaxed w-full lg:w-2/3">
            <h2 className="text-4xl mb-4 font-semibold text-slate-50 leading-tight">
              Introduction to React + 1 Project
            </h2>
            <p className="pb-6">
              Advantage old had otherwise sincerity dependent additions. It in
              adapted natural hastily is justice. Six draw you him full not mean
              evil. Prepare garrets it expense windows shewing do an. She
              projection advantages resolution son indulgence. Part sure on no
              long life am at ever. In songs above he as drawn to. Gay was
              outlived peculiar rendered led six.
            </p>
            <p className="pb-6">
              Difficulty on insensible reasonable in. From as went he they.
              Preference themselves me as thoroughly partiality considered on in
              estimating. Middletons acceptance discovered projecting so is so
              or. In or attachment inquietude remarkably comparison at an. Is
              surrounded prosperous stimulated am me discretion expression. But
              truth being state can she china widow. Occasional preference fat
              remarkably now projecting uncommonly dissimilar. Sentiments
              projection particular companions interested do at my delightful.
              Listening newspaper in advantage frankness to concluded unwilling.
            </p>
            <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
              Sportsman do offending supported extremity breakfast by listening.
              Decisively advantages nor expression unpleasing she led met.
              Estate was tended ten boy nearer seemed. As so seeing latter he
              should thirty whence. Steepest speaking up attended it as. Made
              neat an on be gave show snug tore.
            </div>
          </div>
          <div className="w-full lg:w-1/3 m-auto mt-12 max-w-screen-sm light-background-for-event-cards">
            <div className="p-4 ">
              <div className="flex py-2">
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    Runs From
                  </p>
                  <p className="font-semibold text-slate-200 text-base">
                    23-2-2024
                  </p>
                </div>
              </div>
              <div className="flex py-2">
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    Mode
                  </p>
                  <p className="font-semibold text-slate-200 text-base">
                    Online
                  </p>
                </div>
              </div>
              <button className="px-2 py-1 mt-8 text-zinc-800 bg-[#4eff3f] flex w-full items-center justify-center rounded">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* main ends here */}
    </div>
  );
};

export default DedicatedEventPage;
