import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "What We Do", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "Field Trip", to: "/field-trip" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <nav className={`flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-300 ${scrolled ? "bg-white/90 shadow-lg shadow-ink/5 backdrop-blur-md" : "bg-white/70 backdrop-blur-md"}`}>
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-coral to-sun flex items-center justify-center shadow-md shadow-coral/30">
              <Sun className="w-5 h-5 text-white" strokeWidth={2.5} />
            </span>
            <span className="leading-tight">
              <span className="block font-heading font-semibold text-ink text-sm sm:text-base">Christina's</span>
              <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-ink/60">Child Care Center</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <Link key={l.label} to={l.to} className="px-3 py-2 rounded-full text-sm font-semibold text-ink/70 hover:text-ink hover:bg-sand transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link to="/contact" className="hidden sm:inline-flex items-center rounded-full bg-coral hover:bg-coral-dark text-white text-sm font-bold px-5 py-2.5 transition-colors shadow-md shadow-coral/30">
              Enroll Now
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 rounded-full bg-sand flex items-center justify-center text-ink"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 rounded-3xl bg-white/95 backdrop-blur-md shadow-xl shadow-ink/10 p-3 flex flex-col">
            {links.map((l) => (
              <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className="px-4 py-3 rounded-2xl text-sm font-semibold text-ink/80 hover:bg-sand transition-colors">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-1 px-4 py-3 rounded-2xl text-sm font-bold text-white bg-coral text-center">
              Enroll Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
