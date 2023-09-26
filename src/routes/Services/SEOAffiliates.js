import React from "react";
import Hero from "../../components/Services/hero";
import Cards from "../../components/Services/cards";
import Quote from "../../components/Services/blockquote";
import services from "../../Content/services.json";
import Pricing from "../../components/Services/pricing";
import Block from "../../components/Services/block";
import Footer from "../../components/Home/Footer";

const SEOAffiliates = () => {

  return (
      <>
        <Hero data={services.SEOAffiliates}/>
        <Quote data={services.SEOAffiliates}/>
        <Cards data={services.SEOAffiliates}/>
        <Block data={services.SEOAffiliates}/>
        <Pricing data={services.SEOAffiliates}/>
        <Footer data={services.SEOAffiliates}/>
      </>
  )
}

export default SEOAffiliates;
