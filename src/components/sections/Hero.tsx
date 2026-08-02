"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { whatsappLink, stats } from "@/lib/site-data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Image
          src="/images/poster-rooms.jpg"
          alt="Velora Cleaning ile temizlenmiş premium yaşam alanı"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/90 via-obsidian/75 to-obsidian" />
        <div className="absolute inset-0 bg-obsidian/40" />
      </div>

      <div className="container relative z-10 py-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-eyebrow text-gold text-xs md:text-sm font-semibold uppercase mb-5"
        >
          İstanbul Anadolu Yakası · Premium Temizlik
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.1] max-w-4xl mx-auto"
        >
          <span className="text-gold-gradient">Premium</span> Temizlik Hizmetleri
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-graystone text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Evinizi ve iş yerinizi profesyonel ekibimizle hijyenik, güvenilir ve profesyonel şekilde temizliyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold text-obsidian font-semibold shadow-gold hover:bg-gold-light transition-colors"
          >
            <MessageCircle size={19} /> WhatsApp Teklif Al
          </a>
          <a
            href="#kesif-formu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gold/40 text-ivory font-semibold hover:border-gold hover:text-gold transition-colors"
          >
            Ücretsiz Keşif <ArrowRight size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-graystone text-xs md:text-sm mt-2 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-graystone"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] tracking-[0.3em]">AŞAĞI KAYDIRIN</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
