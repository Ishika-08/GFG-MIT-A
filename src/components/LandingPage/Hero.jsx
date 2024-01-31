import React from "react";
const Hero = () => {
  const handleButtonClick = () => {
    window.location.href = "https://chat.whatsapp.com/FqjB1hqDzgWDFz1ZyA9SCJ";
  };

  return (
    <header>
      <div className="container px-6 py-16 mx-auto mt-10">
        <div className="items-center lg:flex justify-center">
          <div className="w-full lg:w-1/3">
            <div className="lg:max-w-lg">
              <h1 className="text-4xl font-semibold text-white lead ">
                WELCOME TO <br />
                <span className="text-[#4eff3f] ">GEEKSFORGEEKS </span> STUDENT
                CHAPTER
                <br />
                OF MIT CHH. SAMBHAJINAGAR <br />
              </h1>

              <div className="flex flex-col lg:flex-row">
                <a
                  className="hero-button-1 px-5 py-2 mt-6 text-sm tracking-wider uppercase"
                  target="_blank"
                  href="https://chat.whatsapp.com/FqjB1hqDzgWDFz1ZyA9SCJ"
                >
                  Join Our Community
                </a>

                <a className="opacity-50 ml-2 hero-button-2 px-5 py-2 mt-6 text-sm tracking-wider uppercase">
                  Register For Event
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-1/2 h-full lg:max-w-3xl"
              src={`assets/heroImg.svg`}
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
