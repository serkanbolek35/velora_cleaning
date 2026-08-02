import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-data";
import InspectionForm from "@/components/sections/InspectionForm";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Velora Cleaning ile iletişime geçin. Telefon, WhatsApp veya ücretsiz keşif formu üzerinden bize ulaşın. Pendik, Tuzla, Kartal, Maltepe, Sultanbeyli bölgelerinde hizmet veriyoruz.",
  alternates: { canonical: `${siteConfig.url}/iletisim` },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/poster-main.jpg" alt="" fill className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-obsidian/90" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="section-eyebrow text-gold text-xs md:text-sm font-semibold uppercase mb-4">İletişim</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold">
            Bize <span className="text-gold-gradient">Ulaşın</span>
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-obsidian">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href={siteConfig.phoneHref} className="card-gold-border rounded-2xl p-8 bg-obsidian-light text-center">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="text-gold" size={24} />
            </div>
            <h3 className="font-display text-lg text-ivory mb-1">Telefon</h3>
            <p className="text-graystone text-sm">{siteConfig.phone}</p>
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="card-gold-border rounded-2xl p-8 bg-obsidian-light text-center"
          >
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-gold" size={24} />
            </div>
            <h3 className="font-display text-lg text-ivory mb-1">WhatsApp</h3>
            <p className="text-graystone text-sm">Anında yazışın</p>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="card-gold-border rounded-2xl p-8 bg-obsidian-light text-center">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="text-gold" size={24} />
            </div>
            <h3 className="font-display text-lg text-ivory mb-1">E-posta</h3>
            <p className="text-graystone text-sm">{siteConfig.email}</p>
          </a>
        </div>
      </section>

      <section className="pb-16 md:pb-20 bg-obsidian">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-gold-border rounded-2xl p-8 bg-obsidian-light flex items-start gap-4">
            <MapPin className="text-gold flex-shrink-0 mt-1" size={22} />
            <div>
              <h3 className="font-display text-lg text-ivory mb-1">Hizmet Bölgelerimiz</h3>
              <p className="text-graystone text-sm">{siteConfig.areas.join(", ")} ve çevresi</p>
            </div>
          </div>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="card-gold-border rounded-2xl p-8 bg-obsidian-light flex items-start gap-4"
          >
            <Instagram className="text-gold flex-shrink-0 mt-1" size={22} />
            <div>
              <h3 className="font-display text-lg text-ivory mb-1">Instagram</h3>
              <p className="text-graystone text-sm">@velora.cleaning</p>
            </div>
          </a>
        </div>
      </section>

      <InspectionForm />

      <section className="pb-24">
        <div className="container">
          <div className="rounded-3xl overflow-hidden card-gold-border h-80 md:h-[420px]">
            <iframe
              title="Velora Cleaning Hizmet Bölgesi Haritası"
              src="https://www.google.com/maps?q=Pendik,%20%C4%B0stanbul&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
