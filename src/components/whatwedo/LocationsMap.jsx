import React from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Navigation, MapPin, Bus } from "lucide-react";

const CRYSTAL = [45.0258, -93.3738];
const BROOKLYN_PARK = [45.1064, -93.3616];
const ROUTE = [
  [45.0258, -93.3738],
  [45.0489, -93.3731],
  [45.0722, -93.3682],
  [45.0931, -93.3645],
  [45.1064, -93.3616],
];

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&origin=5510+W+Broadway+Ave,+Crystal,+MN+55428&destination=7516+Brooklyn+Blvd,+Brooklyn+Park,+MN+55443";

const pin = (color) =>
  L.divIcon({
    className: "",
    html: `<div style="width:30px;height:30px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${color};border:3px solid #fff;box-shadow:0 6px 14px rgba(0,0,0,.3)"><div style="transform:rotate(45deg);color:#fff;font-size:11px;display:flex;align-items:center;justify-content:center;height:100%">★</div></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

export default function LocationsMap() {
  return (
    <section id="locations" className="scroll-mt-24 py-20 lg:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-leaf">Locations</span>
          <h2 className="mt-3 font-heading font-semibold text-ink text-4xl sm:text-5xl leading-tight">
            Two Locations, <span className="text-leaf">One Family</span>
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            The route from our original Crystal home to the new Brooklyn Park center — just a few miles up
            Broadway, and the same warm Christina's care at both.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="rounded-[2rem] bg-white shadow-lg shadow-ink/5 p-7">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-grape-soft flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-grape" />
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-ink/50">Start · Crystal</p>
              </div>
              <h3 className="mt-3 font-heading font-semibold text-ink text-xl">Crystal Location</h3>
              <p className="mt-1 text-sm text-ink/60">5510 W Broadway Ave, Crystal, MN 55428</p>
              <p className="mt-1 text-sm font-semibold text-ink">(763) 390-5870</p>
            </div>

            <div className="rounded-[2rem] bg-white shadow-lg shadow-ink/5 p-7">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-coral-soft flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-coral" />
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-ink/50">Destination · Brooklyn Park</p>
              </div>
              <h3 className="mt-3 font-heading font-semibold text-ink text-xl">Brooklyn Park Location</h3>
              <p className="mt-1 text-sm text-ink/60">7516 Brooklyn Blvd, Brooklyn Park, MN 55443</p>
              <p className="mt-1 text-sm font-semibold text-ink">(763) 450-0638</p>
            </div>

            <div className="rounded-[2rem] bg-ink text-white p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50">The Education Corridor</p>
                  <p className="mt-2 font-heading font-semibold text-2xl">≈ 5 miles · ~12 min drive</p>
                  <p className="mt-1 text-sm text-white/60">Mostly straight up W Broadway Ave</p>
                </div>
                <span className="w-12 h-12 rounded-2xl bg-coral flex items-center justify-center shrink-0">
                  <Navigation className="w-6 h-6 text-white" />
                </span>
              </div>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center w-full rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-6 py-3.5 transition-colors"
              >
                Get Directions on Google Maps
              </a>
            </div>

            <div className="rounded-[2rem] bg-sun-soft border-2 border-sun/40 px-6 py-4 flex items-center gap-4">
              <Bus className="w-5 h-5 text-ink shrink-0" />
              <p className="text-sm text-ink/70 font-medium">
                Transportation is not currently running at Brooklyn Park — direct drop-off only for now.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-3 rounded-[2.5rem] overflow-hidden shadow-xl shadow-ink/10 border-4 border-white min-h-[420px]"
          >
            <MapContainer
              center={[45.066, -93.368]}
              zoom={12}
              scrollWheelZoom={false}
              className="w-full h-full"
              style={{ minHeight: 420 }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              />
              <Polyline positions={ROUTE} pathOptions={{ color: "#FF6B6B", weight: 5, opacity: 0.85, lineCap: "round" }} />
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
      </div>
    </section>
  );
}
