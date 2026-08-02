"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/site-data";
import { formatDateTR } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BlogPreview() {
  return (
    <section className="relative py-24 md:py-32 bg-obsidian">
      <div className="container">
        <SectionHeading
          eyebrow="Blog"
          title="Temizlik Dünyasından Öneriler"
          description="Uzman ekibimizden ipuçları ve rehberler."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link href={`/blog/${post.slug}`} className="block card-gold-border rounded-2xl overflow-hidden bg-obsidian-light group h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <span className="absolute top-3 left-3 text-[10px] tracking-widest bg-gold text-obsidian px-2.5 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-graystone text-xs mb-2">
                    <Clock size={12} /> {post.readingTime}
                  </div>
                  <h3 className="font-display text-lg text-ivory mb-2 leading-snug">{post.title}</h3>
                  <p className="text-graystone text-xs leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold">
                    Devamını Oku <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
