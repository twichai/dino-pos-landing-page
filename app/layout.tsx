import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Dino POS — POS ที่ใช้ฟรีตลอดชีพ",
  description:
    "POS สำหรับร้านค้าขนาดเล็ก ใช้ฟรีตลอดชีพ ไม่มี Subscription จ่ายเฉพาะบริการ Cloud ที่ต้องการ — ถ้าเราไม่เสียเงิน คุณก็ไม่ต้องเสียเงิน",
  keywords: [
    "POS",
    "ระบบขายหน้าร้าน",
    "POS ฟรี",
    "Dino POS",
    "POS ร้านค้าเล็ก",
    "Offline POS",
  ],
  openGraph: {
    title: "Dino POS — POS ที่ใช้ฟรีตลอดชีพ",
    description: "ใช้ฟรีตลอดชีพ จ่ายเฉพาะบริการ Cloud ที่ต้องการ",
    type: "website",
    locale: "th_TH",
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
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
