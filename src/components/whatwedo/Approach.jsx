import React from "react";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Handshake } from "lucide-react";
import { Image } from "@/components/ui/image";

const TEACHING_IMG = "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/ab0101b5b_generated_image.png";

const values = [
  { icon: Lightbulb, title: "Creativity First", text: "Hands-on learning that fosters creativity and expanded self-expression." },
  { icon: Heart, title: "Respect for Every Child", text: "Children are encouraged to think for themselves, solve problems, and voice their ideas." },
  { icon: Handshake, title: "Home & School Partnership", text: "An active partnership between home and school guides everything we do." },
];

export default function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="rounded-[3rem] rounded-tr-[8rem] overflow-hidden shadow-xl shadow-ink/10 aspect-[4/5] max-w-md">
            <Image src={TEACHING_IMG} alt="A teacher's hand guiding a child painting in a bright classroom" className="w-full h-full" fittingType="fill" />
          </div>
          <div className="absolute -bottom-6 -right-2 sm:right-6 bg-grape text-white rounded-3xl shadow-xl shadow-grape/30 px-6 py-4">
            <p className="font-heading text-3xl font-semibold leading-none">100%</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80 mt-1">Hands-On Learning</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-coral">Our Philosophy</span>
          <h2 className="mt-3 font-heading font-semibold text-ink text-4xl sm:text-5xl leading-tight">
            Learning Through <span className="text-grape">Doing</span>
          </h2>
          <div className="mt-6 space-y-4 text-ink/70 leading-relaxed">
            <p>
              Our center offers a <strong className="text-ink">"hands-on" approach to learning</strong> — an early
              childhood education style designed to foster creativity and expanded self-expression.
            </p>
            <p>
              Our teachers embrace the belief that parents are the first and most important teachers of their
              children. Children are encouraged to explore materials in their environment, express themselves
              through words, movements, drawing, and other creative forms, and take pride in their growth.
            </p>
            <p>
              Teachers observe and monitor each child in the classroom at all times, honoring that every child
              is a unique person with an individual pattern and timing of social, physical, and intellectual
              development.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 grid gap-5 sm:grid-cols-3">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            className="rounded-[2rem] bg-cream border border-sand p-7 hover:shadow-lg hover:shadow-ink/5 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
              <v.icon className="w-6 h-6 text-coral" />
            </span>
            <h3 className="mt-4 font-heading font-semibold text-ink text-lg">{v.title}</h3>
            <p className="mt-2 text-sm text-ink/60 leading-relaxed">{v.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
