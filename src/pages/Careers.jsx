import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import JobAccordion from "@/components/careers/JobAccordion";
import { Briefcase, Mail } from "lucide-react";

export default function Careers() {
  return (
    <div className="min-h-screen bg-cream text-ink font-body antialiased">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-32 pb-14 lg:pt-40 lg:pb-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-grape/10 blur-3xl" aria-hidden="true" />
          <div className="absolute top-40 -right-32 w-96 h-96 rounded-full bg-sun/25 blur-3xl" aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-grape-soft text-grape px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                <Briefcase className="w-3.5 h-3.5" />
                Join Our Team
              </span>
              <h1 className="mt-5 font-heading font-semibold text-ink text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
                Careers
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-ink/70 leading-relaxed">
                Love helping little minds grow? Explore our open roles — we're always looking for warm,
                dependable people to join the Christina's family.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-16 lg:pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-heading font-semibold text-ink text-3xl sm:text-4xl mb-8"
            >
              Job Openings
            </motion.h2>
            <JobAccordion />
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-[2.5rem] bg-gradient-to-br from-sun to-coral p-8 sm:p-12 text-center shadow-2xl shadow-coral/20"
            >
              <span className="mx-auto w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </span>
              <h2 className="mt-4 font-heading font-semibold text-white text-3xl sm:text-4xl">Ready to Apply?</h2>
              <p className="mt-3 text-white/90 font-medium">
                Please email your application to:
              </p>
              <a
                href="mailto:info@chriskids2.org?subject=Job%20Application"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-coral font-bold px-7 py-3.5 hover:bg-sun hover:text-ink transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@chriskids2.org
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
