import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts, siteConfig } from "@/lib/site-data";
import { buildBreadcrumbLd } from "@/lib/seo";
import { formatDateTR } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Temizlik dünyasından ipuçları, rehberler ve öneriler. Ev temizliği, ofis temizliği, inşaat sonrası temizlik ve cam temizliği hakkında uzman tavsiyeleri.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default function BlogPage() {
  const breadcrumbLd = buildBreadcrumbLd([
    { name: "Ana Sayfa", path: "" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/poster-main.jpg" alt="" fill className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-obsidian/90" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="section-eyebrow text-gold text-xs md:text-sm font-semibold uppercase mb-4">Blog</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold">
            Temizlik <span className="text-gold-gradient">Rehberi</span>
          </h1>
          <p className="mt-5 text-graystone max-w-xl mx-auto">
            Uzman ekibimizden temizlik dünyasına dair ipuçları ve öneriler.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-obsidian">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-gold-border rounded-2xl overflow-hidden bg-obsidian-light group flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 text-[10px] tracking-widest bg-gold text-obsidian px-2.5 py-1 rounded-full font-semibold">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-graystone text-xs mb-3">
                  <span>{formatDateTR(post.date)}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readingTime}</span>
                </div>
                <h2 className="font-display text-xl text-ivory mb-2 leading-snug">{post.title}</h2>
                <p className="text-graystone text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold">
                  Devamını Oku <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
