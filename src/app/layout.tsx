import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import FloatingButtons from "@/components/ui/FloatingButtons";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Velora Cleaning | Premium Temizlik Hizmetleri - Pendik, Tuzla, Kartal",
    template: "%s | Velora Cleaning",
  },
  description: siteConfig.description,
  keywords: [
    "temizlik şirketi",
    "ev temizliği",
    "ofis temizliği",
    "inşaat sonrası temizlik",
    "cam temizliği",
    "Pendik temizlik",
    "Tuzla temizlik",
    "Kartal temizlik",
    "Maltepe temizlik",
    "Sultanbeyli temizlik",
    "profesyonel temizlik hizmeti İstanbul",
  ],
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Velora Cleaning | Premium Temizlik Hizmetleri",
    description: siteConfig.description,
    images: [{ url: "/images/poster-main.jpg", width: 1536, height: 1024, alt: "Velora Cleaning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora Cleaning | Premium Temizlik Hizmetleri",
    description: siteConfig.description,
    images: ["/images/poster-main.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/poster-main.jpg`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: "$$",
    founder: { "@type": "Person", name: siteConfig.founder },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pendik",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    areaServed: siteConfig.areas.map((a) => ({ "@type": "City", name: a })),
    description: siteConfig.description,
    sameAs: [siteConfig.instagram],
  };

  return (
    <html lang="tr">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingScreen />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomNav />
        <FloatingButtons />
        <BackToTop />
      </body>
    </html>
  );
}
