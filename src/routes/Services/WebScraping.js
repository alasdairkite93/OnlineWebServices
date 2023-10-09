import React from "react";
import Hero from "../../components/Services/hero";
import Cards from "../../components/Services/cards";
import Quote from "../../components/Services/blockquote";
import services from "../../Content/services.json";
import Pricing from "../../components/Services/pricing";
import Block from "../../components/Services/block";
import Footer from "../../components/Home/Footer";

const WebScraping = () => {

    return (
        <>
            <Hero data={services.WebScraping}/>
            <Quote data={services.WebScraping}/>
            <Cards data={services.WebScraping}/>
            <Footer data={services.WebScraping}/>
        </>
    )
}

export default WebScraping;
