import React from "react";

import "../App.css";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";
import Testimonial from "../components/Home/Testimonial";
import Solutions from "../components/Home/Solutions";


const HomeMain = () => {

    return (
        <>
            <Hero/>
            <About/>
            <Solutions/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default HomeMain;