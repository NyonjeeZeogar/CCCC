import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Bus, Info } from "lucide-react";
import { Image } from "@/components/ui/image";

const TEACHING_IMG = "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/ab0101b5b_generated_image.png";
const AFTER_SCHOOL_IMG = "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/e54a5dbee_generated_image.png";
const FOOD_IMG = "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/19a8fd976_generated_image.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

function PhotoCard({ img, alt, title, text, tint, delay }) {
  return (
    <motion.article {...fadeUp(delay)} className="group rounded-[2rem] bg-white overflow-hidden shadow-lg shadow-ink/5 hover:shadow-xl hover:shadow-ink/10 hover:-translate-y-1 transition-all duration-300">
      <div className="h-52 overflow-hidden">
        <Image src={img} alt={alt} className={`w-full h-full group-hover:scale-105 transition-transform duration-500`} fittingType="fill" />
      </div>
      <div className="p-7">
        <span className={`inline-block w-3 h-3 rounded-full mb-3 ${tint}`} aria-hidden="true" />
        <h3 className="font-heading font-semibold text-ink text-xl">{title}</h3>
        <p className="mt-2 text-sm text-ink/60 leading-relaxed">{text}</p>
      </div>
    </motion.article>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="scroll-mt-24 py-20 lg:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp()} className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-grape">Programs</span>
          <h2 className="mt-3 font-heading font-semibold text-ink text-4xl sm:text-5xl leading-tight">
            Programs That <span className="text-leaf">Grow</span> With Your Child
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            From a child's first classroom to the after-school years, every Christina's program is guided by
            developmentally appropriate practice — and by each child's own needs and pace.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PhotoCard
            img={TEACHING_IMG}
            alt="A teacher guiding a young child during a painting activity"
            title="Daily Teaching"
            text="Infants, toddlers, and preschoolers learn through play-based, developmentally appropriate experiences — every single day."
            tint="bg-coral"
            delay={0}
          />
          <PhotoCard
            img={AFTER_SCHOOL_IMG}
            alt="School-age children reading and doing homework at a light wood table"
            title="After School Program"
            text="A safe, engaging place before and after the school day — homework support, active play, and friendships."
            tint="bg-sky"
            delay={0.1}
          />
          <PhotoCard
            img={FOOD_IMG}
            alt="Colorful healthy snacks arranged on a light wooden kids table"
            title="Approved Food Program"
            text="Nutritious, approved meals and snacks served daily — fueling growing minds and bodies."
            tint="bg-sun"
            delay={0.2}
          />
          <motion.article
            {...fadeUp(0.3)}
            className="rounded-[2rem] bg-gradient-to-br from-grape to-[#4d3f9e] text-white p-8 flex flex-col justify-between shadow-xl shadow-grape/25 sm:row-span-1 lg:col-span-1"
          >
            <div>
              <span className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-white" />
              </span>
              <h3 className="mt-4 font-heading font-semibold text-2xl">Family Support Center</h3>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                A single source of integrated, comprehensive professional support programs for family and
                child care — one trusted place for the whole family.
              </p>
            </div>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sun hover:gap-3 transition-all">
              Ask about family services →
            </a>
          </motion.article>

          <motion.div
            {...fadeUp(0.35)}
            className="rounded-[2rem] bg-sun-soft border-2 border-sun/40 p-7 sm:col-span-2 lg:col-span-2 flex items-start gap-5"
          >
            <span className="w-12 h-12 rounded-2xl bg-sun flex items-center justify-center shrink-0">
              <Bus className="w-6 h-6 text-ink" />
            </span>
            <div>
              <h3 className="font-heading font-semibold text-ink text-xl">Transportation (Pick-Up &amp; Drop-Off)</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                Transportation is <strong className="text-ink">not currently running at our Brooklyn Park location</strong>.
                For now, Brooklyn Park families can plan on direct drop-off — we'll share an update as soon as
                transportation resumes.
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink/50">
                <Info className="w-3.5 h-3.5" /> Updated October 2026
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
