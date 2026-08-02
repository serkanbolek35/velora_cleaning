"use client";

import { motion } from "framer-motion";
import { beforeAfterItems } from "@/lib/site-data";
import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function BeforeAfter() {
  return (
    <section className="relative py-24 md:py-32 bg-obsidian">
      <div className="container">
        <SectionHeading
          eyebrow="Fark Yaratıyoruz"
          title="Öncesi & Sonrası"
          description="Kaydırıcıyı hareket ettirerek dönüşümü kendi gözlerinizle görün."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beforeAfterItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <BeforeAfterSlider image={item.image} title={item.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
