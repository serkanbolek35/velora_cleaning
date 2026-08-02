import type { Metadata } from "next";
import Image from "next/image";
import * as Icons from "lucide-react";
import { siteConfig, whyChooseUs, stats } from "@/lib/site-data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Process from "@/components/sections/Process";
import Reviews from "@/components/sections/Reviews";
import WhatsAppCTA from "@/components/sections/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Velora Cleaning, kurucusu Faruk Karakaya liderliğinde İstanbul Anadolu Yakası'nda premium temizlik hizmeti sunan güvenilir bir markadır.",
  alternates: { canonical: `${siteConfig.url}/hakkimizda` },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/poster-main.jpg" alt="" fill className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-obsidian/90" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="section-eyebrow text-gold text-xs md:text-sm font-semibold uppercase mb-4">Hakkımızda</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold">
            Temizliğin <span className="text-gold-gradient">En Zarif Hali</span>
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-obsidian">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden card-gold-border">
            <Image src="/images/poster-rooms.jpg" alt="Velora Cleaning ekibi çalışması" fill className="object-cover" />
          </div>
          <div>
            <p className="section-eyebrow text-gold text-xs font-semibold uppercase mb-4">Hikayemiz</p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-6">
              {siteConfig.founder} Liderliğinde Güvenilir Bir Marka
            </h2>
            <p className="text-graystone leading-relaxed mb-5">
              Velora Cleaning, İstanbul Anadolu Yakası&apos;nda ev ve iş yerleri için premium temizlik hizmeti sunmak
              amacıyla kuruldu. Kurucumuz {siteConfig.founder} önderliğinde, her projede aynı titizlik ve
              profesyonellik anlayışıyla çalışıyoruz.
            </p>
            <p className="text-graystone leading-relaxed mb-8">
              Deneyimli ekibimiz, çevre dostu temizlik ürünleri ve modern ekipmanlarla; {siteConfig.areas.join(", ")}
              {" "}bölgelerinde binlerce müşteriye hizmet verdi. Amacımız sadece temizlik yapmak değil, yaşam
              alanlarınızda gerçek bir fark yaratmaktır.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-graystone text-xs mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-obsidian-light">
        <div className="container">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="section-eyebrow text-gold text-xs font-semibold uppercase mb-4">Değerlerimiz</p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory">Bizi Farklı Kılan Değerler</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = (Icons as any)[item.icon] as Icons.LucideIcon;
              return (
                <div key={item.title} className="card-gold-border rounded-2xl p-8 bg-obsidian">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                    <Icon className="text-gold" size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl text-ivory mb-2">{item.title}</h3>
                  <p className="text-graystone text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Process />
      <Reviews />
      <WhatsAppCTA />
    </>
  );
}
