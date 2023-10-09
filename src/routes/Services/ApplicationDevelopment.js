import React from "react";
import Hero from "../../components/Services/hero";
import Cards from "../../components/Services/cards";
import Quote from "../../components/Services/blockquote";
import services from "../../Content/services.json";
import Pricing from "../../components/Services/pricing";
import Block from "../../components/Services/block";
import Footer from "../../components/Home/Footer";

const ApplicationDevelopment = () => {

    return (
        <>
            <Hero data={services.applicationdevelopment}/>
            <Quote data={services.applicationdevelopment}/>
            <Cards data={services.applicationdevelopment}/>
            <Footer data={services.emaillist}/>
        </>
    )
}

export default ApplicationDevelopment;
