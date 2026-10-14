import React from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import GalleryGrid from "@/components/fieldtrips/GalleryGrid";
import NewsletterSignup from "@/components/fieldtrips/NewsletterSignup";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function FieldTrips() {
  return (
    <div className="min-h-screen bg-cream text-ink font-body antialiased">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-32 pb-14 lg:pt-40 lg:pb-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sun/25 blur-3xl" aria-hidden="true" />
          <div className="absolute top-48 -left-32 w-80 h-80 rounded-full bg-coral/10 blur-3xl" aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-sun-soft text-ink px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                <Camera className="w-3.5 h-3.5" />
                Kids Excitement Time
              </span>
              <h1 className="mt-5 font-heading font-semibold text-ink text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
                Field <span className="text-coral">Trips</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-ink/70 leading-relaxed">
                Every year we enjoy planning educational field trips to help broaden and expand the learning
                fields for our students. Toddlers, preschoolers, and school agers enjoy going on
                age-appropriate field trips throughout the year.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-20 lg:pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <GalleryGrid />
          </div>
        </section>

        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
}
