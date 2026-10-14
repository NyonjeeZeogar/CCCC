import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Baby, Blocks, Shapes, Backpack } from "lucide-react";

const chips = [
  { icon: Baby, label: "Infants", href: "#infants" },
  { icon: Blocks, label: "Toddlers", href: "#toddlers" },
  { icon: Shapes, label: "Preschoolers", href: "#preschoolers" },
  { icon: Backpack, label: "Before & After School", href: "#school-age" },
];

export default function ProgramsHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-coral/10 blur-3xl" aria-hidden="true" />
      <div className="absolute top-40 -right-32 w-96 h-96 rounded-full bg-sun/25 blur-3xl" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-leaf-soft text-leaf px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            Christina's Child Care Center
          </span>
          <h1 className="mt-5 font-heading font-semibold text-ink text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
            Programs for <span className="text-coral">Every Age</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink/70 leading-relaxed">
            From a baby's first classroom to the school-age years — look through the programs we offer.
            If you need help, just contact us: we offer help for many families in need.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {chips.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-sand hover:border-coral px-5 py-2.5 text-sm font-bold text-ink shadow-sm hover:shadow-md transition-all"
            >
              <c.icon className="w-4 h-4 text-coral" />
              {c.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
