import { Download, Heart } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import DinoCharacter from "./DinoCharacter";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="section-bg-dark relative overflow-hidden px-6 py-32"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/3 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-blob [animation-delay:6s]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <AnimateOnScroll variant="scale">
          <DinoCharacter variant="waving" size={200} className="mb-6" />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            เริ่มใช้<span className="text-gradient">ฟรี</span>
            <br />
            วันนี้
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <p className="mt-6 max-w-md text-lg text-violet-200/70">
            ไม่ต้องใช้บัตรเครดิต · ไม่จำกัดเวลา · ใช้ได้ทันที
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={500} variant="scale">
          <a
            href="#"
            className="glow-primary mt-10 flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-dino-dark transition-all duration-300 hover:scale-105 hover:bg-violet-50"
          >
            <Download className="h-6 w-6 text-dino-primary" />
            ดาวน์โหลด Dino POS
          </a>
        </AnimateOnScroll>

        <AnimateOnScroll delay={700}>
          <p className="mt-16 flex items-center justify-center gap-1.5 text-xs text-violet-200/50">
            สร้างด้วย <Heart className="h-3 w-3 fill-dino-secondary text-dino-secondary" /> สำหรับร้านค้าขนาดเล็ก ·
            <span className="font-semibold">Dino POS © 2025</span>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
