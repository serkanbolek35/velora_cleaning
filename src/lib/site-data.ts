export const siteConfig = {
  name: "Velora Cleaning",
  shortName: "Velora",
  tagline: "Premium Temizlik Hizmetleri",
  description:
    "Velora Cleaning; Pendik, Tuzla, Kartal, Maltepe ve Sultanbeyli bölgelerinde profesyonel ekibi, kaliteli temizlik ürünleri ve %100 müşteri memnuniyeti garantisiyle premium ev ve ofis temizliği hizmeti sunar.",
  founder: "Faruk Karakaya",
  phone: "0539 723 53 33",
  phoneHref: "tel:+905397235333",
  whatsapp: "905397235333",
  whatsappMessage: "Merhaba, temizlik hizmeti hakkında bilgi almak istiyorum.",
  email: "info@veloracleaning.com",
  url: "https://www.veloracleaning.com",
  instagram: "https://instagram.com/velora.cleaning",
  address: "Pendik, İstanbul, Türkiye",
  areas: ["Pendik", "Tuzla", "Kartal", "Maltepe", "Sultanbeyli"],
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message || siteConfig.whatsappMessage)}`;

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "ev-temizligi",
    title: "Ev Temizliği",
    shortDescription: "Eviniz için baştan aşağı hijyenik ve detaylı temizlik.",
    description:
      "Evinizin her köşesini; salon, mutfak, banyo, yatak odaları ve balkonlar dahil olmak üzere titizlikle temizliyoruz. Deneyimli ekibimiz, çevre dostu ürünler kullanarak yaşam alanınızı hijyenik ve ferah bir hale getirir. Düzenli veya tek seferlik hizmet seçenekleriyle ihtiyacınıza uygun çözümler sunuyoruz.",
    icon: "Home",
    image: "/images/gallery/before-after-insaat2.jpg",
    features: [
      "Salon ve oturma alanları detaylı temizliği",
      "Mutfak ve dolap içi hijyen temizliği",
      "Banyo ve tuvalet dezenfeksiyonu",
      "Cam ve pencere silme",
      "Toz alma ve zemin bakımı",
    ],
    metaTitle: "Ev Temizliği Hizmeti | Pendik, Tuzla, Kartal | Velora Cleaning",
    metaDescription:
      "Pendik, Tuzla, Kartal, Maltepe ve Sultanbeyli'de profesyonel ev temizliği. Ücretsiz keşif, deneyimli ekip ve %100 müşteri memnuniyeti garantisi. Hemen teklif alın.",
  },
  {
    slug: "ofis-temizligi",
    title: "Ofis Temizliği",
    shortDescription: "Kurumsal alanlarınız için düzenli ve profesyonel temizlik.",
    description:
      "İş yerinizin çalışan ve müşterileriniz için her zaman temiz, düzenli ve profesyonel görünmesini sağlıyoruz. Günlük, haftalık veya aylık periyotlarla ofis, toplantı salonu, mutfak ve ortak kullanım alanlarınızı hijyenik standartlarda temizliyoruz.", 
    icon: "Building2",
    image: "/images/gallery/before-after-cam.jpg",
    features: [
      "Çalışma masaları ve ortak alan temizliği",
      "Mutfak ve dinlenme alanı hijyeni",
      "Cam bölme ve vitrin temizliği",
      "Zemin bakımı ve halı temizliği",
      "Esnek periyodik hizmet planları",
    ],
    metaTitle: "Ofis Temizliği Hizmeti | Kurumsal Temizlik | Velora Cleaning",
    metaDescription:
      "Kurumsal ofisler için profesyonel temizlik hizmeti. Pendik, Tuzla, Kartal, Maltepe, Sultanbeyli bölgelerinde düzenli ofis temizliği. Ücretsiz keşif için hemen arayın.",
  },
  {
    slug: "insaat-sonrasi-temizlik",
    title: "İnşaat Sonrası Temizlik",
    shortDescription: "Yeni tesliminizi teslim almaya hazır hale getiriyoruz.",
    description:
      "İnşaat veya tadilat sonrası oluşan toz, boya kalıntısı ve molozları profesyonel ekipman ve deneyimli ekibimizle titizlikle temizliyoruz. Zemin, cam, tavan ve tüm yüzeyleri parlatarak yeni mekanınızı kullanıma hazır hale getiriyoruz.",
    icon: "HardHat",
    image: "/images/gallery/before-after-insaat1.jpg",
    features: [
      "İnce toz ve moloz temizliği",
      "Boya ve silikon kalıntısı giderme",
      "Cam ve doğrama detaylı temizliği",
      "Zemin cilalama ve parlatma",
      "Teslim öncesi son kontrol temizliği",
    ],
    metaTitle: "İnşaat Sonrası Temizlik | Tadilat Sonrası Temizlik | Velora Cleaning",
    metaDescription:
      "İnşaat ve tadilat sonrası profesyonel temizlik hizmeti. Toz, boya ve moloz temizliğinde uzman ekip. İstanbul Anadolu Yakası'nda hizmet.",
  },
  {
    slug: "cam-temizligi",
    title: "Cam Temizliği",
    shortDescription: "Leke bırakmayan, pırıl pırıl cam ve vitrin temizliği.",
    description:
      "Ev, ofis ve mağaza camlarınızı profesyonel ekipman ve özel temizlik solüsyonlarıyla leke bırakmadan parlatıyoruz. Yüksek katlar ve ulaşılması zor noktalar için güvenli ekipmanlarımızla hizmet veriyoruz.",
    icon: "Sparkles",
    image: "/images/gallery/before-after-cam.jpg",
    features: [
      "İç ve dış cam yüzey temizliği",
      "Vitrin ve dükkan camı parlatma",
      "Pencere kenarı ve doğrama temizliği",
      "Leke ve kireç giderme",
      "Yüksek kat için güvenli ekipman",
    ],
    metaTitle: "Cam Temizliği Hizmeti | Vitrin ve Pencere Temizliği | Velora Cleaning",
    metaDescription:
      "Profesyonel cam ve vitrin temizliği hizmeti. Leke bırakmayan sonuç, güvenli ekipman. Pendik, Tuzla, Kartal, Maltepe, Sultanbeyli'de hizmet veriyoruz.",
  },
  {
    slug: "apartman-merdiven-temizligi",
    title: "Apartman Merdiven Temizliği",
    shortDescription: "Ortak alanlarınız için düzenli bakım ve temizlik.",
    description:
      "Apartman ve site ortak alanlarınızı, merdiven boşluklarını, asansör içlerini ve giriş katlarını düzenli periyotlarla temizliyoruz. Yöneticiler ve site sakinleri için esnek anlaşma seçenekleri sunuyoruz.",
    icon: "Building",
    image: "/images/gallery/before-after-insaat2.jpg",
    features: [
      "Merdiven basamağı ve korkuluk temizliği",
      "Asansör içi ve giriş kapısı temizliği",
      "Ortak alan cam ve ayna temizliği",
      "Haftalık / aylık periyodik anlaşma",
      "Site yönetimlerine özel fiyatlandırma",
    ],
    metaTitle: "Apartman Merdiven Temizliği | Site Ortak Alan Temizliği | Velora Cleaning",
    metaDescription:
      "Apartman ve site ortak alan temizliği hizmeti. Merdiven, asansör ve giriş katı temizliğinde güvenilir çözüm. Hemen teklif alın.",
  },
  {
    slug: "detayli-temizlik",
    title: "Detaylı Temizlik",
    shortDescription: "Her köşeye özen gösteren kapsamlı derinlemesine temizlik.",
    description:
      "Standart temizliğin ötesine geçen, mobilya arkaları, dolap içleri, pervaz ve tavan köşeleri dahil her detayı kapsayan derinlemesine temizlik hizmeti. Mevsimlik genel temizlik veya özel gün öncesi hazırlıklar için ideal.",
    icon: "Gem",
    image: "/images/gallery/before-after-insaat2.jpg",
    features: [
      "Mobilya arkası ve altı temizliği",
      "Dolap içi ve raf detay temizliği",
      "Pervaz, kapı ve tavan köşe temizliği",
      "Mutfak yağ ve is temizliği",
      "Mevsimlik genel temizlik paketi",
    ],
    metaTitle: "Detaylı Temizlik Hizmeti | Derinlemesine Temizlik | Velora Cleaning",
    metaDescription:
      "Her detayı kapsayan derinlemesine temizlik hizmeti. Mevsimlik genel temizlik ve özel gün hazırlıkları için profesyonel çözüm. Ücretsiz keşif.",
  },
];

export const whyChooseUs = [
  {
    icon: "Users",
    title: "Profesyonel Ekip",
    description: "Deneyimli ve eğitimli personelimizle güvenilir hizmet sunuyoruz.",
  },
  {
    icon: "ShieldCheck",
    title: "Güvenilir Hizmet",
    description: "Söz verdiğimiz zamanda gelir, işimizi titizlikle tamamlarız.",
  },
  {
    icon: "Leaf",
    title: "Çevre Dostu Ürünler",
    description: "Sağlığınızı ve doğayı koruyan temizlik ürünleri kullanıyoruz.",
  },
  {
    icon: "BadgePercent",
    title: "Uygun Fiyat",
    description: "Kaliteli hizmeti uygun fiyat garantisiyle sunuyoruz.",
  },
  {
    icon: "Heart",
    title: "Müşteri Memnuniyeti",
    description: "%100 müşteri memnuniyeti garantisiyle çalışıyoruz.",
  },
  {
    icon: "Clock",
    title: "Hızlı Randevu",
    description: "Aynı gün hizmet ve hızlı planlama imkanı sunuyoruz.",
  },
];

export const stats = [
  { value: 500, suffix: "+", label: "Memnun Müşteri" },
  { value: 1200, suffix: "+", label: "Tamamlanan Proje" },
  { value: 5, suffix: "+", label: "Yıllık Deneyim" },
];

export const processSteps = [
  {
    title: "İletişim",
    description: "Bizi arayın veya WhatsApp üzerinden yazın, ihtiyacınızı dinleyelim.",
    icon: "PhoneCall",
  },
  {
    title: "Ücretsiz Keşif",
    description: "Uzman ekibimiz yerinde keşif yaparak size özel teklif hazırlar.",
    icon: "Search",
  },
  {
    title: "Profesyonel Temizlik",
    description: "Anlaşılan tarihte, kaliteli ürünlerle titiz bir temizlik gerçekleştiririz.",
    icon: "Sparkles",
  },
  {
    title: "Memnuniyet Garantisi",
    description: "Sonuçtan memnun kalmanızı sağlar, gerekirse tekrar kontrol ederiz.",
    icon: "BadgeCheck",
  },
];

export const testimonials = [
  {
    name: "Elif Y.",
    location: "Pendik",
    rating: 5,
    text: "Ev temizliğinde gerçekten çok titizler. Her köşe pırıl pırıldı, ekip çok nazik ve düzenliydi. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Murat K.",
    location: "Tuzla",
    rating: 5,
    text: "Ofisimizin haftalık temizliğini Velora'ya emanet ettik, hiç sorun yaşamadık. Zamanında geliyorlar ve iş kaliteleri yüksek.",
  },
  {
    name: "Aylin S.",
    location: "Kartal",
    rating: 5,
    text: "İnşaat sonrası temizlikte çok profesyonellerdi. Evimizi teslim almaya hazır hale getirdiler, teşekkürler Velora Cleaning.",
  },
  {
    name: "Burak T.",
    location: "Maltepe",
    rating: 5,
    text: "Cam temizliğinde fark yaratıyorlar, leke bile bırakmadılar. Fiyat/performans olarak da çok memnun kaldık.",
  },
  {
    name: "Zeynep A.",
    location: "Sultanbeyli",
    rating: 5,
    text: "Apartman yönetimi olarak merdiven temizliğinde anlaştık, aylardır sorunsuz devam ediyor. Güvenilir bir ekip.",
  },
  {
    name: "Deniz M.",
    location: "Pendik",
    rating: 5,
    text: "Ücretsiz keşif ile geldiler, fiyatı net söylediler, sürprizle karşılaşmadık. Hizmet kalitesi beklentimizin üzerindeydi.",
  },
];

export const faqs = [
  {
    question: "Ev temizliği ne kadar sürer?",
    answer:
      "Evin metrekaresine ve temizlik kapsamına göre değişmekle birlikte ortalama bir daire temizliği 2-4 saat arasında tamamlanır. Detaylı temizlik taleplerinde bu süre uzayabilir. Kesin süre için ücretsiz keşif sırasında size net bilgi veriyoruz.",
  },
  {
    question: "Hangi bölgelerde hizmet veriyorsunuz?",
    answer:
      "Pendik, Tuzla, Kartal, Maltepe ve Sultanbeyli başta olmak üzere İstanbul Anadolu Yakası'nın geniş bir bölümünde hizmet veriyoruz. Bölgeniz listede yoksa bizimle iletişime geçerek uygunluğu teyit edebilirsiniz.",
  },
  {
    question: "Temizlik malzemelerini siz mi getiriyorsunuz?",
    answer:
      "Evet, tüm temizlik ekipmanı ve çevre dostu, sağlığa duyarlı temizlik ürünlerini ekibimiz kendisi temin eder. Sizin herhangi bir malzeme hazırlamanıza gerek yoktur.",
  },
  {
    question: "Fiyat nasıl belirleniyor?",
    answer:
      "Fiyatlandırma; mekanın metrekaresi, temizlik kapsamı (standart veya detaylı) ve hizmet sıklığına göre belirlenir. Ücretsiz keşif sonrasında size net ve şeffaf bir fiyat teklifi sunuyoruz, gizli ücret uygulamıyoruz.",
  },
  {
    question: "Ücretsiz keşif yapıyor musunuz?",
    answer:
      "Evet, tüm hizmetlerimiz için talep üzerine ücretsiz keşif hizmeti sunuyoruz. Uzman ekibimiz yerinde inceleme yaparak ihtiyacınıza en uygun teklifi hazırlar.",
  },
  {
    question: "Aynı gün hizmet alabilir miyim?",
    answer:
      "Müsaitlik durumuna göre aynı gün veya ertesi gün hizmet planlaması yapabiliyoruz. Acil talepleriniz için bizi telefon veya WhatsApp üzerinden hemen bilgilendirmeniz yeterlidir.",
  },
  {
    question: "Düzenli periyodik temizlik anlaşması yapıyor musunuz?",
    answer:
      "Evet, haftalık, iki haftada bir veya aylık periyotlarla düzenli temizlik anlaşmaları yapıyoruz. Ofis ve apartman ortak alanları için özel periyodik paketlerimiz mevcuttur.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readingTime: string;
  category: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ev-temizliginde-dikkat-edilmesi-gerekenler",
    title: "Ev Temizliğinde Dikkat Edilmesi Gerekenler",
    excerpt:
      "Evinizi temizlerken sıkça atlanan noktalar ve profesyonel bir sonuç için dikkat edilmesi gereken temel kurallar.",
    date: "2026-06-12",
    readingTime: "5 dk okuma",
    category: "Ev Temizliği",
    image: "/images/gallery/before-after-insaat2.jpg",
    content: [
      "Ev temizliği, sadece görünen yüzeylerin silinmesinden çok daha fazlasıdır. Gerçekten hijyenik bir sonuç elde etmek için doğru sıralama, doğru ürün seçimi ve gözden kaçan alanlara özen göstermek gerekir.",
      "Öncelikle temizliğe yukarıdan aşağıya doğru başlamak önemlidir. Tavan, dolap üstü ve raflardaki toz aşağı süpürülmeden zeminin temizlenmesi, işi tekrar yapmanıza neden olabilir.",
      "Mutfak ve banyo gibi nem oranı yüksek alanlarda küf ve bakteri oluşumunu önlemek için düzenli havalandırma ve doğru dezenfektan kullanımı büyük önem taşır.",
      "Mobilya arkaları, priz çevreleri ve kapı kenarları gibi sıkça atlanan bölgeler, düzenli aralıklarla temizlenmediğinde toz ve alerjen birikimine yol açabilir.",
      "Profesyonel bir ekip, bu detayları sistematik bir kontrol listesiyle takip ederek hem zamandan tasarruf sağlar hem de daha kalıcı bir temizlik sonucu sunar.",
    ],
  },
  {
    slug: "insaat-sonrasi-temizlik-nasil-yapilir",
    title: "İnşaat Sonrası Temizlik Nasıl Yapılır?",
    excerpt:
      "Tadilat veya yeni inşaat sonrası oluşan toz ve moloz kalıntılarını doğru şekilde temizlemenin adımları.",
    date: "2026-05-28",
    readingTime: "6 dk okuma",
    category: "İnşaat Sonrası Temizlik",
    image: "/images/gallery/before-after-insaat1.jpg",
    content: [
      "İnşaat sonrası temizlik, standart ev temizliğinden farklı ekipman ve teknik gerektiren özel bir süreçtir. İnce yapı tozu, boya lekeleri ve silikon kalıntıları özel dikkat ister.",
      "İlk aşamada büyük moloz ve atıkların uzaklaştırılması gerekir. Ardından yüzeylerdeki ince toz tabakası, güçlü vakumlama ekipmanlarıyla alınır.",
      "Cam ve doğramalardaki boya sıçramaları, yüzeyi çizmeyecek özel çözücülerle temizlenmelidir. Aksi halde cam yüzeyde kalıcı hasar oluşabilir.",
      "Zemin türüne göre (seramik, parke, mermer) uygun temizlik ve parlatma yöntemi seçilmesi, mekanın uzun vadeli görünümü için kritik öneme sahiptir.",
      "Son aşamada tüm mekan detaylı bir kontrolden geçirilerek teslim öncesi kusursuz bir görünüm sağlanır.",
    ],
  },
  {
    slug: "profesyonel-ofis-temizliginin-avantajlari",
    title: "Profesyonel Ofis Temizliğinin Avantajları",
    excerpt:
      "Düzenli ve profesyonel ofis temizliğinin çalışan verimliliğine ve kurumsal imaja katkıları.",
    date: "2026-05-10",
    readingTime: "4 dk okuma",
    category: "Ofis Temizliği",
    image: "/images/gallery/before-after-cam.jpg",
    content: [
      "Temiz bir ofis ortamı, sadece estetik açıdan değil çalışan sağlığı ve verimliliği açısından da doğrudan etkilidir. Düzenli temizlik, hastalık kaynaklı iş günü kayıplarını azaltır.",
      "Müşteri ve iş ortaklarının ilk izlenimi genellikle ofis ortamının temizliği ve düzeniyle şekillenir. Profesyonel bir temizlik hizmeti, kurumsal imajınızı güçlendirir.",
      "Periyodik anlaşmalarla çalışmak, ofis yönetiminin temizlik planlaması üzerine düşünmesine gerek kalmadan sürekli hijyenik bir ortam sağlar.",
      "Doğru ürün ve ekipman kullanımı, ofis mobilyalarının ve zemin kaplamalarının ömrünü uzatarak uzun vadede maliyet avantajı sunar.",
    ],
  },
  {
    slug: "cam-temizliginde-puf-noktalari",
    title: "Cam Temizliğinde Püf Noktaları",
    excerpt:
      "Leke bırakmayan, pırıltılı bir cam temizliği için profesyonellerin kullandığı teknikler.",
    date: "2026-04-22",
    readingTime: "4 dk okuma",
    category: "Cam Temizliği",
    image: "/images/gallery/before-after-cam.jpg",
    content: [
      "Cam temizliğinde en sık yapılan hata, doğrudan güneş ışığı altında temizlik yapmaktır. Bu durum temizlik solüsyonunun hızla kuruyarak leke bırakmasına neden olur.",
      "Doğru teknik ile silme işlemi yukarıdan aşağıya, tek yönlü hareketlerle yapılmalıdır. Çapraz hareketler lekelerin nereden kaynaklandığını anlamayı da kolaylaştırır.",
      "Mikrofiber bez kullanımı, standart bezlere göre hem daha az iz bırakır hem de yüzeyi çizmeden temizlik sağlar.",
      "Kireç birikintisi olan camlarda hafif asidik özel solüsyonlar kullanmak, camın orijinal parlaklığını geri kazandırır.",
    ],
  },
];

export const beforeAfterItems = [
  {
    title: "Vitrin Cam Temizliği",
    category: "Cam Temizliği",
    image: "/images/gallery/before-after-cam.jpg",
  },
  {
    title: "Mağaza Zemin Temizliği",
    category: "İnşaat Sonrası",
    image: "/images/gallery/before-after-insaat1.jpg",
  },
  {
    title: "Daire Teslim Temizliği",
    category: "İnşaat Sonrası",
    image: "/images/gallery/before-after-insaat2.jpg",
  },
];

export const galleryCategories = ["Tümü", "Ev", "Ofis", "İnşaat Sonrası", "Cam", "Merdiven"];

export const galleryItems = [
  { title: "Salon Temizliği", category: "Ev", image: "/images/poster-rooms.jpg" },
  { title: "Mutfak Detay Temizliği", category: "Ev", image: "/images/gallery/before-after-insaat2.jpg" },
  { title: "Yatak Odası Düzeni", category: "Ev", image: "/images/gallery/before-after-insaat2.jpg" },
  { title: "Banyo Hijyeni", category: "Ev", image: "/images/gallery/before-after-insaat1.jpg" },
  { title: "Ofis Genel Temizlik", category: "Ofis", image: "/images/gallery/before-after-cam.jpg" },
  { title: "Toplantı Salonu", category: "Ofis", image: "/images/gallery/before-after-cam.jpg" },
  { title: "Teslim Öncesi Temizlik", category: "İnşaat Sonrası", image: "/images/gallery/before-after-insaat1.jpg" },
  { title: "Yeni Bina Temizliği", category: "İnşaat Sonrası", image: "/images/gallery/before-after-insaat2.jpg" },
  { title: "Vitrin Camı", category: "Cam", image: "/images/gallery/before-after-cam.jpg" },
  { title: "Pencere Parlatma", category: "Cam", image: "/images/gallery/before-after-cam.jpg" },
  { title: "Merdiven Boşluğu", category: "Merdiven", image: "/images/gallery/before-after-insaat1.jpg" },
  { title: "Giriş Katı Temizliği", category: "Merdiven", image: "/images/gallery/before-after-insaat2.jpg" },
];
