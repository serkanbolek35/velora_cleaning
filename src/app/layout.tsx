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
    default: "Velora Cleaning | İstanbul Temizlik Şirketi - Pendik, Tuzla, Kartal, Maltepe, Sultanbeyli",
    template: "%s | Velora Cleaning",
  },
  description: siteConfig.description,
  // NOT: <meta name="keywords"> kasıtlı olarak kullanılmıyor. Google 2009'dan
  // beri bu etiketi sıralamada dikkate almıyor ve kötüye kullanımı spam
  // sinyali olarak işaretleyebiliyor. Anahtar kelime stratejisi bunun yerine
  // her sayfanın title/description/H1/içeriğine doğal şekilde işleniyor.
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
  icons: {
    // next/metadata'nın "icons" alanı, "openGraph.images" alanının aksine
    // basePath'i otomatik eklemiyor (GitHub Pages'te /velora_cleaning gibi
    // bir alt yolda favicon 404 verirdi). Bu yüzden mutlak URL kullanılıyor.
    icon: `${siteConfig.url}/images/logo.jpg`,
    apple: `${siteConfig.url}/images/logo.jpg`,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Velora Cleaning | İstanbul Temizlik Şirketi",
    description: siteConfig.description,
    images: [{ url: "/images/poster-main.jpg", width: 1536, height: 1024, alt: "Velora Cleaning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora Cleaning | İstanbul Temizlik Şirketi",
    description: siteConfig.description,
    images: ["/images/poster-main.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cleaningServiceLd = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/poster-main.jpg`,
    "@id": `${siteConfig.url}/#business`,
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

  // Marka/kurum kimliğini güçlendirmek için ayrı bir Organization kaydı.
  // CleaningService zaten yerel işletme bilgisini taşıyor; Organization ise
  // Google'ın markayı bir "entity" olarak tanımasına yardımcı olur.
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.jpg`,
    sameAs: [siteConfig.instagram],
  };

  // WebSite şeması, Google'ın site genelinde bir "site adı" göstermesine ve
  // (ileride Search Console verisi biriktikçe) sitelinks arama kutusu gibi
  // zenginleştirilmiş sonuçlar sunmasına yardımcı olabilir.
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "tr-TR",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  return (
    <html lang="tr">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cleaningServiceLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
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
