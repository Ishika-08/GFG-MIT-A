import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import TeamPage from "../Pages/TeamPage";
import AllEventsPage from "../Pages/AllEventsPage";
import EventPage from "../Pages/EventPage";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/events" element={<AllEventsPage />} />
          <Route path="/events/:id" element={<EventPage />} />
        </Routes>
      </main>
    </>
  );
};

export default Layout;
