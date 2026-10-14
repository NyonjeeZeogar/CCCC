import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import InquiryForm from "@/components/contact/InquiryForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream text-ink font-body antialiased">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-32 pb-14 lg:pt-40 lg:pb-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sky/10 blur-3xl" aria-hidden="true" />
          <div className="absolute top-48 -left-32 w-80 h-80 rounded-full bg-sun/20 blur-3xl" aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-soft text-sky px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                <MessageCircle className="w-3.5 h-3.5" />
                We'd Love to Hear From You
              </span>
              <h1 className="mt-5 font-heading font-semibold text-ink text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
                Contact <span className="text-coral">Us</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-ink/70 leading-relaxed">
                Questions about enrollment, programs, or tours? Send an admission inquiry below or
                reach out directly — both of our locations are happy to help.
              </p>
              <a
                href="mailto:info@chriskids2.org"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-coral transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@chriskids2.org
              </a>
            </motion.div>
          </div>
        </section>

        <section className="pb-16 lg:pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <InquiryForm />
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="max-w-6xl mx-auto px-6">
            <ContactInfo />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
