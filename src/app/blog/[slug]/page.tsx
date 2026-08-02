import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, MessageCircle } from "lucide-react";
import { blogPosts, siteConfig, whatsappLink } from "@/lib/site-data";
import { formatDateTR } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: `${siteConfig.url}${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    description: post.excerpt,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article>
        <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-obsidian/90" />
          </div>
          <div className="container relative z-10 max-w-3xl text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gold text-sm mb-6 hover:gap-3 transition-all">
              <ArrowLeft size={16} /> Bloga Dön
            </Link>
            <span className="inline-block text-[10px] tracking-widest bg-gold text-obsidian px-3 py-1.5 rounded-full font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-semibold leading-tight">{post.title}</h1>
            <div className="flex items-center justify-center gap-3 text-graystone text-xs mt-5">
              <span>{formatDateTR(post.date)}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {post.readingTime}</span>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-obsidian">
          <div className="container max-w-2xl">
            <div className="prose-none flex flex-col gap-6">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-graystone leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 card-gold-border rounded-2xl p-8 bg-obsidian-light flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <h3 className="font-display text-xl text-ivory mb-1">Profesyonel Temizlik mi Gerekiyor?</h3>
                <p className="text-graystone text-sm">Ücretsiz keşif için hemen WhatsApp&apos;tan yazın.</p>
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-obsidian font-semibold whitespace-nowrap"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-obsidian-light">
          <div className="container">
            <h2 className="font-display text-2xl text-ivory mb-8 text-center">İlginizi Çekebilecek Diğer Yazılar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="card-gold-border rounded-2xl overflow-hidden bg-obsidian group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={r.image} alt={r.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="33vw" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base text-ivory leading-snug">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
