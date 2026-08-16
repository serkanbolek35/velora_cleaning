import { siteConfig } from "@/lib/site-data";

export type BreadcrumbEntry = { name: string; path: string };

/**
 * Ortak BreadcrumbList JSON-LD üretici. Tekrarlanan şema kodunu tek yerde
 * toplar; her sayfa sadece kendi breadcrumb zincirini (ad + yol) verir.
 */
export function buildBreadcrumbLd(entries: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      item: entry.path === "" ? siteConfig.url : `${siteConfig.url}${entry.path}`,
    })),
  };
}
