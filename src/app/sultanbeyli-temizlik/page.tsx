import type { Metadata } from "next";
import { areaPages, siteConfig } from "@/lib/site-data";
import LocationPageContent from "@/components/location/LocationPageContent";

const area = areaPages.find((a) => a.slug === "sultanbeyli-temizlik")!;

export const metadata: Metadata = {
  title: area.metaTitle,
  description: area.metaDescription,
  alternates: { canonical: `${siteConfig.url}/sultanbeyli-temizlik` },
  openGraph: {
    title: area.metaTitle,
    description: area.metaDescription,
    images: [{ url: "/images/poster-main.jpg" }],
  },
};

export default function SultanbeyliTemizlikPage() {
  return <LocationPageContent area={area} />;
}
