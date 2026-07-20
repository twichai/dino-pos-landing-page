import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dino POS — ระบบ POS ขายหน้าร้าน ใช้ฟรีตลอดชีพ",
    short_name: "Dino POS",
    description:
      "ระบบ POS สำหรับร้านค้าขนาดเล็ก ใช้งานฟรีตลอดชีพ ไม่คิดค่าบริการรายเดือน รองรับการทำงานแบบ Offline First",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/app_icon.webp",
        sizes: "192x192 512x512",
        type: "image/webp",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
