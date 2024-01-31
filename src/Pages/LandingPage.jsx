import Hero from "../components/LandingPage/Hero";
import AboutUs from "../components/LandingPage/AboutUs";
import Team from "../components/LandingPage/Team";
import Footer from "../components/LandingPage/Footer";
import Carasousel from "../components/LandingPage/Carasousel";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Carasousel />
      <Team />
      <Footer />
    </div>
  );
}
