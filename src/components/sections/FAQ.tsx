"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site-data";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 bg-obsidian-light">
      <div className="container max-w-3xl">
        <SectionHeading
          eyebrow="Sıkça Sorulan Sorular"
          title="Merak Ettikleriniz"
          description="Hizmetlerimiz hakkında en çok sorulan sorular ve yanıtları."
        />

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="card-gold-border rounded-2xl bg-obsidian overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-display text-lg text-ivory">{faq.question}</span>
                  <span
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center transition-transform duration-300",
                      isOpen && "rotate-45 bg-gold"
                    )}
                  >
                    <Plus size={16} className={isOpen ? "text-obsidian" : "text-gold"} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-6 pb-6 text-graystone text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
