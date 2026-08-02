"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/sss", label: "S.S.S" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || menuOpen ? "bg-obsidian/90 glass border-b border-gold/10 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Velora Cleaning Ana Sayfa">
          <div className="relative w-11 h-11 rounded-full overflow-hidden ring-1 ring-gold/40 group-hover:ring-gold transition-all">
            <Image src="/images/logo.jpg" alt="Velora Cleaning Logo" fill className="object-cover" />
          </div>
          <div className="leading-none">
            <p className="font-display text-xl tracking-wide text-gold-gradient font-semibold">VELORA</p>
            <p className="text-[9px] tracking-[0.3em] text-graystone">CLEANING</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Ana menü">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors relative py-1",
                pathname === link.href ? "text-gold" : "text-ivory/90 hover:text-gold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gold/40 text-gold text-sm font-medium hover:bg-gold hover:text-obsidian transition-colors"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gold text-obsidian text-sm font-semibold hover:bg-gold-light transition-colors shadow-gold"
          >
            <Phone size={16} /> {siteConfig.phone}
          </a>
        </div>

        <button
          className="lg:hidden text-ivory p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-obsidian/98 border-t border-gold/10 mt-3"
            aria-label="Mobil menü"
          >
            <div className="container py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-3 text-base border-b border-white/5",
                    pathname === link.href ? "text-gold" : "text-ivory/90"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.phoneHref}
                className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gold text-obsidian text-sm font-semibold"
              >
                <Phone size={16} /> {siteConfig.phone}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
