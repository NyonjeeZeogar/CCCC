import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, CalendarCheck } from "lucide-react";

export default function TourCta() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-coral via-[#e9698f] to-grape px-8 py-16 sm:px-14 text-center shadow-2xl shadow-coral/25"
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-sun/30 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />

          <span className="relative inline-flex items-center gap-2 rounded-full bg-white/15 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            <CalendarCheck className="w-3.5 h-3.5" />
            Enroll &amp; Tour
          </span>
          <h2 className="relative mt-5 font-heading font-semibold text-white text-4xl sm:text-5xl leading-tight">
            Ready to Schedule a Tour?
          </h2>
          <p className="relative mt-4 text-white/85 text-lg max-w-xl mx-auto leading-relaxed">
            Come see the classrooms, meet the teachers, and feel the difference a modern,
            nurturing center makes — at either location.
          </p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-4">
            <a href="tel:+17634500638" className="inline-flex items-center gap-2 rounded-full bg-white text-ink font-bold px-7 py-3.5 hover:bg-sun transition-colors">
              <Phone className="w-4 h-4" />
              (763) 450-0638
            </a>
            <a href="mailto:info@chriskids2.org" className="inline-flex items-center gap-2 rounded-full bg-ink/20 border-2 border-white/40 text-white font-bold px-7 py-3.5 hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4" />
              info@chriskids2.org
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
