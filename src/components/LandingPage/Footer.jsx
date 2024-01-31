import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,  
  FaDiscord,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

import { HiOfficeBuilding } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer-bg text-center text-neutral-600lg:text-left text-white bg-transparent">
      {/* Main container div: holds the entire content of the footer, including four sections (TW elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* TW elements section */}
          <div className>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start text-[#4EFF3F]">
              <img src={`assets/logos/gfg-logo.svg`} className="w-6 mr-2" alt="" />
              GFG-MITA
            </h6>
            <p className="text-base">
              Join us in unraveling the possibilities of technology.
            </p>
          </div>
          {/* Products section */}
          <div className>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful Links
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Privacy Policy
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Terms and Conditions
              </a>
            </p>
          </div>
          {/* Useful links section */}
          <div className>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Navigation links
            </h6>
            <p className="mb-4">
              <a
                href="/events"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Events
              </a>
            </p>
            <p className="mb-4">
              <a
                href="/team"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Team
              </a>
            </p>
            <p>
              <a
                href="https://forms.gle/ruziSxVyCfu5Yr977"
                target="_blank"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Help
              </a>
            </p>
          </div>
          {/* Contact section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <HiOfficeBuilding className="text-2xl mr-2" />
              MIT-A , Chhatrapati SambhajiNagar
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdEmail className="text-2xl mr-2" />
              gfg.mita@gmail.com
            </p>
            <a
              href="https://chat.whatsapp.com/FqjB1hqDzgWDFz1ZyA9SCJ"
              target="_blank"
              className="hidden md:block  bg-[#4eff3f] text-black rounded-lg px-5 py-3 text-xs  font-bold tracking-wider uppercase"
            >
              Join Our Community
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Social network icons container */}
        <div className="flex justify-center">
          <a href="#" target="_blank" className="mr-4 text-xl neon-border">
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.instagram.com/gfg.mita/"
            className="mr-4 text-xl neon-border"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a href="#" target="_blank" className="mr-4 text-xl neon-border">
            <FaX />
          </a>
          <a
            href="https://discord.gg/pqdC65kAPu"
            target="_blank"
            className="mr-4 text-xl neon-border"
          >
            <FaDiscord />
          </a>
          <a href="/" target="_blank" className="mr-4 text-xl neon-border">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      {/*Copyright section*/}
      <div className="p-6 text-center transparent-bg ">
        <span>© 2024 Copyright </span>
        <a className="font-semibold text-[#4eff3f]" href="/">
          GFG-MITA
        </a>
      </div>
    </footer>
  );
};

export default Footer;
