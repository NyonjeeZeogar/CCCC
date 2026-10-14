import React from "react";
import { motion } from "framer-motion";
import { Clock, Sun } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "6:30am – 8:00pm", today: false },
  { day: "Saturday", time: "6:30am – 3:00pm", today: false },
  { day: "Sunday", time: "6:30am – 3:00pm", today: false },
];

export default function HoursSection() {
  const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const isWeekday = !["Saturday", "Sunday"].includes(todayName);

  return (
    <section id="hours" className="scroll-mt-24 py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-sky">Hours</span>
          <h2 className="mt-3 font-heading font-semibold text-ink text-4xl sm:text-5xl leading-tight">
            Open Early, <span className="text-sky">Home Late</span>
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed max-w-md">
            Hours built around working families — full-day care, six days a week, at both of our locations.
          </p>
          <div className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-sky-soft px-5 py-4">
            <Sun className="w-5 h-5 text-sky shrink-0" />
            <p className="text-sm text-ink/80 font-medium">
              Open <strong className="text-ink">{isWeekday ? "6:30am – 8:00pm" : "6:30am – 3:00pm"}</strong> today ({todayName})
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="rounded-[2.5rem] bg-cream border border-sand p-3 shadow-lg shadow-ink/5"
        >
          {hours.map((h, i) => {
            const days = h.day.split(" – ");
            const isToday = days.includes(todayName) || (days.length === 2 && h.day === "Monday – Friday" && isWeekday);
            return (
              <div
                key={h.day}
                className={`flex items-center justify-between rounded-[1.8rem] px-7 py-6 ${i < hours.length - 1 ? "mb-1" : ""} ${isToday ? "bg-white shadow-md shadow-ink/5" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${isToday ? "bg-coral-soft" : "bg-sand"}`}>
                    <Clock className={`w-5 h-5 ${isToday ? "text-coral" : "text-ink/40"}`} />
                  </span>
                  <span className="font-heading font-semibold text-ink">{h.day}</span>
                </div>
                <span className={`text-sm font-bold ${isToday ? "text-coral" : "text-ink/60"}`}>{h.time}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
