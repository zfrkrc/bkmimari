export interface ProjectImage {
    src: string;
    alt: string;
}

export interface Project {
    slug: string;
    title: string;
    category: string | null;
    location: string | null;
    year: string | null;
    area: string | null;
    scope: string | null;
    client: string | null;
    description: string | null;
    images: ProjectImage[];
}

export const projects: Project[] = [
    {
        slug: "izmit-belediyesi",
        title: "İzmit Belediyesi",
        category: "Kamu Yapısı",
        location: "İzmit, Kocaeli",
        year: null,
        area: null,
        scope: null,
        client: "İzmit Belediyesi",
        description: null,
        images: [
            { src: "https://minio.bkmimari.com/bkmimari/izmit-838x523.webp", alt: "İzmit Belediyesi hizmet binası, genel görünüm" },
            { src: "https://minio.bkmimari.com/bkmimari/izmit1-1600x999.webp", alt: "İzmit Belediyesi hizmet binası, güneybatı cephesi" },
            { src: "https://minio.bkmimari.com/bkmimari/izmit2-1600x1028.webp", alt: "İzmit Belediyesi hizmet binası, giriş cephesi" },
            { src: "https://minio.bkmimari.com/bkmimari/izmit3-1600x1032.webp", alt: "İzmit Belediyesi hizmet binası, iç mekân görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/izmit4-1600x991.webp", alt: "İzmit Belediyesi hizmet binası, yan cephe" },
            { src: "https://minio.bkmimari.com/bkmimari/izmit5-1600x999.webp", alt: "İzmit Belediyesi hizmet binası, üst kat görünümü" },
        ],
    },
    {
        slug: "kartal",
        title: "Kartal",
        category: null,
        location: "Kartal, İstanbul",
        year: null,
        area: null,
        scope: null,
        client: null,
        description: null,
        images: [
            { src: "https://minio.bkmimari.com/bkmimari/kartal-838x775.webp", alt: "Kartal projesi, genel görünüm" },
            { src: "https://minio.bkmimari.com/bkmimari/kartal1-1179x1123.webp", alt: "Kartal projesi, cephe görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/kartal2-1176x1322.webp", alt: "Kartal projesi, yapı detayı" },
            { src: "https://minio.bkmimari.com/bkmimari/kartal3-1179x1004.webp", alt: "Kartal projesi, iç mekân görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/kartal6-1179x1157.webp", alt: "Kartal projesi, dış cephe detayı" },
            { src: "https://minio.bkmimari.com/bkmimari/kartal7-1179x1075.webp", alt: "Kartal projesi, kat planı görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/kartal454-1172x1195.webp", alt: "Kartal projesi, merdiven ve hol" },
            { src: "https://minio.bkmimari.com/bkmimari/kartal8-1179x1336.webp", alt: "Kartal projesi, dikey cephe görünümü" },
        ],
    },
    {
        slug: "kirac-okullari",
        title: "Kıraç Okulları",
        category: "Eğitim Yapısı",
        location: "İstanbul",
        year: null,
        area: null,
        scope: null,
        client: "Kıraç Okulları",
        description: null,
        images: [
            { src: "https://minio.bkmimari.com/bkmimari/kirac-838x629.webp", alt: "Kıraç Okulları, genel görünüm" },
            { src: "https://minio.bkmimari.com/bkmimari/kirac1-1600x1200.webp", alt: "Kıraç Okulları, dış cephe" },
            { src: "https://minio.bkmimari.com/bkmimari/kirac2-1600x1200.webp", alt: "Kıraç Okulları, sınıf içi görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/kirac3-1600x1200.webp", alt: "Kıraç Okulları, koridor ve ortak alan" },
            { src: "https://minio.bkmimari.com/bkmimari/kirac5-1600x1200.webp", alt: "Kıraç Okulları, giriş holü" },
            { src: "https://minio.bkmimari.com/bkmimari/kirac6-1600x1200.webp", alt: "Kıraç Okulları, yemekhane veya çok amaçlı salon" },
        ],
    },
    {
        slug: "donerci-celal-usta",
        title: "Dönerci Celal Usta",
        category: "Ticari",
        location: "Acıbadem, İstanbul",
        year: null,
        area: null,
        scope: null,
        client: "Dönerci Celal Usta",
        description: null,
        images: [
            { src: "https://minio.bkmimari.com/bkmimari/dnerci-838x629.webp", alt: "Dönerci Celal Usta, mağaza cephesi" },
            { src: "https://minio.bkmimari.com/bkmimari/donerci-celal-usta-kosuyolu-acibadem-sube-galeri-2-1200x900.webp", alt: "Dönerci Celal Usta, iç mekân oturma alanı" },
            { src: "https://minio.bkmimari.com/bkmimari/donerci-celal-usta-kosuyolu-acibadem-sube-galeri-4-1200x900.webp", alt: "Dönerci Celal Usta, servis tezgâhı" },
            { src: "https://minio.bkmimari.com/bkmimari/donerci-celal-usta-kosuyolu-acibadem-sube-galeri-5-1200x900.webp", alt: "Dönerci Celal Usta, duvar ve aydınlatma detayı" },
            { src: "https://minio.bkmimari.com/bkmimari/hasan-838x629.webp", alt: "Dönerci Celal Usta, müşteri alanı görünümü" },
        ],
    },
    {
        slug: "sile-karakiraz",
        title: "Şile Karakiraz",
        category: null,
        location: "Şile, İstanbul",
        year: null,
        area: null,
        scope: null,
        client: null,
        description: null,
        images: [
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.41-7b90ec2a-838x1117.webp", alt: "Şile Karakiraz, genel görünüm" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.41-15eec005-838x629.webp", alt: "Şile Karakiraz, dış cephe" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.41-1209d1ef-838x1117.webp", alt: "Şile Karakiraz, yapı detayı" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.41-56252480-838x1117.webp", alt: "Şile Karakiraz, cephe görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.41-aaea2b0d-838x1117.webp", alt: "Şile Karakiraz, iç mekân görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.41-ecd34e17-838x627.webp", alt: "Şile Karakiraz, ortak alan" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.40-1b51bc6b-1600x1200.webp", alt: "Şile Karakiraz, geniş açı görünüm" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.40-63b2600b-1600x1200.webp", alt: "Şile Karakiraz, yan cephe" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.40-3313cb24-1600x1200.webp", alt: "Şile Karakiraz, bahçe ve dış alan" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.40-a6f98745-1600x1200.webp", alt: "Şile Karakiraz, kat görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.41-21cfa545-1600x1200.webp", alt: "Şile Karakiraz, iç avlu" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.41-61588d64-1600x1200.webp", alt: "Şile Karakiraz, pencere ve cephe detayı" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.41-f4af0e00-1600x1200.webp", alt: "Şile Karakiraz, genel cephe" },
        ],
    },
    {
        slug: "zeytin-arasi",
        title: "Zeytin Arası",
        category: "Ticari",
        location: null,
        year: null,
        area: null,
        scope: null,
        client: "Zeytin Arası",
        description: null,
        images: [
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.37-4d0eb087-838x629.webp", alt: "Zeytin Arası, mağaza cephesi" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.38-cd9a6687-838x556.webp", alt: "Zeytin Arası, ürün sergi alanı" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.38-9590cf15-838x556.webp", alt: "Zeytin Arası, iç mekân düzeni" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.38-5344d35b-838x629.webp", alt: "Zeytin Arası, raf ve tezgâh görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.38-14a55cb9-838x629.webp", alt: "Zeytin Arası, satış alanı" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.38-4b4979c2-838x629.webp", alt: "Zeytin Arası, aydınlatma detayı" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.39-c5273d8a-838x592.webp", alt: "Zeytin Arası, giriş bölümü" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.39-70005475-838x629.webp", alt: "Zeytin Arası, genel iç görünüm" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.38-89874fd8-838x430.webp", alt: "Zeytin Arası, geniş açı cephe" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.38-166b2ed9-1170x600.webp", alt: "Zeytin Arası, vitrin görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.38-6bf1f4b6-1170x600.webp", alt: "Zeytin Arası, iç mekân panoraması" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.37-4d0eb087-960x720.webp", alt: "Zeytin Arası, ürün sergileme bölümü" },
        ],
    },
    {
        slug: "luxera-nevbahar",
        title: "Luxera Nevbahar",
        category: "Konut",
        location: null,
        year: null,
        area: null,
        scope: null,
        client: "Luxera GYO",
        description: null,
        images: [
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.40-7c2bb330-838x629.webp", alt: "Luxera Nevbahar, genel görünüm" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.39-2aa94073-838x1117.webp", alt: "Luxera Nevbahar, cephe görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.39-7b8f9f3e-838x1522.webp", alt: "Luxera Nevbahar, dikey cephe detayı" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.39-7bedae74-838x1117.webp", alt: "Luxera Nevbahar, iç mekân görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.39-39ba8d29-838x1117.webp", alt: "Luxera Nevbahar, salon görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.39-85fe6c19-838x1117.webp", alt: "Luxera Nevbahar, mutfak görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.40-78420fd9-838x1117.webp", alt: "Luxera Nevbahar, yatak odası görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.39-1112f2ec-838x1117.webp", alt: "Luxera Nevbahar, banyo görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.39-69418c5e-1200x1600.webp", alt: "Luxera Nevbahar, koridor ve hol" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.39-e061c7e8-1536x2048.webp", alt: "Luxera Nevbahar, tavan detayı" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.40-8f5e11d3-1600x1200.webp", alt: "Luxera Nevbahar, geniş açı iç mekân" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.40-80ddefc8-900x1600.webp", alt: "Luxera Nevbahar, merdiven boşluğu" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.40-b96d68d0-1600x1200.webp", alt: "Luxera Nevbahar, ortak alan görünümü" },
            { src: "https://minio.bkmimari.com/bkmimari/whatsapp-grsel-2025-09-15-saat-20.06.39-39ba8d29-1200x1600.webp", alt: "Luxera Nevbahar, salon detayı" },
            { src: "https://minio.bkmimari.com/bkmimari/8-e1711205513319-500x300.webp", alt: "Luxera Nevbahar, dış cephe genel görünüm" },
        ],
    },
];

export function getProject(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
