"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section className="relative py-24 md:py-32 bg-obsidian-light" id="hizmetler">
      <div className="container">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="İhtiyacınıza Özel Temizlik Çözümleri"
          description="Ev, ofis ve özel projeleriniz için kapsamlı ve profesyonel temizlik hizmetleri sunuyoruz."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = (Icons as any)[service.icon] as Icons.LucideIcon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="card-gold-border rounded-2xl p-8 bg-obsidian flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <Icon className="text-gold" size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-ivory mb-2">{service.title}</h3>
                <p className="text-graystone text-sm leading-relaxed mb-6 flex-1">{service.shortDescription}</p>
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all"
                >
                  Detaylı İncele <ArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
