import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { Image } from "@/components/ui/image";

const HERO_IMG = "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/64442cdd0_generated_image.png";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sun/20 blur-3xl" aria-hidden="true" />
      <div className="absolute top-64 -left-32 w-80 h-80 rounded-full bg-grape/10 blur-3xl" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-grape-soft text-grape px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Christina's Child Care Center
          </span>
          <h1 className="mt-5 font-heading font-semibold text-ink text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
            What We <span className="text-coral">Do</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink/70 leading-relaxed max-w-lg">
            Where curiosity meets foundation. A hands-on, play-based early childhood experience —
            delivered with warmth, structure, and heart at our two Minnesota locations.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-7 py-3.5 shadow-lg shadow-coral/30 transition-colors">
              Schedule a Tour
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#programs" className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-ink/10 hover:border-grape text-ink font-bold px-7 py-3.5 transition-colors">
              See Our Programs
            </a>
          </div>
          <p className="mt-6 text-sm text-ink/50 font-medium">Ages 6 weeks – 12 years · Licensed &amp; approved programs</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-ink/15 aspect-[4/3]">
            <Image src={HERO_IMG} alt="A child focused on building with wooden blocks in a sun-drenched classroom" className="w-full h-full" fittingType="fill" />
          </div>
          <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-white rounded-3xl shadow-xl shadow-ink/10 px-5 py-4 flex items-center gap-3 animate-float-soft">
            <span className="w-10 h-10 rounded-2xl bg-leaf-soft flex items-center justify-center">
              <MapPin className="w-5 h-5 text-leaf" />
            </span>
            <div>
              <p className="text-sm font-bold text-ink leading-tight">Two Welcoming Locations</p>
              <p className="text-xs text-ink/60">Crystal &amp; Brooklyn Park, MN</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
