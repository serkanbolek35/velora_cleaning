import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { services, siteConfig, whatsappLink, blogPosts } from "@/lib/site-data";
import InspectionForm from "@/components/sections/InspectionForm";
import Reviews from "@/components/sections/Reviews";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${siteConfig.url}/hizmetler/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = (Icons as any)[service.icon] as Icons.LucideIcon;
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  // Kategori adı hizmet başlığıyla eşleşen blog yazısı - içerik ile hizmet
  // sayfası arasında doğal, alakalı bir dahili bağlantı kurar (Phase 5).
  const relatedPost = blogPosts.find((p) => p.category === service.title);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: { "@type": "CleaningService", name: siteConfig.name, telephone: siteConfig.phone },
    areaServed: siteConfig.areas.map((a) => ({ "@type": "City", name: a })),
    description: service.description,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${siteConfig.url}/hizmetler` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${siteConfig.url}/hizmetler/${service.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service.image} alt={service.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-obsidian/90" />
        </div>
        <div className="container relative z-10">
          <nav aria-label="breadcrumb" className="text-xs text-graystone mb-6 flex items-center gap-2 justify-center">
            <Link href="/" className="hover:text-gold">Ana Sayfa</Link> /
            <Link href="/hizmetler" className="hover:text-gold">Hizmetler</Link> /
            <span className="text-gold">{service.title}</span>
          </nav>
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
              <Icon className="text-gold" size={30} strokeWidth={1.5} />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold">{service.title}</h1>
            <p className="mt-5 text-graystone">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-obsidian">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl md:text-3xl text-ivory mb-4">Hizmet Detayları</h2>
            <p className="text-graystone leading-relaxed mb-8">{service.description}</p>

            <h3 className="font-display text-xl text-ivory mb-4">Neler Kapsıyor?</h3>
            <ul className="space-y-3 mb-10">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-graystone text-sm">
                  <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={18} />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(`Merhaba, ${service.title} hizmeti hakkında bilgi almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-obsidian font-semibold shadow-gold hover:bg-gold-light transition-colors"
            >
              <MessageCircle size={19} /> Bu Hizmet İçin Teklif Al
            </a>
          </div>

          <aside className="card-gold-border rounded-2xl p-7 bg-obsidian-light h-fit">
            <h3 className="font-display text-xl text-ivory mb-4">Diğer Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="flex items-center justify-between text-graystone hover:text-gold transition-colors text-sm py-2 border-b border-white/5"
                  >
                    {s.title} <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>

            {relatedPost && (
              <>
                <h3 className="font-display text-xl text-ivory mb-4 mt-8">İlgili Yazı</h3>
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  className="flex items-center justify-between text-graystone hover:text-gold transition-colors text-sm py-2"
                >
                  {relatedPost.title} <ArrowRight size={14} />
                </Link>
              </>
            )}
          </aside>
        </div>
      </section>

      <InspectionForm />
      <Reviews />
    </>
  );
}
