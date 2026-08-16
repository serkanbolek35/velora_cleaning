"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/poster-rooms.jpg"
          alt="Velora Cleaning ile temizlenmiş premium yaşam alanı"
          fill
          priority
          className="object-cover object-center scale-110 blur-sm"
        />
        {/* Görselin üzerine basılı promosyon yazılarını (daire tipleri,
            hizmet etiketleri vb.) tamamen görünmez kılmak için güçlü,
            çok katmanlı bir karartma uygulanıyor. */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/95 via-obsidian/90 to-obsidian" />
        <div className="absolute inset-0 bg-obsidian/70" />
      </div>

      {/* Ekranda görünmüyor (sr-only) ama sayfa kaynağında mevcut: hem
          arama motorları hem ekran okuyucular için sayfanın H1'i burada.
          Görsel tasarımdan hiçbir şey eksiltmeden SEO/erişilebilirliği korur. */}
      <h1 className="sr-only">
        Velora Cleaning | Pendik, Tuzla, Kartal, Maltepe, Sultanbeyli Temizlik Şirketi
      </h1>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-graystone z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] tracking-[0.3em]">AŞAĞI KAYDIRIN</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
