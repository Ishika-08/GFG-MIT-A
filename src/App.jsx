import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import TeamPage from "./Pages/TeamPage";
import EventsPage from "./Pages/EventsPage";
import DedicatedEventPage from "./Pages/DedicatedEventPage";
import Navbar from "./components/LandingPage/Navbar";
import PreviousEventPage from "./Pages/PreviousEventPage";

function App() {
  return (
    <body>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/even-react" element={<DedicatedEventPage />} />
          <Route path="/previous-event" element={<PreviousEventPage/>}/>
        </Routes>
      </Router>
    </body>
  );
}

export default App;
