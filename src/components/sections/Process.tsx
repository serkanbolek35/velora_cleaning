"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { processSteps } from "@/lib/site-data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Process() {
  return (
    <section className="relative py-24 md:py-32 bg-obsidian">
      <div className="container">
        <SectionHeading
          eyebrow="Nasıl Çalışıyoruz"
          title="Dört Adımda Kusursuz Temizlik"
          description="Basit ve şeffaf sürecimizle tanışın."
        />

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          {processSteps.map((step, i) => {
            const Icon = (Icons as any)[step.icon] as Icons.LucideIcon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-obsidian-light border border-gold/40 flex items-center justify-center mb-5 relative z-10">
                  <Icon className="text-gold" size={26} strokeWidth={1.5} />
                </div>
                <span className="text-gold text-xs tracking-[0.3em] mb-2">ADIM {i + 1}</span>
                <h3 className="font-display text-xl text-ivory mb-2">{step.title}</h3>
                <p className="text-graystone text-sm leading-relaxed max-w-[220px]">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
