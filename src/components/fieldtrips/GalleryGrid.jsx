import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react";
import { Image } from "@/components/ui/image";

const photos = [
  { src: "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/12bfe4128_generated_image.png", alt: "Children exploring hands-on exhibits at a children's museum" },
  { src: "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/e7226bc1a_generated_image.png", alt: "Children petting a friendly sheep at a farm petting zoo" },
  { src: "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/9c4f2aa00_generated_image.png", alt: "Children on a nature trail walk with their teacher" },
  { src: "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/60cb316e5_generated_image.png", alt: "Children visiting a fire truck at the fire station" },
  { src: "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/d8097a902_generated_image.png", alt: "Children listening to story time at the library" },
  { src: "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/c91c00737_generated_image.png", alt: "Children playing together on a sunny playground" },
  { src: "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/10390fa1a_generated_image.png", alt: "Children holding pumpkins at an autumn pumpkin patch" },
  { src: "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/1325388b5_generated_image.png", alt: "Children watching a science demonstration in wonder" },
];

export default function GalleryGrid() {
  const [selected, setSelected] = useState(null);

  const prev = () => setSelected((s) => (s === null ? null : (s - 1 + photos.length) % photos.length));
  const next = () => setSelected((s) => (s === null ? null : (s + 1) % photos.length));

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((p, i) => (
          <motion.button
            key={p.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: (i % 4) * 0.07 }}
            onClick={() => setSelected(i)}
            className="group relative rounded-[1.6rem] overflow-hidden aspect-square shadow-md shadow-ink/5 focus:outline-none focus:ring-4 focus:ring-coral/50"
            aria-label={`Open photo: ${p.alt}`}
          >
            <Image src={p.src} alt={p.alt} className="w-full h-full group-hover:scale-110 transition-transform duration-500" fittingType="fill" />
            <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors flex items-center justify-center">
              <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
          </motion.button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Close photo"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="max-w-3xl w-full rounded-[2rem] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Image src={photos[selected].src} alt={photos[selected].alt} className="w-full" fittingType="fill" />
          </div>
        </div>
      )}
    </div>
  );
}
