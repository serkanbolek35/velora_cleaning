import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig, faqs } from "@/lib/site-data";
import FAQ from "@/components/sections/FAQ";
import WhatsAppCTA from "@/components/sections/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Ev temizliği süresi, hizmet bölgeleri, fiyatlandırma ve ücretsiz keşif hakkında sıkça sorulan sorular ve yanıtları.",
  alternates: { canonical: `${siteConfig.url}/sss` },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/poster-main.jpg" alt="" fill className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-obsidian/90" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="section-eyebrow text-gold text-xs md:text-sm font-semibold uppercase mb-4">S.S.S</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold">
            Sıkça Sorulan <span className="text-gold-gradient">Sorular</span>
          </h1>
        </div>
      </section>
      <FAQ />
      <WhatsAppCTA />
    </>
  );
}
