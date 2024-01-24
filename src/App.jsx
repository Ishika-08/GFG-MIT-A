import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'

function App() {

  return (
    <body>
       <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
      </Routes>
    </Router>
    </body>
   
  )
}

export default App
