"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-data";

export default function FloatingButtons() {
  return (
    <div className="hidden md:flex fixed bottom-8 right-5 z-50 flex-col gap-3">
      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg"
      >
        <MessageCircle size={26} />
      </motion.a>
      <motion.a
        href={siteConfig.phoneHref}
        aria-label="Bizi arayın"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gold text-obsidian flex items-center justify-center shadow-gold"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
}
