import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import TeamPage from "./Pages/TeamPage";
import EventsPage from "./Pages/EventsPage";
import DedicatedEventPage from "./Pages/DedicatedEventPage";

function App() {
  return (
    <body>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/even-react" element={<DedicatedEventPage />} />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
