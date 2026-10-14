import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { base44 } from "@/api/base44Client";

const initial = {
  parent_name: "",
  parent_phone: "",
  parent_email: "",
  child_name: "",
  child_birthdate: "",
  interested_in: "",
  start_date: "",
  message: "",
};

const inputClass = "w-full rounded-2xl bg-cream border-2 border-sand focus:border-coral focus:outline-none px-5 py-3.5 text-sm text-ink placeholder-ink/40 transition-colors";

export default function InquiryForm() {
  const [form, setForm] = useState(initial);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.entities.AdmissionInquiry.create(form);
    setSending(false);
    setDone(true);
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-[2.5rem] bg-white shadow-xl shadow-ink/5 p-10 sm:p-14 text-center"
      >
        <span className="mx-auto w-16 h-16 rounded-3xl bg-leaf-soft flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-leaf" />
        </span>
        <h3 className="mt-5 font-heading font-semibold text-ink text-3xl">Inquiry Received!</h3>
        <p className="mt-3 text-ink/70 max-w-md mx-auto leading-relaxed">
          Thank you, {form.parent_name.split(" ")[0] || "friend"}! Our team will reach out to you shortly
          to talk about the next steps for your family.
        </p>
        <button
          onClick={() => { setForm(initial); setDone(false); }}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-sand hover:bg-sun text-ink font-bold px-6 py-3 transition-colors"
        >
          Send Another Inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      onSubmit={submit}
      className="rounded-[2.5rem] bg-white shadow-xl shadow-ink/5 p-7 sm:p-10 grid sm:grid-cols-2 gap-4"
    >
      <h3 className="sm:col-span-2 font-heading font-semibold text-ink text-3xl">Admission Inquiry</h3>
      <p className="sm:col-span-2 text-sm text-ink/60 -mt-2">Tell us a little about your family — we'll be in touch within a few days.</p>

      <input type="text" required value={form.parent_name} onChange={set("parent_name")} placeholder="Parent's Name *" className={inputClass} />
      <input type="tel" required value={form.parent_phone} onChange={set("parent_phone")} placeholder="Parent's Phone *" className={inputClass} />
      <input type="email" required value={form.parent_email} onChange={set("parent_email")} placeholder="Parent's Email Address *" className={inputClass} />
      <input type="text" value={form.child_name} onChange={set("child_name")} placeholder="Child's Name" className={inputClass} />
      <label className="text-xs font-bold uppercase tracking-widest text-ink/50 sm:col-span-1">
        Child's Birthdate
        <input type="date" value={form.child_birthdate} onChange={set("child_birthdate")} className={`${inputClass} mt-1.5`} />
      </label>
      <label className="text-xs font-bold uppercase tracking-widest text-ink/50 sm:col-span-1">
        Interested In
        <select value={form.interested_in} onChange={set("interested_in")} className={`${inputClass} mt-1.5`}>
          <option value="">Select a program...</option>
          <option>Infants</option>
          <option>Toddlers</option>
          <option>Preschoolers</option>
          <option>Before &amp; After School</option>
        </select>
      </label>
      <label className="text-xs font-bold uppercase tracking-widest text-ink/50 sm:col-span-2">
        Anticipated Start Date
        <input type="date" value={form.start_date} onChange={set("start_date")} className={`${inputClass} mt-1.5`} />
      </label>
      <textarea
        value={form.message}
        onChange={set("message")}
        placeholder="Message — anything else you'd like us to know?"
        rows={4}
        className={`${inputClass} sm:col-span-2 resize-none`}
      />
      <div className="sm:col-span-2 flex justify-end">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2 rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-8 py-3.5 transition-colors shadow-lg shadow-coral/25 disabled:opacity-60"
        >
          <Send className="w-4 h-4" />
          {sending ? "Sending..." : "Submit"}
        </button>
      </div>
    </motion.form>
  );
}
