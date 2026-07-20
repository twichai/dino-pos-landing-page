import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai } from "next/font/google";
import JsonLd from "./components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const baseUrl = "https://dinopospro.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Dino POS — ระบบ POS ขายหน้าร้าน ใช้ฟรีตลอดชีพ",
    template: "%s | Dino POS",
  },
  description:
    "Dino POS ระบบ POS สำหรับร้านค้าขนาดเล็ก ใช้งานฟรีตลอดชีพ ไม่มี Subscription จ่ายเฉพาะบริการ Cloud ที่ต้องการ — ถ้าเราไม่เสียเงิน คุณก็ไม่ต้องเสียเงิน",
  keywords: [
    "POS",
    "ระบบขายหน้าร้าน",
    "POS ฟรี",
    "Dino POS",
    "POS ร้านค้าเล็ก",
    "Offline POS",
    "โปรแกรมขายหน้าร้าน",
    "ระบบจัดการร้านค้า",
    "ระบบสต็อกสินค้า",
    "SQLite POS",
    "ระบบคิดเงินหน้าร้าน",
  ],
  authors: [{ name: "Dino POS Team", url: baseUrl }],
  creator: "Dino POS Team",
  publisher: "Dino POS",
  applicationName: "Dino POS",
  category: "Business & Productivity",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "th-TH": "/",
    },
  },
  openGraph: {
    title: "Dino POS — ระบบ POS ขายหน้าร้าน ใช้ฟรีตลอดชีพ",
    description:
      "POS สำหรับร้านค้าขนาดเล็ก ใช้ฟรีตลอดชีพ ไม่มีค่าธรรมเนียมรายเดือน จ่ายเฉพาะบริการ Cloud ที่คุณต้องการ",
    url: baseUrl,
    siteName: "Dino POS",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dino POS — ระบบ POS ขายหน้าร้าน ใช้ฟรีตลอดชีพ",
    description:
      "POS สำหรับร้านค้าขนาดเล็ก ใช้ฟรีตลอดชีพ ไม่มีค่าธรรมเนียมรายเดือน จ่ายเฉพาะบริการ Cloud ที่คุณต้องการ",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/app_icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansThai.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

