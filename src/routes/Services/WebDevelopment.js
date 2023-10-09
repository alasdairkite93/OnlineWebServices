import React from "react";
import Hero from "../../components/Services/hero";
import Cards from "../../components/Services/cards";
import Quote from "../../components/Services/blockquote";
import services from "../../Content/services.json";
import Pricing from "../../components/Services/pricing";
import Block from "../../components/Services/block";
import Footer from "../../components/Home/Footer";

const WebDevelopment = () => {

  return (
      <>
        <Hero data={services.WebDevelopment}/>
        <Quote data={services.WebDevelopment}/>
        <Cards data={services.WebDevelopment}/>
        <Footer data={services.WebDevelopment}/>
      </>
  )
}

export default WebDevelopment;
