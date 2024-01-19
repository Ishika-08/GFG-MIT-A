import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
