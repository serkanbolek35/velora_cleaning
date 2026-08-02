"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryCategories, galleryItems } from "@/lib/site-data";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeCategory === "Tümü" ? galleryItems : galleryItems.filter((g) => g.category === activeCategory);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const showPrev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );
  const showNext = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, showPrev, showNext]);

  return (
    <section className="relative py-24 md:py-32 bg-obsidian-light">
      <div className="container">
        <SectionHeading
          eyebrow="Galeri"
          title="Çalışmalarımızdan Kareler"
          description="Farklı kategorilerdeki temizlik projelerimizden örnekler."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium border transition-colors",
                activeCategory === cat
                  ? "bg-gold text-obsidian border-gold"
                  : "border-gold/30 text-graystone hover:border-gold hover:text-gold"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <motion.button
              key={item.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              onClick={() => setLightbox(i)}
              className="relative w-full break-inside-avoid rounded-xl overflow-hidden group block card-gold-border"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/50 transition-colors flex items-center justify-center">
                  <ZoomIn className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" size={28} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-obsidian/90 to-transparent">
                <p className="text-ivory text-xs font-medium text-left">{item.title}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-obsidian/95 flex items-center justify-center p-6"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${filtered[lightbox].title} büyük görünüm`}
          >
            <button
              className="absolute top-6 right-6 text-ivory p-2 hover:text-gold transition-colors"
              onClick={closeLightbox}
              aria-label="Kapat"
            >
              <X size={28} />
            </button>
            <button
              className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 text-ivory p-2 hover:text-gold transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Önceki görsel"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 text-ivory p-2 hover:text-gold transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Sonraki görsel"
            >
              <ChevronRight size={32} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl aspect-square"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].image}
                alt={filtered[lightbox].title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 672px"
              />
              <p className="absolute -bottom-9 left-0 right-0 text-center text-ivory text-sm">
                {filtered[lightbox].title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
