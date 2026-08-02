"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-data";

export default function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-gold/20">
      <div className="grid grid-cols-2">
        <a
          href={siteConfig.phoneHref}
          className="flex items-center justify-center gap-2 py-4 text-ivory text-sm font-semibold border-r border-gold/10 active:bg-obsidian-soft"
        >
          <Phone size={18} className="text-gold" /> Ara
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 text-ivory text-sm font-semibold active:bg-obsidian-soft"
        >
          <MessageCircle size={18} className="text-[#25D366]" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
