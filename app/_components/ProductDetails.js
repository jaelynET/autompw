"use client";

import { useState } from "react";
import ProductHeroMedia from "./ProductHeroMedia";
import ProjectShowcase from "./ProjectShowcase";
import WhyChooseUs from "./WhyChooseUs";
import OurProcess from "./OurProcess";
import AboutCompany from "./AboutCompany";
import ContactSection from "./ContactSection";

import CheckoutBtn from "./CheckoutBtn";
import FeatureBox from "./FeatureBox";

export default function ProductDetails({ product }) {
  return (
    <>
      <ProductHeroMedia />
      <ProjectShowcase />
      <WhyChooseUs />
      <OurProcess />
      <AboutCompany />
      <ContactSection />
    </>
  );
}
