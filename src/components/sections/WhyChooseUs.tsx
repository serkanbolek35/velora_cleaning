"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { whyChooseUs } from "@/lib/site-data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 bg-obsidian">
      <div className="container">
        <SectionHeading
          eyebrow="Neden Velora Cleaning"
          title="Kaliteyi ve Güveni Bir Arada Sunuyoruz"
          description="Beş yılı aşkın deneyimimizle, her projede aynı titizlik ve profesyonellikle çalışıyoruz."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = (Icons as any)[item.icon] as Icons.LucideIcon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="card-gold-border rounded-2xl p-8 bg-obsidian-light"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <Icon className="text-gold" size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-ivory mb-2">{item.title}</h3>
                <p className="text-graystone text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
