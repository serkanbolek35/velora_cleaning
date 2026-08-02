# Velora Cleaning — Premium Kurumsal Web Sitesi

Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion ile inşa edilmiş, siyah-altın lüks kimliğe sahip premium temizlik şirketi web sitesi.

## Kurulum

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # production sunucusu
```

## Proje Yapısı

```
src/
  app/
    layout.tsx               Kök layout (fontlar, header/footer, JSON-LD, floating butonlar)
    page.tsx                 Ana sayfa (tüm bölümler)
    globals.css              Tasarım tokenları ve global stiller
    sitemap.ts / robots.ts   SEO dosyaları (otomatik /sitemap.xml, /robots.txt üretir)
    hizmetler/               Hizmetler listesi + [slug] detay sayfaları
    galeri/                  Galeri (filtre + lightbox) ve öncesi/sonrası slider
    hakkimizda/              Kurumsal hikaye, değerler, süreç
    blog/                    Blog listesi + [slug] detay sayfaları
    sss/                     Sıkça Sorulan Sorular (FAQPage schema)
    iletisim/                İletişim bilgileri, harita, keşif formu
  components/
    layout/                  Header, Footer, MobileBottomNav
    ui/                      LoadingScreen, ScrollProgress, BackToTop, FloatingButtons, vb.
    sections/                Hero, Services, Gallery, Reviews, FAQ, vb. — tüm anasayfa blokları
  lib/
    site-data.ts             Tüm Türkçe içerik (hizmetler, SSS, blog, yorumlar) tek dosyada
    utils.ts                 cn() ve tarih formatlama yardımcıları
public/images/               Yüklenen logo, poster ve galeri görselleri
```

## İçerik Yönetimi

Tüm metinler `src/lib/site-data.ts` dosyasında merkezi olarak tutulur. Yeni bir hizmet, blog yazısı veya
referans eklemek için sadece bu dosyayı güncellemeniz yeterlidir — sayfalar `generateStaticParams` üzerinden
otomatik olarak statik üretilir.

## Görseller

`public/images/` klasöründeki `logo.jpg`, `poster-main.jpg`, `poster-rooms.jpg` ve `gallery/` altındaki
öncesi/sonrası fotoğraflar yüklediğiniz orijinal marka materyalleridir. Gerçek galeri fotoğrafları elinize
ulaştıkça `public/images/gallery/` klasörüne ekleyip `site-data.ts` içindeki `galleryItems` dizisini
güncelleyerek değiştirebilirsiniz.

## SEO

- Her sayfada özel meta title/description ve canonical URL
- Open Graph + Twitter Card meta verileri
- JSON-LD: CleaningService (LocalBusiness), Service, Article, FAQPage, BreadcrumbList
- Otomatik `sitemap.xml` ve `robots.txt` (`src/app/sitemap.ts`, `src/app/robots.ts`)
- Semantik HTML, doğru H1/H2/H3 hiyerarşisi, açıklayıcı `alt` metinleri

## Notlar

- Fontlar (Cormorant Garamond, Manrope) `@fontsource` paketleriyle self-hosted olarak yüklenir — build
  sırasında Google Fonts'a internet bağlantısı gerektirmez.
- WhatsApp linkleri `src/lib/site-data.ts` içindeki `whatsapp` numarasını kullanır; numarayı güncellemek
  tüm sitedeki WhatsApp butonlarını otomatik günceller.
- Ücretsiz keşif formu, doldurulduğunda otomatik olarak önceden doldurulmuş bir WhatsApp mesajı açar.
- `siteConfig.url` alanını gerçek alan adınızla değiştirmeyi unutmayın (sitemap/robots/OG için kullanılır).
- Bu proje `npm run build` ile bu ortamda başarıyla test edilmiştir (22 sayfa, hatasız derleme).
