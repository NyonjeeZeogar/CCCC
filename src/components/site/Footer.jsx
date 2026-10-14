import React from "react";
import { MapPin, Phone, Mail, Sun, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Field Trip", href: "/field-trip" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-xl font-semibold text-white mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-sun shrink-0" />
                <span><strong className="text-white">Brooklyn Park:</strong><br />7516 Brooklyn Blvd, Brooklyn Park, MN 55443<br />(763) 450-0638</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-sun shrink-0" />
                <span><strong className="text-white">Crystal:</strong><br />5510 W Broadway Ave, Crystal, MN 55428<br />(763) 390-5870</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-sun shrink-0" />
                <a href="mailto:info@chriskids2.org" className="hover:text-sun transition-colors">info@chriskids2.org</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold text-white mb-5">Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><Clock className="w-4 h-4 mt-0.5 text-sun shrink-0" /><span>Monday – Friday: 6:30am – 8:00pm</span></li>
              <li className="flex gap-3"><Clock className="w-4 h-4 mt-0.5 text-sun shrink-0" /><span>Saturday: 6:30am – 3:00pm</span></li>
              <li className="flex gap-3"><Clock className="w-4 h-4 mt-0.5 text-sun shrink-0" /><span>Sunday: 6:30am – 3:00pm</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-sun transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col items-center gap-3 text-center">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-coral to-sun flex items-center justify-center">
            <Sun className="w-5 h-5 text-white" strokeWidth={2.5} />
          </span>
          <p className="font-heading text-2xl font-semibold text-white tracking-wide">CHRISTINA'S CHILD CARE CENTER</p>
          <p className="text-xs text-white/50">Copyright © 2026 Christina's Child Care Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
