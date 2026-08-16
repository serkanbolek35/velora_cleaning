import type { Metadata } from "next";
import { areaPages, siteConfig } from "@/lib/site-data";
import LocationPageContent from "@/components/location/LocationPageContent";

const area = areaPages.find((a) => a.slug === "pendik-temizlik")!;

export const metadata: Metadata = {
  title: area.metaTitle,
  description: area.metaDescription,
  alternates: { canonical: `${siteConfig.url}/pendik-temizlik` },
  openGraph: {
    title: area.metaTitle,
    description: area.metaDescription,
    images: [{ url: "/images/poster-main.jpg" }],
  },
};

export default function PendikTemizlikPage() {
  return <LocationPageContent area={area} />;
}
