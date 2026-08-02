import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[100svh] flex items-center justify-center text-center px-6">
      <div>
        <p className="font-display text-gold-gradient text-7xl md:text-9xl font-semibold mb-4">404</p>
        <h1 className="font-display text-2xl md:text-3xl text-ivory mb-3">Sayfa Bulunamadı</h1>
        <p className="text-graystone mb-8 max-w-sm mx-auto">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya dönerek devam edebilirsiniz.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-obsidian font-semibold shadow-gold"
        >
          <Home size={18} /> Ana Sayfaya Dön
        </Link>
      </div>
    </section>
  );
}
