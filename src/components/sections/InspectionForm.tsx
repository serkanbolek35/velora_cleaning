"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { services, siteConfig } from "@/lib/site-data";

export default function InspectionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const district = formData.get("district");
    const message = formData.get("message");

    const text = `Merhaba, ücretsiz keşif talep ediyorum.%0A%0AAd Soyad: ${name}%0ATelefon: ${phone}%0AHizmet Türü: ${service}%0Aİlçe: ${district}%0AMesaj: ${message || "-"}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank");
    }, 600);
  };

  return (
    <section id="kesif-formu" className="relative py-24 md:py-32 bg-obsidian-light">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="section-eyebrow text-gold text-xs md:text-sm font-semibold uppercase mb-3">
            Ücretsiz Keşif
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">
            Size Özel Teklif İçin Formu Doldurun
          </h2>
          <div className="gold-divider w-20 h-px mt-5 mx-auto" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto card-gold-border rounded-3xl p-6 md:p-10 bg-obsidian"
        >
          {submitted ? (
            <div className="flex flex-col items-center text-center gap-4 py-10">
              <CheckCircle2 className="text-gold" size={48} />
              <h3 className="font-display text-2xl text-ivory">Talebiniz Alındı</h3>
              <p className="text-graystone text-sm max-w-sm">
                WhatsApp üzerinden ekibimizle iletişime geçtiniz. En kısa sürede size dönüş yapacağız.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-gold text-sm font-semibold underline underline-offset-4"
              >
                Yeni talep oluştur
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5" aria-label="Ücretsiz keşif talep formu">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-graystone">Ad Soyad</label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="bg-obsidian-soft border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-ivory placeholder:text-graystone/60 outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm text-graystone">Telefon</label>
                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  placeholder="05XX XXX XX XX"
                  className="bg-obsidian-soft border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-ivory placeholder:text-graystone/60 outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm text-graystone">Hizmet Türü</label>
                <select
                  id="service"
                  name="service"
                  required
                  className="bg-obsidian-soft border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-ivory outline-none transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>Seçiniz</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="district" className="text-sm text-graystone">İlçe</label>
                <input
                  id="district"
                  name="district"
                  required
                  type="text"
                  placeholder="Örn. Pendik"
                  className="bg-obsidian-soft border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-ivory placeholder:text-graystone/60 outline-none transition-colors"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-graystone">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Talebiniz hakkında ek bilgi verin (opsiyonel)"
                  className="bg-obsidian-soft border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-ivory placeholder:text-graystone/60 outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold text-obsidian font-semibold shadow-gold hover:bg-gold-light transition-colors disabled:opacity-60"
              >
                <Send size={18} /> {loading ? "Gönderiliyor..." : "Ücretsiz Keşif Talep Et"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
