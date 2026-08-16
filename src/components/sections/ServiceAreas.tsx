"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { areaPages } from "@/lib/site-data";
import SectionHeading from "@/components/ui/SectionHeading";

const MotionLink = motion(Link);

export default function ServiceAreas() {
  return (
    <section className="relative py-24 md:py-32 bg-obsidian">
      <div className="container">
        <SectionHeading
          eyebrow="Hizmet Bölgelerimiz"
          title="İstanbul Anadolu Yakası'nda Yanınızdayız"
          description="Aşağıdaki bölgelerde ve yakın çevresinde hızlı ve güvenilir hizmet sunuyoruz."
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {areaPages.map((area, i) => (
            <MotionLink
              key={area.slug}
              href={`/${area.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-gold-border rounded-2xl p-6 md:p-8 bg-obsidian-light flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <MapPin className="text-gold" size={22} />
              </div>
              <span className="font-display text-lg text-ivory">{area.name}</span>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
