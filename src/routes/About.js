import React from "react";
import AboutMain from "../components/AboutComponents/main"
import Hero from "../components/Services/hero";
import aboutJSON from "../Content/about.json";
import Footer from "../components/Home/Footer";

const About = () => {
  return (

      <>
          <AboutMain data={aboutJSON}/>
          <Footer />
      </>
      )
};

export default About;
