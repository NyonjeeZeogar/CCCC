import React from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Phone, Mail, Briefcase } from "lucide-react";

const CRYSTAL = [45.0258, -93.3738];
const BROOKLYN_PARK = [45.1064, -93.3616];

const pin = (color) =>
  L.divIcon({
    className: "",
    html: `<div style="width:30px;height:30px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${color};border:3px solid #fff;box-shadow:0 6px 14px rgba(0,0,0,.3)"><div style="transform:rotate(45deg);color:#fff;font-size:11px;display:flex;align-items:center;justify-content:center;height:100%">★</div></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

export default function ContactInfo() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col gap-5"
      >
        <div className="rounded-[2rem] bg-white shadow-lg shadow-ink/5 p-7">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-coral-soft flex items-center justify-center">
              <MapPin className="w-5 h-5 text-coral" />
            </span>
            <h3 className="font-heading font-semibold text-ink text-xl">Brooklyn Park</h3>
          </div>
          <p className="mt-3 text-sm text-ink/60">7516 Brooklyn Blvd, Brooklyn Park, MN 55443</p>
          <a href="tel:+17634500638" className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-coral transition-colors">
            <Phone className="w-3.5 h-3.5" /> (763) 450-0638
          </a>
        </div>

        <div className="rounded-[2rem] bg-white shadow-lg shadow-ink/5 p-7">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-grape-soft flex items-center justify-center">
              <MapPin className="w-5 h-5 text-grape" />
            </span>
            <h3 className="font-heading font-semibold text-ink text-xl">Crystal</h3>
          </div>
          <p className="mt-3 text-sm text-ink/60">5510 W Broadway Ave, Crystal, MN 55428</p>
          <a href="tel:+17633905870" className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-grape transition-colors">
            <Phone className="w-3.5 h-3.5" /> (763) 390-5870
          </a>
        </div>

        <div className="rounded-[2rem] bg-white shadow-lg shadow-ink/5 p-7">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-sky-soft flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-sky" />
            </span>
            <h3 className="font-heading font-semibold text-ink text-xl">Job Application</h3>
          </div>
          <p className="mt-3 text-sm text-ink/60">Please email applications to:</p>
          <a href="mailto:info@chriskids2.org" className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-sky transition-colors">
            <Mail className="w-3.5 h-3.5" /> info@chriskids2.org
          </a>
        </div>

        <div className="rounded-[2rem] bg-sun-soft border-2 border-sun/40 p-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-3">Hours</h3>
          <ul className="space-y-1.5 text-sm text-ink/70 font-medium">
            <li>Monday – Friday: 6:30am – 8:00pm</li>
            <li>Saturday: 6:30am – 3:00pm</li>
            <li>Sunday: 6:30am – 3:00pm</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="rounded-[2.5rem] overflow-hidden shadow-xl shadow-ink/10 border-4 border-white min-h-[420px]"
      >
        <MapContainer center={[45.066, -93.368]} zoom={11} scrollWheelZoom={false} className="w-full h-full" style={{ minHeight: 420 }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <Marker position={CRYSTAL} icon={pin("#6A5ACD")}>
            <Popup>
              <strong>Crystal Location</strong>
              <br />
              5510 W Broadway Ave, Crystal, MN 55428
            </Popup>
          </Marker>
          <Marker position={BROOKLYN_PARK} icon={pin("#FF6B6B")}>
            <Popup>
              <strong>Brooklyn Park Location</strong>
              <br />
              7516 Brooklyn Blvd, Brooklyn Park, MN 55443
            </Popup>
          </Marker>
        </MapContainer>
      </motion.div>
    </div>
  );
}
