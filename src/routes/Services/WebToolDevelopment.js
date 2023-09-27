import React from "react";
import Hero from "../../components/Services/hero";
import Cards from "../../components/Services/cards";
import Quote from "../../components/Services/blockquote";
import services from "../../Content/services.json";
import Pricing from "../../components/Services/pricing";
import Block from "../../components/Services/block";
import Footer from "../../components/Home/Footer";

const WebToolDevelopment = () => {

  return (
      <>
        <Hero data={services.WebToolDevelopment}/>
        <Quote data={services.WebToolDevelopment}/>
        <Cards data={services.WebToolDevelopment}/>
        <Block data={services.WebToolDevelopment}/>
        <Footer data={services.WebToolDevelopment}/>
      </>
  )
}

export default WebToolDevelopment;
