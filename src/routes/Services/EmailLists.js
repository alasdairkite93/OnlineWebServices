import React from "react";
import Hero from "../../components/Services/hero";
import Cards from "../../components/Services/cards";
import Quote from "../../components/Services/blockquote";
import services from "../../Content/services.json";
import Pricing from "../../components/Services/pricing";
import Block from "../../components/Services/block";
import Footer from "../../components/Home/Footer";

const EmailLists = () => {

  return (
      <>
        <Hero data={services.emaillist}/>
        <Quote data={services.emaillist}/>
        <Cards data={services.emaillist}/>
        <Block data={services.emaillist}/>
        <Pricing data={services.emaillist}/>
        <Footer data={services.emaillist}/>
      </>
  )
}

export default EmailLists;

