import Link from "next/link";
import Image from "next/image";
import { Instagram, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink, services } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-gold/10 pt-16 pb-28 md:pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-gold/40">
                <Image src="/images/logo.jpg" alt="Velora Cleaning Logo" fill className="object-cover" />
              </div>
              <div>
                <p className="font-display text-xl text-gold-gradient font-semibold">VELORA</p>
                <p className="text-[9px] tracking-[0.3em] text-graystone">CLEANING</p>
              </div>
            </Link>
            <p className="text-graystone text-sm leading-relaxed">{siteConfig.description}</p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-gold hover:text-gold-light transition-colors"
            >
              <Instagram size={16} /> @velora.cleaning
            </a>
          </div>

          <div>
            <h3 className="font-display text-lg text-ivory mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2.5 text-sm text-graystone">
              <li><Link href="/" className="hover:text-gold transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hizmetler" className="hover:text-gold transition-colors">Hizmetler</Link></li>
              <li><Link href="/galeri" className="hover:text-gold transition-colors">Galeri</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-gold transition-colors">Hakkımızda</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/sss" className="hover:text-gold transition-colors">Sıkça Sorulan Sorular</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-ivory mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2.5 text-sm text-graystone">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/hizmetler/${s.slug}`} className="hover:text-gold transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-ivory mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm text-graystone">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span>{siteConfig.areas.join(", ")} ve çevresi</span>
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Phone size={16} className="text-gold flex-shrink-0" /> {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Mail size={16} className="text-gold flex-shrink-0" /> {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <MessageCircle size={16} className="text-gold flex-shrink-0" /> WhatsApp ile yaz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-graystone">
          <p>© {new Date().getFullYear()} Velora Cleaning. Tüm hakları saklıdır.</p>
          <p>Kurucu: {siteConfig.founder} · İstanbul</p>
        </div>
      </div>
    </footer>
  );
}
