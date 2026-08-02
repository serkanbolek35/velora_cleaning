"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-data";

export default function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/poster-main.jpg" alt="" fill className="object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-obsidian/92" />
      </div>
      <div className="container relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl sm:text-4xl md:text-6xl font-semibold max-w-3xl mx-auto leading-tight"
        >
          Temiz ve Ferah Bir Yaşam İçin <span className="text-gold-gradient">Hemen Bize Ulaşın</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold text-obsidian font-semibold shadow-gold hover:bg-gold-light transition-colors"
          >
            <MessageCircle size={19} /> WhatsApp
          </a>
          <a
            href={siteConfig.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gold/40 text-ivory font-semibold hover:border-gold hover:text-gold transition-colors"
          >
            <Phone size={18} /> {siteConfig.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
