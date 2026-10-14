import React from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Hero from "@/components/whatwedo/Hero";
import Approach from "@/components/whatwedo/Approach";
import Programs from "@/components/whatwedo/Programs";
import HoursSection from "@/components/whatwedo/HoursSection";
import LocationsMap from "@/components/whatwedo/LocationsMap";
import TourCta from "@/components/whatwedo/TourCta";

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-cream text-ink font-body antialiased">
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <Programs />
        <HoursSection />
        <LocationsMap />
        <TourCta />
      </main>
      <Footer />
    </div>
  );
}
