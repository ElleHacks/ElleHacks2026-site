// src/App.jsx
import React from "react";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Sponsors from "./components/Sponsors/Sponsors";
import InterestedInSponsoring from "./components/InterestedInSponsoring/InterestedInSponsoring";
import FAQ from "./components/FAQ/FAQ";
import Location from "./components/Location/Location";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div className="app-container">
      <Hero />
      <AboutUs />
      <Sponsors />
      <InterestedInSponsoring />
      <FAQ />
      <Location />
      <MeetTheTeam />
      <ContactUs />
    </div>
  );
}

export default App;
