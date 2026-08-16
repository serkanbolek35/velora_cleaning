import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { MessageCircle, MapPin } from "lucide-react";
import { AreaPage, services, siteConfig, whatsappLink } from "@/lib/site-data";
import { buildBreadcrumbLd } from "@/lib/seo";
import InspectionForm from "@/components/sections/InspectionForm";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";

export default function LocationPageContent({ area }: { area: AreaPage }) {
  const breadcrumbLd = buildBreadcrumbLd([
    { name: "Ana Sayfa", path: "" },
    { name: `${area.name} Temizlik`, path: `/${area.slug}` },
  ]);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${area.name} Temizlik Hizmetleri`,
    provider: { "@type": "CleaningService", name: siteConfig.name, telephone: siteConfig.phone },
    areaServed: { "@type": "City", name: area.name },
    description: area.metaDescription,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/poster-main.jpg" alt="" fill className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-obsidian/90" />
        </div>
        <div className="container relative z-10">
          <nav aria-label="breadcrumb" className="text-xs text-graystone mb-6 flex items-center gap-2 justify-center">
            <Link href="/" className="hover:text-gold">Ana Sayfa</Link> /
            <span className="text-gold">{area.name} Temizlik</span>
          </nav>
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-gold" size={26} strokeWidth={1.5} />
            </div>
            <p className="section-eyebrow text-gold text-xs md:text-sm font-semibold uppercase mb-3">
              {area.name} · İstanbul
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold">{area.name} Temizlik Hizmetleri</h1>
            <p className="mt-5 text-graystone leading-relaxed">{area.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-obsidian">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl md:text-3xl text-ivory mb-4">{area.name} Hakkında</h2>
            <p className="text-graystone leading-relaxed mb-8">{area.aboutArea}</p>

            <h2 className="font-display text-2xl md:text-3xl text-ivory mb-4">
              Neden {area.name}&apos;de Velora Cleaning?
            </h2>
            <p className="text-graystone leading-relaxed mb-8">{area.whyLocal}</p>

            <a
              href={whatsappLink(`Merhaba, ${area.name} bölgesinde temizlik hizmeti hakkında bilgi almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-obsidian font-semibold shadow-gold hover:bg-gold-light transition-colors"
            >
              <MessageCircle size={19} /> {area.name} İçin Teklif Al
            </a>
          </div>

          <aside className="card-gold-border rounded-2xl p-7 bg-obsidian-light h-fit">
            <h3 className="font-display text-xl text-ivory mb-4">{area.name}&apos;de Sunduğumuz Hizmetler</h3>
            <ul className="space-y-3">
              {services.map((s) => {
                const Icon = (Icons as any)[s.icon] as Icons.LucideIcon;
                return (
                  <li key={s.slug}>
                    <Link
                      href={`/hizmetler/${s.slug}`}
                      className="flex items-center gap-3 text-graystone hover:text-gold transition-colors text-sm py-2 border-b border-white/5"
                    >
                      <Icon size={15} className="text-gold flex-shrink-0" />
                      {s.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>

      <InspectionForm />
      <Reviews />
      <FAQ />
    </>
  );
}
