import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-data";
import Gallery from "@/components/sections/Gallery";
import VideoGallery from "@/components/sections/VideoGallery";
import BeforeAfter from "@/components/sections/BeforeAfter";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Velora Cleaning temizlik çalışmalarımızdan gerçek fotoğraf ve videolar: inşaat sonrası temizlik ve cam temizliği örnekleri.",
  alternates: { canonical: `${siteConfig.url}/galeri` },
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/poster-rooms.jpg" alt="" fill className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-obsidian/90" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="section-eyebrow text-gold text-xs md:text-sm font-semibold uppercase mb-4">Galeri</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold">
            Çalışmalarımızdan <span className="text-gold-gradient">Kareler</span>
          </h1>
        </div>
      </section>
      <BeforeAfter />
      <Gallery />
      <VideoGallery />
    </>
  );
}
