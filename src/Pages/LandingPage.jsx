import Navbar from "../components/LandingPage/Navbar"
import Hero from "../components/LandingPage/Hero"
import AboutUs from "../components/LandingPage/AboutUs"
import Events from "../components/LandingPage/Events"
import Team from "../components/LandingPage/Team"
import Footer from "../components/LandingPage/Footer"

export default function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Events/>
        <Team/>
        <Footer/>
    </div>
  )
}
