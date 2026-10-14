import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "I absolutely love this center! It doesn't even feel like dropping your kids off at a center — it feels like dropping them at a family member's. They love the kids, the atmosphere is fun, and they incorporate learning to get your kids ready for kindergarten as well. It is such a blessing to have such a wonderful place to take my kids when I'm working and know they are being loved and taken care of.",
    name: "Amara King",
  },
  {
    quote: "Both my boys have been going there since they were babies. It's a great, family-friendly atmosphere. They work with you and really love their kids there. I'm glad to have my boys be part of their family.",
    name: "Moronica Owens",
  },
  {
    quote: "I was very happy with Christina's Child Care. My son was in the infant room and I was very pleased with the clean atmosphere and welcoming staff. They were flexible with my schedule and I love the hours of operation due to my work schedule.",
    name: "Brittany Anspach",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-grape">Testimonials</span>
          <h2 className="mt-3 font-heading font-semibold text-ink text-4xl sm:text-5xl leading-tight">
            What Our Families <span className="text-grape">Are Saying</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="rounded-[2rem] bg-white p-8 shadow-lg shadow-ink/5 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-2xl bg-grape-soft flex items-center justify-center">
                  <Quote className="w-5 h-5 text-grape" />
                </span>
                <span className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-sun fill-sun" />
                  ))}
                </span>
              </div>
              <blockquote className="mt-5 text-sm text-ink/70 leading-relaxed flex-1">"{t.quote}"</blockquote>
              <figcaption className="mt-6 font-heading font-semibold text-ink">— {t.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
