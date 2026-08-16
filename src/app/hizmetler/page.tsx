import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { services, siteConfig } from "@/lib/site-data";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppCTA from "@/components/sections/WhatsAppCTA";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | İstanbul Temizlik Hizmetleri",
  description:
    "Pendik, Tuzla, Kartal, Maltepe ve Sultanbeyli'de ev temizliği, ofis temizliği, inşaat sonrası temizlik, cam temizliği, apartman merdiven temizliği ve detaylı temizlik hizmetleri. Ücretsiz keşif.",
  alternates: { canonical: `${siteConfig.url}/hizmetler` },
};

export default function ServicesPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${siteConfig.url}/hizmetler` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/poster-main.jpg" alt="" fill className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-obsidian/90" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="section-eyebrow text-gold text-xs md:text-sm font-semibold uppercase mb-4">Hizmetlerimiz</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold">
            İhtiyacınıza Özel <span className="text-gold-gradient">Temizlik Çözümleri</span>
          </h1>
          <p className="mt-5 text-graystone max-w-xl mx-auto">
            Ev, ofis ve özel projeleriniz için titiz ve profesyonel temizlik hizmetleri.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-obsidian">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = (Icons as any)[service.icon] as Icons.LucideIcon;
            return (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className="card-gold-border rounded-2xl overflow-hidden bg-obsidian-light group flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gold/90 flex items-center justify-center">
                    <Icon className="text-obsidian" size={22} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h2 className="font-display text-2xl text-ivory mb-2">{service.title}</h2>
                  <p className="text-graystone text-sm leading-relaxed mb-5 flex-1">{service.shortDescription}</p>
                  <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold">
                    Detaylı İncele <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <WhatsAppCTA />
      <FAQ />
    </>
  );
}
