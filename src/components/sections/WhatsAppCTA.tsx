"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-data";

export default function WhatsAppCTA() {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-r from-obsidian via-obsidian-soft to-obsidian overflow-hidden">
      <div className="absolute inset-0 bg-gold-radial opacity-[0.08]" aria-hidden="true" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 card-gold-border rounded-3xl p-8 md:p-12 bg-obsidian-light"
        >
          <div className="text-center md:text-left">
            <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
              <MessageCircle className="text-[#25D366]" size={28} />
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-ivory mb-2">Anında WhatsApp Teklifi</h3>
            <p className="text-graystone text-sm md:text-base max-w-md">
              Tek tıkla WhatsApp üzerinden bize ulaşın, dakikalar içinde size özel fiyat teklifi alın.
            </p>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-obsidian font-semibold shadow-gold hover:bg-gold-light transition-colors whitespace-nowrap"
          >
            <MessageCircle size={20} /> Hemen Yaz
          </a>
        </motion.div>
      </div>
    </section>
  );
}
