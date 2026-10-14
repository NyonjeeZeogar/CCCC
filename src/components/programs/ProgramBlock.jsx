import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function ProgramBlock({ id, chip, chipClass, title, titleAccent, paragraphs, img, alt, reverse }) {
  return (
    <section id={id} className="scroll-mt-28 py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`relative ${reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}
        >
          <div className="rounded-[3rem] rounded-bl-[7rem] overflow-hidden shadow-xl shadow-ink/10 aspect-[4/3]">
            <Image src={img} alt={alt} className="w-full h-full" fittingType="fill" />
          </div>
          <span className={`absolute -top-4 -right-3 w-16 h-16 rounded-full ${chipClass} opacity-60 blur-[2px]`} aria-hidden="true" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className={reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"}
        >
          <span className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${chipClass}`}>
            {chip}
          </span>
          <h2 className="mt-4 font-heading font-semibold text-ink text-4xl sm:text-5xl leading-tight">{titleAccent || title}</h2>
          <div className="mt-5 space-y-4 text-ink/70 leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink hover:bg-grape text-white font-bold px-6 py-3 transition-colors"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
