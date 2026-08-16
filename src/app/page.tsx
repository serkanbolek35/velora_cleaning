import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Gallery from "@/components/sections/Gallery";
import VideoGallery from "@/components/sections/VideoGallery";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Reviews from "@/components/sections/Reviews";
import Process from "@/components/sections/Process";
import InspectionForm from "@/components/sections/InspectionForm";
import WhatsAppCTA from "@/components/sections/WhatsAppCTA";
import FAQ from "@/components/sections/FAQ";
import BlogPreview from "@/components/sections/BlogPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Ana Sayfa | İstanbul Temizlik Şirketi",
  description:
    "Velora Cleaning, Pendik, Tuzla, Kartal, Maltepe ve Sultanbeyli'de profesyonel ev temizliği, ofis temizliği ve inşaat sonrası temizlik hizmeti sunar. Ücretsiz keşif için hemen WhatsApp'tan yazın.",
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <BeforeAfter />
      <Gallery />
      <VideoGallery />
      <ServiceAreas />
      <Reviews />
      <Process />
      <InspectionForm />
      <WhatsAppCTA />
      <FAQ />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
