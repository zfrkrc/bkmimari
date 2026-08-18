import minioClient from "./minio";

const BUCKET = process.env.MINIO_BUCKET || "bkmimari";
const KEY = "site.json";

export interface Reference {
  name: string;
  url: string;
  img: string;
}

export interface SiteContent {
  logo: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  workingHours: string;
  badge: string;
  heroBg: string;
  references: Reference[];
}

export const defaultSiteContent: SiteContent = {
  logo: "https://minio.bkmimari.com/bkmimari/logo.webp",
  phone: "05326959856",
  phoneDisplay: "0 (532) 695 98 56",
  email: "info@bkmimari.com",
  address: "Acıbadem Mahallesi, Derin Sokak\nAlmondhill Sitesi D No:5 Z İç Kapı No:2\nÜsküdar / İstanbul",
  workingHours: "Hafta İçi: 09:00 – 18:00",
  badge: "TMMOB Üyesi · İstanbul Ticaret Odası Üyesi",
  heroBg: "https://minio.bkmimari.com/bkmimari/izmit1-1600x999.webp",
  references: [
    { name: "Çevre ve Şehircilik Bakanlığı", url: "https://www.csb.gov.tr/", img: "https://minio.bkmimari.com/bkmimari/cevre-318x100.webp" },
    { name: "EPP", url: "https://epp.com.tr/", img: "https://minio.bkmimari.com/bkmimari/epp-2441x1006.webp" },
    { name: "EPAS Grup", url: "https://epasgrup.com/", img: "https://minio.bkmimari.com/bkmimari/epas-grup-2021-logo-300x67-1-300x94.webp" },
    { name: "İzmit Belediyesi", url: "https://izmit.bel.tr/", img: "https://minio.bkmimari.com/bkmimari/izmit-600x213.webp" },
    { name: "Luxera GYO", url: "https://luxera.com.tr/", img: "https://minio.bkmimari.com/bkmimari/luxera-gyo-logo-lacivertt.pdf-315x146.webp" },
    { name: "Halil Avcı", url: "https://www.halilavci.com/tr/", img: "https://minio.bkmimari.com/bkmimari/halil-avci-logo-267x110.webp" },
    { name: "Yeni Koza", url: "https://www.yenikoza.com/", img: "https://minio.bkmimari.com/bkmimari/yenikoza-178x84.webp" },
    { name: "Aramis Yapı", url: "https://aramisyapi.com.tr/", img: "https://minio.bkmimari.com/bkmimari/aramis-yapilogo-1-282x87.webp" },
    { name: "Zeytin Arası", url: "https://www.zeytinarasi.com/", img: "https://minio.bkmimari.com/bkmimari/logo-beya-yesil-217x105.webp" },
    { name: "Hasan Usta Kebap", url: "https://hasanustakebap.com/", img: "https://minio.bkmimari.com/bkmimari/kirmizi-logo-1024x538.png.webp" },
    { name: "Oto İsmail", url: "https://www.otoismail.com.tr/", img: "https://minio.bkmimari.com/bkmimari/images-1-396x127.webp" },
    { name: "Berko İlaç", url: "https://berkoilac.com.tr/", img: "https://minio.bkmimari.com/bkmimari/berkoilac-sy-rgb-1-3508x1331.webp" },
    { name: "Kıraç Okulları", url: "https://www.kirac.k12.tr/", img: "https://minio.bkmimari.com/bkmimari/images-225x225.webp" },
    { name: "Dönerci Celal Usta", url: "https://www.donercicelalusta.com/kosuyolu-acibadem-subesi/", img: "https://minio.bkmimari.com/bkmimari/donerci-celal-usta-logo-480x98.webp" },
  ],
};

export async function getSiteContentFromStore(): Promise<SiteContent | null> {
  try {
    const stream = await minioClient.getObject(BUCKET, KEY);
    const chunks: Buffer[] = [];
    for await (const chunk of stream) chunks.push(chunk as Buffer);
    const parsed = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!parsed || typeof parsed !== "object") return null;
    return parsed as SiteContent;
  } catch {
    return null;
  }
}

export async function saveSiteContentToStore(content: SiteContent): Promise<void> {
  await minioClient.putObject(BUCKET, KEY, JSON.stringify(content, null, 2), {
    "Content-Type": "application/json",
  });
}

export async function getSiteContent(): Promise<SiteContent> {
  const stored = await getSiteContentFromStore();
  if (!stored) return defaultSiteContent;
  return {
    ...defaultSiteContent,
    ...stored,
    references: Array.isArray(stored.references) && stored.references.length > 0
      ? stored.references
      : defaultSiteContent.references,
  };
}
