import React from "react";
import Hero from "../Components/Hero";
import MedtechOffer from "../Components/MedtechOffer";
import MedicalClaims from "../Components/MedicalClaims";
import TrustBilling from "../Components/TrustBilling";
import PricingQuote from "../Components/PricingQuote";
import Walkthrough from "../Components/Walkthrough";
import GetStarted from "../Components/GetStarted";

const Main = () => {
  return (
    <div>
      <Hero />
      <MedtechOffer />
      <MedicalClaims />
      <TrustBilling />
      <PricingQuote />
      <Walkthrough />
      <GetStarted />
    </div>
  );
};

export default Main;
