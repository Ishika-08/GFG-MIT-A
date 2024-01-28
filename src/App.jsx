import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import TeamPage from "./Pages/TeamPage"

function App() {
  return (
    <body>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/team" element={<TeamPage/>}/>
        </Routes>
      </Router>
    </body>
  );
}

export default App;
