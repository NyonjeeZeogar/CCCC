import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, Send } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function NewsletterSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.entities.NewsletterSignup.create({ name, email });
    setSending(false);
    setDone(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-sky via-grape to-coral px-8 py-14 sm:px-14 text-center shadow-2xl shadow-grape/25"
        >
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-sun/25 blur-2xl" aria-hidden="true" />

          <span className="relative inline-flex items-center gap-2 rounded-full bg-white/15 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            Stay in the loop
          </span>
          <h2 className="relative mt-5 font-heading font-semibold text-white text-3xl sm:text-4xl">
            Join Our Newsletter
          </h2>
          <p className="relative mt-3 text-white/85 max-w-lg mx-auto">
            Field trip announcements, center updates, and family news — straight to your inbox.
          </p>

          {done ? (
            <div className="relative mt-8 inline-flex items-center gap-3 rounded-full bg-white text-ink font-bold px-7 py-4">
              <CheckCircle2 className="w-5 h-5 text-leaf" />
              Success! You're subscribed.
            </div>
          ) : (
            <form onSubmit={submit} className="relative mt-8 max-w-md mx-auto space-y-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full rounded-full bg-white/15 border-2 border-white/30 placeholder-white/60 text-white px-5 py-3.5 focus:outline-none focus:border-sun"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full rounded-full bg-white/15 border-2 border-white/30 placeholder-white/60 text-white px-5 py-3.5 focus:outline-none focus:border-sun"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-coral font-bold px-7 py-3.5 hover:bg-sun hover:text-ink transition-colors disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {sending ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
