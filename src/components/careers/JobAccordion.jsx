import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import JOBS from "./jobsData";

export default function JobAccordion() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="space-y-4">
      {JOBS.map((job, i) => {
        const open = openIdx === i;
        return (
          <motion.div
            key={job.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: Math.min(i * 0.05, 0.3) }}
            className="rounded-[1.8rem] bg-white shadow-lg shadow-ink/5 overflow-hidden"
          >
            <button
              onClick={() => setOpenIdx(open ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-6 text-left focus:outline-none focus:ring-4 focus:ring-coral/30 rounded-[1.8rem]"
              aria-expanded={open}
            >
              <div>
                <h3 className="font-heading font-semibold text-ink text-lg sm:text-xl">{job.title}</h3>
                <span className={`inline-block mt-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${job.accent}`}>
                  {job.type}
                </span>
              </div>
              <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open ? "bg-coral text-white rotate-180" : "bg-sand text-ink"}`}>
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>

            {open && (
              <div className="px-6 sm:px-8 pb-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-3">Responsibilities</h4>
                  <ul className="space-y-2.5">
                    {job.responsibilities.map((r, k) => (
                      <li key={k} className="flex gap-2.5 text-sm text-ink/70 leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${job.accent.replace("text-", "bg-").split(" ")[0]}`} aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-3">Qualifications</h4>
                  <ul className="space-y-2.5">
                    {job.qualifications.map((q, k) => (
                      <li key={k} className="flex gap-2.5 text-sm text-ink/70 leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${job.accent.replace("text-", "bg-").split(" ")[0]}`} aria-hidden="true" />
                        {q}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:info@chriskids2.org?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink hover:bg-grape text-white font-bold px-6 py-3 text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Apply Now
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
