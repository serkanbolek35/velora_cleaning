import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateTR(dateStr: string) {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

// next/image ve next/link, Next.js'in basePath ayarını (GitHub Pages'te
// /velora_cleaning gibi bir alt yol) otomatik olarak ekler. Ancak ham
// <video>, <audio> veya <source> etiketlerinde src olarak verilen yollar
// bu davranışı miras almaz — bu yüzden bu tür yerlerde src'yi bu
// fonksiyondan geçirmek gerekir. Vercel'de veya normal `npm run dev`'de
// basePath boş olduğu için hiçbir etkisi olmaz.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
