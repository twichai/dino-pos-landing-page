import React from "react";

export default function JsonLd() {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Dino POS",
      "operatingSystem": "Windows, macOS, Linux, Android, iOS, Web",
      "applicationCategory": "BusinessApplication",
      "url": "https://dinopospro.com",
      "image": "https://dinopospro.com/app_icon.webp",
      "description":
        "ระบบ POS ขายหน้าร้านสำหรับร้านค้าขนาดเล็ก ใช้งานฟรีตลอดชีพ ไม่มีค่าบริการรายเดือน รองรับการทำงานแบบ Offline First ข้อมูลปลอดภัยบน SQLite",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "THB",
        "availability": "https://schema.org/InStock",
      },
      "featureList": [
        "Offline First - ทำงานได้แม้ออฟไลน์",
        "SQLite - บันทึกข้อมูลบนเครื่องผู้ใช้",
        "Fast Search - ค้นหาสินค้าได้รวดเร็ว",
        "Barcode Scanner - รองรับสแกนบาร์โค้ด",
        "Receipt Printing - ออกใบเสร็จรับเงิน",
        "Inventory - จัดการสต็อกสินค้า",
        "Sales Reports - รายงานยอดขาย",
        "VAT Calculation - คำนวณภาษีอัตโนมัติ",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dino POS",
      "url": "https://dinopospro.com",
      "logo": "https://dinopospro.com/app_icon.webp",
      "sameAs": [],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Dino POS ใช้งานฟรีจริงไหม?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "ใช้งานฟรีตลอดชีพ ไม่มีค่าบริการรายเดือน 700 บาท จ่ายเฉพาะบริการเสริม Cloud เมื่อคุณต้องการใช้งานจริง ๆ เท่านั้น",
          },
        },
        {
          "@type": "Question",
          "name": "Dino POS ทำงานแบบออฟไลน์ (Offline) ได้หรือไม่?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "ทำงานได้แบบ Offline First 100% ข้อมูล สต็อก รายงาน และใบเสร็จจะถูกเก็บบนเครื่องของคุณด้วยระบบ SQLite ทำงานได้แม้ไม่มีสัญญาณอินเทอร์เน็ต",
          },
        },
        {
          "@type": "Question",
          "name": "Dino POS เหมาะสำหรับใคร?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "เหมาะสำหรับร้านค้าขนาดเล็ก ร้านขายของชำ ร้านกาแฟ ร้านอาหาร และธุรกิจเอสเอ็มอี (SME) ที่ต้องการระบบจัดการขายหน้าร้านที่ใช้ง่าย รวดเร็ว และประหยัดค่าใช้จ่าย",
          },
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
